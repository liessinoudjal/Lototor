<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201024175357 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE loto_event ADD organizer_id INT NOT NULL');
        $this->addSql('ALTER TABLE loto_event ADD CONSTRAINT FK_FE3B2603876C4DDA FOREIGN KEY (organizer_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_FE3B2603876C4DDA ON loto_event (organizer_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE loto_event DROP FOREIGN KEY FK_FE3B2603876C4DDA');
        $this->addSql('DROP INDEX IDX_FE3B2603876C4DDA ON loto_event');
        $this->addSql('ALTER TABLE loto_event DROP organizer_id');
    }
}
