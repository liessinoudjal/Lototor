<?php

namespace App\Controller;

use App\Repository\LotoEventRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class LotoEventController extends AbstractController
{
    /**
     * @Route("/loto/agenda", name="lotto_calendar")
     */
    public function index(LotoEventRepository $lotoEventRepository)
    {
        
        return $this->render('loto_event/index.html.twig', [
            'liveLotoEvents' => $lotoEventRepository->findAll(),
        ]);
    }
}
