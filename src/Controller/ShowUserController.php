<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ShowUserController extends AbstractController
{
    #[Route('/showuser', name: 'app_show_user')]
    public function index(): Response
    {
        return $this->render('show_user/index.html.twig', [
            'controller_name' => 'ShowUserController',
        ]);
    }
}
