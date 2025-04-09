# TasksList Management System

## Description
This project is a Task Management System built with React for the frontend and js and Swagger API for the backend. The system allows users to manage tasks, including viewing, updating, adding, and deleting tasks. The system also includes a user authentication feature where users must log in before accessing the task management features. The user data is stored in a local JSON file, and the backend supports common HTTP methods such as GET, POST, PUT, and DELETE.

## Frontend 
TaskList: Displays a list of tasks fetched from the API.
TaskItem: Displays each individual task.
TaskForm: Used for adding new tasks.
LoginForm: Allows users to log in with their username and password.
useAuth: A custom hook to manage authentication logic and context.

## Backend
Authentication - using Middleware
## API Endpoints
# Tasks
GET /tasks: Fetches all tasks.
POST /tasks: Adds a new task.
PUT /tasks/:id: Updates an existing task.
DELETE /tasks/:id: Deletes a task.
# Authentication
POST /auth/login: Logs in an existing user.


## Technologies Used
- React: For building the user interface.
- Swagger: For API documentation and backend.
- Material-UI: For frontend styling.
- JSON: For storing task and user data.
- Axios: For making API requests to the backend.
- JWT: For user authentication.
- dotenv for environment variables


## Features
 - User Authentication- Implementing additional capabilities I added:
Users need to log in before they can access the task management system.
Login credentials are checked against the data stored in a local JSON file.
JWT is used for authenticating users and protecting API routes.

- Task Management
Users can view all tasks.
Users can add new tasks.
Users can edit or delete existing tasks.

- Responsive Design
The system is designed to be mobile-friendly and responsive using Material-UI.

- API Endpoints
GET /tasks: Fetch all tasks.
POST /tasks: Add a new task.
PUT /tasks/:id: Update a task.
DELETE /tasks/:id: Delete a task.
POST /auth/login: Log in with username and password.

## Prepare
1. Clone the repository:
git clone https://github.com/efratDadon/tasks-list-project
2. Install dependencies using `npm install`
3. Navigate to the server folder and install dependencies:
cd server
npm install
4. Run the backend server `node app.js`
5. Run the client side `npm start`
`

## Instructions to access the Swagger UI:
1. Navigate to the following URL in your browser: http://localhost:3000/api-docs/
2. Login to Get JWT Token
Before performing actions on tasks (GET, POST, PUT, DELETE), you need to log in and obtain a JWT Token
- Step 1: Send a POST request to /post/user with your username and password to receive the token.
The user should be one of the users stored in the jspn files, for example: 
{
  "username": "yael",
  "password": "password123"
}
3. In Swagger UI, you need to authorize the token to be able to make API calls.
Step 1: Click on the Authorize button 
Step 2: In the pop-up window, enter the token you received in the previous step in the "Value" field as follows:  Bearer your_jwt_token
Step 3: Click Authorize.
4. Make API reqests
After successfully logging in and authorizing, you can now perform API calls on the tasks

