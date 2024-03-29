<?php

namespace App\Repository;

use App\Entity\Possesion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Possesion>
 *
 * @method Possesion|null find($id, $lockMode = null, $lockVersion = null)
 * @method Possesion|null findOneBy(array $criteria, array $orderBy = null)
 * @method Possesion[]    findAll()
 * @method Possesion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PossesionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Possesion::class);
    }

//    /**
//     * @return Possesion[] Returns an array of Possesion objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Possesion
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
