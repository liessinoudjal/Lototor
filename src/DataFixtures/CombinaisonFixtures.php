<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\EuromillionCombinaison;

class CombinaisonFixtures extends Fixture
{

	private $gainsMoyenParRang = [
        "5,2"=> 17000000,
        "5,1" => 432260.99,
        "5,0" => 78142.57,
        "4,2" => 4498.49,
        "4,1" => 203.92,
        "3,2" => 105.22,
        "4,0" => 62.81,
        "2,2" => 19.92,
        "3,1" => 14.62,
        "3,0" => 12.2,
        "1,2" => 10.67,
        "2,1" => 8.04,
        "2,0" => 4.08
    ];

    private $icones = [
        "5,2"=> '<i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                                 <i class="far fa-star text-success"></i><i class="far fa-star text-success"></i>',
        "5,1" => ' <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                                 <i class="far fa-star text-success"></i>',
        "5,0" => '<i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i>',
        "4,2" => '<i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                                 <i class="far fa-star text-success"></i><i class="far fa-star text-success"></i>',
        "4,1" => '  <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                                 <i class="far fa-star text-success"></i><i class="far fa-star text-success"></i>',
        "3,2" => '  <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                                 <i class="far fa-star text-success"></i>',
        "4,0" => '<i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                                 <i class="far fa-star text-success"></i><i class="far fa-star text-success"></i',
        "2,2" => ' <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                              <i class="far fa-star text-success"></i>',
        "3,1" => ' <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                                 <i class="far fa-star text-success"></i><i class="far fa-star text-success"></i>',
        "3,0" => ' <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i>
                                <i class="far fa-star text-success"></i>',
        "1,2" => ' <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i>',
        "2,1" => '<i class="fas fa-futbol text-success" aria-hidden="true"></i> 
                                  <i class="far fa-star text-success"></i> <i class="far fa-star text-success"></i>',
        "2,0" => '<i class="fas fa-futbol text-success" aria-hidden="true"></i> <i class="fas fa-futbol text-success" aria-hidden="true"></i> 
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
        

        $manager->flush();
    }
}
