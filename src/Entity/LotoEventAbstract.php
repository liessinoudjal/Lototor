<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;


class LotoEventAbstract
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $title;

    /**
     * @ORM\Column(type="datetime")
     */
    protected $dateEvent;

    /**
     * @ORM\Column(type="datetime")
     */
    protected $createAt;

    /**
     * @ORM\Column(type="text")
     */
    protected $rules;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="lotoEvents")
     * @ORM\JoinColumn(name="organizer_id", referencedColumnName="id",nullable=false)
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
}
