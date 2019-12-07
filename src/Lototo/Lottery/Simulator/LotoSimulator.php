<?php
namespace App\Lototo\Lottery\Simulator;

use App\Lototo\Lottery\Grille\Grille;
use App\Lototo\Lottery\Loto;
use App\Lototo\Lottery\Simulator\SimulatorAbstract;
use App\Repository\LotoCombinaisonRepository;

class LotoSimulator extends SimulatorAbstract
{

	private $tirageLoto;

	const PRIX_GRILLE = 2.2;
    const PRIZE_POOL_MIN = 2000000;
    const PRIZE_POOL_MAX = 24000000;
    
    private $gainsMoyenParRang = [
        "5,1"=>self::PRIZE_POOL_MIN,
        "5,0" => 432260.99,
        "4,1" => 78142.57,
        "4,0" => 4498.49,
        "3,1" => 203.92,
        "3,0" => 105.22,
        "2,1" => 62.81,
        "2,0" => 19.92,
        "1,1" => 14.62,
        "0,1" => 12.2
    ];

    

    public $combinaisons;
    public $historiqueDesTirages=[
        "5,1" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "5,0" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "4,1" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "4,0" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "3,1" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "3,0" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "2,1" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "2,0" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "1,1" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0],
        "0,1" => ["nb_combinaison" =>0, "gain_totale_combinaison"=>0]
    ];

  

	public function __construct(TirageLoto $tirageLoto, LotoCombinaisonRepository $combinaisonRepository ){
     // Parent::__construct();
		$this->tirageLoto = $tirageLoto;

        foreach( $combinaisonRepository->findAll() as $combinaison){
            $this->combinaisons[$combinaison->getCombinaison()] = [
                "gainMoyen" => $combinaison->getGainMoyen(),
                "icon" => $combinaison->getIcon()
            ];
        }
	
	}

	

	public function simuler(Grille $grille): SimulatorAbstract
	{
		$this->etoiles=$grille->getEtoiles();
        $this->numeros=$grille->getNumeros();
        $this->nbTirages = $grille->getNbTirages() * 52 * 2;
        $this->nbAnnees = $grille->getNbTirages();

        $finSimulation = false;
        $nbTirageSimu = 0;
        //tant que la simulation n'est pas terminée
        while (!$finSimulation) {
            //on simule dans combien de tirage nous allons réinitialiser la cagnote
            $nbTour= mt_rand(1,15);
            //réinitialisation de la cagnote
            $this->prizePool = self::PRIZE_POOL_MIN;
            for($i = 0 ; $i < $nbTour ; $i++){
                //si la cagnote en cours depasse la cagnote max , on le met au max autorisé
                if($this->prizePool >= self::PRIZE_POOL_MAX){
                    $this->prizePool = self::PRIZE_POOL_MAX;
                }//sinon on augmente la cagnote de 15%
                else{
                    $this->prizePool*=1.15;
                }
                //on set le nouveau prize pool à gagner en cas de bons numeros
               $this->euromillionCombinaison['5,1']['gainMoyen'] = $this->prizePool; 

                $grilleTirage = $this->tirageLoto ->tirage();
                
                //estimatons des bons numeros

                $nbBonEtoiles = count(array_intersect($grilleTirage->getEtoiles() , $this->etoiles));
                $nbBonNumeros = count(array_intersect($grilleTirage->getNumeros(), $this->numeros));
                $this->estimationGains($nbBonNumeros, $nbBonEtoiles);

                $nbTirageSimu++;
                // la siulation se termine que si :
                // tous les numeros sont bons
                if ($nbBonEtoiles == Loto::NB_MAX_ETOILE and $nbBonNumeros == Loto::NB_MAX_NUMERO) {
                    $this->gagnant = true;
                    $finSimulation = true;
                    // on calcule combien le joueur a joué depuis le debut
                    $this->miseTotale= $nbTirageSimu * self::PRIX_GRILLE;

                } // ou que que sommes arrivé à la fin de la simulation 
                elseif ($nbTirageSimu == $this->nbTirages) {
         
                    $this->miseTotale= $nbTirageSimu  * self::PRIX_GRILLE;
                    $finSimulation = true;
                }
            }
            		


        }
        //calcule des gains potentieles
        $this->benef = $this->gains - $this->miseTotale;
   
        return $this;
	}



	public function getTirageLoto(): TirageLoto
	{
		return $this->tirageLoto
;
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
        if (array_key_exists($key, $this->combinaisons)) {
         
            $this->gains += $this->combinaisons[$key]['gainMoyen'];

            $this->incrementerRang($key);
        }
    }

    public function incrementerRang($key): void
    {
        $this->historiqueDesTirages[$key]["nb_combinaison"]++;
        $this->historiqueDesTirages[$key]["gain_totale_combinaison"]+= $this->combinaisons[$key]["gainMoyen"];
    
    }

    /**
     * @return array
     */
    public function getHistoriqueDesTirages(): array
    {
        return $this->historiqueDesTirages;
    }
    
}