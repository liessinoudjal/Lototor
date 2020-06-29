<?php
namespace App\Lototo\LotoQuine;

use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;
use Knp\Snappy\Pdf;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;

class LotoQuineGenerator{
    private  $nbPlaque;
    private  $nbGrillePerPlaque;

    private  $plaquesQuines= [];

    private  $twig;

    private  $pdf;

    private $htmlToGenerate;

    public function __construct(Environment $twig, Pdf $pdf )
    {
        $this->twig = $twig;
        $this->pdf = $pdf;
    }

    public function setConfiguration(int $nbPlaque= 10, int $nbGrillePerPlaque=6): self{
        $this->nbPlaque = $nbPlaque;
        $this->nbGrillePerPlaque = $nbGrillePerPlaque;
        return $this;
    }

    public function generate(){
        for($i=0; $i < $this->nbPlaque; $i++){
            $this->plaquesQuines[]= PlaqueQuineFactory::createPlaqueQuine($this->nbGrillePerPlaque);
           
        }
       
        foreach($this->plaquesQuines as $plaqueQuine){
           $this->htmlToGenerate []=  $this->twig->render("loto_quine/plaque_quine.html.twig",["plaque"=>$plaqueQuine->getGrillesQuinesToArray()]);
        }
        //echo $this->htmlToGenerate[0];die;
        return $this;
        //dd($this, $this->htmlToGenerate );
      /*   dd( new PdfResponse(
            $this->pdf->getOutputFromHtml($this->htmlToGenerate ),
            'file.pdf'
        )); */
       
    }
    public function getPdfFromHtml(){
        return  $this->pdf->getOutputFromHtml($this->htmlToGenerate, [
            'margin-top'    => 10,
            'margin-right'  => 10,
            'margin-bottom' => 10,
            'margin-left'   => 10,
        ]);
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