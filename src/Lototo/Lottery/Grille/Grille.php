<?php

namespace App\Lototo\Lottery\Grille;



class Grille
{
    
    private $nbTirages;
   

    private $numeros;
    private $etoiles;

    public function __construct(int $nbTirages, array $numeros, array $etoiles){
        $this->numeros =  $numeros;
        $this->etoiles =  $etoiles;
        $this->nbTirages = $nbTirages ;
    }


    public function getNbTirages()
    {
        return $this->nbTirages;
    }

    /**
     * @param int $nbTirages
     * @return $this
     */
    public function setNbTirages(int $nbTirages)
    {
        $this->nbTirages = $nbTirages;

        return $this;
    }

    /**
     * @return array|null
     */
    public function getNumeros(){

        return $this->numeros;

    }

    /**
     * @return array|null
     */
    public function getEtoiles(){
    
        return $this->etoiles;
  
    }
     /**
     * @return array|null
     */
    public function getGrille(){
        return  array_merge ([$this->getNbTirages()], $this->numeros,$this->etoiles);
    }


}