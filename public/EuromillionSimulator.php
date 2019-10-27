<?php
namespace App\Lototo\Lottery\Simulator;

use App\Lototo\Lottery\Grille\Grille;
use Symfony\Component\Templating\EngineInterface;
use App\Lototo\Lottery\Euromillion;
use App\Lototo\Lottery\Simulator\SimulatorAbstract;

class EuromillionSimulator //extends SimulatorAbstract
{

	private $tirageEuromillion;

	const PRIX_GRILLE = 2.5;
    const PRIZE_POOL_MIN = 17000000;
    const PRIZE_POOL_MAX = 190000000;
    public $prizePool = 0;
    private $tabGains = [
        "5,2"=>self::PRIZE_POOL_MIN,
        "5,1" => 432260.99,
        "5,0" => 78142.57,
        "4,2" => 4498.49,
        "4,1" => 203.92,
        "3,2" => 105.22,
        "4,0" => 62.81,
        "2,2" => 19.92,
        "3,1" => 14.62,
        "3,0" => 12.2,
        "1,2" => 10.67,
        "2,1" => 8.04,
        "2,0" => 4.08
    ];

    private $gagnant = false;
    private $gains = 0;
    private $miseTotale=0;
    private $benef;
    public $tabNums;
    public $tabEtoiles;

    private $rang1=0,$rang2=0,$rang3=0,$rang4=0,$rang5=0,$rang6=0,$rang7=0,$rang8=0,$rang9=0,$rang10=0,$rang11=0,$rang12=0,$rang13=0;
    private $gainsrang1=0,$gainsrang2=0,$gainsrang3=0,$gainsrang4=0,$gainsrang5=0,$gainsrang6=0,$gainsrang7=0,$gainsrang8=0,$gainsrang9=0,$gainsrang10=0,$gainsrang11=0,$gainsrang12=0,$gainsrang13=0;

    private $nbAnnees;
    private $nbTirages;

	public function __construct(){
     // Parent::__construct();
		$this->tirageEuromillion = new TirageEuromillion();
	
	}

	

	public function simuler(Grille $grille)
	{
		$this->tabEtoiles=$grille->getEtoiles();
        $this->tabNums=$grille->getNumeros();
        $this->nbTirages = $grille->getNbTirages() * 52 * 2;
        $this->nbAnnees = $grille->getNbTirages();

        $fin = false;
        $nbTirageSimu = 0;
        //tant que la simulation n'est pas terminée
        while (!$fin) {
            //on simule dans combien de tirage nous allons réinitialiser la cagnote
            $nbTour= mt_rand(1,15);
            //initialisation de la cagnote
            $this->prizePool=self::PRIZE_POOL_MIN;
            for($i=0;$i<$nbTour;$i++){
                //si la cagnote en cours depasse la cagnote max , on le met au max autorisé
                if($this->prizePool>=self::PRIZE_POOL_MAX){
                    $this->prizePool=self::PRIZE_POOL_MAX;
                }//sinon on augmente la cagnote de 15%
                else{
                    $this->prizePool*=1.15;
                }
                //on set le nouveau prize pool a gagné en cas de bond numeros
                $this->tabGains['5,2']=$this->prizePool; 

                $grilleTirage = $this->tirageEuromillion->tirage();
                
                //estimatons des bons numeros
                $interNum = array_intersect($grilleTirage->getNumeros(), $this->tabNums);
                $interEtoile = array_intersect($grilleTirage->getEtoiles() , $this->tabEtoiles);

                $countEtoile = count($interEtoile);
                $countNum = count($interNum);
                $this->estimationGains($countNum, $countEtoile);

                $nbTirageSimu++;
                // la siulation se termine que si :
                // tous les numeros sont bons
                if ($countEtoile == Euromillion::NB_MAX_ETOILE and $countNum == Euromillion::NB_MAX_NUMERO) {
                    $this->gagnant = true;
                    $fin = true;
                    // on calcule combien le joueur a joué depuis le debut
                    $this->miseTotale= $nbTirageSimu*self::PRIX_GRILLE;

                } // ou que que sommes arrivé à la fin de la simulation 
                elseif ($nbTirageSimu == $this->nbTirages) {
         
                    $this->miseTotale= $nbTirageSimu*self::PRIX_GRILLE;
                    $fin = true;
                }
            }
            		


        }
        //calcule des gains potentieles
        $this->benef = $this->gains - $this->miseTotale;

        return $this;
	}



	public function getTirageEuromillion(): TirageEuromillion
	{
		return $this->tirageEuromillion;
	}


	 /**
     * @return mixed
     */
    public function getBenef ()
    {
        return $this->benef;
    }
 

    /**
     * @return array
     */
    public function getTabGains ()
    {
        return $this->tabGains;
    }

    /**
     * @return int
     */
    public function getMiseTotale ()
    {
        return $this->miseTotale;
    }

    /**
     * @return int
     */
    public function getGains ()
    {
        return $this->gains;
    }

    /**
     * @return bool
     */
    public function isGagnant ()
    {
        return $this->gagnant;
    }

    /**
     * @return mixed
     */
    public function getNbAnnees ()
    {
        return $this->nbAnnees;
    }

    /**
     * @return mixed
     */
    public function getNbTirages ()
    {
        return $this->nbTirages;
    }

    /**
     * @param mixed $nbTirages
     */
    public function setNbTirages ($nbTirages)
    {
        $this->nbTirages = $nbTirages;
    }

    /**
     * @param mixed $nbAnnees
     */
    public function setNbAnnees ($nbAnnees)
    {
        $this->nbAnnees = $nbAnnees;
    }

    /**
     * @param int $prizePool
     */
    public function setPrizePool ($prizePool)
    {
        $this->prizePool = $prizePool;
    }

    /**
     * @return int
     */
    public function getPrizePool ()
    {
        return $this->prizePool;
    }


    public function estimationGains ($nbBonNum, $nbBonEtoile)
    {
        $key = "$nbBonNum,$nbBonEtoile";
        if (array_key_exists($key, $this->tabGains)) {


            if ($nbBonNum == Euromillion::NB_MAX_NUMERO and $nbBonEtoile == Euromillion::NB_MAX_ETOILE) {
                $this->gains += $this->getPrizePool();

            }else{
                $this->gains += $this->tabGains[$key];

            }
            $this->incrementerRang($key);
        }
    }

    public function incrementerRang($key){
        switch ($key){
            case "5,2":
                $this->rang1++;
                $this->gainsrang1+= $this->tabGains[$key];
                break;
            case "5,1":
                $this->rang2++;
                $this->gainsrang2+= $this->tabGains[$key];
                break;
            case "5,0":
                $this->rang3++;
                 $this->gainsrang3+= $this->tabGains[$key];break;
            case "4,2":
                $this->rang4++;
                 $this->gainsrang4+= $this->tabGains[$key];break;
            case "4,1":
                $this->rang5++;
                 $this->gainsrang5+= $this->tabGains[$key];break;
            case "3,2":
                $this->rang6++;
                 $this->gainsrang6+= $this->tabGains[$key];break;
            case "4,0":
                $this->rang7++;
                 $this->gainsrang7+= $this->tabGains[$key];break;
            case "2,2":
                $this->rang8++;
                 $this->gainsrang8+= $this->tabGains[$key];break;
            case "3,1":
                $this->rang9++;
                 $this->gainsrang9+= $this->tabGains[$key];break;
            case "3,0":
                $this->rang10++;
                 $this->gainsrang10+= $this->tabGains[$key];break;
            case "1,2":
                $this->rang11++;
                 $this->gainsrang11+= $this->tabGains[$key];break;
            case "2,1":
                $this->rang12++;
                 $this->gainsrang12+= $this->tabGains[$key];break;
            case "2,0":
                $this->rang13++;
                 $this->gainsrang13+= $this->tabGains[$key];break;
           

        }
    }
    /**
     * @return int
     */
    public function getRang1 ()
    {
        return $this->rang1;
    }

    /**
     * @return int
     */
    public function getRang2 ()
    {
        return $this->rang2;
    }

    /**
     * @return int
     */
    public function getRang3 ()
    {
        return $this->rang3;
    }

    /**
     * @return int
     */
    public function getRang4 ()
    {
        return $this->rang4;
    }

    /**
     * @return int
     */
    public function getRang5 ()
    {
        return $this->rang5;
    }

    /**
     * @return int
     */
    public function getRang6 ()
    {
        return $this->rang6;
    }

    /**
     * @return int
     */
    public function getRang7 ()
    {
        return $this->rang7;
    }

    /**
     * @return int
     */
    public function getRang8 ()
    {
        return $this->rang8;
    }

    /**
     * @return int
     */
    public function getRang9 ()
    {
        return $this->rang9;
    }

    /**
     * @return int
     */
    public function getRang10 ()
    {
        return $this->rang10;
    }

    /**
     * @return int
     */
    public function getRang11 ()
    {
        return $this->rang11;
    }

    /**
     * @return int
     */
    public function getRang12 ()
    {
        return $this->rang12;
    }

    /**
     * @return int
     */
    public function getRang13 ()
    {
        return $this->rang13;
    }

     /**
     * @return int
     */
    public function getGainsRang1 ()
    {
        return $this->gainsrang1;
    }

     /**
     * @return int
     */
    public function getGainsRang2 ()
    {
        return $this->gainsrang2;
    }
     /**
     * @return int
     */
    public function getGainsRang3 ()
    {
        return $this->gainsrang3;
    }
     /**
     * @return int
     */
    public function getGainsRang4 ()
    {
        return $this->gainsrang4;
    }
     /**
     * @return int
     */
    public function getGainsRang5 ()
    {
        return $this->gainsrang5;
    }
     /**
     * @return int
     */
    public function getGainsRang6 ()
    {
        return $this->gainsrang6;
    }
     /**
     * @return int
     */
    public function getGainsRang7 ()
    {
        return $this->gainsrang7;
    }
     /**
     * @return int
     */
    public function getGainsRang8 ()
    {
        return $this->gainsrang8;
    }
     /**
     * @return int
     */
    public function getGainsRang9 ()
    { 
          return $this->gainsrang9;
    }
    public function getGainsRang10 ()
    {
        return $this->gainsrang10;
    }
     /**
     * @return int
     */
    public function getGainsRang11 ()
    {
        return $this->gainsrang11;
    }
     /**
     * @return int
     */
    public function getGainsRang12 ()
    {
        return $this->gainsrang12;
    }
     /**
     * @return int
     */
    public function getGainsRang13 ()
    {
        return $this->gainsrang13;
    }
    
}