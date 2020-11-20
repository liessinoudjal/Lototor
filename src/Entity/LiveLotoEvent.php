<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\LiveLotoEventRepository")
 * @ORM\AssociationOverrides({
 *      @ORM\AssociationOverride(name="organizer", inversedBy="liveLotoEvents",
 *          joinColumns=@ORM\JoinColumn(
 *              name="live_organizer_id", referencedColumnName="id"
 *          )
 *      )
 * })
 * 
 */
class LiveLotoEvent extends LotoEventAbstract
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Partie", mappedBy="liveLotoEvent", orphanRemoval=true)
     */
    private $parties;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $url;

    

    public function __construct()
    {
        $this->parties = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Partie[]
     */
    public function getParties(): Collection
    {
        return $this->parties;
    }

    public function addParty(Partie $party): self
    {
        if (!$this->parties->contains($party)) {
            $this->parties[] = $party;
            $party->setLiveLotoEvent($this);
        }

        return $this;
    }

    public function removeParty(Partie $party): self
    {
        if ($this->parties->contains($party)) {
            $this->parties->removeElement($party);
            // set the owning side to null (unless already changed)
            if ($party->getLiveLotoEvent() === $this) {
                $party->setLiveLotoEvent(null);
            }
        }

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(?string $url): self
    {
        $this->url = $url;

        return $this;
    }

    
}
