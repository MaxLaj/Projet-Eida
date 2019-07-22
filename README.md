# Angular8Tasklist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Note for TEXEIRA Marcello
----------------------- ________________________________________________-----------------------
-----------------------|           NOTE FOR TEIXEIRA Marcello            |-----------------------
-----------------------|        READ FOR UNDERSTAND DEVELOPPMENT        |-----------------------
-----------------------|               LAJONY Maximilien                |-----------------------
-----------------------|________________________________________________|-----------------------

I put comments in the code to explain how i developp this application
If you have any question feel free to ask me.

To launch the application : 
    - launch a cmd terminal
    - go to the root of the folder application and write 'cd \angular8-tasklist'
    - write 'ng serve'
    - launch another cmd terminal
    - same, go to the root of the root
    - write 'json-server --watch src/data/db.json --port 4000' to launch the Json server to have access to datas and manipulate     them
    - open a navigator web and write in the url 'localhost:4200/tasks

Note : I don't know why sometimes, the server shut down. I think the server doesn't take the capacity load

Goals :
- Use Angular 8, NodeJs, Bootstrap [ok]
- Add, Update, Delete  [ok]
- Realized with routing [ok]


In futur :
To improve the application here is what can be done :
- Ask for sure to delete an information
- Create a route for 404 not found
- Controller to not create the same ID (done easily with a data base)
- Increment the task.id automatically (done easily with a data base)
- Change Json by SQL solution
- Triggers to refresh (i already write some lines to make it but can be improve)


