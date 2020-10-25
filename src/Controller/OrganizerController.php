<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/organizer")
 */
class OrganizerController extends AbstractController
{
    /**
     * @Route("/account", name="organizer-account")
     */
    public function account()
    {
        dump($this->getUser());
        return $this->render('organizer/account.html.twig', [
            'controller_name' => 'OrganizerController',
        ]);
    }
}
