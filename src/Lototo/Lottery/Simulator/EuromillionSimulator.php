<?php
namespace App\Lototo\Lottery\Simulator;

use App\Lototo\Event\LotterySimulatedEvent;
use App\Lototo\Lottery\Grille\Grille;
use App\Lototo\Lottery\Euromillion;
use App\Lototo\Lottery\Simulator\SimulatorAbstract;
use App\Repository\EuromillionCombinaisonRepository;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class EuromillionSimulator extends SimulatorAbstract
{

	private $tirageEuromillion;

	const PRIX_GRILLE = 2.5;
    const PRIZE_POOL_MIN = 17000000;
    const PRIZE_POOL_MAX = 190000000;
    

    public $combinaisons;
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

  

	public function __construct(TirageEuromillion $tirageEuromillion, EuromillionCombinaisonRepository $combinaisonRepository ,  EventDispatcherInterface $eventDispatcher){
     // Parent::__construct();
     parent::__construct($eventDispatcher);
		$this->tirageEuromillion = $tirageEuromillion;

        foreach( $combinaisonRepository->findAll() as $combinaison){
            $this->combinaisons[$combinaison->getCombinaison()]= [
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
               $this->combinaisons['5,2']['gainMoyen'] = $this->prizePool; 

                $grilleTirage = $this->tirageEuromillion->tirage();
                
                //estimatons des bons numeros

                $nbBonEtoiles = count(array_intersect($grilleTirage->getEtoiles() , $this->etoiles));
                $nbBonNumeros = count(array_intersect($grilleTirage->getNumeros(), $this->numeros));
                $this->estimationGains($nbBonNumeros, $nbBonEtoiles);

                $nbTirageSimu++;
                // la siulation se termine que si :
                // tous les numeros sont bons
                if ($nbBonEtoiles == Euromillion::NB_MAX_ETOILE and $nbBonNumeros == Euromillion::NB_MAX_NUMERO) {
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

        $event = new LotterySimulatedEvent("Euromillion");
        $this->dispatcher->dispatch($event, LotterySimulatedEvent::NAME);
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