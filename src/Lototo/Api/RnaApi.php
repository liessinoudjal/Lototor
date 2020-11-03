<?php
namespace App\Lototo\Api;

use Symfony\Component\HttpFoundation\Request ;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class RnaApi {
    private $httpClient;

    private $baseApi = "https://entreprise.data.gouv.fr/api/rna/v1/id/";

    private $options;
 
    private $etablissement = [];


    public function __construct(HttpClientInterface $httpClient, string $bearerToken){

        $this->httpClient = $httpClient; 
    }
    public function request(Request $request){
        // $siret = W503002705;
        $siret = $request->request->get("siret");
        return $this->httpClient->request("GET", $this->baseApi."$siret");
    }

    public function setEtablissement(array $etablissement){
        $this->etablissement = $etablissement;
    }
    public function getEtablissement(): array{
        return $this->etablissement;
    }
    public function getNomEtablissement(){
        return $this->etablissement["titre"];
    }
    public function formatInlineAddress(){
        return $this->getStreet(). ", " .$this->getPostalCode(). ", " .$this->getCity();
    }
    /**
     * @var array $etablissement tableau contenant toutes les données d'un etablissement au format retournée par l'api sirene
     * @return string
     */
    public function getStreet(): string{
        return $this->etablissement["adresse_numero_voie"]." "
        . $this->etablissement["adresse_type_voie"]. " "
        . $this->etablissement["adresse_libelle_voie"];
    }
    public function getPostalCode(): string{
        return  $this->etablissement["adresse_code_postal"];
    }
    public function getCity(): string{
        return  $this->etablissement["adresse_libelle_commune"];
    }
    public function getSiret(){
        return $this->etablissement["siret"];
    }

    public function getRna(){
        return $this->etablissement["id_association"];
    }

    public function getSiteWeb(){
        return $this->etablissement["site_web"];
    }

 
    public function getObjet(){
        return $this->etablissement["objet"];
    }

    public function getNumeroReconnaissanceUtilitePublique(){
        return $this->etablissement["numero_reconnaissance_utilite_publique"];
    }

    public function getEmail(){
        return $this->etablissement["email"];
    }

    public function getAutorisationPublicationWeb(): bool{
        return $this->etablissement["autorisation_publication_web"] == "0" ? false: true;
    }
    public function getCountry(){
        return $this->etablissement["adresse_gestion_pays"];
    }
    public function isEtablissementActif(): bool{
        return $this->etablissement["date_declaration_dissolution"] == null ? true : false;
    }

}