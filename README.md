<!-- @format -->

# App Groupomania : réseau social interne

Réseau social interne pour les employés de Groupomania, un groupe fictif spécialisé dans la grande distribution . Le but de cet outil est de faciliter les interactions entre collègues, avec la possibilité d'écrire des
posts, pouvant contenir une image, et pouvant être liké par les utilisateurs.

### Technologies utilisées

Le backend de l'aplication consiste en une base de données SQL liée à une application express. En ce qui concerne le frontend, celui-ci a été réalisé grâce
au framework React.

### Installation du backend

Une fois le code github cloné, lancer `npm install` ou `yarn install` depuis le dossier `server` du projet afin d'installer les dépendances listées dans le fichier package.json. Pour ce qui est de la base de donnée SQL, le véritable fichier .env possédant les variables nécessaires à sa connection n'est pas disponible ici pour des raisons de sécurité. 

Pour la faire fonctionner, il vous suffit de renommer le fichier `.env.exemple` en `.env` et de remplir les variables avec les configurations de votre propre base SQL (en ce qui concerne son architecture, vous trouverez un fichier SQL importable, présent dans le dossier server. Assurez-vous seulement de ne pas déjà avoir de base de données nomée 'groupomania'. Un faux compte admin y est déjà créé pour tester les différentes fonctionnalités nécessitant ce rôle. Son identifiant est 'pierre.simon@gmail.com' et son mot de passe 'pierreS'). 
Toujours dans le fichier `.env`, vous pouvez également choisir une Token_key sécurisée pour votre projet.

Une fois ces étapes réalisées, le lancement du server se fera avec la commande `nodemon server`. Si tout s'est bien passé, les messages "Listening on port 5000" et "connected to the DB" s'afficheront dans votre console.

### Installation du frontend

Pour installer l'application react, rendez-vous dans le dossier `client` et lancer `npm install` ou `yarn install` pour installer les dépendances. Ensuite, la commande `npm start` ou `yarn run start` vous permettra de lancer l'application.

### (Notes)

Ce projet a été réalisé avec l'utilisation d'une configuration prettier pour formater le code. La présence d'un commentaire `/**@format*/` en première ligne d'un fichier indique que celui-ci en a profité.
