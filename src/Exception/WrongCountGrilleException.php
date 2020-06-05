<?php
namespace App\Exception;

use Exception;

class WrongCountGrilleException extends Exception{
    public function __construct(int $nbGrilleEntre)
    {
        $this->message = "La plaque doit contenir entre 1 et 6 grille. Vous en avez rentré {$nbGrilleEntre}.";
    }
}