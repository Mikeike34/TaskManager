<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />

<div align="center">
  <h1 align="center">Task Manager</h1>

  <p align="center">
    A full-stack task management application built with React, TypeScript, Golang, and MongoDB
    <br />
    <a href="https://taskmanager-production-578e.up.railway.app/"><strong>View Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Mikeike34/TaskManager/issues">Report Bug</a>
    ·
    <a href="https://github.com/Mikeike34/TaskManager/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#technical-highlights">Technical Highlights</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

Task Manager is a production-ready task management application that demonstrates modern full-stack development practices. Built with a Go backend and React/TypeScript frontend, it provides a clean, intuitive interface for organizing daily tasks with persistent cloud storage.

**Why I Built This:**
* To explore cross-language full-stack development (Golang + TypeScript)
* To implement RESTful API design with proper error handling and validation
* To practice type-safe frontend development with TypeScript
* To demonstrate deployment and database integration skills

The application features a responsive UI built with Chakra UI, deployed on Railway with MongoDB Atlas for data persistence, and supports full CRUD operations with real-time updates.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Golang][Golang]][Go-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Chakra-UI][Chakra-UI]][Chakra-UI-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Key Features

**Core Functionality:**
- ✅ Create, read, update, and delete tasks
- ✅ Mark tasks as complete/incomplete with visual feedback
- ✅ Persistent storage with MongoDB Atlas
- ✅ Responsive design for mobile and desktop
- ✅ Real-time UI updates with optimistic rendering

**Technical Features:**
- ✅ RESTful API with proper HTTP status codes and error handling
- ✅ TypeScript type safety across frontend codebase
- ✅ Go Fiber framework for high-performance backend
- ✅ MongoDB with proper document schema and indexing
- ✅ Single-service deployment serving both API and static files
- ✅ Environment-based configuration for development and production

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

* Node.js 18+ and npm
  ```sh
  node --version
  npm --version
  ```

* Go 1.19+
  ```sh
  go version
  ```

* MongoDB (local installation or MongoDB Atlas account)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Mikeike34/TaskManager.git
   cd TaskManager
   ```

2. Install backend dependencies
   ```sh
   go mod download
   ```

3. Install frontend dependencies
   ```sh
   cd client
   npm install
   cd ..
   ```

4. Create `.env` file in the root directory
   ```env
   MONGODB_URI=mongodb://localhost:27017/taskmanager
   PORT=5000
   ENV=development
   ```

5. Start MongoDB (if running locally)
   ```sh
   mongod
   ```

6. Start the backend server (in one terminal)
   ```sh
   go run main.go
   ```

7. Start the frontend development server (in another terminal)
   ```sh
   cd client
   npm run dev
   ```

8. Open your browser to `http://localhost:5173`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### Managing Tasks

1. **Add a Task** - Type your task in the input field and press Enter or click the add button
2. **Mark Complete** - Click the checkbox to toggle task completion status
3. **Delete Task** - Click the delete icon to remove a task permanently
4. **View Tasks** - All tasks are automatically saved and persist across sessions

### API Endpoints

The backend exposes the following REST API endpoints:

```
GET    /api/todos         # Retrieve all tasks
POST   /api/todos         # Create a new task
PATCH  /api/todos/:id     # Mark task as complete
DELETE /api/todos/:id     # Delete a task
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TECHNICAL HIGHLIGHTS -->
## Technical Highlights

### Backend Architecture
- **Go Fiber framework** for fast HTTP server with minimal overhead
- **MongoDB driver** with connection pooling and error handling
- **Environment-based configuration** for seamless development and production deployment
- **RESTful API design** with proper status codes (200, 201, 400, etc.)

### Frontend Design
- **TypeScript** for compile-time type checking and better developer experience
- **React Hooks** (useState, useEffect) for state management
- **Chakra UI** component library for consistent, accessible design
- **Vite** for fast development server and optimized production builds

### Deployment Strategy
- **Single-service architecture** - Go backend serves both API and static React files
- **Railway platform** for automated deployments from GitHub
- **MongoDB Atlas** for cloud database with automatic backups
- **Environment variables** for secure configuration management

### Code Quality
- Clean separation of concerns (API handlers, database logic, frontend components)
- Error handling at every layer (database, API, UI)
- TypeScript interfaces for type-safe data models
- Responsive design with mobile-first approach

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEPLOYMENT -->
## Deployment

This application is deployed on Railway with the following configuration:

**Environment Variables:**
```
ENV=production
PORT=5000
MONGODB_URI=[MongoDB Atlas connection string]
```

**Deployment Process:**
1. Push to GitHub main branch
2. Railway automatically builds and deploys
3. Go backend serves API and React static files from a single service

**Live Demo:** [https://taskmanager-production-578e.up.railway.app/](https://taskmanager-production-578e.up.railway.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Michael Cantone - michaeljcantone@gmail.com

[![LinkedIn][linkedin-shield]][linkedin-url]

**Project Links:**
- Live Demo: [https://taskmanager-production-578e.up.railway.app/](https://taskmanager-production-578e.up.railway.app/)
- Repository: [https://github.com/Mikeike34/TaskManager](https://github.com/Mikeike34/TaskManager)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Go Fiber Documentation](https://docs.gofiber.io/)
* [MongoDB Go Driver](https://www.mongodb.com/docs/drivers/go/current/)
* [Chakra UI](https://chakra-ui.com/)
* [Railway Deployment Platform](https://railway.app/)
* [Best README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-Connect-blue
[linkedin-url]: https://www.linkedin.com/in/michael-cantone/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/

[Golang]: https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white
[Go-url]: https://go.dev/

[MongoDB]: https://img.shields.io/badge/MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/

[Chakra-UI]: https://img.shields.io/badge/Chakra_UI-319795?style=for-the-badge&logo=chakraui&logoColor=white
[Chakra-UI-url]: https://chakra-ui.com/


