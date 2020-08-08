<?php
namespace App\Exception;

use Exception;

class WrongCountNumberException extends Exception{
    public function __construct(int $nombreNumeroParGrille, int $nbNumerosEntre)
    {
        $this->message = "La grille doit contenir {$nombreNumeroParGrille} numeros. Vous en avez rentré {$nbNumerosEntre}.";
    }
}