<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class LottoCalendarController extends AbstractController
{
    /**
     * @Route("/lotto/calendar", name="lotto_calendar")
     */
    public function index()
    {
        return $this->render('lotto_calendar/index.html.twig', [
            'controller_name' => 'LottoCalendarController',
        ]);
    }
}
