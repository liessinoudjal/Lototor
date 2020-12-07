<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(fields={"email"}, message="Cet Email existe déjà.")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    protected $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    protected $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $username;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    protected $birthday;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    protected $phone;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Address", cascade={"persist", "remove"})
     */
    protected $address;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $firstName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $lastName;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\LotoEvent", mappedBy="organizer")
     */
    private $lotoEvents;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\IndoorLotoEvent", mappedBy="organizer")
     */
    // private $indoorLotoEvents;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Association", mappedBy="organizer", cascade={"persist", "remove"})
     */
    private $associations;

    public function __construct()
    {
        $this->lotoEvents = new ArrayCollection();
        $this->indoorLotoEvents = new ArrayCollection();
        $this->associations = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->getUsername();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getBirthday(): ?\DateTimeInterface
    {
        return $this->birthday;
    }

    public function setBirthday(?\DateTimeInterface $birthday): self
    {
        $this->birthday = $birthday;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getAddress(): ?Address
    {
        return $this->address;
    }

    public function setAddress(?Address $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(?string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(?string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getFullName(): string
    {
        return $this->firstName ." ". $this->lastName;
    }
    
    

    /**
     * @return Collection|LotoEvent[]
     */
    public function getLotoEvents(): Collection
    {
        return $this->lotoEvents;
    }

    public function addLotoEvent(LotoEvent $lotoEvent): self
    {
        if (!$this->lotoEvents->contains($lotoEvent)) {
            $this->LotoEvents[] = $lotoEvent;
            $lotoEvent->setOrganizer($this);
        }

        return $this;
    }

    public function removeLotoEvent(LotoEvent $lotoEvent): self
    {
        if ($this->lotoEvents->contains($lotoEvent)) {
            $this->lotoEvents->removeElement($lotoEvent);
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
        return ($this->associations->count() > 0 && $this->isOrganizer() ) ? true : false;
    }

    public function isOrganizer():bool{
       return  in_array("ROLE_ORGANIZER", $this->roles);
    }
}
