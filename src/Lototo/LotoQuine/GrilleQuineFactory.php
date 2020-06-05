<?php
namespace App\Lototo\LotoQuine;

class GrilleQuineFactory {

    /**
     * fonction qui créé une grilleQuine en fonction des numeros;
     */
    static function CreateGrilleQuine(...$numeros):?GrilleQuine{
  
        return (new GrilleQuine())->fill(...$numeros);
    }
}