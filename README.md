# CodeRoom

CodeRoom is a collaborative online coding platform where developers can
authenticate, create or join coding rooms, and work together in real
time.

## Features

-   🔐 User authentication with email/password
-   🔑 JWT-based access and refresh token authentication
-   🔵 Google OAuth login
-   🏠 Protected home/dashboard
-   💻 Collaborative coding rooms
-   ⚡ Real-time communication using Socket.IO
-   🤖 AI-powered coding features
-   🧭 Protected routes for authenticated users
-   🍪 HTTP-only authentication cookies
-   🌐 React frontend with Vite
-   🚀 Production deployment with Vercel and Render

## Tech Stack

### Frontend

-   React
-   Vite
-   React Router
-   Redux Toolkit
-   Axios
-   Tailwind CSS
-   Lucide React
-   Socket.IO Client

### Backend

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   JWT
-   Passport.js
-   Google OAuth 2.0
-   Socket.IO
-   Cookie Parser
-   CORS

### Deployment

-   Frontend: Vercel
-   Backend: Render
-   Database: MongoDB Atlas

## Project Structure

``` text
codeRoom-v2/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   │   ├── config/
│   │   │   ├── layouts/
│   │   │   ├── protectedRoutes/
│   │   │   └── routes/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   └── editor/
│   │   ├── socket/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
└── server/
    ├── src/
    │   ├── config/
    │   ├── controller/
    │   ├── dao/
    │   ├── middleware/
    │   ├── routes/
    │   ├── socket/
    │   └── utils/
    ├── .env
    └── package.json
```

## Authentication Flow

### Email / Password

``` text
React Login
    ↓
POST /api/auth/login
    ↓
Express Controller
    ↓
Validate User
    ↓
Generate Access + Refresh Tokens
    ↓
HTTP-only Cookies
    ↓
Authenticated User
```

### Google OAuth

``` text
CodeRoom Login
    ↓
/api/auth/google
    ↓
Google OAuth
    ↓
/api/auth/google/callback
    ↓
Passport Google Strategy
    ↓
Find/Create User
    ↓
Generate Access + Refresh Tokens
    ↓
HTTP-only Cookies
    ↓
Redirect to /home
```

## Environment Variables

### Client

Create `client/.env`:

``` env
VITE_SERVER_URL=http://localhost:5000
```

For production:

``` env
VITE_SERVER_URL=https://coderoom-v2.onrender.com
```

Add any other `VITE_*` variables required by your current client
configuration.

### Server

Create `server/.env`:

``` env
PORT=5000
CLIENT_URL=http://localhost:5173

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_token_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URI=http://localhost:5000/api/auth/google/callback
```

For production:

``` env
CLIENT_URL=https://coderoom-v2-kmcl.vercel.app
GOOGLE_CALLBACK_URI=https://coderoom-v2.onrender.com/api/auth/google/callback
```

Never commit `.env` files or expose secrets publicly.

## Installation

Clone the repository:

``` bash
git clone <your-repository-url>
cd codeRoom-v2
```

Install frontend dependencies:

``` bash
cd client
npm install
```

Install backend dependencies:

``` bash
cd ../server
npm install
```

## Run Locally

### Start Backend

From the `server` directory:

``` bash
npm run dev
```

### Start Frontend

Open another terminal:

``` bash
cd client
npm run dev
```

The frontend will normally be available at:

``` text
http://localhost:5173
```

The backend will run on the port configured in your server environment
variables.

## Google OAuth Configuration

In Google Cloud Console, configure the OAuth client.

### Authorized JavaScript Origins

Development:

``` text
http://localhost:5173
```

Production:

``` text
https://coderoom-v2-kmcl.vercel.app
```

### Authorized Redirect URI

Development:

``` text
http://localhost:5000/api/auth/google/callback
```

Production:

``` text
https://coderoom-v2.onrender.com/api/auth/google/callback
```

The callback URL configured in Google Cloud must exactly match the
backend `GOOGLE_CALLBACK_URI`.

## API Routes

### Authentication

  Method   Endpoint                      Description
  -------- ----------------------------- ---------------------------
  POST     `/api/auth/register`          Register a new user
  POST     `/api/auth/login`             Login with email/password
  GET      `/api/auth/me`                Get authenticated user
  GET      `/api/auth/logout`            Logout
  POST     `/api/auth/refresh`           Refresh access token
  GET      `/api/auth/google`            Start Google OAuth
  GET      `/api/auth/google/callback`   Google OAuth callback

### Rooms

Room-related endpoints are available under:

``` text
/api/room
```

### AI

AI-related endpoints are available under:

``` text
/api/ai
```

## Production Deployment

### Backend --- Render

Configure the backend service with the appropriate environment
variables.

Make sure:

``` env
CLIENT_URL=https://coderoom-v2-kmcl.vercel.app
```

and:

``` env
GOOGLE_CALLBACK_URI=https://coderoom-v2.onrender.com/api/auth/google/callback
```

are configured correctly.

### Frontend --- Vercel

Set:

``` env
VITE_SERVER_URL=https://coderoom-v2.onrender.com
```

The client root directory should point to:

``` text
client
```

Build command:

``` bash
npm run build
```

Output directory:

``` text
dist
```

## SPA Routing

CodeRoom uses React Router. Production hosting must serve the React
application entry point for client-side routes such as:

``` text
/login
/register
/home
/editor/:roomCode
```

If a direct refresh of a nested route returns `404`, configure the
hosting platform to rewrite application routes to the frontend entry
point.

## Security Notes

-   Keep JWT secrets private.
-   Never commit `.env` files.
-   Use HTTPS in production.
-   Production authentication cookies should use secure cookie settings.
-   Configure CORS to allow only the intended frontend origin.
-   Keep Google OAuth client secrets on the backend only.

## Development Workflow

Typical workflow:

``` bash
git add .
git commit -m "your message"
git push origin main
```

Pushing to the configured Git repository can trigger new deployments on
Vercel and Render.

## Future Improvements

-   Live cursor and user presence indicators
-   Multiple programming languages
-   Better room management
-   File/folder support inside rooms
-   Code execution sandbox
-   Voice/video collaboration
-   More AI coding tools
-   Improved error handling and monitoring
-   Automated tests
-   CI/CD pipeline

## Author

**Yash Kokate**

Built as a full-stack collaborative coding project using the MERN
ecosystem and modern web technologies.
