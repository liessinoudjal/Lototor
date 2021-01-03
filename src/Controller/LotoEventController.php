<?php

namespace App\Controller;

use App\Entity\LotoEvent;
use App\Repository\LotoEventRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class LotoEventController extends AbstractController
{
    /**
     * @Route("/lotos/agenda/{page<\d*>?1}", name="loto_list")
     */
    public function list(LotoEventRepository $lotoEventRepository, PaginatorInterface $paginator, Request $request, int $page)
    {
        $liveLotoEvents = $lotoEventRepository->findAllNextQuery();


        // Paginate the results of the query
        $liveLotoEventsPaginated = $paginator->paginate(
            // Doctrine Query, not results
            $liveLotoEvents,
            // Define the page parameter
            $page,
            // Items per page
            10
        );
        return $this->render('loto_event/index.html.twig', [
            'liveLotoEventsPaginated' => $liveLotoEventsPaginated,
            'liveLotoEvents' =>  $lotoEventRepository->findAllNext()
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

            return $this->json( $this->container->get("twig")->render("loto_event/ajax/image.html.twig", ["lotoEvent" => $lotoEvent]));
     
    }

}
