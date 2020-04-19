# Angular 9 tutorial

Source of this tutorial: https://www.udemy.com/course/the-complete-guide-to-angular-2/

*Note:* this tutorial is updated at every Angular release, so even if you see Angular v2 in the title, at the moment of writing this document the course was updated to Angular v9.

## Useful links
**Angular: ** https://angular.io/
**Angular-cli: ** https://cli.angular.io/

## Prerequisites
Nodejs
Angularcli
Boostrap

## Lesson-1
$ ng new my-first-app
$ ng serve

## Lesson-3
(dentro la cartella di progetto)
$ npm install --save bootstrap@3

Modificare il file angualar.json aggiungendo alla sezione styles del file .css di bootstrap "node_modules/boostrap/dist/css/bootstrap.min.css"

Un componente può essere creato tramite il comando CLI ng generate component <nome_componente>

## Assignment 1
1. Create two new Components (manually or with CLI): WarningAlert and SuccessAlert
2. Output them beneath each other in the AppComponent
3. Output a warning or success message in the COmponents
4. Style the Components appropriately (maybe some red/green text?)

Use external or internal templates and styles!

Feel free to create more components, nest them into each other or play around with different types of selectors!

## Troubleshooting

### Updating NodeJS:

Go to nodejs.org and download the latest version - uninstall (all) installed versions on your machine first.

### Updating npm:

Run [sudo] npm install -g npm  (sudo  is only required on Mac/ Linux)

### Updating the CLI

[sudo] npm uninstall -g angular-cli @angular/cli 

npm cache verify 

[sudo] npm install -g @angular/cli 

### Here are some common issues & solutions:

    Creation of a new project takes forever (longer than 3 minutes)
    That happens on Windows from time to time => Try running the command line as administrator

    You get an EADDR error (Address already in use)
    You might already have another ng serve process running - make sure to quit that or use ng serve --port ANOTHERPORT  to serve your project on a new port

    My changes are not reflected in the browser (App is not compiling)
    Check if the window running ng serve  displays an error. If that's not the case, make sure you're using the latest CLI version and try restarting your CLI


