<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201025201904 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE association ADD organizer_id INT NOT NULL');
        $this->addSql('ALTER TABLE association ADD CONSTRAINT FK_FD8521CC876C4DDA FOREIGN KEY (organizer_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_FD8521CC876C4DDA ON association (organizer_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE association DROP FOREIGN KEY FK_FD8521CC876C4DDA');
        $this->addSql('DROP INDEX IDX_FD8521CC876C4DDA ON association');
        $this->addSql('ALTER TABLE association DROP organizer_id');
    }
}
