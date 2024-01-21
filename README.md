# MOD-18-NoSQL-Challenge-Social-Network-API
To build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM.

This API allows users to create and manage a social network with features like creating profiles, creating posts, commenting on posts, and following other users. The API is built using NoSQL technologies and JavaScript.

## Table of Contents
​
* [User Story](#user_story)
* [Acceptance Criteria](#acceptance_criteria)
* [Requirements](#requirements)
* [Getting Started](#getting_started)
* [Packages](#packages)
* [API Endpoints](#api_endpoints)
* [User Endpoints](#user_endpoints)
* [Post Endpoints](#post_endpoints)
* [Comment Endpoints](#comment_endpoints)
* [Follow Endpoints](#follow_endpoints)
* [Links](#links)


## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria
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

## Requirements
- Node.js
- MongoDB

## Getting Started

- Clone the repository to your local machine.
- Run `npm install` to install the required dependencies.
- Start your MongoDB server.
- Run `npm start` to start the API server.

## Packages

* Express.js https://www.npmjs.com/package/express
* Mongoose ODM https://www.npmjs.com/package/mongoose to connect to MongoDB database

## API Endpoints

The API has the following endpoints:

## User Endpoints

- `POST /users`: Creates a new user
- `GET /users/:id`: Gets a user by ID
- `PUT /users/:id`: Updates a user by ID
- `DELETE /users/:id`: Deletes a user by ID

## Post Endpoints

- `POST /posts`: Creates a new post
- `GET /posts`: Gets all posts
- `GET /posts/:id`: Gets a post by ID
- `PUT /posts/:id`: Updates a post by ID
- `DELETE /posts/:id`: Deletes a post by ID

## Comment Endpoints

- `POST /comments`: Creates a new comment
- `GET /comments`: Gets all comments
- `GET /comments/:id`: Gets a comment by ID
- `PUT /comments/:id`: Updates a comment by ID
- `DELETE /comments/:id`: Deletes a comment by ID

## Follow Endpoints

- `POST /follow`: Follows another user
- `DELETE /follow/:id`: Unfollows a user

## Links

- Github: 
- Video Walkthrough: 