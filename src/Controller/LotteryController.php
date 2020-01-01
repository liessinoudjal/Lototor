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
use App\Repository\StatRepository;

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
     
            //$resultatSimulation = $lotteryManager->getLottery()->getSimulator()->simuler($grille);
            return $this->json([
                "lotteryName" => $lotteryName,
                "content" => $this->render("lottery/result_simulation.html.twig",
                                ["simulation" => $lotteryManager->getLottery()->getSimulator()->simuler($grille),
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
      * not yet functionnal, don't use
     * @Route("/api/simulator/{$LotteryName}", name="apiSimulator")
     * @Method({"POST"})
     *
     */
    public function apiSimulator (Request $request, string $LotteryName, LotteryManager $lotteryManager)
    {
        $grille = $lotteryManager->getGrille($request);

        $lotteryManager->setConfiguration($grilleInfos['lotteryName']);
     
        return $this->json($lotteryManager->getLottery()->getSimulator()->simuler($grille));
    }

    /**
     * @Route("/fiabilite-du-tirage-aleatoire", name="pertinance")
     * @Method({"GET"})
     */
    public function stat(StatRepository $statRepo){
            //récupération en BDD des hits (nombre de tirage pour chaque nombre du simulateur pour N simulation)
            $hits = $statRepo->findHits();
            //nombre totale de chiffres simulés
            $countHits =  array_sum($hits);
            //hits maximum lors des tirages
            $max = max($hits);
            // hits minimum lors des tirages
            $min = min($hits);

            return $this->render('lottery/pertinance.html.twig',[
                "hits"=> json_encode($hits),
                "countHits"=> $countHits,
                "max" =>   number_format ( ( $max - (  $countHits/50) )/ (  $countHits/50), 3,',', ' ') ,
                "min" => number_format ( ( $min - (  $countHits/50) )/ (  $countHits/50) , 3, ',',' ')
            ]);
    }

}
