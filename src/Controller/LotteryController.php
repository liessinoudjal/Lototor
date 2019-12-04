<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use App\Lototo\Lottery\LotteryManager;
use App\Lototo\Lottery\Euromillion;
use App\Lototo\Lottery\Grille\Grille;

class LotteryController extends AbstractController
{


     /**
     * @Route("/lottery/{lotteryName}",options={"expose"=true}, name="lottery")
     * @Method({"POST","GET"})
     */
    public function euromillion(Request $request, $_route, LotteryManager $lotteryManager, string $lotteryName)
    {
        
        $lotteryManager->setConfiguration($lotteryName);

        //en cas de soumission du formulaire
        if($request->getMethod() == "POST" && $request->isXmlHttpRequest()){
   
            $grille = $lotteryManager->getGrille($request);
     
            $resultatSimulation = $lotteryManager->getLottery()->getSimulator()->simuler($grille);
            return $this->json([
                "lotteryName" => $lotteryName,
                "content" => $this->render("lottery/result_simulation.html.twig",
                                ["simulationEuromillion" => $lotteryManager->getLottery()->getSimulator()->simuler($grille),
                                   "lotteryName" => $lotteryName ]) ,
                "status" => true,
                "alert" => false
            ]);
        }
            
        //on affiche les données vides d'une grille euromillion pour le fomrulaire    
       $lottery =  $lotteryManager->getLottery()->init();

         return $this->render('lottery/lottery.html.twig', 
         [
             "stateJson" => $lottery->getJsonState(),
             "state" => $lottery->getState()
         ]);
    }


     /**
     * @Route("/loto", name="loto")
     * @Method({"POST","GET"})
     */
    public function loto(Request $request, $_route)
    {
     $lottery = (new LotteryManager( $_route))->getLottery()->init();
       // dd($euromillion->getJsonState());
        return $this->render('lottery/lottery.html.twig', 
        [
            "stateJson" => $lottery->getJsonState(),
            "state" => $lottery->getState()
        ]);
    }


     /**
     * @Route("/api/euromillion/{nbTirage}/{num1}/{num2}/{num3}/{num4}/{num5}/{etoile1}/{etoile2}", name="apiEuromillion")
     * @Method({"GET"})
     */
    public function apiEuromillion (Request $request, int $nbTirage,int $num1,int $num2, int $num3, int $num4, int $num5, int $etoile1, int $etoile2)
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
}
