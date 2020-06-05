<?php
namespace App\Lototo\LotoQuine;

use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;
use Knp\Snappy\Pdf;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;

class LotoQuineGenerator{
    private int $nbPlaque;
    private int $nbGrillePerPlaque;

    private array $plaquesQuines= [];

    private Environment $twig;

    private Pdf $pdf;

    private $htmlToGenerate;

    public function __construct(Environment $twig, Pdf $pdf )
    {
        $this->twig = $twig;
        $this->pdf = $pdf;
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
       
        foreach($this->plaquesQuines as $plaqueQuine){
           $this->htmlToGenerate .= "</br>". $this->twig->render("loto_quine/plaque_quine.html.twig",["plaque"=>$plaqueQuine->getGrillesQuinesToArray()]);
        }
        dd($this, $this->htmlToGenerate );
        return new PdfResponse(
            $this->pdf->getOutputFromHtml($this->htmlToGenerate ),
            'file.pdf'
        );
       
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