<?php
namespace App\Lototo\Lottery\Simulator;

use App\Lototo\Lottery\Grille\Grille;
use App\Lototo\Lottery\Euromillion;

class TirageEuromillion {

	 private $numeros;
     private $etoiles;
	/*
	*@var Grille
	*/
	private $grille;

	public function __construct()
	{
		$this->numeros =  range(Euromillion::NUMERO_MIN,Euromillion::NUMERO_MAX) ;
     	$this->etoiles =  range(Euromillion::NUMERO_MIN,Euromillion::ETOILE_MAX);
	} 

	/**
     * fontcion qui retourne une grille de numeros et d'etoiles prisent au hasard 
     * @return Grille
     */
    public function tirage ():Grille
    {
        $tirage=[];
        $tabNum = $this->numeros;
        shuffle( $tabNum );
        $tabEtoile = $this->etoiles;
        shuffle( $tabEtoile );

        for ( $i = 0 ; $i < Euromillion::NB_MAX_NUMERO ; $i++ ){
            $tirage["5num"][] = array_shift($tabNum);
            if( $i < Euromillion::NB_MAX_ETOILE ){
                $tirage["2etoiles"][]=array_shift($tabEtoile);
            }
        }
        $this->grille = new Grille(0, $tirage["5num"], $tirage["2etoiles"]);
        return $this->grille ;
    }

    /**
     * @return array
     */
    public function getNumeros():array
    {
        return $this->numeros;
    }

    /**
     * @return array
     */
    public function getEtoiles ():array
    {
        return $this->etoiles;
    }

    /**
     * @return array 
     */
    public function getGrille():Grille
    {
    	return $this->grille;
    }

}