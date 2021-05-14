## SimpleCrudApp
A simple CRUD App connected to a database.  
It can:
1. Read from the database using the `GET` method.
2. Write to the database using the `POST` method.
3. Update records in the database using the `PUT` method.
4. Delete records from the database using the `DELETE` method.
  
It is hosted on Heroku with the url below:

###### DEMO URL
https://tito-simple-crud.herokuapp.com

### Environment Variables
MONGO_URI -- `<Database-URI>`

### Routes
Data stored on the database follow the 'intern' model and records can be obtained from routes under **`'/interns'`**.

#### GET `'/interns'`
Fetches all intern records in the database.  
Example: https://tito-simple-crud.herokuapp.com/interns

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

