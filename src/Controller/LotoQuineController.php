<?php

namespace App\Controller;

use App\Lototo\LotoQuine\GrilleQuine;
use App\Lototo\LotoQuine\GrilleQuineFactory;
use App\Lototo\LotoQuine\LotoQuineGenerator;
use App\Lototo\LotoQuine\PlaqueQuine;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;

class LotoQuineController extends AbstractController
{
    /**
     * @Route("/lotoquine", name="loto_quine")
     */
    public function index(LotoQuineGenerator $generator)
    {
        $pdf = $generator->setConfiguration()->generate()->getPdfFromHtml();
        return new PdfResponse($pdf,"file.pdf");
    }
}
