<?php
namespace App\Lototo\LotoQuine\Pdf;

use App\Lototo\Event\LotoQuinePdfGeneratedEvent;
use App\Lototo\LotoQuine\PlaqueQuineFactory;
use App\Lototo\Notification\SmsFreeNotificator;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

use TCPDF;
use Twig\Environment;

require_once('config/tcpdf_config_alt.php');

class Pdf {

    private $pdf;
    private $twig;
    private  $plaquesQuines= [];
    private $eventDispatcher;
    public function __construct(Environment $twig, SmsFreeNotificator $smsFreeNotificator, EventDispatcherInterface $eventDispatcher)
    {
        $this->eventDispatcher = $eventDispatcher;
        $this->notificator = $smsFreeNotificator;
        $this->twig = $twig;
        $this->pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
        // set document information
        $this->pdf->SetCreator(PDF_CREATOR);
        $this->pdf->SetAuthor('Liess Inoudjal');
        $this->pdf->SetTitle('Lototor lotoquine');
        $this->pdf->SetSubject('Lototor - grilles loto quine à télécharger');
        $this->pdf->SetKeywords('lotoquine, PDF, loto');

        
    }

    public function execute(int $nbPlaque, $nbGrillePerPlaque){

        $this->setConfiguration();
        for($i=0; $i < $nbPlaque; $i++){
            $this->plaquesQuines[]= PlaqueQuineFactory::createPlaqueQuine($nbGrillePerPlaque);
        }

        foreach($this->plaquesQuines as $plaqueQuine){
            // add a page
            $this->pdf->AddPage();
            $this->setBackgroundImage();

            // MultiCell($w, $h, $txt, $border=0, $align='J', $fill=0, $ln=1, $x='', $y='', $reseth=true, $stretch=0, $ishtml=false, $autopadding=true, $maxh=0)
            $arrayPlaqueQuine = $plaqueQuine->getGrillesQuinesToArray();
            foreach($arrayPlaqueQuine as $key => $grille){
                $html=  $this->twig->render("loto_quine/plaque_quine.html.twig",["plaque"=>[$grille]]);
                //dd($html);
                if($key % 2 == 0){
                      $ln = 0;
                      $border = 0;
                }
                else{
                    $ln = 1;
                    $border = 0;
                }
                    

                $this->pdf->MultiCell(147, 5, $html, $border, 'C', false, $ln, '' ,'', true,0,true,false,50);
        
               
            }
            
            // reset pointer to the last page
            $this->pdf->lastPage();
        }
        //envoi du sms de notification
        $this->eventDispatcher->dispatch( new LotoQuinePdfGeneratedEvent(), LotoQuinePdfGeneratedEvent::NAME);
         //Close and output PDF document
        return  $this->pdf->Output('lotoquine_'.$nbPlaque.'_plaques.pdf', 'D');

    }

    public function setConfiguration(): self{
        // set default header data
        // $this->pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE.' 001', PDF_HEADER_STRING, array(0,64,255), array(0,64,128));
        // s$this->pdf->setFooterData(array(0,64,0), array(0,64,128));

        // set header and footer fonts
        // $this->pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
        // $this->pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

        // set default monospaced font
        $this->pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

        // set margins
        $this->pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
        $this->pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
        $this->pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

        // set auto page breaks
        $this->pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

        // set image scale factor
        $this->pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

        // set font
        $this->pdf->SetFont('dejavusans', 'B', 5, '', true);

        // remove default header/footer
         $this->pdf->setPrintHeader(false);
         $this->pdf->setPrintFooter(false);

        return $this;
     
    }
    public function getPlaqueQuines(){
        return $this->plaquesQuines;
    }

    private function setBackgroundImage(){
        $bMargin = $this->pdf->getBreakMargin();
        // get current auto-page-break mode
        $auto_page_break = $this->pdf->getAutoPageBreak();
        // disable auto-page-break
        $this->pdf->SetAutoPageBreak(false, 0);
        // set bacground image
        $img_file = K_PATH_IMAGES.'bg_pdf.png';
        $this->pdf->Image($img_file, 0, 0, 297, 210, '', '', '', false, 300, '', false, false, 0);
        // restore auto-page-break status
        $this->pdf->SetAutoPageBreak($auto_page_break, $bMargin);
        // set the starting point for the page content
        $this->pdf->setPageMark();
    }
}