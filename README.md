# Blog Application Backend

## Overview

This is the backend of a blog application built with Node.js, Express, and PostgresDb. It provides RESTful APIs for creating, reading, updating, and deleting blog posts. It also supports user authentication and image upload functionality.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Structure](#Structure)



## Features

- RESTful APIs for CRUD operations on blog posts
- User authentication using JWT
- Image upload functionality using Multer
- Error handling and validation

## Demo

Check out the live demo [https://blog-qt-be.onrender.com/api-docs](#).

## Installation
1. **Clone the repository:**

   ```bash
   git clone https://github.com/teerenzo/blog-qt-be.git
   cd blog-qt-be

2. **Install dependencies:**

   ```bash
   npm install
3. **Add Backend .Env** (provided to be able to test)

   ```bash
   JWT_SECRET=
   PORT=4000
   DATABASE_URL=
   DB_USERNAME=
   DB_PASSWORD=
   DB_DATABASE=
   DB_HOST=
   CLOUDINARY_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   SWAGGER_SERVER=
   NODE_ENV="development"

4. **Adding tables in database:**

   ```bash
   npm run migrate  
   npm run undo-migrate for deleting all migrations

4. **Adding sample data in database:**

   ```bash
   npm run seed
   npm run undo-seed for deleting all databa

4. **Start applicatiion:**

   ```bash
   npm run dev  


### Prerequisites

- Node.js (v18 or higher)
- Postgres (local or cloud instance)


## Structure 
### some important folders
- **`src/config/`**: Contains configuration files, such as database connection settings.

- **`src/controllers/`**: Houses the request handlers for different routes, managing the business logic and interaction with services.

- **`src/middleware/`**: Includes middleware functions used for tasks such as authentication .

- **`src/database/`**: Defines the database schemas and models used by Postgres.

- **`src/routes/`**: Defines the routes and maps them to controller functions.

- **`src/services/`**: Contains business logic for data operations and interactions with models.

- **`src/utils/`**: Provides utility functions and helpers used throughout the project.

