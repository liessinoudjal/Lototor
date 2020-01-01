<?php

namespace App\Repository;

use App\Entity\Stat;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Stat|null find($id, $lockMode = null, $lockVersion = null)
 * @method Stat|null findOneBy(array $criteria, array $orderBy = null)
 * @method Stat[]    findAll()
 * @method Stat[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Stat::class);
    }

     /**
      * @return int[] Returns an array of hits
      */
    
    public function findHits(): array
    {
        $result = $this->createQueryBuilder('s')
            ->select('COUNT(s.numero) AS hit')
            ->groupBy('s.numero')
            ->orderBy('s.numero', 'ASC')
            ->getQuery()
            ->getResult()
        ;
        return array_map(function($hit){
               return $hit['hit'];
        }, $result);
    }
    

    /*
    public function findOneBySomeField($value): ?Stat
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
