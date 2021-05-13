## SimpleCrudApp
A simple CRUD App that can connect to a database and also read, write, update and delete from it.

## DEMO URL
https://tito-simple-crud-app.herokuapp.com

## Routes
Data stored on the database follow the 'intern' model and records can be obtained from routes under '/interns'.

## POST '/create':
creates a new user record. Takes the following parameters:

{
    name: String,
    email: Sting,
    country: String
}
Example: https://tito-simple-crud-app.herokuapp.com/interns/create

## GET '/':
Fetches all user records in the database
Example: https://tito-simple-crud-app.herokuapp.com/interns

## GET '/:id':
Fetches a single user whose id is appended to the url
Example: https://tito-simple-crud-app.herokuapp.com/interns/609496d99627180004b1a66b

## PUT '/:id':
Updates the record of a single user whose id is appended to the url.
Takes any one of the following parameters

{
    name: String,
    email: Sting,
    country: String
}
Example: https://tito-simple-crud-app.herokuapp.com/interns/609496d99627180004b1a66b

## DELETE '/:id':
Deletes the record of a single user whose id is appended to the url
Example: https://tito-simple-crud-app.herokuapp.com/interns/609496d99627180004b1a66b
