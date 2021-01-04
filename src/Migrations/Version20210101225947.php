<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210101225947 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE loto_event ADD association_id INT NOT NULL');
        $this->addSql('ALTER TABLE loto_event ADD CONSTRAINT FK_FE3B2603EFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
        $this->addSql('CREATE INDEX IDX_FE3B2603EFB9C8A5 ON loto_event (association_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE loto_event DROP FOREIGN KEY FK_FE3B2603EFB9C8A5');
        $this->addSql('DROP INDEX IDX_FE3B2603EFB9C8A5 ON loto_event');
        $this->addSql('ALTER TABLE loto_event DROP association_id');
    }
}
