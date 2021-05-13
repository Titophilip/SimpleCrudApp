## SimpleCrudApp
A simple CRUD App that can connect to a database and also read, write, update and delete from it.
It is also hosted on Heroku with the url below:

###### DEMO URL
https://tito-simple-crud.herokuapp.com

#### Routes
Data stored on the database follow the 'intern' model and records can be obtained from routes under '/interns'.
#### GET '/':
Fetches all user records in the database

#### GET '/:id':
Fetches a single user whose id is appended to the url

#### POST '/create':
creates a new user record. Takes the following parameters:

{
    name: String,
    email: Sting,
    country: String
}

#### PUT '/:id':
Updates the record of a single user whose id is appended to the url.
Takes any one of the following parameters

{
    name: String,
    email: Sting,
    country: String
}
## DELETE '/:id':
Deletes the record of a single user whose id is appended to the url

