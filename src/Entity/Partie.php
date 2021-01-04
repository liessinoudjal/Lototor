<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PartieRepository")
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
     * @ORM\ManyToOne(targetEntity="App\Entity\LotoEvent", inversedBy="parties")
     * @ORM\JoinColumn(nullable=false)
     */
    private $liveLotoEvent;

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

    public function getLiveLotoEvent(): ?LotoEvent
    {
        return $this->liveLotoEvent;
    }

    public function setLiveLotoEvent(?LotoEvent $liveLotoEvent): self
    {
        $this->liveLotoEvent = $liveLotoEvent;

        return $this;
    }
}
