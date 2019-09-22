<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use App\Lototo\Lottery\LotteryManager;
use App\Lototo\Lottery\Grille\Grille;

class LotteryController extends AbstractController
{


     /**
     * @Route("/euromillion",options={"expose"=true}, name="euromillion")
     * @Method({"POST","GET"})
     */
    public function euromillion(Request $request, $_route, $_method)
    {
        

        //en cas de soumission du formulaire
        if($request->getMethod() == "POST" && $request->isXmlHttpRequest()){
            //dd($request->request);
            $nb_tirages= $request->request->get("nb_annees");
            $numeros = explode(",",$request->request->get("numeros"));
            $etoiles =  explode(",",$request->request->get("etoiles"));
                $grille = new Grille($nb_tirages,$numeros,$etoiles);
            $lotteryManager = (new LotteryManager( $_route));
            return $this->json([
                "lotteryName" => $_route,
                "content" => $lotteryManager->getLottery()->getSimulator()->simuler($grille),
                "status" => true,
                "error" => false
            ]);
        }
            
           //dd($request);
            
       $lottery = (new LotteryManager( $_route))->getLottery()->init();
        // dd($lottery);
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
