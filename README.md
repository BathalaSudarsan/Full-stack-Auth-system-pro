**Full-Stack Authorization System (React, Node.js, JWT)**

A secure full-stack authentication system built with React (Vite), Node.js, Express, JWT, and bcrypt, featuring protected routes, session management, and a modular backend architecture. 
Designed for scalability and easy migration to databases like MongoDB or PostgreSQL.

**Features**

1) User Registration & Login with JWT-based authentication
2) bcrypt Password Hashing for secure credential storage
3) Protected API Routes using authentication middleware
4) Auto Login After Registration for seamless UX
5) React Protected Routes to restrict access to authenticated users
6) Session Persistence using JWT stored in HTTP headers/local storage
7) Modular Backend Architecture (routes, controllers, services, middleware)

**Responsive UI with Tailwind CSS**

Easily Extensible to real databases (MongoDB, PostgreSQL)

**Tech Stack**
**Frontend**
1) React (Vite)
2) Tailwind CSS
3) Axios
4) React Router

**Backend**
1) Node.js
2) Express.js
3) JWT (jsonwebtoken)
4) bcrypt

**In-memory DB (extendable to MongoDB/PostgreSQL)**

**Project Structure**
/client
  /src
    /components
    /pages
    App.jsx
    main.jsx

/server
  /routes
  /controllers
  /services
  /middleware
  /models
  server.js

**How It Works**

. User registers → password is hashed with bcrypt.
. Server returns a JWT token.
. Token is stored on the client (localStorage/HTTP header).
. Protected API routes validate JWT using middleware.
. Frontend uses protected React routes to restrict access.

**API Endpoints**
1) Auth Routes
**Method	Endpoint	Description**
1) POST	/api/register	Register new user
2) POST	/api/login	Login + generate token
3) GET	/api/profile	Get user profile
   
**Setup Instructions**
1. **Clone Repository**
git clone [https://github.com/BathalaSudarsan/Full-stack-Auth-system-pro.git]
cd auth-system

**2. Backend Setup**
cd server
npm install
npm start


**Server runs on:**

http://localhost:5000

**3. Frontend Setup**
cd client
npm install
npm run dev


**Frontend runs on:**

http://localhost:5173

**Future Enhancements**
1) MongoDB/PostgreSQL integration
2) Role-Based Access Control (RBAC)
3) Refresh token mechanism
4) Remember-me sessions
5) Email verification & password reset
6) Docker deployment


**Author**

Sudarsan Bathala
Full-Stack Developer | Python | JavaScript | Node.js | React
GitHub: https://github.com/BathalaSudarsan
