## SimpleCrudApp
A simple CRUD App that can connect to a database and also read, write, update and delete from it.
It is also hosted on Heroku with the url below:

###### DEMO URL
https://tito-simple-crud.herokuapp.com

### Routes
Data stored on the database follow the 'intern' model and records can be obtained from routes under '/interns'.

#### GET `'/interns'`
Fetches all intern records in the database

#### GET `'/interns/:id'`
Fetches a single intern whose id is appended to the url.  
Example: https://tito-simple-crud.herokuapp.com/interns/609e7cf29bc17d0004893e05

#### POST `'/interns'`
Creates a new intern record.  
It takes the following parameters:  
  
```
{  
    name: String,  
    email: String,  
    country: String  
}
```  

#### PUT `'/interns/:id'`
Updates the record of a single intern whose id is appended to the url.  
It takes any of the following parameters and updates it.  
  
```
{  
    name: String,  
    email: String,  
    country: String  
}
```
#### DELETE `'/interns/:id'`
Deletes the record of a single intern whose id is appended to the url.

