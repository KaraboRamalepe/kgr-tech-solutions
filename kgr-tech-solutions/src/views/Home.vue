<template>
  <Navbar />
  <Hero />
  <Services />
  <About />
  <Solutions />
  <Footer />

  <!-- WhatsApp Floating Button -->
  <a
    href="https://wa.me/27726833486"
    target="_blank"
    class="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <v-icon size="28">mdi-whatsapp</v-icon>
  </a>

  <!-- Chatbot Kay -->
<div class="chatbot-wrapper">
  <div v-if="open" class="chat-window">
    
    <div class="chat-header">
      <div>
        <strong>Kay</strong>
        <small>AI Assistant</small>
      </div>
      <span @click="open = false">✕</span>
    </div>

    <div class="chat-body" ref="chatBox">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="msg.role"
      >
        {{ msg.content }}
      </div>
    </div>

    <div class="chat-input">
      <input
        v-model="input"
        @keyup.enter="sendMessage"
        placeholder="Ask Kay anything..."
      />
      <button @click="sendMessage">Send</button>
    </div>

  </div>

  <!-- Floating button -->
  <div class="chat-toggle" @click="open = !open">
    💬
  </div>
</div>
</template>


<script setup>
import { ref } from 'vue'

import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Services from '@/components/Services.vue'
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'
import Solutions from '@/components/Solutions.vue'

const open = ref(false)
const input = ref('')
const messages = ref([
  { role: 'bot', content: 'Hi 👋 I am Kay, your AI assistant. How can I help you?' }
])

const sendMessage = async () => {
  if (!input.value.trim()) return

  // add user message
  messages.value.push({
    role: 'user',
    content: input.value
  })

  const userText = input.value
  input.value = ''

  // call backend (OpenAI)
  const res = await fetch('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userText })
  })

  const data = await res.json()

  messages.value.push({
    role: 'bot',
    content: data.reply
  })
}
</script>
<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 60px;
  height: 60px;
  background: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  z-index: 9999;
  text-decoration: none;

  animation: pulse 2s infinite;
  transition: all 0.3s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

.chatbot-wrapper {
  position: fixed;
  bottom: 100px;
  right: 25px;
  z-index: 9999;
}

/* Toggle */
.chat-toggle {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #000, #FFD700);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 22px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

/* Window */
.chat-window {
  width: 300px;
  height: 400px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
}

/* Header */
.chat-header {
  background: black;
  color: gold;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

/* Messages */
.chat-body {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}

.user {
  text-align: right;
  margin: 5px 0;
}

.bot {
  text-align: left;
  margin: 5px 0;
  color: #333;
}

/* Input */
.chat-input {
  display: flex;
  border-top: 1px solid #eee;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
}

.chat-input button {
  background: gold;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}
</style>