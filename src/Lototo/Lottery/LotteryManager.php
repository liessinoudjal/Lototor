<?php
namespace App\Lototo\Lottery;

use App\Lototo\Lottery\LotteryInterface;
use Symfony\Component\HttpFoundation\Request;
use App\Lototo\Lottery\Grille\Grille;
use App\Lototo\Lottery\Euromillion;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class LotteryManager {



    protected $lotteryName;
    protected $registry;
    protected $lotteryInstance;
    protected $disptacher;

    public function __construct(ManagerRegistry $registry ,  EventDispatcherInterface $eventDispatcher){

        //$this->lottery = $euromillion;
        $this->registry = $registry;
        $this->disptacher = $eventDispatcher;

    }
    /**
     * fonction qui configure la loterie à appeler
     * @param string $lotteryName
     * @return void
     *
     */
    public function setConfiguration(string $lotteryName): void
    {
        $this->lotteryName = ucfirst($lotteryName);

        $loterryClass = "App\\Lototo\\Lottery\\". $this->lotteryName;
        $repository = "App\\Repository\\".$this->lotteryName."CombinaisonRepository";
        $tirage = "App\\Lototo\\Lottery\\Simulator\\Tirage".$this->lotteryName;

        $this->lotteryInstance = new $loterryClass(new $tirage(), new $repository($this->registry), $this->disptacher);
    }

    /**
     * Fonction qui retourne une instance de la loterie
     * @return LotteryInterface
     *
     */
    public function getLottery (): LotteryInterface
    {

        return $this->lotteryInstance;
    }

    /**
     * Fonction qui retourne une instance de Grille representant les numeros choisis par l'utilisateur pour la simulation
     * @param Request $request
     * @return Grille
     *
     */
    public function getGrille( Request $request): Grille
    {

        $nb_tirages= $request->request->get("nb_annees");
        $numeros = explode(",",$request->request->get("numeros"));
        $etoiles =  explode(",",$request->request->get("etoiles"));

        return  new Grille($nb_tirages,$numeros,$etoiles);
    }

}
