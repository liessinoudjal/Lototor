<?php

namespace App\Repository;

use App\Entity\IndoorLotoEvent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method IndoorLotoEvent|null find($id, $lockMode = null, $lockVersion = null)
 * @method IndoorLotoEvent|null findOneBy(array $criteria, array $orderBy = null)
 * @method IndoorLotoEvent[]    findAll()
 * @method IndoorLotoEvent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IndoorLotoEventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, IndoorLotoEvent::class);
    }

    // /**
    //  * @return IndoorLotoEvent[] Returns an array of IndoorLotoEvent objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?IndoorLotoEvent
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
