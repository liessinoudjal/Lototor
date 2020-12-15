<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * @ORM\Entity(repositoryClass="App\Repository\LotoEventRepository")
 */
class LotoEvent extends LotoEventAbstract
{
    
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;


    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Partie", mappedBy="liveLotoEvent", orphanRemoval=true)
     *
     */
    protected $parties;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * Assert\NotBlank(groups= {"loto.create.live"}, message="Vous devez mettre un lien pour la difusion de votre direct")
     * 
     */
    protected $url;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Address", cascade={"persist", "remove"})
     * @Assert\Valid
     */
    private $address;

    /**
     * @ORM\Column(type="boolean", options={"default": false})
     */
    private $isLiveEvent;

    public function getAddress(): ?Address
    {
        return $this->address;
    }

    public function setAddress(?Address $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function __construct()
    {
        $this->parties = new ArrayCollection();
        $this->isLiveEvent = false;
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

    

    /**
     * Get $isLiveEvent
     *
     * @return  Bool
     */ 
    public function getIsLiveEvent():bool
    {
        return $this->isLiveEvent;
    }

    /**
     * Set $isLiveEvent
     *
     * @param  Bool  $isLiveEvent  $isLiveEvent
     *
     * @return  self
     */ 
    public function setIsLiveEvent(Bool $isLiveEvent)
    {
        $this->isLiveEvent = $isLiveEvent;

        return $this;
    }
}
