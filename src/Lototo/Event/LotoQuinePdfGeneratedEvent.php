<?php
namespace App\Lototo\Event;

use Symfony\Contracts\EventDispatcher\Event;

/**
 * The order.placed event is dispatched each time an order is created
 * in the system.
 */
class LotoQuinePdfGeneratedEvent extends Event implements LototorEventInterface
{
    public const NAME = 'lotoquinepdf.generated';

    protected $message= "Pdf lotoquine générée !";

    public function getMessage()
    {
        return $this->message;
    }
}