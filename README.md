# Project title

## Project subtitle(optional)

## Version 1.0.0

## Project description

## Super User

- Login: admin
- Password: admin

## Backend

### Backend requirements

Commands:

1. Install Python 3.8
2. Install Virtual Env

> pip install virtualenv

- in root folder

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

### Database requiremnets

- coming soon... (at the moment we are using simple database sqlite3)

## Frontend

### Frontend requirements

1. Install node.js and npm.
2. Install Angular 9 cli.

- then install all required packages from package.json in client folder:

> npm install

- start frontend:

> npm start

### Swagger Issue

    The staticfiles template is deprecated in Django 2.2 and removed in Django 3.
    We need to override the rest_framework_swagger/index.html.
    Go to site-packages/rest_framework_swagger/templates/rest_framework_swagger
    Copy the rest_framework_swagger folder and paste it in your own templates folder
    Then replace the line 2 with {% load static %} in index.html
    Hope it works !!