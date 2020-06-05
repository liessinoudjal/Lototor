<?php
namespace App\Lototo\LotoQuine;

class PlaqueQuineFactory {

    static function createPlaqueQuine(int $nbGrilleQuine){
        return (new PlaqueQuine())->fillPlaque($nbGrilleQuine);
    }
}