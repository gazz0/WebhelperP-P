# Project title

## Project subtitle(optional)

## Version 1.0.0

## Project description

## Backend

### Backend requirements

Commands:

1. Install Python 3.8
2. Install Virtual Env

> pip install virtualenv

- create your env (for example in root folder)

> virtualenv setup-venv

- activate your env

> .\setup-venv\Scripts\activate

- then install required packages from requirement.txt in root folder:

> pip install -r requirements.txt
for more help: <https://www.youtube.com/watch?v=tDj8DjV8odM>

- to save the new added packages in the list:

> pip freeze > requirements.txt

- deactivate environment:

> deactivate

## Database

Install MySQL latest version

create new database with name "webpp"

make sure that your database running on port 3306 with user: "root" and password: "root"

Important: check your database config settings in ./app-config/settings.py if you do not use docker. Database port must be changed to 127.0.0.1

## RUN Backend Server

Open Command Line and enter:

> python manage.py makemigrations

migrate your changes:

> python manage.py migrate

run server:

> python manage.py runserver

## Docker for Backend

If you use docker for backend open command line and enter:

> docker-compose build

then run database:

> docker-compose up

then create database schema:

> docker-compose exec web python manage.py makemigrations

migrate schema to database:

> docker-compose exec web python manage.py migrate

run backend:

> docker-compose up web python manage.py runserver

to stop and remove images:

> docker stop $(docker ps -a -q)
> docker rm $(docker ps -a -q)  
> docker rmi $(docker images -q)

### Swagger Docs Issue

    The staticfiles template is deprecated in Django 2.2 and removed in Django 3.
    We need to override the rest_framework_swagger/index.html.
    Go to site-packages/rest_framework_swagger/templates/rest_framework_swagger
    Copy the rest_framework_swagger folder and paste it in your own templates folder
    Then replace the line 2 with {% load static %} in index.html

## Frontend

### Frontend requirements

1. Install node.js and npm.
2. Install Angular 9 cli.

- then install all required packages from package.json in client folder:

> npm install

- start frontend:

> npm start
