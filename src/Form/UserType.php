<?php

namespace App\Form;

use App\Entity\User;
use App\Form\DataTransformer\DateTimeTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstName', TextType::class,[
                "label" =>"Prénom"
            ])
            ->add('lastName', TextType::class,[
                "label" => "Nom"
            ])
            ->add('birthday', DateTimeType::class,[
                // "choice_translation_domain" => true,
                "label" => "Date de naissance",
                "help" => "Votre date de naissance est necéssaire pour savoir si vous êtes majeur",
                "widget" =>"single_text",
                "input" => "datetime",
                'format' => 'dd-MM-yyyy',
                "attr" => ["class" => "birthday_flatpickr"]
            ])
            ->add('phone', TextType::class, [
                "label" => "Téléphone",
                "required" => false
            ])
            ->add('address', AddressType::class,[
                "label" => "Addresse"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
