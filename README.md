# Symfony-MAMP

Symfony-MAMP is a set of docker images that include Starter-Kit for a MAMP stack ([Symfony6](https://symfony.com/), [macOS](https://www.apple.com/macos/monterey/), [Apache](https://www.apache.org/), [MySQL](https://www.mysql.com/), [PHP8](https://www.php.net/) and [phpMyAdmin](https://www.phpmyadmin.net/)) all in one handy package.

---

## Using the image

## Installation

```shell
git clone Symfony-MAMP
cd Symfony-MAMP
cp .env.example .env && cp web/.env.example web/.env
docker-compose up --build
cd web
npm install
npm run watch
php bin/console doctrine:migrations:migrate
```
go to cli in your docker dasboard: 
```shell
cd web
php bin/console doctrine:migrations:migrate
```

- Symfony 6 will run on [http://localhost:8507](http://localhost:8507)
- phpMyAdmin will run on [http://localhost:9582](http://localhost:9582)

# Use for reference

Use solely for reference material only
