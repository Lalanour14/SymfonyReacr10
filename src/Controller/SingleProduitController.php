<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SingleProduitController extends AbstractController
{
    #[Route('/singleproduit', name: 'app_single_produit')]
    public function index(): Response
    {
        return $this->render('single_produit/index.html.twig', [ ]);

}
}