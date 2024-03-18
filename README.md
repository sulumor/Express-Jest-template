# Template Serveur Node with Express

Architecture to start any server project in ESM with Express.

## Description

App Infrastructure : Express,  
Linter : ESLINT sous AIRBnB + utilisation de double quotes,  
BDD : POSTGRESQL avec PG,    
Tester : JEST et SUPERTEST,  
Datas validator : JOI,  
Logger: WINSTON et WINSTON DAILY ROTATE FILE,  
Security: CORS, HELMET, JWT, BCRYPT, EXPRESS-RATE-LIMIT,   
API doc : SWAGGER,    
Check commits: HUSKY,   
Template views: EJS 

## Begin

### Setting up

From the repository, DO NOT clone it but rather select "Use this template" at the top right. 

### Installation
```bash
  npm install
```
Do not forget to create a file . env at the root of the project (cf. .env.example)


## Help

If you are a Windows user, you must install CROSS ENV
```bash
  npm install --save-dev cross-env
```
It facilitates the reading of the NODE environment in the script.

You must then edit the test script like this:
```bash
  "test": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest",
```

## Authors

Romuald Patfoort alias Sulumor with help of Thomas Trehou-Lavediot

