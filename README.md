# README

## 1. About

The project is a CRUD (Create, Read, Update, Delete) application that enables user authentication. Users can sign-up, login, and post content, which is stored using MongoDB. 

## 2. Technologies

The project utilizes the following technologies:

- JavaScript
- EJS (Embedded JavaScript) for templating
- Node.js for server-side JavaScript
- Express.js as the web application framework
- MongoDB as the database for storing user information
- Prisma to read and write data

## 3. Getting Started

To get started with the project, follow the steps below:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

### Clone the Repository

```bash
git clone https://github.com/Edgar-Carpinteyro/crud-app-using-mongo.git
cd your-project
```

### Install Dependencies

```bash
npm install
```

### Set Up MongoDB

Ensure that MongoDB is running on your machine. You may need to start the MongoDB server.

### Start the Application

```bash
npm start
```

The application should now be running on [http://localhost:3000](http://localhost:3000). Open this URL in your web browser.

## 4. Installation

If you want to integrate this CRUD application into your existing project, follow these installation steps:

### Install Package

```bash
npm install your-crud-package
```

### Import and Use

```javascript
const crudPackage = require('your-crud-package');
```
