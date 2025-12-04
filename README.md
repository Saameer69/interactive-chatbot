# Portfolio AI Chatbot

A full-stack interactive AI chatbot demo, perfect for portfolios.

## Folder Structure

simple_chatbot/
│
├── backend/
│ ├── app.py
│ ├── requirements.txt
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ ├── script.js
│ └── assets/
│ ├── bot-avatar.png
│ ├── screenshot-light.png
│ └── screenshot-dark.png
│
└── README.md



## Features

- Modern chat UI with **glassmorphism**  
- **Dark/Light theme** toggle with SVG icons and ripple animation  
- Typing indicator ("AI is typing...")  
- Chat avatars and timestamps  
- Sound feedback on sending messages  
- Enter key support  
- Fully responsive  

## Backend

- Python FastAPI backend for chatbot responses  
- Simple demo AI with static replies  
- Endpoint: `/chat` accepts POST JSON `{ "message": "your message" }`  

### Setup

1. Go to backend folder:
   ```bash
   cd backend
   pip install -r requirements.txt
   uvicorn app:app --reload

2. Open frontend/index.html in your browser (or deploy frontend on Netlify/GitHub Pages)


---

# ✅ 5️⃣ How to Run (Local)

1. **Start backend**  
```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload