<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('getGrilleTable', [$this, 'getGrilleTable']),
        ];
    }

    public function getGrilleTable(array $grille)
    {
    
        $table= '<table>';
            foreach($grille as $rowKey=> $line){
                $table.='<tr>';
                foreach($line as $columnKey => $case){
                    $value = !empty($case)  ? $case:  '&nbsp; &nbsp;';
                    $class =  !empty($case)  ? 'filled' :  'empty';
                    $table.='<td  class="'.$class.'">'.$value .'</td>';
                }
                $table.='</tr>';
            }
            
                for($c=0; $c < 9 ; $c++){
                   
                }
         
            /* 
            $table.='<tr>';
            for($c=9; $c < 18 ; $c++){
                
                $value = !empty($grille[$c])  ? $grille[$c] :  '&nbsp; &nbsp;';
                $class =  !empty($grille[$c])  ? 'filled' :  'empty';
                $table.='<td  class="'.$class.'">'.$value .'</td>';
            }
            $table.='</tr>';

            $table.='<tr>';
            for($c=18; $c < 27 ; $c++){
                $value = !empty($grille[$c])  ? $grille[$c]:  '&nbsp; &nbsp;';
                $class =  !empty($grille[$c])  ? 'filled' :  'empty';
                $table.='<td  class="'.$class.'">'.$value .'</td>';
            }
            $table.='</tr>'; */

        $table.= '</table>';
        return $table;
    }
}