<?php
namespace App\Lototo\Lottery;
use App\Lototo\Lottery\LotteryInterface;
use App\Lototo\Lottery\Simulator\LotoSimulator;
use App\Repository\LotoCombinaisonRepository;
use App\Lototo\Lottery\Simulator\TirageLoto;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class Loto implements LotteryInterface {
    const  ETOILE_MAX= 10, NUMERO_MAX = 49, NUMERO_MIN=1, NB_MAX_NUMERO = 5, NB_MAX_ETOILE = 1;
    private $state ;
    private $grille= [];

     /*
    *@var LotoSimulator
    */
    private $lotoSimulator;
    
    /**
     * __construct
     *
     * @return void
     */
    public function __construct(TirageLoto $tirageLoto, LotoCombinaisonRepository $combinaisonRepository, EventDispatcherInterface $eventDispatcher )
    {
      $this->lotoSimulator = new LotoSimulator( $tirageLoto, $combinaisonRepository , $eventDispatcher);
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
            "grilleNumeros" => $this->getGrille()["numeros"],
            "grilleEtoiles" => $this->getGrille()["etoiles"],
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
            $this->grille["numeros"][]='';
        }

        for($i = 0; $i < self::NB_MAX_ETOILE;$i++){
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

    /*
     *@return LotoSimulator
     */
    public function getSimulator(): LotoSimulator
    {
        return $this->lotoSimulator;
    }
}
