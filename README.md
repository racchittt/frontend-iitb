# Frontend Application
#### ASC-IITB

## Overview

This is the frontend service for the assignment. It provides a user interface for interacting with the backend services. The application is built with Vite and is containerized using Docker.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (for managing JavaScript dependencies)
- [Docker](https://www.docker.com/get-started) (for containerization)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/racchittt/frontend-iitb
cd frontend-iitb 
```
### 2. Install Dependencies

```bash
npm install
```
### 3. Run Application Locally

```bash
npm run dev
```
### 4. Access the Application

Run the Backend Application as well and 
once both the applications are running then go to http://localhost:5173

## Technologies used
- Vite
- NodeJS
- Docker

## Troubleshooting
If you encounter issues with the backend service then: 
- Make sure the backend application is running.
- Check the URL at which the backend is running. By defualt it is on http://localhost:8080
- Try and access any api service from backend eg http://localhost:8080/api/courses which shoudl give you the courses in the Database.
- If there is a change in the address of the backend service make sure to change it in `Course.js` and `Instance.js`