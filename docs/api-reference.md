┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ TherapyKin API Reference                                                                                             ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛


Overview

The TherapyKin API provides programmatic access to the TherapyKin platform, allowing developers to integrate therapeutic
AI capabilities into their applications. This reference documents all available endpoints, request/response formats, and
authentication requirements.

Base URL: https://therapykin.ai/


API Versioning

The current version of the TherapyKin API is v1. All endpoints are prefixed with /api. We will notify users of any
breaking changes and provide migration guides when new versions are released.


Authentication

TherapyKin uses JWT (JSON Web Token) authentication. Most endpoints require a valid authentication token, which can be
obtained by logging in or registering. The token is automatically stored as an HTTP-only cookie.

Login


POST /api/auth/login


Authenticate a user with email and password.

Request Body:


{
  "email": "user@example.com",
  "password": "password123"
}


Response:


{
  "message": "Login successful",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "firstName": "John"
  }
}


Error Responses:

 • 400 - Email and password are required
 • 401 - Invalid credentials
 • 500 - Login failed

Register


POST /api/auth/register


Register a new user account.

Request Body:


{
  "email": "user@example.com",
  "firstName": "John",
  "password": "password123",
  "specialist": "generalist" // Optional
}


Response:


{
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "firstName": "John"
  }
}


Error Responses:

 • 400 - Email, first name, and password are required
 • 409 - User with this email already exists
 • 500 - Registration failed

Logout


POST /api/auth/logout


Log out the current user by clearing the authentication cookie.

Response:


{
  "message": "Logout successful"
}


Error Responses:

 • 500 - Logout failed

Get Current User


GET /api/auth/me


Get the currently authenticated user's information.

Response:


{
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "firstName": "John"
  }
}


Error Responses:

 • 401 - Not authenticated
 • 500 - Authentication check failed

Change Password


POST /api/auth/change-password


Change the password for the currently authenticated user.

Request Body:


{
  "currentPassword": "oldPassword123",
  "newPassword": "newPassword456"
}


Response:


{
  "message": "Password updated successfully"
}


Error Responses:

 • 400 - Current password and new password are required
 • 401 - Current password is incorrect
 • 404 - User not found
 • 500 - Failed to change password


Sessions API

Create Demo Session


POST /api/sessions/create-demo


Create a demo therapy session.

Request Body:


{
  "email": "user@example.com", // Optional
  "sessionLength": 15, // Optional, defaults to 15
  "specialist": "welcome", // Optional, defaults to "welcome"
  "kinId": "required-kin-id",
  "pseudonym": "UserPseudonym" // Optional
}


Response:


{
  "success": true,
  "session": {
    "id": "session_id",
    "createdAt": "2023-06-01T12:00:00Z"
  }
}


Error Responses:

 • 400 - KinId is required
 • 400 - Invalid specialist value
 • 500 - Failed to create demo session

Submit Session Rating


POST /api/sessions/submit-rating


Submit a rating for a completed therapy session.

Request Body:


{
  "sessionId": "session_id",
  "overallRating": 4,
  "understandingEmpathy": 5,
  "helpfulnessOfAdvice": 4,
  "sessionFlow": 4,
  "rememberingContext": 3,
  "comments": "Great session, very helpful!" // Optional
}


Response:


{
  "success": true
}


Error Responses:

 • 400 - Session ID is required
 • 400 - All ratings must be numbers between 1 and 5
 • 401 - Not authenticated
 • 500 - Failed to submit rating

Update Session Length


POST /api/sessions/update-length


Update the length of a therapy session.

Request Body:


{
  "sessionId": "session_id",
  "sessionLength": 30 // Must be 15, 30, or 45
}


Response:


{
  "success": true,
  "sessionLength": 30
}


Error Responses:

 • 400 - Session ID is required
 • 400 - Valid sessionLength is required (15, 30, or 45)
 • 401 - Not authenticated
 • 500 - Failed to update session length

Update Session Specialist


POST /api/sessions/update-specialist


Update the specialist for a therapy session.

Request Body:


{
  "sessionId": "session_id",
  "specialist": "generalist" // Must be a valid specialist
}


Response:


{
  "success": true,
  "message": "Specialist updated to generalist"
}


Error Responses:

 • 400 - Session ID and specialist are required
 • 400 - Invalid specialist value
 • 401 - Not authenticated
 • 500 - Failed to update specialist

Get Session Stats


GET /api/sessions/stats


Get statistics about the user's therapy sessions.

Response:


{
  "stats": {
    "totalSessions": 10,
    "daysActive": 5,
    "ongoingSessions": 1
  }
}


Error Responses:

 • 401 - Not authenticated
 • 500 - Failed to fetch session statistics

Update Session Image


POST /api/sessions/update-image


Update the image URL for a session.

Request Body:


{
  "sessionId": "session_id",
  "imageUrl": "https://example.com/image.jpg"
}


Response:


{
  "success": true
}


Error Responses:

 • 400 - Missing required parameters: sessionId, imageUrl
 • 500 - Failed to update session image


Bridges API

Get Bridges


GET /api/bridges


Get all bridges for the current user.

Response:


{
  "bridges": [
    {
      "id": "bridge_id",
      "name": "Bridge Name",
      "description": "Bridge Description",
      "participants": ["user1@example.com", "user2@example.com"],
      "status": "active",
      "createdAt": "2023-06-01T12:00:00Z",
      "lastActive": "2023-06-02T14:30:00Z",
      "type": "relationship"
    }
  ]
}


Error Responses:

 • 401 - Unauthorized
 • 500 - Failed to fetch bridges

Create Bridge


POST /api/bridges


Create a new bridge.

Request Body:


{
  "name": "Bridge Name",
  "description": "Bridge Description",
  "type": "relationship",
  "participantEmail": "participant@example.com" // Optional
}


Response:


{
  "bridge": {
    "id": "bridge_id",
    "name": "Bridge Name",
    "description": "Bridge Description",
    "participants": ["creator@example.com", "participant@example.com"],
    "status": "active",
    "createdAt": "2023-06-01T12:00:00Z",
    "lastActive": "2023-06-01T12:00:00Z",
    "type": "relationship"
  }
}


Error Responses:

 • 400 - Bridge name is required
 • 401 - Unauthorized
 • 500 - Failed to create bridge

Get Bridge by ID


GET /api/bridges/[id]?bridgeId=bridge_id


Get a specific bridge by ID.

Query Parameters:

 • bridgeId (string, required) - The ID of the bridge to retrieve

Response:


{
  "bridge": {
    "id": "bridge_id",
    "name": "Bridge Name",
    "description": "Bridge Description",
    "participants": ["user1@example.com", "user2@example.com"],
    "status": "active",
    "createdAt": "2023-06-01T12:00:00Z",
    "lastActive": "2023-06-02T14:30:00Z",
    "type": "relationship"
  }
}


Error Responses:

 • 400 - Bridge ID is required
 • 401 - Unauthorized
 • 403 - You do not have access to this bridge
 • 404 - Bridge not found
 • 500 - Failed to fetch bridge

Send Bridge Message


POST /api/bridges/messages


Send a message in a bridge.

Request Body:


{
  "content": "Message content",
  "firstName": "John",
  "email": "user@example.com", // Optional
  "attachments": [], // Optional
  "images": [], // Optional
  "mode": null, // Optional
  "specialist": "mediator", // Optional, defaults to "mediator"
  "screenshot": null, // Optional
  "pseudonym": "UserPseudonym", // Required
  "bridgeId": "bridge_id" // Required
}


Response:


{
  "role": "assistant",
  "content": "Response content",
  "id": "assistant-1234567890",
  "loading": false,
  "timestamp": "2023-06-01T12:00:00Z"
}


Error Responses:

 • 400 - Pseudonym is required
 • 400 - Bridge ID is required
 • 400 - Invalid specialist value
 • 500 - Failed to communicate with KinOS Bridge API

Submit Bridge Rating


POST /api/bridges/submit-rating


Submit a rating for a bridge.

Request Body:


{
  "bridgeId": "bridge_id",
  "rating": 4,
  "comments": "Very helpful bridge!" // Optional
}


Response:


{
  "success": true
}


Error Responses:

 • 400 - Bridge ID is required
 • 400 - Rating must be a number between 1 and 5
 • 401 - Not authenticated
 • 500 - Failed to submit rating


KinOS Integration API

Send Message


POST /api/kinos


Send a message to KinOS and get a response.

Request Body:


{
  "content": "Message content",
  "firstName": "John",
  "email": "user@example.com", // Optional
  "attachments": [], // Optional
  "images": [], // Optional
  "mode": null, // Optional
  "specialist": "generalist", // Optional
  "screenshot": null, // Optional
  "pseudonym": "UserPseudonym", // Required
  "addSystem": null // Optional
}


Response: Returns a streaming response with Server-Sent Events (SSE).


event: message_start
data: {"message":{"id":"msg_123"}}

event: content_block_delta
data: {"delta":{"type":"text_delta","text":"Hello"}}

event: content_block_delta
data: {"delta":{"type":"text_delta","text":", how can I help you today?"}}

event: message_stop
data: {}


Error Responses:

 • 400 - Pseudonym is required
 • 400 - Invalid specialist value
 • 500 - Failed to communicate with KinOS API

Generate Image


POST /api/kinos/image


Generate an image using KinOS.

Request Body:


{
  "message": "Image prompt or description",
  "firstName": "John",
  "specialist": "generalist", // Optional
  "pseudonym": "UserPseudonym" // Required
}


Response:


{
  "result": {
    "data": [
      {
        "url": "https://example.com/generated-image.jpg"
      }
    ]
  }
}


Error Responses:

 • 400 - Pseudonym is required
 • 400 - Invalid specialist value
 • 500 - Failed to generate image

Request Analysis


POST /api/kinos/analysis


Request an analysis from KinOS.

Request Body:


{
  "content": "Content to analyze",
  "firstName": "John",
  "email": "user@example.com", // Optional
  "attachments": [], // Optional
  "images": [], // Optional
  "mode": null, // Optional
  "specialist": "generalist", // Optional
  "screenshot": null, // Optional
  "pseudonym": "UserPseudonym", // Required
  "min_files": 1, // Optional
  "max_files": 2, // Optional
  "addSystem": null // Optional
}


Response:


{
  "response": "Analysis response text",
  "isAnalysis": true
}


Error Responses:

 • 400 - Pseudonym is required
 • 400 - Invalid specialist value
 • 500 - Failed to communicate with KinOS API for analysis


Media API

Text-to-Speech


POST /api/tts


Convert text to speech.

Request Body:


{
  "text": "Text to convert to speech",
  "voiceId": "L0Dsvb3SLTyegXwtm47J", // Optional, defaults to "L0Dsvb3SLTyegXwtm47J"
  "model": "eleven_flash_v2_5" // Optional, defaults to "eleven_flash_v2_5"
}


Response: Returns audio data with the appropriate content type (usually audio/mpeg).

Error Responses:

 • 400 - Missing required text parameter
 • 500 - Failed to convert text to speech

Speech-to-Text


POST /api/stt


Convert speech to text.

Request Headers:


Content-Type: multipart/form-data


Request Body: Send a multipart/form-data request with the following fields:

 • file - Audio file (required)
 • model - "whisper-1" (optional)
 • language - "en" (optional)
 • prompt - "" (optional)
 • response_format - "json" (optional)

Response:


{
  "text": "Transcribed text from the audio file"
}


Error Responses:

 • 400 - Content type must be multipart/form-data
 • 400 - No audio file provided or invalid file
 • 500 - Failed to transcribe audio

Image Upload


POST /api/image-upload


Upload an image.

Request Body:


{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD..." // Base64 encoded image data
}


Response:


{
  "success": true,
  "imageUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD..."
}


Error Responses:

 • 400 - Invalid image data
 • 401 - Not authenticated
 • 500 - Failed to process image


Users API

Get User Preferences


GET /api/users/preferences


Get the current user's preferences.

Response:


{
  "preferences": {
    "preferredSessionLength": 30,
    "preferredVoice": "L0Dsvb3SLTyegXwtm47J",
    "preferredSpecialist": "generalist",
    "cameraEnabled": false
  }
}


Error Responses:

 • 401 - Not authenticated
 • 404 - User not found
 • 500 - Failed to fetch user preferences

Update User Preferences


POST /api/users/preferences


Update the current user's preferences.

Request Body:


{
  "preferredSessionLength": 30, // Optional
  "preferredVoice": "L0Dsvb3SLTyegXwtm47J", // Optional
  "preferredSpecialist": "generalist", // Optional
  "cameraEnabled": false // Optional
}


Response:


{
  "success": true,
  "preferences": {
    "preferredSessionLength": 30,
    "preferredVoice": "L0Dsvb3SLTyegXwtm47J",
    "preferredSpecialist": "generalist",
    "cameraEnabled": false
  }
}


Error Responses:

 • 400 - Valid preferredSessionLength is required (15, 30, or 45)
 • 400 - Valid preferredVoice is required (string)
 • 400 - Valid preferredSpecialist is required
 • 400 - Valid cameraEnabled is required (boolean)
 • 401 - Not authenticated
 • 404 - User not found
 • 500 - Failed to update user preferences

Update User Pseudonym


POST /api/users/update-pseudonym


Update the current user's pseudonym.

Request Body:


{
  "pseudonym": "UserPseudonym"
}


Response:


{
  "success": true,
  "pseudonym": "UserPseudonym"
}


Error Responses:

 • 400 - Pseudonym is required
 • 401 - Not authenticated
 • 404 - User not found
 • 500 - Failed to update user pseudonym

Get User Subscription


GET /api/users/subscription


Get the current user's subscription details.

Response:


{
  "subscription": {
    "plan": "standard",
    "status": "active",
    "isAnnual": false,
    "currentPeriodEnd": "2023-12-31T23:59:59Z",
    "sessionsRemaining": 30,
    "totalSessions": 5,
    "daysActive": 10
  }
}


Error Responses:

 • 401 - Not authenticated
 • 500 - Failed to fetch user subscription


Payments API

Create Checkout Session


POST /api/payments/create-checkout


Create a Stripe checkout session for subscription payment.

Request Body:


{
  "plan": "standard", // Required: "basic", "standard", or "premium"
  "isAnnual": false // Optional, defaults to false
}


Response:


{
  "sessionId": "cs_test_a1b2c3d4e5f6g7h8i9j0",
  "url": "https://checkout.stripe.com/c/pay/cs_test_a1b2c3d4e5f6g7h8i9j0"
}


Error Responses:

 • 400 - Plan is required
 • 400 - Invalid plan or billing period
 • 401 - Not authenticated
 • 500 - Failed to create checkout session

Customer Portal


GET /api/payments/portal


Create a Stripe customer portal session for managing subscriptions.

Response: Redirects to the Stripe customer portal.

Error Responses:

 • 401 - Not authenticated
 • 404 - No Stripe customer found
 • 500 - Failed to create portal session

Get Checkout Session


GET /api/payments/session?id=cs_test_a1b2c3d4e5f6g7h8i9j0


Get details about a Stripe checkout session.

Query Parameters:

 • id (string, required) - Stripe checkout session ID

Response:


{
  "id": "cs_test_a1b2c3d4e5f6g7h8i9j0",
  "plan": "standard",
  "isAnnual": true,
  "status": "complete"
}


Error Responses:

 • 400 - Session ID is required
 • 401 - Not authenticated
 • 403 - Unauthorized
 • 500 - Failed to retrieve session


Webhooks

TherapyKin uses webhooks to notify your application when events happen in your account. You can configure webhook
endpoints in your account settings.

Payment Succeeded


POST /your-webhook-endpoint


Sent when a payment is successfully processed.

Payload:


{
  "event": "payment.succeeded",
  "data": {
    "payment_id": "pay_123456789",
    "customer_id": "cus_123456789",
    "amount": 1999,
    "currency": "usd",
    "status": "succeeded",
    "created_at": "2023-06-01T12:00:00Z"
  }
}



Rate Limiting

To ensure service stability, the TherapyKin API implements rate limiting. Limits vary by endpoint:

 • Authentication endpoints: 10 requests per minute
 • KinOS integration endpoints: 60 requests per minute
 • Media endpoints (TTS/STT): 30 requests per minute
 • Other endpoints: 120 requests per minute

When rate limits are exceeded, the API will return a 429 Too Many Requests status code.


Common Status Codes

 • 200 - Success - The request was successful
 • 201 - Created - A new resource was successfully created
 • 400 - Bad Request - The request was malformed or had invalid parameters
 • 401 - Unauthorized - Authentication is required or failed
 • 403 - Forbidden - You don't have permission to access this resource
 • 404 - Not Found - The requested resource was not found
 • 500 - Internal Server Error - Something went wrong on the server