# 🎧 VibeSync

VibeSync is a MERN stack web application that detects a user's facial mood and suggests songs based on that emotion.  
The application uses AI-based face detection to identify emotions such as **Happy, Sad, and Surprised**, and then recommends music that matches the user's mood.

---

## 🌐 Live Demo

🔗 Live Website:  
https://vibe-sync-wpus.onrender.com

---

## 🚀 Features

- 🔐 User Authentication (Register & Login)
- 🧠 Face Expression Detection using **Google MediaPipe**
- 🎵 Mood-based Song Recommendation
- ☁️ Song Upload with **ImageKit**
- ⚡ Token Blacklisting for Security
- 🧩 Redis-based Session Handling
- 🎧 Music Player UI
- 📱 Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML
- CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Other Tools
- Redis
- Multer
- ImageKit
- Google MediaPipe
- JWT Authentication

---

## 🧠 How It Works

1. User logs in or registers.
2. The application uses **MediaPipe face detection** to analyze facial expressions.
3. The system detects the mood:
   - Happy
   - Sad
   - Surprised
4. Based on the detected mood, the backend fetches songs from the database.
5. The recommended song is played in the music player.

---

## 📂 Project Structure
VibeSync
│
├── frontend
│ ├── components
│ ├── pages
│ ├── services
│ └── styles
│
├── backend
│ ├── controllers
│ ├── routes
│ ├── models
│ ├── middleware
│ └── services
│
└── README.md

---

## 🔐 Security Implementation

- JWT Authentication
- Token Blacklisting
- Redis for High Throughput Session Handling
- Secure API Routes

---

## 📦 Installation

### 1️⃣ Clone the Repository
git clone https://github.com/your-username/vibesync.git


---

## 📸 Screenshots

### Home Page
<img width="1908" height="1004" alt="Screenshot 2026-03-06 181610" src="https://github.com/user-attachments/assets/f1f350e9-05d5-4475-b5fb-c86f465b13d6" />

### Login Page
<img width="1743" height="976" alt="Screenshot 2026-03-06 181631" src="https://github.com/user-attachments/assets/2e2bd0d3-95b0-4c53-8844-646a3f46830f" />


---

## 📌 Future Improvements

- More emotion detection categories
- Playlist generation
- Spotify API integration
- Better AI emotion accuracy
- Mobile app version

---

## 👨‍💻 Author

Jeevan Chavan  
Computer Science Engineering Student

GitHub: https://github.com/jeevanchavan

---

⭐ If you like this project, give it a star on GitHub.
