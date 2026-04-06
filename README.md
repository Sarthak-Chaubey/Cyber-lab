# 🚀 Dockerized Cyber Security Lab

This project demonstrates a vulnerable web application built using Node.js and deployed using Docker.

## 🔍 Features
- Basic login system
- Intentional security vulnerabilities
- Docker container deployment

## 🛠 Tech Stack
- Node.js
- Express.js
- Docker

## ⚠️ Vulnerabilities
- Hardcoded credentials
- No rate limiting
- No input validation

## ▶️ How to Run

docker build -t cyber-lab .
docker run -p 3000:3000 cyber-lab

## 🌐 Access
http://localhost:3000

## 📸 Demo
Login using:
- Username: admin
- Password: admin123

## 📌 Learning Outcome
- Understanding Docker containerization
- Basics of web security testing
- Identifying weak authentication systems
