# Authentication Setup

## Overview
The application has been updated to connect with your backend server at `http://127.0.0.1:8000` for authentication and services.

## API Endpoints

### Authentication
- **JWT Login**: `POST http://127.0.0.1:8000/api/v1/auth/jwt/create/`
  - Payload: `{ "username": "string", "password": "string" }`
  - Returns: `{ "access": "string", "refresh": "string" }`

- **User Registration**: `POST http://127.0.0.1:8000/api/v1/auth/users/`
  - Payload: `{ "username": "string", "email": "string", "password": "string" }`

- **Get Current User**: `GET http://127.0.0.1:8000/api/v1/auth/users/me/`
  - Headers: `Authorization: Bearer {access_token}`

### Services
- **Fetch Services**: `GET http://127.0.0.1:8000/api/v1/services/`
  - Headers: `Authorization: Bearer {access_token}` (optional)

## Authentication Flow

1. **Sign In**:
   - User enters username and password
   - Form validates input
   - API call to JWT endpoint
   - Tokens stored in localStorage
   - User info fetched and stored
   - Success alert shown
   - Redirect to Dashboard

2. **Sign Up**:
   - User enters username, email, password, and confirm password
   - Form validates input (including password confirmation)
   - API call to user registration endpoint
   - User data stored in localStorage
   - Success alert shown
   - Redirect to Dashboard

3. **Dashboard**:
   - Automatically fetches services from API
   - Displays services in a grid layout
   - Shows loading state while fetching
   - Handles errors gracefully

## Features

- ✅ Username/password authentication
- ✅ JWT token management (access + refresh)
- ✅ User registration with email
- ✅ Automatic service fetching after authentication
- ✅ Success alerts with user feedback
- ✅ Error handling and validation
- ✅ Loading states for better UX
- ✅ Responsive service display

## Backend Requirements

Your backend server should:
1. Accept JWT authentication at `/api/v1/auth/jwt/create/`
2. Handle user registration at `/api/v1/auth/users/`
3. Provide user info at `/api/v1/auth/users/me/`
4. Serve services at `/api/v1/services/`
5. Return proper error responses for failed authentication

## Testing

1. Start your backend server at `http://127.0.0.1:8000`
2. Start the frontend: `npm start`
3. Navigate to `/sign-in` or `/create-account`
4. Test authentication flow
5. Verify services are displayed on the dashboard 