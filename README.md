# Template Serveur Node avec Express

Avec tests JEST et SUPERTEST

## Description

Architecture afin de commencer tous projet de serveur avec Express en ESM.   
Mise en place des fichiers de tests pour JEST et SURPERTEST.  
Linter : ESLINT sous AIRBnB + utilisation de double quotes

## Commencer

### Installation
```bash
  npm install
```
Ne pas oublier de créer un fichier .env à la racine du projet (cf. .env.example)


## Aide

Cross env est mis en place afin de faciliter la lecture des environnement NODE dans le script (nécessaire pour les utilisateurs Windows).  
Si vous utiliser Mac ou Linux, vous pouvez le retirer des dépendances de dev et modifier le script test comme cela:
```bash
  "test": "NODE_OPTIONS=--experimental-vm-modules npx jest",
```

## Authors

Romuald Patfoort alias Sulumor

