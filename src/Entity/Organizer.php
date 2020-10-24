<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\OrganizerRepository")
 */
class Organizer extends User
{
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\LotoEvent", mappedBy="organizer")
     */
    private $LotoEvents;

    public function __construct()
    {
        $this->LotoEvents = new ArrayCollection();
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_ORGANIZER';

        return array_unique($roles);
    }

    /**
     * @return Collection|LotoEvent[]
     */
    public function getLotoEvents(): Collection
    {
        return $this->LotoEvents;
    }

    public function addLotoEvent(LotoEvent $lotoEvent): self
    {
        if (!$this->LotoEvents->contains($lotoEvent)) {
            $this->LotoEvents[] = $lotoEvent;
            $lotoEvent->setOrganizer($this);
        }

        return $this;
    }

    public function removeLotoEvent(LotoEvent $lotoEvent): self
    {
        if ($this->LotoEvents->contains($lotoEvent)) {
            $this->LotoEvents->removeElement($lotoEvent);
            // set the owning side to null (unless already changed)
            if ($lotoEvent->getOrganizer() === $this) {
                $lotoEvent->setOrganizer(null);
            }
        }

        return $this;
    }
}
