# Social Media App Backend Server

**Social Media App Backend Server** is a backend API built with **Node.js** to power a Twitter-like social media platform. It supports core social media features such as creating tweets, liking posts, and adding comments, with structured endpoints for user authentication and content interaction.

## Features
- **User Authentication**: Signup and login with username and password.
- **Post Management**: Create, retrieve, and manage posts.
- **Engagement**: Like and comment on posts.


## Endpoints

Here’s a list of all available endpoints, detailing the API routes and their functionalities.
Assuming NODE_ENV = 'development' and port chosen is 5000
### User Authentication
- **User Login**  
  `POST` [http://localhost:5000/user/login](http://localhost:5000/user/login)  
  Logs in a user with existing credentials.

- **User Signup**  
  `POST` [http://localhost:5000/user/signup](http://localhost:5000/user/signup)  
  Registers a new user with `name`, `username`, and `password`.

### Post Operations
- **Upload Post**  
  `POST` [http://localhost:5000/post/upload](http://localhost:5000/post/upload)  
  Creates a new post.

- **Like a Post**  
  `GET` [http://localhost:5000/post/like/:id](http://localhost:5000/post/like/:id)  
  Likes a post by its `id`.

- **Comment on a Post**  
  `POST` [http://localhost:5000/post/comment/:id](http://localhost:5000/post/comment/:id)  
  Adds a comment to a post by its `id`.

### Content Retrieval
- **Get All Posts**  
  `GET` [http://localhost:5000/post/allposts](http://localhost:5000/post/allposts)  
  Retrieves all posts, sorted in reverse chronological order.

- **Get a Specific Post**  
  `GET` [http://localhost:5000/post/:id](http://localhost:5000/post/:id)  
  Fetches a single post by its `id`.

- **Get All Posts by a User**  
  `GET` [http://localhost:5000/post/user/all](http://localhost:5000/post/user/all)  
  Retrieves all posts created by a specific user.

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository
2. Create your .env file inside config and fill all the variables as in .env.example
3. Run `npm install` to install all the dependencies
