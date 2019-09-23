<?php
namespace App\Lototo\Lottery\Simulator;

use Twig\Environement as Templating;

abstract class SimulatorAbstract{

	/**
	 * @var Templating $templating
	 */
	public $templating;

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
	
	
}

