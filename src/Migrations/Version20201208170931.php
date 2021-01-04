<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201208170931 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE loto_event DROP INDEX IDX_FE3B2603F5B7AF75, ADD UNIQUE INDEX UNIQ_FE3B2603F5B7AF75 (address_id)');
        $this->addSql('ALTER TABLE loto_event ADD is_live_event TINYINT(1) DEFAULT \'0\' NOT NULL, DROP type');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE loto_event DROP INDEX UNIQ_FE3B2603F5B7AF75, ADD INDEX IDX_FE3B2603F5B7AF75 (address_id)');
        $this->addSql('ALTER TABLE loto_event ADD type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP is_live_event');
    }
}
