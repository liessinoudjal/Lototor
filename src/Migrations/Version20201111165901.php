<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201111165901 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE partie DROP FOREIGN KEY FK_59B1F3D16D21197');
        $this->addSql('CREATE TABLE indoor_loto_event (id INT AUTO_INCREMENT NOT NULL, indoor_organizer_id INT DEFAULT NULL, address_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, date_event DATETIME NOT NULL, create_at DATETIME NOT NULL, rules LONGTEXT NOT NULL, INDEX IDX_C771358AE993164C (indoor_organizer_id), UNIQUE INDEX UNIQ_C771358AF5B7AF75 (address_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE live_loto_event (id INT AUTO_INCREMENT NOT NULL, live_organizer_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, date_event DATETIME NOT NULL, create_at DATETIME NOT NULL, rules LONGTEXT NOT NULL, INDEX IDX_AE84405F35B3CB50 (live_organizer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE indoor_loto_event ADD CONSTRAINT FK_C771358AE993164C FOREIGN KEY (indoor_organizer_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE indoor_loto_event ADD CONSTRAINT FK_C771358AF5B7AF75 FOREIGN KEY (address_id) REFERENCES address (id)');
        $this->addSql('ALTER TABLE live_loto_event ADD CONSTRAINT FK_AE84405F35B3CB50 FOREIGN KEY (live_organizer_id) REFERENCES user (id)');
        $this->addSql('DROP TABLE loto_event');
        $this->addSql('DROP INDEX IDX_59B1F3D16D21197 ON partie');
        $this->addSql('ALTER TABLE partie CHANGE loto_event_id live_loto_event_id INT NOT NULL');
        $this->addSql('ALTER TABLE partie ADD CONSTRAINT FK_59B1F3D1B0DA42F FOREIGN KEY (live_loto_event_id) REFERENCES live_loto_event (id)');
        $this->addSql('CREATE INDEX IDX_59B1F3D1B0DA42F ON partie (live_loto_event_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE partie DROP FOREIGN KEY FK_59B1F3D1B0DA42F');
        $this->addSql('CREATE TABLE loto_event (id INT AUTO_INCREMENT NOT NULL, organizer_id INT NOT NULL, title VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, date_event DATETIME NOT NULL, create_at DATETIME NOT NULL, rules LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_FE3B2603876C4DDA (organizer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE loto_event ADD CONSTRAINT FK_FE3B2603876C4DDA FOREIGN KEY (organizer_id) REFERENCES user (id)');
        $this->addSql('DROP TABLE indoor_loto_event');
        $this->addSql('DROP TABLE live_loto_event');
        $this->addSql('DROP INDEX IDX_59B1F3D1B0DA42F ON partie');
        $this->addSql('ALTER TABLE partie CHANGE live_loto_event_id loto_event_id INT NOT NULL');
        $this->addSql('ALTER TABLE partie ADD CONSTRAINT FK_59B1F3D16D21197 FOREIGN KEY (loto_event_id) REFERENCES loto_event (id)');
        $this->addSql('CREATE INDEX IDX_59B1F3D16D21197 ON partie (loto_event_id)');
    }
}
