# Farmers App

This app is the result of the final project for React22K course, team Kernel.

This app was a Nahomzoe's (@ github) idea.
scrum mastered by VitaliiDubini (@ github)

## Using the image

### Installation

```shell
git clone https://github.com/VitaliiDubinin/STP_Kernel.git
docker-compose up --build
cd web
npm install
npm install react-use-cart
npm i bootstrap
```

- phpMyAdmin will run on [http://localhost:9582]
- npm watch will run on [http://localhost:8507]

- go to your docker dasboard,
  enter in cli of phpMyAdmin:

```shell
cd web
php bin/console doctrine:migrations:migrate
```

- get back to Ide terminal:

```shell
npm run watch
```

if some of this features are not working, need reinstalling:

```shell
npm i firebase
composer require kreait/firebase-php
composer require symfony/notifier
```

# Use for reference

Use solely for reference material only. yes!
