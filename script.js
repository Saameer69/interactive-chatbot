// ===== ELEMENTS =====
const input = document.getElementById("input");
const chat = document.getElementById("chat-body");
const typing = document.getElementById("typing");
const sound = document.getElementById("sendSound");
const themeToggle = document.getElementById("themeToggle");

// ===== ENTER KEY SUPPORT =====
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    send();
  }
});

// ===== THEME TOGGLE =====
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

// ===== TIME FORMAT =====
function getTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

// ===== ADD MESSAGE =====
function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = `message ${type}`;

  const avatar = document.createElement("img");
  avatar.className = "avatar";
  avatar.src =
    type === "user"
      ? "https://cdn-icons-png.flaticon.com/512/847/847969.png"
      : "https://cdn-icons-png.flaticon.com/512/4712/4712109.png";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = `
    ${text}
    <div class="time">${getTime()}</div>
  `;

  msg.appendChild(avatar);
  msg.appendChild(bubble);
  chat.appendChild(msg);

  chat.scrollTop = chat.scrollHeight;
}

// ===== SEND MESSAGE =====
async function send() {
  const message = input.value.trim();
  if (!message) return;

  sound.play();
  addMessage(message, "user");
  input.value = "";

  typing.classList.remove("hidden");

  try {
    const response = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    setTimeout(() => {
      typing.classList.add("hidden");
      addMessage(data.reply, "bot");
    }, 800);

  } catch (error) {
    typing.classList.add("hidden");
    addMessage("Server not reachable.", "bot");
  }
}

// ===== BOT WELCOME MESSAGE ON LOAD =====
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    addMessage("Hello 👋 How can I help you today?", "bot");
  }, 500);
});
