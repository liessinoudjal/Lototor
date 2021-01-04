<?php
namespace App\EventListener;
use App\Manager\EventManager;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\HttpKernel\Event\FilterControllerEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Twig\Environment;
use Twig\Extension\CoreExtension;

/**
 * Class TimeZoneListener
 *
 * @package App\EventListener
 */
class TimeZoneSubscriber implements EventSubscriberInterface
{
    /** @var string */
    private $timezone = "Europe/Paris";

    

    /**
     * @return array|null
     */
    public static function getSubscribedEvents(): ?array
    {
        return [
            KernelEvents::CONTROLLER => 'setTimeZone',
        ];
    }

    public function setTimeZone(ControllerEvent $filterControllerEvent)
    {
        date_default_timezone_set($this->timezone);
    }
}