## SimpleCrudApp
A simple CRUD App that can connect to a database and also read, write, update and delete from it.
It is also hosted on Heroku with the url below:

###### DEMO URL
https://tito-simple-crud.herokuapp.com

#### USAGE
1. Clone this repository.
2. cd into project root directory
3. Run "npm install" to install all dependencies(you must have node installed).
4. Run "npm app.js" to start the server and connect the database.
5. Open up Postman and test out the Endpoints.

### Routes
Data stored on the database follow the 'intern' model and records can be obtained from routes under '/interns'.

#### GET  '/interns':
Fetches all intern records in the database

#### GET  '/interns:id':
Fetches a single intern whose id is appended to the url.  
e.g https://tito-simple-crud.herokuapp.com/intenrs/609e7cf29bc17d0004893e05"

#### POST  '/interns':
Creates a new intern record.  
It takes the following parameters:  
  
{  
    name: String,  
    email: String,  
    country: String  
}  

#### PUT  '/interns:id':
Updates the record of a single intern whose id is appended to the url.  
It takes any of the following parameters and updates it.  
  
{  
    name: String,  
    email: String,  
    country: String  
}
#### DELETE  '/interns:id':
Deletes the record of a single intern whose id is appended to the url.

