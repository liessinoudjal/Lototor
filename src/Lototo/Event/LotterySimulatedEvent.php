<?php
namespace App\Lototo\Event;

use Symfony\Contracts\EventDispatcher\Event;

/**
 * The order.placed event is dispatched each time an order is created
 * in the system.
 */
class LotterySimulatedEvent extends Event implements LototorEventInterface
{
    public const NAME = 'lottery.simulated';

    protected $message;

    public function __construct(string $loteryName)
    {
        $this->message = "Une simulation $loteryName a été effectuée.";
    }
    public function getMessage()
    {
        return $this->message;
    }
}