<?php
namespace App\Lototo\Api;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class SireneApi {


    private $httpClient;

    private $baseApi = "https://api.insee.fr/entreprises/sirene/V3";

    private $options;


    public function __construct(HttpClientInterface $httpClient, string $bearerToken){

        $this->httpClient = $httpClient;
        $this->options =[
                "auth_bearer"=>$bearerToken, //"f00954c0-bbb8-3497-8256-524e68fe4e85",     
        ]; 
    }

    public function getEtablissement(string $siret){
        return  $this->httpClient->request("GET", $this->baseApi."/siret/$siret", $this->options);
    }

}