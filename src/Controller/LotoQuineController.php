<?php

namespace App\Controller;


use App\Lototo\LotoQuine\LotoQuineGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;

class LotoQuineController extends AbstractController
{
    /**
     * @Route("/lotoquine", name="loto_quine")
     */
    public function index()
    {
        return $this->render("loto_quine/index.html.twig");
    }

    /**
     * @Route("/lotoquine/generator/{nbPlaque}", name="loto_quine_generator", requirements={"nbPlaque"="\d+"}
     * )
     */
    public function generate(LotoQuineGenerator $generator, int $nbPlaque = 50){
        $pdf = $generator->setConfiguration($nbPlaque)->generate()->getPdfFromHtml();
        return new PdfResponse($pdf,"file.pdf");
    }
}
