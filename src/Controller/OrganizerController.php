<?php

namespace App\Controller;

use App\Lototo\Api\SireneApi;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request; 
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/organizer")
 */
class OrganizerController extends AbstractController
{
    /**
     * @Route("/account", name="organizer-account")
     */
    public function account()
    {
        $organizer = $this->getUser();
        return $this->render('organizer/account.html.twig', [
            'organizer' => $organizer,
            "canOrganize" =>$organizer->canOrganize()
        ]);
    }

     /**
     * @Route("/ajaxAddAsso", name="organizer_ajax_add_association", methods={"GET","POST"})
     */
    public function ajaxAddAssociation(Request $request, SireneApi $api){
        // 79307290100010
        if($request->isXmlHttpRequest()){
            $siret = $request->request->get("siret");
                $response = $api->getEtablissement($siret);
                $association= [];
                if(200 === $statusCode = $response->getStatusCode()){
                    $etablissement = $response->toArray()["etablissement"];
                    $nomEtablissement = $etablissement["uniteLegale"]["denominationUniteLegale"];
                    $addresse =  $etablissement["adresseEtablissement"]["numeroVoieEtablissement"]." "
                                . $etablissement["adresseEtablissement"]["typeVoieEtablissement"]. " "
                                . $etablissement["adresseEtablissement"]["libelleVoieEtablissement"]. ", "
                                . $etablissement["adresseEtablissement"]["codePostalEtablissement"]. ", "
                                . $etablissement["adresseEtablissement"]["libelleCommuneEtablissement"]. ", ";
                    $message= "Est ce le bon établissement ? </br>".$nomEtablissement ."</br>". $addresse;
                    $content = $response->toArray();

                }elseif(404 === $statusCode){
                    $message = "Le siret ne correspond à aucune Association";
                }else{
                    $message = "Une erreur s'est produite. Veuillez verifier votre siret";
                }
                return $this->json([
                    "status"=> $statusCode,
                    "statusText" => $message,
                    "content" => $content
                ]);
        }
    }
    /**
     * @Route("/addAssociation", name="add_association")
     */
    public function addAssociation(Request $request){
        //enregistrer l'association en bdd
        dd($request);
    }
}
