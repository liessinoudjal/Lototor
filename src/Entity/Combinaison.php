<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CombinaisonRepository")
 */
class Combinaison
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private $combinaison;

    /**
     * @ORM\Column(type="float")
     */
    private $gainMoyen;

    /**
     * @ORM\Column(type="text")
     */
    private $icon;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCombinaison(): ?string
    {
        return $this->combinaison;
    }

    public function setCombinaison(string $combinaison): self
    {
        $this->combinaison = $combinaison;

        return $this;
    }

    public function getGainMoyen(): ?float
    {
        return $this->gainMoyen;
    }

    public function setGainMoyen(float $gainMoyen): self
    {
        $this->gainMoyen = $gainMoyen;

        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }
}
