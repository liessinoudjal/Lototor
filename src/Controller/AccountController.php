<?php

namespace App\Controller;

use App\Entity\Association;
use App\Form\ResetPasswordType;
use App\Form\UserType;
use App\Lototo\Manager\AssociationApiManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

/**
 * @Route("/mon_compte")
 */
class AccountController extends AbstractController
{
    /**
     * @Route("/", name="account")
     */
    public function account()
    {
        $user = $this->getUser();
     
        return $this->render('account/index.html.twig', [
            'user' => $user
        ]);
    }

     /**
     * @Route("/ajaxAddAsso", name="account_ajax_add_association", methods={"POST"})
     * @Security("is_granted('ROLE_ADMIN') or is_granted('ROLE_ORGANIZER')")
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
     * @Route("/addAssociation", name="account_add_association", methods={"POST"}, options = { "expose" = true })
     * @Security("is_granted('ROLE_ADMIN') or is_granted('ROLE_ORGANIZER')")
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
     * @Security("is_granted('ROLE_ADMIN') or is_granted('ROLE_ORGANIZER')")
     */
    public function delete(Request $request, Association $association, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$association->getId(), $request->request->get('_token'))) {
            $entityManager->remove($association);
            $entityManager->flush();
            $this->addFlash(
                'success',
                'Suppréssion réussie !'
            );
        }

        return $this->redirectToRoute('account');
    }

    /**
     *@Route("/formEdit", name="account_render_form_edit", options = { "expose" = true })
     */
    public function formEdit( Request $request, EntityManagerInterface $em){

        /**@var User $organizer */
        $user = $this->getUser();
        $form = $this->createForm(UserType::class, $user, [
            'action' => $this->generateUrl('account_render_form_edit'),
            'method' => 'post',
        ]);
        //on rend le formulaire pour la modal
        if($request->isXmlHttpRequest()){
            
            // dd($this->renderView("account/form/_edit_organizer.html.twig", ["form" => $form->createView()]));
            return $this->json( $this->renderView("account/form/_edit_organizer.html.twig", ["form" => $form->createView()]));
        }

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $em->persist($user);
            $em->flush();
            $this->addFlash(
                'success',
                'Infos personnelles enregistrées!'
            );
        }

        return $this->redirectToRoute('account');
    }
    /**
     * @Route("/resetPassword", name="account_reset_password", options = { "expose" = true })
     */
    public function resetPassword(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder){

        $user = $this->getUser();

    	$form = $this->createForm(ResetPasswordType::class, $user, [
            'action' => $this->generateUrl('account_reset_password'),
            'method' => 'post',
        ]);

        //on rend le formulaire pour la modal
        if($request->isXmlHttpRequest()){
            
            // dd($this->renderView("account/form/_reset_password.html.twig", ["form" => $form->createView()]));
            return $this->json( $this->renderView("account/form/_reset_password.html.twig", ["form" => $form->createView()]));
        }
    	$form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // dd($request->request);
            $oldPassword = $form->get('oldPassword')->getData();
            $newPasssword = $form->get('newPassword')->getData();
            // Si l'ancien mot de passe est bon
            if ($passwordEncoder->isPasswordValid($user, $oldPassword)) {
                $newEncodedPassword = $passwordEncoder->encodePassword($user,  $newPasssword);
                $user->setPassword($newEncodedPassword);
                $em->persist($user);
                $em->flush();
                $this->addFlash('success', 'Votre mot de passe à bien été changé !');
            } else {
                $this->addFlash('danger', 'Ancien mot de passe incorrecte !');
            }
        }else{
            $this->addFlash('danger', "Votre Nouveau mot de passe est incorrecte");
        }
    	return $this->redirectToRoute("account");
    }
}
