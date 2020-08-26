<?php
namespace App\Lototo\LotoQuine;

use App\Exception\WrongCountGrilleException;

class PlaqueQuine  {

    const NOMBRE_NUMERO_PLAQUE_QUINE = 90;
    const DIZAINE = 90;

    private  $numeros;
    private $nbGrilleQuine;
    private  $emptyGrillesQuines;
    private  $grillesQuines=[];

    public function fillPlaque(int $nbGrilleQuine = 6)
    {
        if($nbGrilleQuine>=1 && $nbGrilleQuine <= 6){
            $this->nbGrilleQuine = $nbGrilleQuine;
            $this->setNumeros()->setGrillesQuines();
            // dd($this);
            return $this;
            
        }else{
            throw new WrongCountGrilleException($nbGrilleQuine);
        }
       
    }

    public function setNumeros(): self{
        $this->numeros[] = range(1,9);
        $this->numeros[] = range(10,19);
        $this->numeros[] = range(20,29);
        $this->numeros[] = range(30,39);
        $this->numeros[] = range(40,49);
        $this->numeros[] = range(50,59);
        $this->numeros[] = range(60,69);
        $this->numeros[] = range(70,79);
        $this->numeros[] = range(80,90);
        $this->shuffle($this->numeros);

        $this->emptyGrillesQuines = GrilleQuineFactory::getEmptyGrillesQuines($this->nbGrilleQuine);
 
        return $this;
    }

    public function setGrillesQuines(){
   
        foreach($this->emptyGrillesQuines as $grilleQuine){
            // $numeros = array_slice($this->numeros,$i*GrilleQuine::NOMBRE_NUMEROS_PAR_GRILLE, GrilleQuine::NOMBRE_NUMEROS_PAR_GRILLE);
            $this->grillesQuines[]= $grilleQuine->fill( $this->numeros);
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
    private function shuffle(array &$numeros){
        foreach($numeros as &$dizaines){
            shuffle($dizaines);
        }
    }
}