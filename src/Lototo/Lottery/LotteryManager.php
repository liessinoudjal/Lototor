<?php
namespace App\Lototo\Lottery;

use App\Lototo\Lottery\LotteryInterface; 
use App\lototo\Lottery\Grille\Grille;

class LotteryManager {

    public $lotteryName;
   

    public function __construct(string $name  ){
        $this->lotteryName = ucfirst($name);
  
    }

    /**
     * getLottery
     *
     * @return LotteryInterface
     */
    public function getLottery(): LotteryInterface{
        $class= "App\\Lototo\\Lottery\\".$this->lotteryName;
        return new $class() ;
    }

 
}