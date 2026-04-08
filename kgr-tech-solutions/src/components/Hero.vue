<template>
  <v-container
    fluid
    class="hero-container text-center d-flex flex-column justify-center align-center"
    :style="{ backgroundImage: `url(${hero})` }" 
  >
    <!-- Headline -->
    <h1 class="text-h2 font-weight-bold mb-4 hero-title">
      Build Smart. Grow Faster.
    </h1>

    <!-- Subtext -->
    <p class="text-subtitle-1 mb-6 hero-subtitle">
      We create websites, business automation tools, and systems that help companies scale efficiently.
    </p>

    <!-- Buttons -->
    <div class="hero-buttons">
      <v-btn large class="hero-btn primary-btn mr-4">
        Get Started
      </v-btn>
      <v-btn large outlined class="hero-btn secondary-btn">
        Learn More
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import hero from '@/assets/hero.png' // Make sure this exists
</script>

<style scoped>
.hero-container {
  min-height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
}

/* Overlay */
.hero-container::before {
  content: '';
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.5);
  z-index:0;
}

/* Make content appear above overlay */
.hero-title,
.hero-subtitle,
.hero-buttons {
  position: relative;
  z-index: 1;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

/* Buttons */
.hero-btn {
  font-weight: 600;
  text-transform: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

/* Primary Button */
.primary-btn {
  background-color: #ffb300;
  color: #000;
}

.primary-btn:hover {
  background-color: #000 !important;
  color: #ffb300 !important;
  box-shadow: 0 6px 14px rgba(255,179,0,0.4);
}

/* Secondary Outlined Button */
.secondary-btn {
  border: 2px solid #ffb300;
  color: #ffb300;
}

.secondary-btn:hover {
  background-color: #ffb300 !important;
  color: #000 !important;
  box-shadow: 0 6px 14px rgba(255,179,0,0.4);
}
</style>