<?php
namespace App\Lototo\LotoQuine;

use App\Exception\WrongCountNumberException;
use Doctrine\Common\Collections\ArrayCollection;

class GrilleQuine {

    const NOMBRE_NUMEROS_PAR_GRILLE = 15;

    CONST NOMBRE_COLONNE_PAR_GRILLE = 9;

    const NOMBRE_LIGNE_PAR_GRILLE = 3;

    private array $casesKeysToFill;
    private int $nombreDeCases;
    private array $numeros;

    private array $grille= [];

    
    public function fill(...$numeros)
    {
        if(count($numeros) === self::NOMBRE_NUMEROS_PAR_GRILLE)
            {
                $this->numeros = $numeros;
                $this->nombreDeCases = self::NOMBRE_COLONNE_PAR_GRILLE * self::NOMBRE_LIGNE_PAR_GRILLE;
                $this->setCasesKeysToFill()->initGrille()->fillGrille();
                return $this;
                //dd($this);

            }
            else
            {
                throw new WrongCountNumberException(self::NOMBRE_NUMEROS_PAR_GRILLE, count($numeros));
            }
    }

    /**
     * fonction qui set le tableau contenant les clés où seront positionnés les numeros de la grille
     * 
     * @return GrilleQuine
     */
    public function setCasesKeysToFill(): self{
      
        $keys= range(0,$this->nombreDeCases-1);
        shuffle($keys);
        $this->casesKeysToFill = array_slice($keys,0,self::NOMBRE_NUMEROS_PAR_GRILLE);
        return $this;
    }
    /**
     * fonction qui initialise une grille vide
     * 
     * @return GrilleQuine
     */
    public function initGrille(): self{   
        
        for($i =0; $i < $this->nombreDeCases; $i++){
            $this->grille[] = null;
        }
        return $this;
    }

    public function fillGrille():self{
        foreach($this->grille as $key => $value){
            if(in_array($key,$this->casesKeysToFill)){
                $this->grille[$key]=array_shift($this->numeros);
            }
        }

        
        return $this;
    }

    public function getGrille(){
        return $this->grille;
    }
}