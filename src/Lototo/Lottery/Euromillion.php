<?php
namespace App\Lototo\Lottery;

use App\Lototo\Lottery\LotteryInterface;
use App\Lototo\Lottery\Grille\Grille;
use App\Lototo\Lottery\Simulator\EuromillionSimulator;

class Euromillion implements LotteryInterface {
   const ETOILE_MAX= 12, NUMERO_MAX = 50, NUMERO_MIN=1, NB_MAX_NUMERO = 5, NB_MAX_ETOILE = 2;
    private $state ;
    private $emptyGrille= [];


    /*
    *@var EuromillionSimulator
    */
    private $euromillionSimulator;
    
    /**
     * __construct
     *
     * @return void
     */
    public function __construct(EuromillionSimulator $euromillionSimulator )
    {
      $this->euromillionSimulator = $euromillionSimulator;
    }

 public function init(){
    $this->initEmptyGrille();
    $FQN= explode("\\",self::class);
    $this->setState([
        "lotteryName" => strtolower(end($FQN)),
        "nb_numero" =>self::NB_MAX_NUMERO,
        "nb_etoile" => self::NB_MAX_ETOILE,
        "numeros" => range(self::NUMERO_MIN,self::NUMERO_MAX) ,
        "etoiles" => range(self::NUMERO_MIN,self::ETOILE_MAX),
        "maxNumero"=>self::NUMERO_MAX,
        "maxEtoile"=>self::ETOILE_MAX,
        "min" => self::NUMERO_MIN,
        "grilleNumeros" => $this->getEmptyGrille()["numeros"],
        "grilleEtoiles" => $this->getEmptyGrille()["etoiles"],
        "anneesDeTirages" =>[
            10,20,50,100,200,500
        ]
    ]);
    return $this;
 }


    public function getJsonState(){
        return json_encode ( $this->getState());
    }


    public function initEmptyGrille():void{
        for($i = 0; $i < self::NB_MAX_NUMERO;$i++){
            $this->emptyGrille["numeros"][]=$i+1;
        }

        for($i = 0; $i < self::NB_MAX_ETOILE;$i++){
            $this->emptyGrille["etoiles"][]=$i+1;
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
     * Get the value of emptyGrille
     */ 
    public function getEmptyGrille():array
    {
        return $this->emptyGrille;
    }

    /**
     * Set the value of emptyGrille
     *
     * @return  self
     */ 
    public function setEmptyGrille($grille)
    {
        $this->emptyGrille = $grille;

        return $this;
    }

    /*
    *@return EuromillionSimulator
    */
    public function getSimulator(): EuromillionSimulator
    {
        return $this->euromillionSimulator;
    }
}
