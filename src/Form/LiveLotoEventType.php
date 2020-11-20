<?php

namespace App\Form;

use App\Entity\Association;
use App\Entity\LiveLotoEvent;
use App\Repository\AssociationRepository;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Core\Security;

class LiveLotoEventType extends AbstractType
{

    private $security;
    public function __construct(Security $security)
    {
       $this->security = $security; 
    }
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class,[
                "label" => "Titre de votre loto"
            ])
            ->add('dateEvent', DateTimeType::class, [
                "label" => "Date de votre loto"
            ])
            ->add('rules', TextareaType::class, [
                "label" => "Présentation",
                "attr" => ["placeholder" => "Décrivez votre loto, Vous pouvez y mettre votre réglement "]
            ])
            ->add('url')
            ->add("association", EntityType::class, [
                "class" => Association::class,
                "mapped" => false,
                'choice_label' => 'name',
                'multiple' => false,
                'expanded' => false,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                    ->where('a.organizer ='. $this->security->getUser()->getId());
                },
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => LiveLotoEvent::class,
        ]);
    }
}
