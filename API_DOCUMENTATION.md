# Tresco Backend API Documentation

This document provides a comprehensive overview of all API endpoints available in the Tresco platform. These endpoints are organized by app and include authentication, user management, social media, e-commerce, services, payments, and dashboard functionality.

## Base URL

All endpoints are prefixed with: `api/v1/`

## Authentication Endpoints

These endpoints are provided by Djoser and handle user authentication:

### User Management
- `POST /auth/users/` - Register a new user
- `POST /auth/users/activation/` - Activate user account
- `GET /auth/users/me/` - Retrieve current user data
- `PUT /auth/users/me/` - Update current user data
- `PATCH /auth/users/me/` - Partially update current user data
- `DELETE /auth/users/me/` - Delete current user account
- `GET /auth/users/{id}/` - Retrieve specific user data (admin only)
- `PUT /auth/users/{id}/` - Update specific user data (admin only)
- `PATCH /auth/users/{id}/` - Partially update specific user data (admin only)
- `DELETE /auth/users/{id}/` - Delete specific user account (admin only)

### Token Authentication
- `POST /auth/jwt/create/` - Create JWT token (login)
- `POST /auth/jwt/refresh/` - Refresh JWT token
- `POST /auth/jwt/verify/` - Verify JWT token

### Password Management
- `POST /auth/users/reset_password/` - Request password reset
- `POST /auth/users/reset_password_confirm/` - Confirm password reset
- `POST /auth/users/set_password/` - Set new password

### Email Management
- `POST /auth/users/resend_activation/` - Resend activation email
- `POST /auth/users/set_email/` - Set new email
- `POST /auth/users/reset_email/` - Request email reset
- `POST /auth/users/reset_email_confirm/` - Confirm email reset

## User Profile Endpoints

- `GET /userprofile/me/` - Get current user's profile
- `GET /userprofile/update/{username}/` - Update user profile
- `GET /userprofile/agents/all/` - Get all users (agents)
- `POST /userprofile/create/` - Create user profile
- `GET /userprofile/` - Get all user profiles
- `GET /userprofile/{user_id}/` - Get specific user profile

## Momentos (Social Media) Endpoints

### Posts
- `GET /momentos/posts/` - List all posts
- `POST /momentos/posts/` - Create a new post
- `GET /momentos/posts/{id}/` - Retrieve a specific post
- `PUT /momentos/posts/{id}/` - Update a specific post
- `PATCH /momentos/posts/{id}/` - Partially update a specific post
- `DELETE /momentos/posts/{id}/` - Delete a specific post

### Comments
- `GET /momentos/posts/{post_id}/comments/` - List comments for a post
- `POST /momentos/posts/{post_id}/comments/` - Create a comment on a post
- `GET /momentos/comments/{id}/` - Retrieve a specific comment
- `PUT /momentos/comments/{id}/` - Update a specific comment
- `PATCH /momentos/comments/{id}/` - Partially update a specific comment
- `DELETE /momentos/comments/{id}/` - Delete a specific comment

### Likes (Agreements)
- `GET /momentos/posts/{post_id}/likes/` - List likes (agreements) for a post
- `POST /momentos/posts/{post_id}/likes/` - Create a like (agreement) on a post
- `DELETE /momentos/likes/{id}/` - Remove a like (agreement)

### Shares
- `GET /momentos/posts/{post_id}/shares/` - List shares for a post
- `POST /momentos/posts/{post_id}/shares/` - Create a share of a post
- `DELETE /momentos/shares/{id}/` - Remove a share

### Hashtags
- `GET /momentos/hashtags/` - List all hashtags
- `GET /momentos/hashtags/{id}/` - Retrieve a specific hashtag
- `GET /momentos/hashtags/{id}/posts/` - List posts with a specific hashtag

### Post-Hashtag Relations
- `GET /momentos/posts/{post_id}/hashtags/` - List hashtags for a post
- `POST /momentos/posts/{post_id}/hashtags/` - Add hashtag to a post
- `DELETE /momentos/post-hashtags/{id}/` - Remove hashtag from a post

## Marketplace (E-commerce) Endpoints

### Categories
- `GET /marketplace/categories/` - List all product categories
- `GET /marketplace/categories/{id}/` - Retrieve a specific product category
- `GET /marketplace/categories/{category_id}/products/` - List products in a specific category

### Products
- `GET /marketplace/products/` - List all products
- `POST /marketplace/products/` - Create a new product
- `GET /marketplace/products/{id}/` - Retrieve a specific product
- `PUT /marketplace/products/{id}/` - Update a specific product
- `PATCH /marketplace/products/{id}/` - Partially update a specific product
- `DELETE /marketplace/products/{id}/` - Delete a specific product
- `GET /marketplace/seller/{seller_id}/products/` - List products by a specific seller

### Product Images
- `GET /marketplace/products/{product_id}/images/` - List images for a product
- `POST /marketplace/products/{product_id}/images/` - Add image to a product
- `GET /marketplace/images/{id}/` - Retrieve a specific product image
- `PUT /marketplace/images/{id}/` - Update a specific product image
- `PATCH /marketplace/images/{id}/` - Partially update a specific product image
- `DELETE /marketplace/images/{id}/` - Delete a specific product image

### Orders
- `GET /marketplace/orders/` - List all product orders
- `POST /marketplace/orders/` - Create a new product order
- `GET /marketplace/orders/{id}/` - Retrieve a specific product order
- `PUT /marketplace/orders/{id}/` - Update a specific product order
- `PATCH /marketplace/orders/{id}/` - Partially update a specific product order
- `POST /marketplace/orders/{id}/confirm/` - Confirm a product order
- `POST /marketplace/orders/{id}/ship/` - Mark order as shipped
- `POST /marketplace/orders/{id}/deliver/` - Mark order as delivered

### Reviews
- `GET /marketplace/orders/{order_id}/review/` - Retrieve review for an order
- `POST /marketplace/orders/{order_id}/review/` - Create review for an order
- `GET /marketplace/reviews/{id}/` - Retrieve a specific product review
- `PUT /marketplace/reviews/{id}/` - Update a specific product review
- `PATCH /marketplace/reviews/{id}/` - Partially update a specific product review
- `DELETE /marketplace/reviews/{id}/` - Delete a specific product review

### Seller Profiles
- `GET /marketplace/sellers/` - List all sellers
- `GET /marketplace/sellers/{id}/` - Retrieve a specific seller profile
- `PUT /marketplace/sellers/{id}/` - Update a specific seller profile
- `PATCH /marketplace/sellers/{id}/` - Partially update a specific seller profile
- `GET /marketplace/sellers/{id}/products/` - List products by a specific seller

## Offered Services Endpoints

### Categories
- `GET /services/categories/` - List all service categories
- `GET /services/categories/{id}/` - Retrieve a specific service category

### Service Types
- `GET /services/types/` - List all service types
- `GET /services/types/{id}/` - Retrieve a specific service type
- `GET /services/categories/{category_id}/types/` - List service types in a specific category

### Services
- `GET /services/` - List all services
- `POST /services/` - Create a new service
- `GET /services/{id}/` - Retrieve a specific service
- `PUT /services/{id}/` - Update a specific service
- `PATCH /services/{id}/` - Partially update a specific service
- `DELETE /services/{id}/` - Delete a specific service
- `GET /services/provider/{provider_id}/` - List services by a specific provider
- `GET /services/category/{category_id}/` - List services in a specific category

### Service Images
- `GET /services/{service_id}/images/` - List images for a service
- `POST /services/{service_id}/images/` - Add image to a service
- `GET /services/images/{id}/` - Retrieve a specific service image
- `PUT /services/images/{id}/` - Update a specific service image
- `PATCH /services/images/{id}/` - Partially update a specific service image
- `DELETE /services/images/{id}/` - Delete a specific service image

### Service Packages
- `GET /services/{service_id}/packages/` - List packages for a service
- `POST /services/{service_id}/packages/` - Create a package for a service
- `GET /services/packages/{id}/` - Retrieve a specific service package
- `PUT /services/packages/{id}/` - Update a specific service package
- `PATCH /services/packages/{id}/` - Partially update a specific service package
- `DELETE /services/packages/{id}/` - Delete a specific service package

### Bookings
- `GET /services/orders/` - List all service bookings
- `POST /services/orders/` - Create a new service booking
- `GET /services/orders/{id}/` - Retrieve a specific service booking
- `PUT /services/orders/{id}/` - Update a specific service booking
- `PATCH /services/orders/{id}/` - Partially update a specific service booking
- `POST /services/orders/{id}/accept/` - Accept a service booking
- `POST /services/orders/{id}/complete/` - Complete a service booking
- `GET /services/{service_id}/bookings/` - List bookings for a specific service
- `POST /services/{service_id}/bookings/` - Create a booking for a specific service
- `GET /services/bookings/{id}/` - Retrieve a specific booking
- `PUT /services/bookings/{id}/` - Update a specific booking
- `PATCH /services/bookings/{id}/` - Partially update a specific booking
- `DELETE /services/bookings/{id}/` - Delete a specific booking

### Reviews
- `GET /services/orders/{order_id}/review/` - Retrieve review for a booking
- `POST /services/orders/{order_id}/review/` - Create review for a booking
- `GET /services/reviews/{id}/` - Retrieve a specific service review
- `PUT /services/reviews/{id}/` - Update a specific service review
- `PATCH /services/reviews/{id}/` - Partially update a specific service review
- `DELETE /services/reviews/{id}/` - Delete a specific service review

### Provider Profiles
- `GET /services/providers/` - List all service providers
- `GET /services/providers/{id}/` - Retrieve a specific service provider profile
- `PUT /services/providers/{id}/` - Update a specific service provider profile
- `PATCH /services/providers/{id}/` - Partially update a specific service provider profile
- `GET /services/providers/{id}/services/` - List services by a specific provider

## Posting (Bidding Platform) Endpoints

### Postings
- `GET /posting/` - List all postings
- `POST /posting/` - Create a new posting
- `GET /posting/{id}/` - Retrieve a specific posting
- `PUT /posting/{id}/` - Update a specific posting
- `PATCH /posting/{id}/` - Partially update a specific posting
- `DELETE /posting/{id}/` - Delete a specific posting

### Bids
- `GET /posting/{posting_id}/bids/` - List bids for a posting
- `POST /posting/{posting_id}/bids/` - Create a bid on a posting
- `GET /posting/bids/{id}/` - Retrieve a specific bid
- `PUT /posting/bids/{id}/` - Update a specific bid
- `PATCH /posting/bids/{id}/` - Partially update a specific bid
- `DELETE /posting/bids/{id}/` - Delete a specific bid
- `POST /posting/bids/{id}/accept/` - Accept a bid
- `POST /posting/bids/{id}/reject/` - Reject a bid
- `GET /posting/user/bids/` - List bids by current user

### Negotiations
- `GET /posting/bids/{bid_id}/negotiations/` - List negotiations for a bid
- `POST /posting/bids/{bid_id}/negotiations/` - Create a negotiation for a bid
- `GET /posting/negotiations/{id}/` - Retrieve a specific negotiation
- `PUT /posting/negotiations/{id}/` - Update a specific negotiation
- `PATCH /posting/negotiations/{id}/` - Partially update a specific negotiation
- `DELETE /posting/negotiations/{id}/` - Delete a specific negotiation

### Categories
- `GET /posting/categories/` - List all posting categories
- `GET /posting/categories/{id}/` - Retrieve a specific posting category

### Favorites
- `GET /posting/{posting_id}/favorites/` - List favorites for a posting
- `POST /posting/{posting_id}/favorites/` - Add posting to favorites
- `DELETE /posting/favorites/{id}/` - Remove posting from favorites
- `GET /posting/user/favorites/` - List current user's favorite postings

## Dashboard Endpoints

- `GET /dashboard/` - Get main dashboard data
- `GET /dashboard/summary/` - Get dashboard summary
- `GET /dashboard/services/` - List current user's service offerings
- `GET /dashboard/products/` - List current user's product listings
- `GET /dashboard/transactions/` - List current user's transaction history
- `GET /dashboard/financial-summary/` - Get current user's financial summary

## Transaction Endpoints

- `GET /transaction/transactions/` - List all transactions for current user
- `GET /transaction/transactions/{id}/` - Retrieve a specific transaction
- `POST /transaction/transactions/create/` - Create a new transaction
- `PUT /transaction/transactions/{id}/update/` - Update a specific transaction
- `PATCH /transaction/transactions/{id}/update/` - Partially update a specific transaction

## Wallet Endpoints

- `GET /wallet/wallet/` - Get current user's wallet details
- `GET /wallet/payment-methods/` - List current user's payment methods
- `POST /wallet/payment-methods/` - Add a new payment method
- `GET /wallet/payment-methods/{id}/` - Retrieve a specific payment method
- `PUT /wallet/payment-methods/{id}/` - Update a specific payment method
- `PATCH /wallet/payment-methods/{id}/` - Partially update a specific payment method
- `DELETE /wallet/payment-methods/{id}/` - Delete a specific payment method
- `GET /wallet/transactions/` - List wallet transactions
- `POST /wallet/deposit/` - Make a deposit to wallet
- `POST /wallet/withdraw/` - Make a withdrawal from wallet

## Notification Endpoints

- `GET /notification/notifications/` - List all notifications for current user
- `POST /notification/notifications/` - Create a new notification
- `GET /notification/notifications/{id}/` - Retrieve a specific notification
- `PUT /notification/notifications/{id}/` - Update a specific notification
- `PATCH /notification/notifications/{id}/` - Partially update a specific notification
- `DELETE /notification/notifications/{id}/` - Delete a specific notification

## Messaging Endpoints

### Conversations
- `GET /messaging/conversations/` - List all conversations for current user
- `POST /messaging/conversations/` - Create a new conversation
- `GET /messaging/conversations/{id}/` - Retrieve a specific conversation
- `PUT /messaging/conversations/{id}/` - Update a specific conversation
- `PATCH /messaging/conversations/{id}/` - Partially update a specific conversation
- `DELETE /messaging/conversations/{id}/` - Delete a specific conversation

### Messages
- `GET /messaging/messages/` - List all messages
- `POST /messaging/messages/` - Create a new message
- `GET /messaging/messages/{id}/` - Retrieve a specific message
- `PUT /messaging/messages/{id}/` - Update a specific message
- `PATCH /messaging/messages/{id}/` - Partially update a specific message
- `DELETE /messaging/messages/{id}/` - Delete a specific message

## Orders Endpoints

### Orders
- `GET /orders/orders/` - List all orders
- `POST /orders/orders/` - Create a new order
- `GET /orders/orders/{id}/` - Retrieve a specific order
- `PUT /orders/orders/{id}/` - Update a specific order
- `PATCH /orders/orders/{id}/` - Partially update a specific order
- `DELETE /orders/orders/{id}/` - Delete a specific order

### Order Items
- `GET /orders/order-items/` - List all order items
- `POST /orders/order-items/` - Create a new order item
- `GET /orders/order-items/{id}/` - Retrieve a specific order item
- `PUT /orders/order-items/{id}/` - Update a specific order item
- `PATCH /orders/order-items/{id}/` - Partially update a specific order item
- `DELETE /orders/order-items/{id}/` - Delete a specific order item

## Dispute Endpoints

- `GET /dispute/disputes/` - List all disputes
- `POST /dispute/disputes/` - Create a new dispute
- `GET /dispute/disputes/{id}/` - Retrieve a specific dispute
- `PUT /dispute/disputes/{id}/` - Update a specific dispute
- `PATCH /dispute/disputes/{id}/` - Partially update a specific dispute
- `DELETE /dispute/disputes/{id}/` - Delete a specific dispute

## User Endpoints

- `GET /user/users/` - List all users
- `POST /user/users/` - Create a new user
- `GET /user/users/{id}/` - Retrieve a specific user
- `PUT /user/users/{id}/` - Update a specific user
- `PATCH /user/users/{id}/` - Partially update a specific user
- `DELETE /user/users/{id}/` - Delete a specific user
- `GET /user/user/{user_id}/stats` - Get user statistics