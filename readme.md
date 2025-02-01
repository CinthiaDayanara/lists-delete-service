# 🚀 Microservice `lists-delete-service`

## 📌 Description
This microservice allows **deleting lists** in a task management system.
It provides a REST API for removing lists and their associated data from the database.

## 🛠️ Technologies
- Node.js
- Express.js
- PostgreSQL (AWS RDS)
- Sequelize (ORM)
- Docker

## 📂 Project Structure
```
lists-delete-service/
│── src/
│   ├── controllers/
│   │   ├── deleteController.js
│   ├── models/
│   │   ├── List.js
│   ├── routes/
│   │   ├── deleteRoutes.js
│   ├── services/
│   │   ├── deleteService.js ✅ (Business logic for deleting lists)
│   ├── config/
│   │   ├── database.js
│   ├── utils/
│   │   ├── validators.js ✅ (Reusable validation functions)
│   ├── app.js
│── server.js
│── Dockerfile
│── docker-compose.yml
│── .env
│── README.md
```

## 🔧 Installation
```sh
npm install
```

## 🚀 Running the Microservice
```sh
npm start
```
Or using Docker:
```sh
docker-compose up --build
```

## 🔗 API Endpoints
### **1️⃣ Delete a List**
```sh
curl -X DELETE http://localhost:5014/lists/1 -H "Content-Type: application/json"
```


