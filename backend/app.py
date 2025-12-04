from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

responses = {
    "hi": ["Hello 👋", "Hey there!", "Hi! How can I help?"],
    "hello": ["Hello 👋", "Hi!"],
    "hours": ["We are open from 9 AM to 6 PM."],
    "contact": ["You can contact us at support@example.com"],
    "services": ["We provide web development and AI services."],
    "bye": ["Goodbye 👋", "See you soon!"]
}

def get_reply(message):
    msg = message.lower()
    for key in responses:
        if key in msg:
            return random.choice(responses[key])
    return "Sorry, I didn't understand that."

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    message = data.get("message", "")
    reply = get_reply(message)
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)
