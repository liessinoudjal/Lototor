<?php
namespace App\Lototo\LotoQuine;

use App\Exception\WrongCountGrilleException;

class PlaqueQuine  {

    const NOMBRE_NUMERO_PLAQUE_QUINE = 90;

    private  $numeros;
    private $nbGrilleQuine;
    private  $grillesQuines=[];

    public function fillPlaque(int $nbGrilleQuine = 6)
    {
        if($nbGrilleQuine>=1 && $nbGrilleQuine <= 6){
            $this->nbGrilleQuine = $nbGrilleQuine;
            $this->setNumeros()->setGrillesQuines();
            return $this;
            //dd($this);
        }else{
            throw new WrongCountGrilleException($nbGrilleQuine);
        }
       
    }

    public function setNumeros(): self{
        $this->numeros = range(1,self::NOMBRE_NUMERO_PLAQUE_QUINE);
        shuffle($this->numeros);
        return $this;
    }

    public function setGrillesQuines(){
        for($i=0 ; $i < $this->nbGrilleQuine;$i++){
            $numeros = array_slice($this->numeros,$i*GrilleQuine::NOMBRE_NUMEROS_PAR_GRILLE, GrilleQuine::NOMBRE_NUMEROS_PAR_GRILLE);
            $this->grillesQuines[]= GrilleQuineFactory::CreateGrilleQuine(...$numeros);
        }
        return $this;
    }

    public function getGrillesQuines(){
        return $this->grillesQuines;
    }

    public function getGrillesQuinesToArray(){
      
        return array_map(function($grilleQuine){
              return $grilleQuine->getGrille();
            }          
                ,$this->grillesQuines);
    }
}