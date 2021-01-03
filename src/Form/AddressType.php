<?php

namespace App\Form;

use App\Entity\Address;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddressType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('street', TextType::class, [
                "label" => "Adresse",
                "attr" => ["placeholder" => "2 rue du loto chanceux"]
            ])
            ->add('postalCode', TextType::class,[
                "label" => "Code postal"
            ])
            ->add('city', TextType::class,[
                "label" => "Ville"
            ])
            ->add('country', TextType::class,[
                "label" => "Pays"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Address::class,
        ]);
    }
}
