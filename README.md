Introduction
The School Management API is a Node.js-based API that allows users to manage school data, including adding new schools and retrieving a list of schools sorted by their distance from a given location.

Features
Add new schools with name, address, latitude, and longitude.
Retrieve a list of schools sorted by proximity to a given latitude and longitude.
Built using the MVC pattern with Sequelize as the ORM.

Technology Stack
Node.js
Express.js
Sequelize (ORM)
MySQL (Database)
Postman (for API testing)

API Endpoints
Add School
Endpoint: /api/addSchool

Method: POST

Description: Adds a new school to the database.

Payload:
{
  "name": "Shyam public School",
  "address": "New Delhi India",
  "latitude": 37.7749,
  "longitude": -122.4194
}

Response:
{
  "message": "School added successfully",
}


List Schools
Endpoint: /api/listSchools

Method: GET

Description: Retrieves a list of schools sorted by proximity to the provided latitude and longitude.

Parameters:

latitude: The latitude of the user's location.
longitude: The longitude of the user's location.
Response:

[
  {
    "id": 1,
    "name": "Shyam public School",
    "address": "New Delhi India",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "distance": 0.5
  }
  
]

