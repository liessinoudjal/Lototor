<?php
namespace App\Lototo\Api;

use Symfony\Component\HttpFoundation\Request ;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class SireneApi {


    private $httpClient;

    private $baseApi = "https://api.insee.fr/entreprises/sirene/V3";

    private $options;
 
    private $etablissement = [];


    public function __construct(HttpClientInterface $httpClient, string $bearerToken){

        $this->httpClient = $httpClient;
        $this->options =[
                "auth_bearer"=>$bearerToken,
        ]; 
    }
    public function request(Request $request){
        // $siret = 79307290100010;
        $siret = $request->request->get("siret");
        return $this->httpClient->request("GET", $this->baseApi."/siret/$siret", $this->options);
    }

    public function setEtablissement(array $etablissement){
        $this->etablissement = $etablissement;
    }
    public function getEtablissement(): array{
        return $this->etablissement;
    }
    public function getNomEtablissement(){
        return $this->etablissement["uniteLegale"]["denominationUniteLegale"];
    }
    public function formatInlineAddress(){
        return $this->getStreet(). ", " .$this->getPostalCode(). ", " .$this->getCity();
    }
    /**
     * @var array $etablissement tableau contenant toutes les données d'un etablissement au format retournée par l'api sirene
     * @return string
     */
    public function getStreet(): string{
        return $this->etablissement["adresseEtablissement"]["numeroVoieEtablissement"]." "
        . $this->etablissement["adresseEtablissement"]["typeVoieEtablissement"]. " "
        . $this->etablissement["adresseEtablissement"]["libelleVoieEtablissement"];
    }
    public function getPostalCode(): string{
        return  $this->etablissement["adresseEtablissement"]["codePostalEtablissement"];
    }
    public function getCity(): string{
        return  $this->etablissement["adresseEtablissement"]["libelleCommuneEtablissement"];
    }

    public function getSiret(){
        return $this->etablissement["siret"];
    }

    public function getRna(){
        return ' ';
    }

    public function getSiteWeb(){
        return null;
    }

 
    public function getObjet(){
        return null ;
    }

    public function getNumeroReconnaissanceUtilitePublique(){
        return null;
    }

    public function getEmail(){
        return null;
    }

    public function getAutorisationPublicationWeb(): ?bool{
        return null;
    }
    public function getCountry(){
        return null;
    }
    //voir comment recuperer cette info
    public function isEtablissementActif(): bool{
        return true;
    }

}