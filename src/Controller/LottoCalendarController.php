<?php

namespace App\Controller;

use App\Repository\LotoEventRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class LottoCalendarController extends AbstractController
{
    /**
     * @Route("/lotto/calendar", name="lotto_calendar")
     */
    public function index(LotoEventRepository $liveLotoEventRepository)
    {
        ;
        return $this->render('lotto_calendar/index.html.twig', [
            'liveLotoEvents' => $liveLotoEventRepository->findAll(),
        ]);
    }
}
