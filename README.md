# App Groupomania : réseau social interne

Réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues, avec la possibilité d'écrire des
posts, pouvant contenir une image, et pouvant être liké par les utilisateurs.

### Technologies utilisées ###

Le backend de l'aplication consiste en une base de données SQL liée à une application express. En ce qui concerne le frontend, celui-ci a été réalisé grâce
au framework React.

### Installation du backend ###

Une fois le code github cloné, lancer `npm install` ou `yarn install` depuis le dossier backend du projet afin d'installer les dépendances listées dans le fichier package.json. Pour ce qui est de la base de donnée SQL, le véritable fichier .env possédant les variables nécessaires à sa connection n'est pas disponible ici pour des raisons de sécurité. Pour la faire fonctionner, il vous suffit de renommer le fichier `.env.exemple` en `.env` et de remplir les variables avec les configurations de votre propre base SQL (en ce qui concerne son architecture, vous trouverez un fichier SQL importable dans le projet github). Toujours dans le fichier `.env`, vous pouvez également choisir une Token_key sécurisée pour votre projet.
