<?php
namespace App\Lototo\LotoQuine;

use App\Exception\WrongCountNumberException;

class GrilleQuine {

    const NOMBRE_NUMEROS_PAR_GRILLE = 15;

    CONST NOMBRE_COLONNE_PAR_GRILLE = 9;

    const NOMBRE_LIGNE_PAR_GRILLE = 3;

    private  $casesKeysToFill;

    private  $grille= [];

    public function __construct(array $emptyTemplate){
        $this->grille = $emptyTemplate;
    }

  
    public function fill( &$numeros): self
    {
        
        foreach($this->grille as $rowKey => $line){
            foreach($line as $columnKey => $value){
                if($value === "x"){
                $this->grille[$rowKey][$columnKey]=array_shift($numeros[$columnKey]);
                }
            }
            
        }

  
        return $this;
    }


    public function getGrille(){
        return $this->grille;
    }

    static function createEmptyGrilleQuineFromTemplate(array $emptyTemplate){

    }
}