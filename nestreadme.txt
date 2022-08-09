Install Nest CLI

npm install @nestjs/cli

Important Package to Install 
npm i --save-dev ts-node-dev
npm i rxjs
 
-----------------------

Setup New Project

nest new <project Name > or npx @nestjs/cli new <project name>

generate Module
npx @nestjs/cli generate module messages

generate controller

npx @nestjs/cli generate controller messages/messages --flat [ if --flat not mentioned then new folder created under the messages ]


Execute Project
npx ts-node-dev <main.ts>

clean npm cache
npm cache clean --force

Uninstall nest js
npm uninstall -g @nestjs/cli


---------------
Validator Class Install
npm install class-validator