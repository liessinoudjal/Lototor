<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AddressRepository")
 */
class Address
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank( groups = {"loto.create.indoor"}, message = "Veuillez renseigner votre rue.")
     */
    private $street;

    /**
     * @ORM\Column(type="string", length=5)
     * @Assert\NotBlank(groups={ "loto.create.indoor"}, message = "Veuillez renseigner votre code postal")
     */
    private $postalCode;

    /**
     * @ORM\Column(type="string", length=50)
     * @Assert\NotBlank(groups={"loto.create.indoor"}, message = "Veuillez renseigner votre ville")
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Assert\NotBlank(groups={ "loto.create.indoor"}, message ="Veuillez renseigner votre pays.")
     */
    private $country;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function getPostalCode(): ?string
    {
        return $this->postalCode;
    }

    public function setPostalCode(string $postalCode): self
    {
        $this->postalCode = $postalCode;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(?string $country): self
    {
        $this->country = $country;

        return $this;
    }
}
