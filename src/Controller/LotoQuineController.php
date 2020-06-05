<?php

namespace App\Controller;

use App\Lototo\LotoQuine\GrilleQuine;
use App\Lototo\LotoQuine\GrilleQuineFactory;
use App\Lototo\LotoQuine\LotoQuineGenerator;
use App\Lototo\LotoQuine\PlaqueQuine;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class LotoQuineController extends AbstractController
{
    /**
     * @Route("/lotoquine", name="loto_quine")
     */
    public function index(LotoQuineGenerator $generator)
    {
        $generator->setConfiguration()->generate();
        return $this->render('loto_quine/index.html.twig', [
            'controller_name' => 'LotoQuineController',
        ]);
    }
}
