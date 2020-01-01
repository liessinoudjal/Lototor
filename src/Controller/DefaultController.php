<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use App\Entity\Grille;
use App\Entity\Stat;
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




        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/CGU", name="CGU")
     * @Method({"POST","GET"})
     */
    public function cgu(Request $request)
    {

    

        return $this->render('default/CGU.html.twig', [

        ]);
    }

    /**
     * utilisé pour remplir la base de données de tirages aléatoires. Ces données seront utilisées pour démontrer la pertinance du simulateur
     * @Route("/stat/{nbTirage?100}", name="stat")
     * @Method({"GET"})
     */
    public function stat( int $nbTirage,EntityManagerInterface $em, TirageEuromillion $tirageEuromillion ){
            
            for($i=0; $i <= $nbTirage; $i++ ){
                $numeros = $tirageEuromillion->tirage()->getNumeros();
                $nums=[];
                foreach($numeros as $numero){
                    $stat = new Stat();
                    $nums[] = $stat->setNumero($numero)->setTypeNumero("numero")->setLotteryType("euromillion");
                    $em->persist($stat);
                }
                 $em->flush();
                
            }
            return $this->json($nums);
    }


}
