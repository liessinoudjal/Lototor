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

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Association", mappedBy="organizer", cascade={"persist", "remove"})
     */
    private $associations;

    public function __construct()
    {
        $this->LotoEvents = new ArrayCollection();
        $this->associations = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->getUsername();
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

    /**
     * @return Collection|Association[]
     */
    public function getAssociations(): Collection
    {
        return $this->associations;
    }

    public function addAssociation(Association $association): self
    {
        if (!$this->associations->contains($association)) {
            $this->associations[] = $association;
            $association->setOrganizer($this);
        }

        return $this;
    }

    public function removeAssociation(Association $association): self
    {
        if ($this->associations->contains($association)) {
            $this->associations->removeElement($association);
            // set the owning side to null (unless already changed)
            if ($association->getOrganizer() === $this) {
                $association->setOrganizer(null);
            }
        }

        return $this;
    }

    /**
     * if organizer is authorized to publish lotoEvent
     * @return bool
     */
    public function canOrganize(): bool
    {
        return $this->associations->count() > 0 ? true : false;
    }
}
