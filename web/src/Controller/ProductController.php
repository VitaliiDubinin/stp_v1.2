<?php

namespace App\Controller;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_main')]
class ProductController extends AbstractController
{
    #[Route('/products/all', name: "get_all_products", methods: ['GET'])]
    public function getAllProducts(EntityManagerInterface $em)
    {
        $products = $em->getRepository(Product::class)->findAll();
        $response = [];
        foreach ($products as $product) {
            $response[] = array(
                'id' => $product->getId(),
                'user_id' => $product->getUserId(),
                'product_name' => $product->getProductName(),
                'price' => $product->getPrice(),
                'description' => $product->getDescription(),
                'image' => $product->getImage(),
                'quantity' => $product->getQuantity(),
                'unit' => $product->getUnit(),
            );
        }
        return $this->json($response);
    }



    #[Route('/products/find/{id}', name: "find_a_product", methods: ['GET'])]
    public function findProduct(int $id, EntityManagerInterface $em)
    {
        $product = $em->getRepository(Product::class)->find($id);

        if (!$product) {
            return $this->json('No product was found with the id of ' . $id, 404);
        }

        $data = [
            'id' => $product->getId(),
            'product_name' => $product->getProductName(),
            'price' => $product->getPrice(),
            'user_id' => $product->getUserId(),
            'description' => $product->getDescription(),
            'image' => $product->getImage(),
            'quantity' => $product->getQuantity(),
            'unit' => $product->getUnit(),
        ];
        return $this->json($data);
    }

 
}
