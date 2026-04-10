<template>
  <v-container fluid class="about-video pa-0">
    <div class="split-screen">

      <!-- LEFT SIDE: DARK CYBER / CODE RAIN -->
      <div class="left-side">
        <div class="code-rain"></div>

        <div class="overlay-text overlay-left">
          <h3>SECURE SYSTEMS</h3>
          <p>Cyber • Infrastructure • Protection</p>
        </div>
      </div>

      <!-- RIGHT SIDE: TECH / AUTOMATION VISUAL -->
      <div class="right-side">
        <div class="network-grid"></div>

        <div class="overlay-text overlay-right">
          <h3>AUTOMATION ENGINE</h3>
          <p>Software • Cloud • Innovation</p>
        </div>
      </div>

      <!-- CENTER CONTENT (YOUR ABOUT SECTION) -->
      <div class="center-content">
        <h2 class="title">
          About KGR Tech Solutions
        </h2>

        <p class="description">
          At KGR Tech Solutions, we specialize in creating innovative digital experiences that
          help businesses scale efficiently. From custom websites to automation tools and quality
          assurance services, we combine technology and strategy to deliver measurable results.
        </p>

        <v-btn class="about-btn mt-6">
          Learn More
        </v-btn>
      </div>

    </div>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.about-video {
  background: black;
  height: 100vh;
  overflow: hidden;
}

/* SPLIT LAYOUT */
.split-screen {
  display: flex;
  height: 100vh;
  position: relative;
}

/* LEFT SIDE */
.left-side {
  width: 50%;
  background: #000;
  position: relative;
  overflow: hidden;
}

/* RIGHT SIDE */
.right-side {
  width: 50%;
  background: linear-gradient(135deg, #0f172a, #1e3a8a);
  position: relative;
  overflow: hidden;
}

/* CODE RAIN EFFECT */
.code-rain {
  position: absolute;
  width: 100%;
  height: 200%;
  background: repeating-linear-gradient(
    180deg,
    rgba(0, 255, 100, 0.08) 0px,
    rgba(0, 255, 100, 0.08) 1px,
    transparent 1px,
    transparent 18px
  );
  animation: fall 6s linear infinite;
}

@keyframes fall {
  from { transform: translateY(-50%); }
  to { transform: translateY(0%); }
}

/* NETWORK GRID */
.network-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(0, 200, 255, 0.25) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

/* OVERLAY LABELS */
.overlay-text {
  position: absolute;
  bottom: 40px;
  left: 30px;
  color: white;
  z-index: 2;
  opacity: 0;
  animation: fadeIn 1.5s ease forwards;
}

.overlay-left {
  animation-delay: 0.6s;
}

.overlay-right {
  animation-delay: 1.2s;
}

.overlay-text h3 {
  font-size: 18px;
  letter-spacing: 2px;
}

.overlay-text p {
  opacity: 0.6;
  font-size: 14px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* CENTER CONTENT (YOUR ABOUT SECTION) */
.center-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 700px;
  z-index: 5;
  padding: 20px;
}

.title {
  color: #ffb300;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.description {
  color: white;
  opacity: 0.9;
  font-size: 16px;
  line-height: 1.6;
}

/* BUTTON */
.about-btn {
  background-color: #ffb300 !important;
  color: #000 !important;
  transition: 0.3s ease;
}

.about-btn:hover {
  background-color: #000 !important;
  color: #ffb300 !important;
  border: 1px solid #ffb300;
}
</style>