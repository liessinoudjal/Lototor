<?php
namespace App\Lototo\Manager;

use App\Entity\Address;
use App\Entity\Association;
use App\Entity\Organizer;
use App\Entity\User;
use App\Lototo\Api\RnaApi;
use App\Lototo\Api\SireneApi;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class AssociationApiManager {
    private $statusCode;
    private $message;
    private $etablissement = [];
    private $em;


    public function __construct(RnaApi $httpClient, EntityManagerInterface $em){

        $this->httpClient = $httpClient;
        $this->em =$em;
    
    }

    public function handleRequestForAjaxResponse(Request $request){
        $response =  $this->httpClient->request($request);

        if(200 === $this->statusCode = $response->getStatusCode()){
            // dd($response->toArray());
            $this->httpClient->setEtablissement($response->toArray()["association"]);
            if($this->httpClient->isEtablissementActif()){
                 // $this->setEtablissement($response->toArray()["etablissement"]);
                $this->message = "Est ce le bon établissement ? </br>".$this->httpClient->getNomEtablissement() ."</br>". $this->httpClient->formatInlineAddress();
            }else{
                $this->statusCode = 403;
                $this->message = "Désolé, cette association a été dissolue";
            }
           

        }elseif(404 === $this->statusCode){
            $this->message = "Le siret ne correspond à aucune Association";
        }else{
            $this->message = "Une erreur s'est produite. Veuillez verifier votre siret";
        }
    }

    public function addAssociationToOrganizer( User $organizer,array $etablissement){
        $this->httpClient->setETablissement($etablissement);
        $address = new Address();
        $address->setStreet($this->httpClient->getStreet())
        ->setPostalCode($this->httpClient->getPostalCode())
        ->setCity($this->httpClient->getCity())
        ->setCountry($this->httpClient->getCountry());
        $asso = new Association();
        $asso->setOrganizer($organizer)
        ->setSiret($this->httpClient->getSiret())
        ->setName($this->httpClient->getNomEtablissement())
        ->setRna($this->httpClient->getRna())
        ->setSiteWeb($this->httpClient->getSiteWeb())
        ->setObjet($this->httpClient->getObjet())
        ->setNumeroReconnaissanceUtilitePublique($this->httpClient->getNumeroReconnaissanceUtilitePublique())
        ->setEmail($this->httpClient->getEmail())
        ->setAutorisationPublicationWeb((bool) $this->httpClient->getAutorisationPublicationWeb())
        ->setAddress($address);
        $organizer->addAssociation($asso);

        $this->em->persist($organizer);
        // $em->persist($asso);
        $this->em->flush();

        
      
    }
    public function getHttpClient(): array{
        return $this->httpClient;
    }
    
    public function getStatusCode(){
        return $this->statusCode;
    }

    public function getMessage(){
        return $this->message;
    }
 
    public function getEtablissement(){
        return $this->httpClient->getEtablissement();
    }
}