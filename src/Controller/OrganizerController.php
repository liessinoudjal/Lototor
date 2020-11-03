<?php

namespace App\Controller;

use App\Entity\Association;
use App\Form\OrganizerType;
use App\Lototo\Manager\AssociationApiManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/organizer")
 */
class OrganizerController extends AbstractController
{
    /**
     * @Route("/account", name="organizer-account")
     */
    public function account()
    {
        $organizer = $this->getUser();
        return $this->render('organizer/account.html.twig', [
            'organizer' => $organizer,
            "canOrganize" =>$organizer->canOrganize()
        ]);
    }

     /**
     * @Route("/ajaxAddAsso", name="organizer_ajax_add_association", methods={"POST"})
     */
    public function ajaxAddAssociation(Request $request, AssociationApiManager $associationApiManager){
 
        if($request->isXmlHttpRequest()){
                 $associationApiManager->handleRequestForAjaxResponse($request);
             
                return $this->json([
                    "status"=> $associationApiManager->getStatusCode(),
                    "statusText" => $associationApiManager->getMessage(),
                    "etablissement" => $associationApiManager->getEtablissement()
                ]);
        }
    }
    /**
     * @Route("/addAssociation", name="add_association", methods={"POST"}, options = { "expose" = true })
     */
    public function addAssociation(Request $request, AssociationApiManager $associationApiManager, EntityManagerInterface $em){
        $etablissement = json_decode($request->getContent(), true);
        $associationApiManager->addAssociationToOrganizer($this->getUser(),$etablissement);
        
        $this->addFlash(
            'success',
            'Ajout réussi !'
        );

        return $this->json([
            "status"=> $associationApiManager->getStatusCode(),
            "statusText" => $associationApiManager->getMessage(),
            "etablissement" => $associationApiManager->getEtablissement()
        ]);

    }

    /**
     * @Route("/deleteAsso/{id}", name="organizer_association_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Association $association): Response
    {
        if ($this->isCsrfTokenValid('delete'.$association->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($association);
            $entityManager->flush();
            $this->addFlash(
                'success',
                'Supprssion réussie !'
            );
        }

        return $this->redirectToRoute('organizer-account');
    }

    /**
     *@Route("/formEdit", name="organizer_render_form_edit", options = { "expose" = true })
     */
    public function formEdit( Request $request){
        //on rend le formulaire pour la modal
        if($request->isXmlHttpRequest()){
            /**@var Organizer $organizer */
            $organizer = $this->getUser();
            $form = $this->createForm(OrganizerType::class, $organizer);
            // dd($this->renderView("organizer/form/_edit_organizer.html.twig", ["form" => $form->createView()]));
            return $this->json( $this->renderView("organizer/form/_edit_organizer.html.twig", ["form" => $form->createView()]));
        }
    }
}
