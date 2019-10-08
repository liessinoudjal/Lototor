<?php
namespace App\Lototo\Lottery\Simulator;

use App\Lototo\Lottery\Grille\Grille;
use Symfony\Component\Templating\EngineInterface;
use App\Lototo\Lottery\Euromillion;
use App\Lototo\Lottery\Simulator\SimulatorAbstract;
use App\Repository\EuromillionCombinaisonRepository;
use App\Repository\CombinaisonRepository;

class EuromillionSimulator extends SimulatorAbstract
{

	private $tirageEuromillion;

	const PRIX_GRILLE = 2.5;
    const PRIZE_POOL_MIN = 17000000;
    const PRIZE_POOL_MAX = 190000000;
    
    private $gainsMoyenParRang = [
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

    

    public $euromillionCombinaison;
    public $historiqueDesTirages=[
        "5,2" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "5,1" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "5,0" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "4,2" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "4,1" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "3,2" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "4,0" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "2,2" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "3,1" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "3,0" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "1,2" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "2,1" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "2,0" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0]
    ];

  

	public function __construct(TirageEuromillion $tirageEuromillion, EuromillionCombinaisonRepository $combinaisonRepository ){
     // Parent::__construct();
		$this->tirageEuromillion = $tirageEuromillion;
        //$this->euromillionCombinaison = $combinaisonRepository->findAll();
        foreach( $combinaisonRepository->findAll() as $combinaison){
            $this->euromillionCombinaison[$combinaison->getCombinaison()]= [
                "gainMoyen" => $combinaison->getGainMoyen(),
                "icon" => $combinaison->getIcon()
            ];
        }
	
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
               $this->euromillionCombinaison['5,2']['gainMoyen'] = $this->prizePool; 

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
        //dd($this);  
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

   


    public function estimationGains ($nbBonNum, $nbBonEtoile)//($nbBonNum, $nbBonEtoile)
    {
        $key = "$nbBonNum,$nbBonEtoile";
        if (array_key_exists($key, $this->euromillionCombinaison)) {


            if ($nbBonNum == Euromillion::NB_MAX_NUMERO and $nbBonEtoile == Euromillion::NB_MAX_ETOILE) {
                $this->gains += $this->getPrizePool();

            }else{
                $this->gains += $this->euromillionCombinaison[$key]['gainMoyen'];

            }
            $this->incrementerRang($key);
        }
    }

    public function incrementerRang($key): void
    {
        $this->historiqueDesTirages[$key]["nb_combinaison"]++;
        $this->historiqueDesTirages[$key]["gain_totale_combinaison"]+= $this->euromillionCombinaison[$key]["gainMoyen"];
    
    }

    /**
     * @return array
     */
    public function getHistoriqueDesTirages(): array
    {
        return $this->historiqueDesTirages;
    }
    
}