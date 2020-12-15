<?php

namespace App\Form;

use App\Entity\Association;
use App\Entity\LotoEvent;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraint as Assert;

class LotoEventType extends AbstractType
{

    private $security;
    public function __construct(Security $security)
    {
       $this->security = $security; 
    }
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        // dd($options);
        $builder
            ->add('title', TextType::class,[
                "label" => "Titre de votre loto"
            ])
            ->add('dateEvent', DateTimeType::class, [
                "label" => "Date de votre loto",
                "widget" => "single_text",
                // "html5" => false,
                'format' => 'dd-MM-yyyy HH:ii',
                'input' => 'datetime',
                "attr" => ["class" => "single_flatpickr"]
            ])
            ->add('rules', TextareaType::class, [
                "label" => "Présentation, règlements et tarifs",
                "attr" => ["placeholder" => "Décrivez votre loto, Vous pouvez y mettre votre réglement ",
                            "rows" => 7
                    ]
            ])
            ->add('url', TextType::class, [
                "label" => "Lien pour suivre votre direct",
                "required" => false
            ])
            ->add("association", EntityType::class, [
                "label" => "Association",
                "class" => Association::class,
                "mapped" => false,
                'choice_label' => 'name',
                'multiple' => false,
                'expanded' => false,
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                    ->where('a.organizer ='. $this->security->getUser()->getId());
                },
                "help" => "Nom de l'association organisatrice"
            ])
            ->add('uploadedImage', FileType::class,[
                // "mapped" => false,
                "label" => "Affiche publicitaire de votre loto (PDF, PNG ou JPG)",
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'application/pdf',
                            'application/x-pdf',
                            'image/jpeg',
                            'image/png'

                        ],
                        'mimeTypesMessage' => 'Please upload a valid PDF document',
                    ])
                ],
                "required" => false
            ])
            ->add('address', AddressType::class,[
                "help" => "Addresse où se déroule le loto",
                "required" => false,
                'constraints' => new \Symfony\Component\Validator\Constraints\Valid(),
            ])
            ->add("isLiveEvent", CheckboxType::class,[
               "label" => "Loto Live (sur internet).",
               "attr" => ["class" => "custom-control-input"],
               "label_attr" => ["class" => "custom-control-label"],
               "row_attr" => ["class" => "custom-control custom-switch"],
               "required" => false,
               "help" => "Ne sélectionner que si vous organisez un loto en direct sur internet"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => LotoEvent::class,
            'validation_groups' => function (FormInterface $form) {
                $data = $form->getData();
                if ($data->getIsLiveEvent()) {
                    return [LotoEvent::LIVE_GROUP];
                }
    
                return [LotoEvent::INDOOR_GROUP];
            },
            
        ]);
    }
}
