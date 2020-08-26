<?php
namespace App\Lototo\LotoQuine;

class GrilleQuineFactory {
    const EMPTY_TEMPLATE_GRILLE_QUINE=[
        [
            ["","x","","x","","x","x","","x"],
            ["x","","x","","x","x","","x",""],
            ["","","","x","x","","x","x","x"]
        ],
        [
            ["x","x","","x","x","x","","",""],
            ["","","x","x","","x","x","","x"],
            ["","x","x","","x","","x","x",""]
        ],
        [
            ["x","x","","x","","","x","","x"],
            ["","","x","","x","","x","x","x"],
            ["x","","x","x","","x","","x",""]
        ],
        [
            ["","x","x","","x","x","","","x"],
            ["x","","x","","","x","x","x",""],
            ["x","x","","x","x","","","","x"]
        ],
        [
            ["x","x","","x","","x","x","",""],
            ["x","","","x","x","","","x","x"],
            ["","x","x","","","","x","x","x"]
        ],
        [
            ["","","x","x","","x","x","x",""],
            ["x","x","","","x","x","","","x"],
            ["","x","x","","x","","","x","x"]
        ],
    ];
    

    static function getEmptyGrillesQuines(int $nbGrilleQuine){
        $templateShuffled = static::shuffle_assoc();
    
        $emptyGrillesQuines = [];
        for($i = 0; $i < $nbGrilleQuine; $i++){
            $emptyGrillesQuines[] = static::createEmptyGrilleQuineFromTemplate($templateShuffled[$i]);
        }
        return $emptyGrillesQuines;
    }

    static function createEmptyGrilleQuineFromTemplate(array $emptyTemplate){
        return new GrilleQuine($emptyTemplate);
    }
    static function shuffle_assoc():array {
        $emptyTemplate = self::EMPTY_TEMPLATE_GRILLE_QUINE;
        $keys = array_keys($emptyTemplate);

        shuffle($keys);

        foreach($keys as $key) {
            $new[] = self::EMPTY_TEMPLATE_GRILLE_QUINE[$key];
        }

        return $new;
    }
}