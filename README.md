## simple to-do list server

CRUD implementation using express with mongoDB

### Routes

####

#### ` GET /todos`

return a list of all todos

#### `POST /todos`

create a new todo, request should contain a JSON request body object following this schema:
``` 
{
    "description": string,
    "completed": boolean
}
```

#### `GET /todos/:id`

get a specific todo by ID

#### `DELETE /todos/:id`

delete a todo by ID

#### `PATCH /todos/:id`

update a todo ,request should contain a JSON request body object following this schema, or at least one of the allowed fields:
``` 
{
    "description": string,
    "completed": boolean
}
```

## getting started

### setup

1. go to `https://www.mongodb.com/products/compass` and download mongodb compass
2. create a new TodoList collection
3. make sure it is running on `localhost:27017`
4. go to project directory and run `npm install`
5. create some todos using  `POST /todos` route calls


### run locally

`npm run dev`
