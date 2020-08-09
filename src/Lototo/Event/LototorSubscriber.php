<?php
namespace App\Lototo\Event;

use App\Lototo\Event\LotoQuinePdfGeneratedEvent;
use App\Lototo\Notification\SmsFreeNotificator;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class LototorSubscriber implements EventSubscriberInterface
{
    private $smsNotificator;

    public function __construct(SmsFreeNotificator $smsNotificator )
    {
        $this->smsNotificator = $smsNotificator;
    }
    public static function getSubscribedEvents()
    {
        return [
            LotoQuinePdfGeneratedEvent::NAME => 'notify',
        ];
    }


    public function notify(LotoQuinePdfGeneratedEvent $event)
    {
        $this->smsNotificator->notify($event->getMessage());
    }
}