# 🛒 Simple E-commerce API

This E-commerce  project is a full-stack web application built using Node.js, Express, and MongoDB on the backend, with a minimal HTML/CSS/JavaScript frontend to demonstrate key features. It allows users to register and log in as either a customer or an admin using secure JWT authentication. Customers can browse products, search for items, add them to their cart, and place orders. Admins have the ability to manage products—add, update, and delete products dynamically through the same interface. The project follows RESTful API principles and includes role-based access control to separate admin and customer functionalities. It’s a clean and simple implementation suitable for learning, showcasing, or extending into a larger e-commerce application. 

## Features

- JWT-based Auth (Customer & Admin)
- REST API with CRUD Products
- Cart & Order functionality
- Simple HTML Frontend

## Folder Structure

- `/backend` – Express API with MongoDB
- `/frontend` – HTML frontend (no framework)

## How to Run

1. Clone the repo
2. Run `npm install` in `/backend`
3. Setup `.env` with DB and JWT_SECRET
4. Run backend with `nodemon server.js`
5. Open `frontend/index.html` in browser

---

