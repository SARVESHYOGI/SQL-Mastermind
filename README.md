# 🚀 AI-Learning-Planner (Multi-Subject)

An AI-powered personalized learning planner built with the **MERN stack** + **Gemini API**, designed to generate fully customized study plans for **any subject** — including DSA, SQL, Operating Systems, JavaScript, Cloud, System Design, Aptitude, Math, and more.

Instead of generic preparation roadmaps, the platform creates **tailored learning plans of any duration** based on user-selected timelines, skill levels, goals, and preferred topics.

---
## ✨ Features

### 🎯 AI-Generated Multi-Subject Learning Plans  
Creates personalized learning plans of **any duration** (2 weeks, 4 weeks, 8 weeks, or user-defined) based on user experience, goals, and preferred pace.

### 🧠 Dynamic Questionnaire Engine  
Questions adapt automatically based on the chosen subject (e.g., DSA, OS, SQL, JavaScript).

### 📘 Structured & Actionable Roadmaps  
Each generated plan includes:  
- Topics to learn  
- Daily/weekly goals  
- Exercises or tasks  
- Recommended resources  
- Difficulty level  
- Estimated time commitment  

### 🔐 Secure Authentication (JWT)  
Protects user data and allows saving multiple learning plans securely.

### 🎛️ Customizable Plans  
Users can modify AI-generated plans and store multiple personalized study paths.

### 📊 Plan Tracking (Upcoming)  
Track weekly completion and progress milestones.

### 🤖 Gemini API Integration  
Uses LLMs to generate structured JSON learning plans with consistent formatting.

---

## 🛠️ Tech Stack

### **Frontend**
- React.js  
- Tailwind CSS  

### **Backend**
- Node.js  
- Express.js  

### **Database**
- MongoDB  
- Mongoose  

### **Authentication**
- JWT  

### **AI Integration**
- Gemini API (Google Generative AI)

---

## Installation & Setup ⚙️

### 1. Clone the Repository
```sh
git clone https://github.com/SARVESHYOGI/AI-Learning-Planner.git
cd AI-Learning-Planner
```

### 2. Install Dependencies
#### Backend
```sh
cd server
npm install
```
#### Frontend
```sh
cd client
npm install
```

### 3. Set Up Environment Variables
Create a **.env** file in the `server` directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_API_KEY=your_gemini_api_key
```

### 4. Run the Application
#### Start Backend Server
```sh
cd server
npm start
```
#### Start Frontend
```sh
cd client
npm start
```

## Usage 🚀
1. **Sign up/Login** using JWT authentication.
2. Choose a subject (DSA, OS, SQL, React, Math, etc.)
3. Select plan duration (2 weeks, 4 weeks, 8 weeks, custom)
4. Answer dynamic questions about experience, goals, and focus area
5. Receive a fully personalized AI-generated learning plan
6. Save and customize the plan in your dashboard
7. Track your progress (upcoming)

## Preview 🖼️
Home Page
![AI SQL Prep Plan Screenshot](https://res.cloudinary.com/dztzgqzjp/image/upload/v1741453503/HomaPage_fodjoq.png)
Login Page
![AI SQL Prep Plan Screenshot](https://res.cloudinary.com/dztzgqzjp/image/upload/v1741453520/login_ka5csv.png)
Register Page
![AI SQL Prep Plan Screenshot](https://res.cloudinary.com/dztzgqzjp/image/upload/v1741453540/register_ro6agg.png)
Question Form
![AI SQL Prep Plan Screenshot](https://res.cloudinary.com/dztzgqzjp/image/upload/v1741453519/Question_syc2sl.png)
Generated Form For Submitted Questions
![AI SQL Prep Plan Screenshot](https://res.cloudinary.com/dztzgqzjp/image/upload/v1741453558/generatedplan_gutte5.png)
Generated 4 week Plan
![AI SQL Prep Plan Screenshot](https://res.cloudinary.com/dztzgqzjp/image/upload/v1741453522/see4weekplan_tayyh5.png)
Generated 8 week Plan
![AI SQL Prep Plan Screenshot](https://res.cloudinary.com/dztzgqzjp/image/upload/v1741453506/see8weekplan_xqzk7r.png)
Dashboard Before Saving Information
![AI SQL Prep Plan Screenshot](https://res.cloudinary.com/dztzgqzjp/image/upload/v1741453521/DashBoard1_gnprgv.png)
Dashboard after Saving Information (Plan 3 added)
![AI SQL Prep Plan Screenshot](https://res.cloudinary.com/dztzgqzjp/image/upload/v1741453527/dashboard2_irzao0.png)
Sidebar
![AI SQL Prep Plan Screenshot](https://res.cloudinary.com/dztzgqzjp/image/upload/v1741453522/sidebar_wz9y8t.png)


## Future Enhancements 🚀
- 📌 Notifications & reminders
- 📌 Mobile app version
- 📌 Export plan as PDF

## Contributing 🤝
Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License 📝
This project is licensed under the **MIT License**.

---

💡 **Let's Ace SQL Interviews Together!**
