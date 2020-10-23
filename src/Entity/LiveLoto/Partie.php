<?php

namespace App\Entity\LiveLoto;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\LiveLoto\PartieRepository")
 */
class Partie
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\LiveLoto\LotoEvent", inversedBy="parties")
     * @ORM\JoinColumn(nullable=false)
     */
    private $lotoEvent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getLotoEvent(): ?LotoEvent
    {
        return $this->lotoEvent;
    }

    public function setLotoEvent(?LotoEvent $lotoEvent): self
    {
        $this->lotoEvent = $lotoEvent;

        return $this;
    }
}
