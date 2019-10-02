<?php

namespace App\Repository;

use App\Entity\Combinaison;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Combinaison|null find($id, $lockMode = null, $lockVersion = null)
 * @method Combinaison|null findOneBy(array $criteria, array $orderBy = null)
 * @method Combinaison[]    findAll()
 * @method Combinaison[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CombinaisonRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Combinaison::class);
    }

    // /**
    //  * @return Combinaison[] Returns an array of Combinaison objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Combinaison
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
