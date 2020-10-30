<?php

namespace App\Controller;

use App\Entity\Association;
use App\Form\AssociationType;
use App\Lototo\Api\SireneApi;
use App\Repository\AssociationRepository;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

/**
 * @Route("/organizer/association")
 */
class AssociationController extends AbstractController
{
    /**
     * @Route("/", name="association_index", methods={"GET"})
     */
    public function index(AssociationRepository $associationRepository): Response
    {
        /**@var Organizer $user */
        $user = $this->getUser();
        return $this->render('association/index.html.twig', [
            'associations' => $associationRepository->findBy(["organizer" => $user->getId()]),
        ]);
    }

    /**
     * @Route("/new", name="association_new", methods={"GET","POST"})
     */
    public function new(Request $request, SireneApi $api): Response
    {   
        if($request->isXmlHttpRequest()){
            $siret = $request->request->get("siret");
          
                $response = $api->getEtablissement($siret);
                if(200 === $statusCode = $response->getStatusCode()){
                    $message="ok";
                }elseif(404 === $statusCode){
                    $message = "Le siret ne correspond à aucune Association";
                }else{
                    $message = "Une erreur s'est produite. Veuillez verifier votre siret";
                }
                return $this->json([
                    "statusCode"=> $statusCode,
                    "message" => $message
                ]);
        }
     
        $association = new Association();
        $form = $this->createForm(AssociationType::class, $association);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $association->setOrganizer($this->getUser());
            $entityManager->persist($association);
            $entityManager->flush();

            return $this->redirectToRoute('organizer-account');
        }

        return $this->render('association/new.html.twig', [
            'association' => $association,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="association_show", methods={"GET"})
     */
    public function show(Association $association): Response
    {
        return $this->render('association/show.html.twig', [
            'association' => $association,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="association_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Association $association): Response
    {
        $form = $this->createForm(AssociationType::class, $association);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('association_index');
        }

        return $this->render('association/edit.html.twig', [
            'association' => $association,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="association_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Association $association): Response
    {
        if ($this->isCsrfTokenValid('delete'.$association->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($association);
            $entityManager->flush();
        }

        return $this->redirectToRoute('association_index');
    }
}
