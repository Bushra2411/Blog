

# 📝 Blog App

A dynamic full-stack blog application where users can register, log in, write blogs on various topics, like posts, and manage their content. An admin panel is also included to oversee posts and user activity.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Team Members](#team-members)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)
- [Admin Module](#admin-module)
- [Future Improvements](#future-improvements)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## 📖 About the Project

This Blog App allows users to:

- Create an account or log in
- Write and post blogs on various topics
- Like, edit, or delete their own blogs
- View and explore posts written by other users

Additionally, the app includes an **Admin Module** where the admin can monitor posts and manage writers.

---

## 🚀 Features

- 🔐 User Authentication (Register / Login)
- ✍️ Create, Edit, Delete blog posts
- ❤️ Like blog posts
- 🧵 Categorized by topics
- 🔎 Browse all user posts
- 🛡️ Admin dashboard to manage content and users

---

## 🧰 Tech Stack

- **Frontend:** React.js 
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Other Tools:** Axios, Mongoose, Dotenv

---

## 👥 Team Members

| Name                      | Role                |
|---------------------------|---------------------|
| Lubna Yesmin              | Developer / UI Design |
| Fabiha Bushra Chowdhury  | Backend Developer    |
| Farhana Akter Dina       | Frontend Developer   |

---

## 🛠️ Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- Node.js and npm
- MongoDB (local or MongoDB Atlas)

---

### 📦 Installation


### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

``` bash
cd frontend
npm install
npm start
```

### Environment Variables

Create a .env file in both frontend and backend directories and configure:

Backend .env:
```env
PORT=5000
MONGO_URI=your_mongo_connection_string
```
Frontend .env:
```env
REACT_APP_API_URL=http://localhost:5000/api
```
---
### ▶️ Running the App
Start the backend

```bash
Copy
Edit
cd backend
npm start
```
Start the frontend

```bash
Copy
Edit
cd ../frontend
npm run dev
```
---

### 📂 Folder Structure

blog-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── public/
│   └── App.js

---
### 🛡️ Admin Module
The admin module allows administrative users to:

* View all posts

* Monitor activity of all users/writers

* Moderate blog content

* Admin access can be role-based through the user schema.

### 🚧 Future Improvements


* Commenting system

* Blog search and filtering

* Post scheduling

* Notifications

---
### 🙌 Acknowledgements
* React.js

* Node.js

* MongoDB

* Express.js

* JWT
---
### 📄 License
This project is created for educational purposes. All rights reserved by the team.
