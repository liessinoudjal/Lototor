<?php
namespace App\Repository;

use App\Entity\LotoCombinaison;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Combinaison|null find($id, $lockMode = null, $lockVersion = null)
 * @method Combinaison|null findOneBy(array $criteria, array $orderBy = null)
 * @method Combinaison[]    findAll()
 * @method Combinaison[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LotoCombinaisonRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LotoCombinaison::class);
    }

    // /**
    //  * @return Combinaison[] Returns an array of Combinaison objects
    //  */

    public function findAllLotoCombinaisons()
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.type = :val')
            ->setParameter('val', 'loto')
            ->orderBy('l.id', 'ASC')
           // ->setMaxResults(10)
            ->getQuery()
            //->getResult()
            ->getArrayResult()
        ;
    }


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
