<?php

namespace App\Controller;

use App\Entity\LotoEvent;
use App\Repository\LotoEventRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class LotoEventController extends AbstractController
{
    /**
     * @Route("/loto/agenda", name="loto_list")
     */
    public function list(LotoEventRepository $lotoEventRepository)
    {
        
        return $this->render('loto_event/index.html.twig', [
            'liveLotoEvents' => $lotoEventRepository->findAllNext(),
        ]);
    }

    /**
     * @Route("/loto/agenda/{slug}", name="loto_show")
     */
    public function show(LotoEvent $lotoEvent)
    {
        
        return $this->render('loto_event/show.html.twig', [
            'lotoEvent' => $lotoEvent,
        ]);
    }

    /**
     * @Route("/get_image_ajax/{id}", name= "lotoEvent_getImAgeAjax",  options = { "expose" = true })
     *
     * 
     */
    public function getImageAjax(Request $request,LotoEvent $lotoEvent){

            dump($lotoEvent);
            return $this->json( $this->container->get("twig")->render("loto_event/ajax/image.html.twig", ["lotoEvent" => $lotoEvent]));
     
    }

}
