<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use App\Entity\Grille;
use App\Form\GrilleType;
use App\Entity\EuromillionCombinaison;
use  Doctrine\ORM\EntityManagerInterface;
use App\Lototo\Lottery\Simulator\TirageEuromillion;

class DefaultController extends AbstractController
{
   
    /**
     * @Route("/", name="homepage")
     * @Method({"GET", "POST"})
     */
    public function indexAction (Request $request)
    {




        return $this->render('default/index.html.twig', [

        ]);
    }

    /**
     * @Route("/CGU", name="CGU")
     * @Method({"POST","GET"})
     */
    public function euromillionAction (Request $request)
    {

    

        return $this->render('default/CGU.html.twig', [

        ]);
    }

     /**
     * @Route("/api/euromillion/{nbTirage}/{num1}/{num2}/{num3}/{num4}/{num5}/{etoile1}/{etoile2}", name="apiEuromillion")
     * @Method({"GET"})
     */
    public function apiEuromillionAction (Request $request, int $nbTirage,int $num1,int $num2, int $num3, int $num4, int $num5, int $etoile1, int $etoile2)
    {
             $grille = new Grille();
       //  dump($request->attributes->get('nbTirage'));
       // $grillejson=json_encode($request->attributes->get('grille'));
        $grille->setNbTirage($request->attributes->get('nbTirage'))
                ->setNum1($request->attributes->get('num1'))
                ->setNum2($request->attributes->get('num2'))
                ->setNum3($request->attributes->get('num3'))
                ->setNum4($request->attributes->get('num4'))
                ->setNum5($request->attributes->get('num5'))
                ->setEtoile1($request->attributes->get('etoile1'))
                ->setEtoile2($request->attributes->get('etoile2'));
            //    dump($grille);
      // return new Response( $grille,200,['content-type'=>'application/json']);
      // 
            $simulateurEuro = new SimulateurEuromillion();

            $simulationEuromillion=$simulateurEuro->simuler($grille->getNums(),$grille->getEtoiles(),$grille->getNbTirage());
       return $this->json($simulationEuromillion);
    }


 /**
     * @Route("/test", name="test")
     * @Method({"GET"})
     */
    public function test( EntityManagerInterface $em){
        $euromillionCombinaison = new EuromillionCombinaison();
        $euromillionCombinaison->setCombinaison("5,2")
        ->setGainMoyen(123216351,55)
        ->setIcon('<i class="fas fa-futbol text-success" aria-hidden="true"></i>');

        $em->persist($euromillionCombinaison);
        $em->flush();
            return $this->json($euromillionCombinaison);
    }

    /**
     * @Route("/stat/{nbTirage?100}", name="stat")
     * @Method({"GET"})
     */
    public function stat( int $nbTirage,EntityManagerInterface $em, TirageEuromillion $tirageEuromillion){
            $resultat=[];
            for($i=0; $i<= $nbTirage; $i++ ){
                dd($tirageEuromillion->tirage()->getNumeros());
                $resultat[]= $tirageEuromillion->tirage();
            }
            return $this->json($resultat);
    }


}
