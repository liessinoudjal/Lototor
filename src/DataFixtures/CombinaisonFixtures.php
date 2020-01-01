<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\EuromillionCombinaison;
use App\Entity\LotoCombinaison;

class CombinaisonFixtures extends Fixture
{

	private $gainsMoyenParRang = [
        "5,2"=> 17000000,
        "5,1" => 412705.6,
        "5,0" => 64611.6,
        "4,2" => 3471.4,
        "4,1" => 171.8,
        "3,2" => 110.3,
        "4,0" => 69.9,
        "2,2" => 19.7,
        "3,1" => 14.6,
        "3,0" => 12.2,
        "1,2" => 10.6,
        "2,1" => 8.1,
        "2,0" => 4.4
    ];

    private $icones = [
        "5,2" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                    <i class="far fa-star text-success"></i>
                    <i class="far fa-star text-success"></i>',
        "5,1" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i>
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                    <i class="far fa-star text-success"></i>',

        "5,0" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>',

        "4,2" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                    <i class="far fa-star text-success"></i><i class="far fa-star text-success"></i>',
        "4,1" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                    <i class="far fa-star text-success"></i>',

        "3,2" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="far fa-star text-success"></i>
                    <i class="far fa-star text-success"></i>',

        "4,0" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>',

        "2,2" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="far fa-star text-success"></i>
                    <i class="far fa-star text-success"></i>',

        "3,1" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                    <i class="far fa-star text-success"></i>',

        "3,0" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                    ',

        "1,2" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="far fa-star text-success"></i>
                    <i class="far fa-star text-success"></i>',

        "2,1" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="far fa-star text-success">',

        "2,0" =>    '<i class="fas fa-futbol text-success" aria-hidden="true">
                    </i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    '
    ];
    private $gainsMoyenParRangLoto = [
        "5,1"=> 2000000,
         "5,0" => 115193,
        "4,1" => 2100,
        "4,0" => 662.3,
        "3,1" => 79.3,
        "3,0" => 26.8,
        "2,1" => 14.1,
        "2,0" => 5.2,
        "1,1" => 2.2,
        "0,1" => 2.2
    ];

    private $iconesLoto = [
        "5,1" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                    <i class="far fa-star text-success"></i>',
        "5,0" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i>
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>',

        "4,1" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="far fa-star text-success"></i>',

        "4,0" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>',

        "3,1" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="far fa-star text-success"></i>',

        "3,0" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>',

        "2,1" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="far fa-star text-success">',

        "2,0" =>    '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>', 

        "1,1" =>    '
                    <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                    <i class="far fa-star text-success"></i>',

        "0,1" =>    '
                    <i class="far fa-star text-success"></i>'
    ];
    public function load(ObjectManager $manager)
    {
        
         foreach($this->gainsMoyenParRang as $rang => $gainMoyen){
         	 		$euromillionCombinaison = new EuromillionCombinaison();
         	  		$euromillionCombinaison->setCombinaison($rang)
        								->setGainMoyen($gainMoyen)
        								->setIcon($this->icones[$rang]);

 				$manager->persist($euromillionCombinaison);
         }

          foreach($this->gainsMoyenParRangLoto as $rang => $gainMoyen){
                    $lotoCombinaison = new LotoCombinaison();
                    $lotoCombinaison->setCombinaison($rang)
                                        ->setGainMoyen($gainMoyen)
                                        ->setIcon($this->iconesLoto[$rang]);

                $manager->persist($lotoCombinaison);
         }
        

        $manager->flush();
    }
}
