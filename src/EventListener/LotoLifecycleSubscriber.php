<?php
namespace App\EventListener;

use App\Entity\LotoEventAbstract;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\ORM\Events;
;

use Symfony\Component\Security\Core\Security ;

class LotoLifecycleSubscriber implements EventSubscriber
{
    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }
    // this method can only return the event names; you cannot define a
    // custom method name to execute when each event triggers
    public function getSubscribedEvents()
    {
        return [
            Events::postPersist,
            Events::prePersist,
            Events::postRemove,
            Events::postUpdate,
        ];
    }

    // callback methods must be called exactly like the events they listen to;
    // they receive an argument of type LifecycleEventArgs, which gives you access
    // to both the entity object of the event and the entity manager itself
    public function postPersist(LifecycleEventArgs $args)
    {
        return;
    }
    public function prePersist(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();
        
        if (!$entity instanceof LotoEventAbstract) {
            return;
        }
        $user = $this->security->getUser();

        $entity->setOrganizer($user)
        ->setCreateAt(new \DateTime());
    }

    public function postRemove(LifecycleEventArgs $args)
    {
        return;
    }

    public function postUpdate(LifecycleEventArgs $args)
    {
        return;
    }
}