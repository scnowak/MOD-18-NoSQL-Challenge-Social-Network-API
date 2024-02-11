# MOD-18-NoSQL-Challenge-Social-Network-API
To build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM.

This API allows users to create and manage a social network with features like creating profiles, creating posts, commenting on posts, and following other users. The API is built using NoSQL technologies and JavaScript.

## Table of Contents
​
* [Installation](#installation)
* [Packages](#packages)
* [Screenshots](#screenshots)
* [Demo](#demo)
* [Endpoints](#endpoints)
* [Contact](#contact)


### User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```


## Installation

- Clone the repository to your local machine.
- Run `npm install` to install the required dependencies.
- Start your MongoDB server.
- Run `npm start` to start the API server.

## Packages

* Express.js https://www.npmjs.com/package/express
* Mongoose ODM https://www.npmjs.com/package/mongoose to connect to MongoDB database
* Javascript
* Node.js
* MongoDB
* Visual Studio Code


## Screenshots

![DELETE single user by id](/assets/DELETE_single_user_by_id.png)

![GET all users](/assets/GET_all_users.png)

![GET all thoughts](/assets/GET_all_thoughts.png)

![GET single thought](/assets/GET_single_thought.png)

![GET single user by id](/assets/GET_single_user_by_id.png)

![POST new user](/assets/POST_new_user.png)

![PUT update user by id](/assets/PUT_update_user_by_id.png)


## Demo

These two walkthrough videos shows POST, GET, PUT, and DELETE routes required through Insomnia testing. 


<video src="MOD18SocNetAPI.mp4" controls title="Insomnia demo"></video>

<video src="MOD18%20DELETE%20reaction%20by%20reaction%20id.mp4" controls title="Delete reaction by reaction id"></video>



## Endpoints

The API has the following endpoints:

### User Endpoints

- `POST /users`: Creates a new user
- `GET /users/:id`: Gets a user by ID
- `PUT /users/:id`: Updates a user by ID
- `DELETE /users/:id`: Deletes a user by ID

### Post Endpoints

- `POST /posts`: Creates a new post
- `GET /posts`: Gets all posts
- `GET /posts/:id`: Gets a post by ID
- `PUT /posts/:id`: Updates a post by ID
- `DELETE /posts/:id`: Deletes a post by ID

### Comment Endpoints

- `POST /comments`: Creates a new comment
- `GET /comments`: Gets all comments
- `GET /comments/:id`: Gets a comment by ID
- `PUT /comments/:id`: Updates a comment by ID
- `DELETE /comments/:id`: Deletes a comment by ID

### Follow Endpoints

- `POST /follow`: Follows another user
- `DELETE /follow/:id`: Unfollows a user

## Contact

This app was created by Shan Nowak.
I received fantastic support and help from my tutor Bobbi Tarkany.

Contact:

GITHUB: https://github.com/scnowak

EMAIL:  SHAN.NOWAK93@GMAIL.COM

