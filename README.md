# Ride Management Booking System

A full‑stack MERN (MongoDB, Express.js, React.js, Node.js) project where three different user roles — **Admin**, **Rider**, and **Driver** — use the system for ride booking, ride management, and overall platform monitoring.

This README explains the features, technologies, installation steps, and how each role works.

---

## Project Overview

This is a ride booking platform where:

- **Riders** can book rides.
- **Drivers** can accept or reject rides.
- **Admins** can manage users, rides, and track system activity.

The complete system includes:

- Authentication (JWT + Cookies)
- Role‑based dashboard
- Ride management
- Profile update
- Password change
- Auto‑assign driver logic

---

## Features

### Authentication

- Login & Register
- Cookie‑based JWT auth
- Role checking (Admin/Rider/Driver)
- Protected routes (frontend + backend)

### Admin Features

- View all users
- Manage riders & drivers
- Update profile
- Change password
- View all rides
- Approve/Block users

### Rider Features

- Book a ride
- Cancel ride
- View ride history
- Update profile
- Change password

### 🏍 Driver Features

- Accept or reject rides
- View active/previous rides
- Update profile
- Change password
- Earnings calculation

---

## Technologies Used

### **Frontend**

- React.js
- Redux Toolkit Query (RTK Query)
- React Router
- Tailwind CSS
- shadcn/ui
- Axios

### **Backend**

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Cookie Parser
- Bcrypt

---

## Installation

### 1️⃣ Clone the repository

```
# Frontend Clone
git clone https://github.com/Mdnajimuddinhelal70/ride-booking-management-system-frontend.git

# Backend Clone
git clone https://github.com/Mdnajimuddinhelal70/ride-booking-management-system.git


### 2️⃣ Install backend dependencies



## Environment Variables

Create a `.env` file in the **backend** folder.


PORT=5000
DB_URL=your_mongodb_connection_uri
NODE_ENV=development
BCRYPT_SALT_ROUND=10
JWT_ACCESS_SECRET=your_jwt_secret
JWT_ACCESS_EXPIRES=7d
FRONTEND_URL=http://localhost:5173


```

---

## ▶️ Run the Project

### Start Backend

```

cd backend
npm run dev

```

### Start Frontend

```

cd frontend
npm run dev

```

---

## 🧪 API Structure (Short Overview)

```

/api/v1/user
/api/v1/auth
/api/v1/ride
/api/v1/driver
/api/v1/admin

```

Each API is protected based on user roles.

---

## Project Folder Structure (Short)

```

backend/
controllers/
services/
routes/
models/
middlewares/
utils/
frontend/
src/
components/
pages/
redux/
hooks/
layouts/

```

---

## Admin Profile Example (Frontend)

Admin can update:

- Name
- Phone number
- Address

Admin can also change password.

---

## Key Points

- Full MERN stack project
- Role‑based dashboards
- Secure backend system
- Elegant UI with Tailwind + shadcn
- Real‑life ride booking logic

---

## Live Demo

Frontend Live: https://ride-booking-management-system-fron-tau.vercel.app  
Backend API Live: https://ride-booking-management-system.vercel.app

## GitHub Repositories

Frontend Repo: https://github.com/Mdnajimuddinhelal70/ride-booking-management-system-frontend
Backend Repo:https://github.com/Mdnajimuddinhelal70/ride-booking-management-system

## Author

Developed by **Najim Uddin** as part of a full‑stack development assignment.
