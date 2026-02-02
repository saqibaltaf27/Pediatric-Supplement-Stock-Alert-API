# PEDIATRIC SUPPLEMENT STOCK-ALERT API

A backedn API for GreenLeaf Pediatric wellness to manage 'Back in Stock' notifications for hypoallergenic pediatric supplements and eczema-relief creams.

## Features
 - RESTFUL API using Node.js + Express.js
 - Self-contained SQLite database
 - Email registration for product notifications
 - Prevents duplicate emails for the same product
 - Mock trigger to simulate sending notifications
 - Seed script with 5 sample products
 - Proper HTTP status codes and error handlings

## Technologies
 - Node.js
 - Express.js
 - SQLite
 - Validator.js
 - Body-parser
 - CORS

## Installation
1. Clone the repository git clone https://github.com/saqibaltaf27/Pediatric-Supplement-Stock-Alert-API.git
2. npm i 
3. npm run seed
4. npm start

## API Endpoints
1. Get All Products (GET /api/products/all-products)
2. Register a Notification request (POST /api/notifications/register-notification)
3. Get All pending notifications for a product (GET /api/notifications/get-notifications/:product_id)
4. Mock trigger for sending notifications (POST /api/notifications/trigger/:product_id)

## Demo
Use postman to test endpoints.
1. Get /api/products/all-products
2. POST /api/notifications/register-notification
3. GET /api/notifications/get-notifications/:product_id
4. POST /api/notifications/trigger/:product_id
