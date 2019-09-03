<?php
namespace App\Lototo\Lottery;
use App\Lototo\Lottery\LotteryInterface;

class Loto implements LotteryInterface {
    const  ETOILE_MAX= 12, NUMERO_MAX = 49, NUMERO_MIN=1, NB_MAX_NUMERO = 5, NB_MAX_ETOILE = 1;
    private $state ;
    private $grille= [];
    
    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
      
    }

    public function init(){
        $this->initEmptyGrille();
        $FQN= explode("\\",self::class);
        $this->setState([
            "lotteryName" => end($FQN),
            "nb_numero" =>self::NB_MAX_NUMERO,
            "nb_etoile" => self::NB_MAX_ETOILE,
            "numeros" => range(self::NUMERO_MIN,self::NUMERO_MAX) ,
            "etoiles" => range(self::NUMERO_MIN,self::ETOILE_MAX),
            "maxNumero"=>self::NUMERO_MAX,
            "maxEtoile"=>self::ETOILE_MAX,
            "min" => self::NUMERO_MIN,
            "grille" => $this->getGrille()
        ]);
        return $this;
    }


    public function getJsonState(){
        return json_encode ( $this->getState());
    }

    public function initEmptyGrille():void{
        for($i = 0; $i < self::NB_MAX_NUMERO;$i++){
            $this->grille["numeros"][]='';
        }

        for($i = 0; $i < self::NB_MAX_NUMERO;$i++){
            $this->grille["etoiles"][]='';
        }
    }


    /**
     * Get the value of state
     */ 
    public function getState()
    {
        return $this->state;
    }

    /**
     * Set the value of state
     *
     * @return  self
     */ 
    public function setState(array $state): self
    {
        $this->state = $state;

        return $this;
    }

    /**
     * Get the value of grille
     */ 
    public function getGrille():array
    {
        return $this->grille;
    }

    /**
     * Set the value of grille
     *
     * @return  self
     */ 
    public function setGrille($grille):self
    {
        $this->grille = $grille;

        return $this;
    }
}
