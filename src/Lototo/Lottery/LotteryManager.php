<?php
namespace App\Lototo\Lottery;

use App\Lototo\Lottery\LotteryInterface; 
use Symfony\Component\HttpFoundation\Request;
use App\Lototo\Lottery\Grille\Grille;
use App\Lototo\Lottery\Euromillion;

class LotteryManager {

 

    protected $euromillion;
   

    public function __construct(Euromillion $euromillion ){
        
        $this->euromillion = $euromillion;
  
    }


    public function getEuromillion (): LotteryInterface
    {
        return $this->euromillion;
    }


    public function getGrille( Request $request){
        
        $nb_tirages= $request->request->get("nb_annees");
        $numeros = explode(",",$request->request->get("numeros"));
        $etoiles =  explode(",",$request->request->get("etoiles"));

        return  new Grille($nb_tirages,$numeros,$etoiles);
    }
 
}