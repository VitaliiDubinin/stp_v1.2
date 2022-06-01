<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220601110545 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        // $this->addSql('CREATE TABLE login_user (id INT AUTO_INCREMENT NOT NULL, uuid VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_4BE15D0CD17F50A6 (uuid), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        // $this->addSql('CREATE TABLE product (id INT AUTO_INCREMENT NOT NULL, product_id INT NOT NULL, quantity INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        // $this->addSql('CREATE TABLE recipe (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, difficulty VARCHAR(255) NOT NULL, ingredients LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', instructions VARCHAR(255) NOT NULL, photo VARCHAR(255) DEFAULT NULL, recipe VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE login_user');
        $this->addSql('DROP TABLE product');
        $this->addSql('DROP TABLE recipe');
    }
}
