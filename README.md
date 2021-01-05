# Welcome to Petful!

Petful is a full-stack web application that allows you to adopt a pet. 

The technologies used for this application were: React, PostgreSql, Express, and Node.

# API Endpoints

## 'People' Endpoints

### GET '/'
This endpoint returns the list of people

### GET '/people_queue'
Returns the queued list of people

### POST '/'
This endpoint allows you to add a user's name to the queued list.

## 'Pets' Endpoints

### GET '/'
Grabs the data for the pets at the top of the stack

### DELETE '/'
Removes the selected pet from the stack by type. 

# Express Boilerplate!

This is a boilerplate project used for starting new projects!

## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
