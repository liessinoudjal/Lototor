<?php

namespace App\Repository;

use App\Entity\LotoEvent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method LotoEvent|null find($id, $lockMode = null, $lockVersion = null)
 * @method LotoEvent|null findOneBy(array $criteria, array $orderBy = null)
 * @method LotoEvent[]    findAll()
 * @method LotoEvent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LotoEventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LotoEvent::class);
    }

    public function findAllNextQuery(int $userId= null){
        $query=  $this->createQueryBuilder('l')
        ->andWhere("l.dateEvent > CURRENT_TIMESTAMP()")
        ->andWhere("l.status = 1")
       ;
        if($userId != null){
            $query-> innerJoin('l.organizer','o', 'with', 'o.id = :userId')
            ->setParameter('userId', $userId)
            ->orderBy('l.dateEvent', 'DESC');
        }else{
            $query ->orderBy('l.dateEvent', 'ASC');
        }
        return $query->getQuery();
    }
    public function findAllNext(){
        return $this->createQueryBuilder('l')
        ->andWhere("l.dateEvent > CURRENT_TIMESTAMP()")
        ->andWhere("l.status = 1")
        ->getQuery()
        ->getResult();
    }
    // /**
    //  * @return LotoEvent[] Returns an array of LotoEvent objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?LotoEvent
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
