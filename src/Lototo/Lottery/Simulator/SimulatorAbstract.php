<?php
namespace App\Lototo\Lottery\Simulator;

use Twig\Environement as Templating;

abstract class SimulatorAbstract{


	public $gagnant = false;
    public $gains = 0;
    public $miseTotale=0;
    public $benef;
    public $tabNums;
    public $tabEtoiles;
    public $prizePool = 0;
    public $nbAnnees;
    public $nbTirages;

	/**
	 * @var Templating $templating
	 */
	protected $templating;

	public function __construct( Templating $templating){
		
		$this->templating = $templating;
	}

	/**
	 * @return Templating
	 */
	public function getTemplating():Templating
	{

		return $this->templating;
	}
	

	 /**
     * @return bool
     */
    public function isGagnant ()
    {
        return $this->gagnant;
    }

    /**
     * @return mixed
     */
    public function getNbAnnees ()
    {
        return $this->nbAnnees;
    }

    /**
     * @return mixed
     */
    public function getNbTirages ()
    {
        return $this->nbTirages;
    }

    /**
     * @param mixed $nbTirages
     */
    public function setNbTirages ($nbTirages)
    {
        $this->nbTirages = $nbTirages;
    }

    /**
     * @param mixed $nbAnnees
     */
    public function setNbAnnees ($nbAnnees)
    {
        $this->nbAnnees = $nbAnnees;
    }

    /**
     * @param int $prizePool
     */
    public function setPrizePool ($prizePool)
    {
        $this->prizePool = $prizePool;
    }

    /**
     * @return int
     */
    public function getPrizePool ()
    {
        return $this->prizePool;
    }
	
}

