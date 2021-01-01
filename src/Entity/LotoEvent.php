<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * @ORM\Entity(repositoryClass="App\Repository\LotoEventRepository")
 * @ORM\EntityListeners({"App\EntityListener\LotoEventListener"})
 */
class LotoEvent
{
    
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;


    const LIVE_GROUP = "loto.create.live";
    const INDOOR_GROUP = "loto.create.indoor";
    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank( message="Veuillez donner un titre à votre loto")
     */
    protected $title;

    /**
     * @ORM\Column(type="datetime")
     * @Assert\NotBlank( message="Sélectionnez une date et une heure pour votre événement")
     */
    protected $dateEvent;

    /**
     * @ORM\Column(type="datetime")
     *
     */
    protected $createAt;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank( message="veuillez remplir une description de votre événement.")
     */
    protected $rules;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="lotoEvents")
     * @ORM\JoinColumn(name="organizer_id", referencedColumnName="id",nullable=false)
     * 
     */
    protected $organizer;

    /**
     * @ORM\Column(type="string", length= 255, nullable= true)
     */
    protected $image;

    /**
     * @var UploadedFile $uploadedImage
     */
    protected $uploadedImage;
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Partie", mappedBy="liveLotoEvent", orphanRemoval=true)
     *
     */
    protected $parties;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     */
    protected $url;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Address", cascade={"persist", "remove"})
     */
    private $address;

    /**
     * @ORM\Column(type="boolean", options={"default": false})
     */
    private $isLiveEvent;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $countPlayerMax;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Association")
     * @ORM\JoinColumn(nullable=false)
     */
    private $association;

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

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDateEvent(): ?\DateTimeInterface
    {
        return $this->dateEvent;
    }

    public function setDateEvent(\DateTimeInterface $dateEvent): self
    {
        $this->dateEvent = $dateEvent;

        return $this;
    }

    public function getCreateAt(): ?\DateTimeInterface
    {
        return $this->createAt;
    }

    public function setCreateAt(\DateTimeInterface $createAt): self
    {
        $this->createAt = $createAt;

        return $this;
    }

    public function getRules(): ?string
    {
        return $this->rules;
    }

    public function setRules(string $rules): self
    {
        $this->rules = $rules;

        return $this;
    }

    public function getOrganizer(): ?User
    {
        return $this->organizer;
    }

    public function setOrganizer(?User $organizer): self
    {
        $this->organizer = $organizer;

        return $this;
    }

    

    /**
     * Get the value of image
     */ 
    public function getImage(): ?string
    {
        return $this->image;
    }

    /**
     * Set the value of image
     *
     * @return  self
     */ 
    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get $uploadedImage
     *
     * @return  UploadedFile
     */ 
    public function getUploadedImage()
    {
        return $this->uploadedImage;
    }

    /**
     * Set $uploadedImage
     *
     * @param  UploadedFile  $uploadedImage  $uploadedImage
     *
     * @return  self
     */ 
    public function setUploadedImage(UploadedFile $uploadedImage)
    {
        $this->uploadedImage = $uploadedImage;

        return $this;
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

    public function getCountPlayerMax(): ?int
    {
        return $this->countPlayerMax;
    }

    public function setCountPlayerMax(?int $countPlayerMax): self
    {
        $this->countPlayerMax = $countPlayerMax;

        return $this;
    }

    public function isOwner(int $id){
        return $this->organizer->getId() === $id;
    }

    public function getAssociation(): ?Association
    {
        return $this->association;
    }

    public function setAssociation(?Association $association): self
    {
        $this->association = $association;

        return $this;
    }
}
