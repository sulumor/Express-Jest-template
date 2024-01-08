# Template Serveur Node avec Express

Avec tests JEST et SUPERTEST

## Description

Architecture afin de commencer tous projet de serveur avec Express en ESM.   
Mise en place des fichiers de tests pour JEST et SURPERTEST.  
Linter : ESLINT sous AIRBnB + utilisation de double quotes

## Commencer

### Mise en place

Depuis le répositorie, NE PAS le cloner mais plutôt sélectionner "Use this template" en haut à droite. 

### Installation
```bash
  npm install
```
Ne pas oublier de créer un fichier .env à la racine du projet (cf. .env.example)


## Aide

Si vous êtes utilisateur de Windows, vous devez installer CROSS ENV
```bash
  npm install --save-dev cross-env
```
Il permet de faciliter la lecture des environnement NODE dans le script.

Vous devez ensuite modifier le script test comme cela:
```bash
  "test": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest",
```

## Author

Romuald Patfoort alias Sulumor

