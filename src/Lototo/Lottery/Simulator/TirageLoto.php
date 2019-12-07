<?php
namespace App\Lototo\Lottery\Simulator;

use App\Lototo\Lottery\Grille\Grille;
use App\Lototo\Lottery\Loto;

class TirageLoto {

	 private $numeros;
     private $etoiles;
	/*
	*@var Grille
	*/
	private $grille;

	public function __construct()
	{
		$this->numeros =  range(Loto::NUMERO_MIN,Loto::NUMERO_MAX) ;
     	$this->etoiles =  range(Loto::NUMERO_MIN,Loto::ETOILE_MAX);
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

        //on garde les tableaux deja melangé pour les remelanger au prochain tirage
        $this->numeros = $tabNum;
        $this->etoiles = $tabEtoile;

        for ( $i = 0 ; $i < Loto::NB_MAX_NUMERO ; $i++ ){
            $tirage["numeros"][] = array_shift($tabNum);
            if( $i < Loto::NB_MAX_ETOILE ){
                $tirage["etoiles"][]=array_shift($tabEtoile);
            }
        }
        $this->grille = new Grille(0, $tirage["numeros"], $tirage["etoiles"]);
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