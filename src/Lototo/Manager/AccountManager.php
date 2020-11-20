<?php
namespace App\Lototo\Manager;

use Twig\Environment;

class AccountManager{

    /**@var Environnement $twig */
    private $twig;
    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    public function renderResetPasswordForm($form){
       return $this->twig->render("account/form/_reset_password.html.twig", ["form" => $form->createView()]);
    }

    public function renderEditOrganiserForm($form){
       return $this->twig->render("account/form/_edit_organizer.html.twig", ["form" => $form->createView()]);
    }
}