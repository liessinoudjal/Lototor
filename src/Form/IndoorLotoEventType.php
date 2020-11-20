<?php

namespace App\Form;

use App\Entity\IndoorLotoEvent;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class IndoorLotoEventType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('dateEvent')
            ->add('rules')

            ->add('address', AddressType::class,[
                "label" => "Addresse où se déroule le loto"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => IndoorLotoEvent::class,
        ]);
    }
}
