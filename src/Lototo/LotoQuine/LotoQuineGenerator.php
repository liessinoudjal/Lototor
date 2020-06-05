<?php
namespace App\Lototo\LotoQuine;

use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class LotoQuineGenerator{
    private int $nbPlaque;
    private int $nbGrillePerPlaque;

    private array $plaquesQuines= [];

    private Environment $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    public function setConfiguration(int $nbPlaque= 1, int $nbGrillePerPlaque=6): self{
        $this->nbPlaque = $nbPlaque;
        $this->nbGrillePerPlaque = $nbGrillePerPlaque;
        return $this;
    }

    public function generate(){
        for($i=0; $i < $this->nbPlaque; $i++){
            $this->plaquesQuines[]= PlaqueQuineFactory::createPlaqueQuine($this->nbGrillePerPlaque);
           
        }
        $html=[];
        foreach($this->plaquesQuines as $plaqueQuine){
           $html[]= $this->twig->render("loto_quine/plaque_quine.html.twig",["plaque"=>$plaqueQuine->getGrillesQuinesToArray()]);
        }
        echo $html[0];
       dd($this, $html);
    }

    public function getPlaqueQuines(){
        return $this->plaquesQuines;
    }

    public function getNbPlaque(){
        return $this->nbPlaque;
    }

    public function getNbGrillePerPlaque(){
        return $this->nbGrillePerPlaque;
    }
}