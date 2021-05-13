## SimpleCrudApp
A simple CRUD App that can connect to a database and also read, write, update and delete from it.
It is also hosted on Heroku with the url below:

###### DEMO URL
https://tito-simple-crud.herokuapp.com

#### USAGE
1. Clone this repository.
2. cd into project root directory
3. Run npm install to install all dependencies(you must have node installed).
4. Run npm app.js to start the server and connect the database.
5. Open up Postman and then test out the Endpoints.

### Routes
Data stored on the database follow the 'intern' model and records can be obtained from routes under '/interns'.

#### GET '/':
Fetches all intern records in the database

#### GET '/:id':
Fetches a single intern whose id is appended to the url

#### POST '/create':
creates a new intern record. Takes the following parameters:

{
    name: String,
    email: Sting,
    country: String
}

#### PUT '/:id':
Updates the record of a single intern whose id is appended to the url.
Takes any one of the following parameters

{
    name: String,
    email: Sting,
    country: String
}
#### DELETE '/:id':
Deletes the record of a single intern whose id is appended to the url.

