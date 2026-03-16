# 🎵 Scalable Music Streaming API (Backend)

A professional-grade backend orchestration system for audio streaming platforms built with **Node.js** and **MongoDB**. This system is engineered to handle secure media uploads, role-based content management, and complex data relationships.

## 🌟 Key Technical Highlights
* **Granular Authorization:** Implements **Role-Based Access Control (RBAC)** via JWT to strictly separate `User` capabilities from `Artist` administrative actions.
* **Media Pipeline:** Handles high-volume binary data using **Multer (Memory Storage)** and a custom **Cloud Storage Service** for high-availability audio streaming.
* **Relational Integrity:** Utilizes **Mongoose Population** and multi-level references to maintain strict consistency between tracks, albums, and artist profiles.
* **System Resilience:** Engineered with global **Asynchronous Error Handling** (Try-Catch patterns) to ensure service stability.

## 🛠️ Tech Stack
* **Language:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (using Mongoose ODM)
* **Security:** JWT, Bcrypt, Dotenv, Multer

## 📂 Project Structure
* `src/models/` : Schemas for Users, Music Tracks, and Albums.
* `src/controllers/` : Business logic for media orchestration and authentication.
* `src/middlewares/` : Authentication guards and role-based validation.
* `src/routes/` : API endpoint definitions.
* `src/services/` : External storage and utility integrations.

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/KrapanshuMundra/Spotify_Project.git