<?php
namespace App\Lototo\Notification;

use Symfony\Component\HttpClient\Exception\ClientException;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class SmsFreeNotificator{

    private $client;
    private $freeLogin;
    private $freeKey;
    private $freePath= 'https://smsapi.free-mobile.fr/sendmsg';

    public function __construct(HttpClientInterface $client, string $freeLogin, string $freeKey)
    {
        $this->client = $client;
        $this->freeKey = $freeKey;
        $this->freeLogin = $freeLogin;
    }

    public function notify(string $message ){

        $paylod = http_build_query([
            'user' => $this->freeLogin,
            'pass'=> $this->freeKey,
            'msg' => $message
        ]);
		try{
			$this->client->request('GET',$this->freePath."?".$paylod);
		}catch(ClientException $e){
	        //voir pour envoyer un mail de notification
		} 
    }
}