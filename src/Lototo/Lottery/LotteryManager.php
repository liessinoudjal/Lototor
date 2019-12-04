<?php
namespace App\Lototo\Lottery;

use App\Lototo\Lottery\LotteryInterface; 
use Symfony\Component\HttpFoundation\Request;
use App\Lototo\Lottery\Grille\Grille;
use App\Lototo\Lottery\Euromillion;
use Symfony\Bridge\Doctrine\RegistryInterface;

class LotteryManager {

 

    protected $lottery;
    protected $registry;

    public function __construct(RegistryInterface $registry ){
        
        //$this->lottery = $euromillion;
        $this->registry = $registry;
  
    }
    /**
     * fonction qui qui configure la loterie à appeler
     * @param string $lottery
     * @return void
     * 
     */
    public function setConfiguration(string $lotteryName): void
    {
        $this->lottery = ucfirst($lotteryName);
    }

    /**
     * Fonction qui retourne une instance de la loterie 
     * @return LotteryInterface
     * 
     */
    public function getLottery (): LotteryInterface
    {
        $loterryClass = "App\\Lototo\\Lottery\\". $this->lottery;
        $simulator = "App\\Lototo\\Lottery\\Simulator\\".$this->lottery."Simulator";
        $repository = "App\\Repository\\".$this->lottery."CombinaisonRepository";
        $tirage = "App\\Lototo\\Lottery\\Simulator\\Tirage".$this->lottery;
        //App\Lototo\Lottery\Simulator
        return new $loterryClass(new $tirage(), new $repository($this->registry));
    }


    public function getGrille( Request $request){
        
        $nb_tirages= $request->request->get("nb_annees");
        $numeros = explode(",",$request->request->get("numeros"));
        $etoiles =  explode(",",$request->request->get("etoiles"));

        return  new Grille($nb_tirages,$numeros,$etoiles);
    }
 
}