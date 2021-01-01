<?php
namespace App\EntityListener;

use App\Entity\LotoEvent;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\Security\Core\Security ;

class LotoEventListener {

    private $uploadAbsoluteUploadImageDir;
    private $uploadImageDir;
    private $security;

    public function __construct(string $uploadImageDir,string $uploadAbsoluteUploadImageDir, Security $security) {
        $this->uploadImageDir = $uploadImageDir;
        $this->uploadAbsoluteUploadImageDir = $uploadAbsoluteUploadImageDir;
        $this->security = $security;
    }

    public function prePersist (LotoEvent $lotoEvent){
        $this->upload($lotoEvent);
        $lotoEvent->setCreateAt(new \DateTime);
        $lotoEvent->setOrganizer($this->security->getUser());
    }

    public function preUpdate (LotoEvent $lotoEvent){
        $this->upload($lotoEvent);
    }

    public function upload(LotoEvent $lotoEvent){
        // dd($lotoEvent);
          /** @var UploadedFile $imageFile */
          $imageFile = $lotoEvent->getUploadedImage();

          // this condition is needed because the 'brochure' field is not required
          // so the PDF file must be processed only when a file is uploaded
          if ($imageFile) {
              $originalFilename = pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME);
              // this is needed to safely include the file name as part of the URL
              $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
              $newFilename = $safeFilename.'-'.uniqid().'.'.$imageFile->guessExtension();

              // Move the file to the directory where brochures are stored
              try {
                  $imageFile->move(
                      $this->uploadAbsoluteUploadImageDir,
                      $newFilename
                  );
              } catch (FileException $e) {
                  // ... handle exception if something happens during file upload
              }

              // updates the 'imageFilename' property to store the PDF file name
              // instead of its contents
              $lotoEvent->setImage($newFilename);
          }

          // ... persist the $product variable or any other work

         
    }
}