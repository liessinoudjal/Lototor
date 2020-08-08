<?php
namespace App\Lototo\LotoQuine;

use App\Lototo\LotoQuine\Pdf\Pdf ;

// dd(dirname(__DIR__),$_SERVER);


class LotoQuineGenerator{
    private  $nbPlaque;
    private  $nbGrillePerPlaque;

    private  $twig;

    private  $pdf;


    public function __construct(Pdf $pdf)
    {
        $this->pdf = $pdf;
    }

    public function execute(int $nbPlaque= 10, int $nbGrillePerPlaque=6){

       return $this->pdf->execute($nbPlaque, $nbGrillePerPlaque);
    }
}