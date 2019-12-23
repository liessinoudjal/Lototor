<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StatRepository")
 */
class Stat
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $numero;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $typeNumero;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lotteryType;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumero(): ?int
    {
        return $this->numero;
    }

    public function setNumero(int $numero): self
    {
        $this->numero = $numero;

        return $this;
    }

    public function getTypeNumero(): ?string
    {
        return $this->typeNumero;
    }

    public function setTypeNumero(string $typeNumero): self
    {
        $this->typeNumero = $typeNumero;

        return $this;
    }

    public function getLotteryType(): ?string
    {
        return $this->lotteryType;
    }

    public function setLotteryType(string $lotteryType): self
    {
        $this->lotteryType = $lotteryType;

        return $this;
    }
}
