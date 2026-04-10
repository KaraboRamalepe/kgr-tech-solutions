<template>
  <v-container
    fluid
    class="hero-container text-center d-flex flex-column justify-center align-center"
    :style="{ backgroundImage: `url(${hero})` }"
  >
    <!-- Headline -->
    <h1 class="text-h2 font-weight-bold mb-4 hero-title">
      <span
        v-for="(char, i) in titleChars"
        :key="i"
        class="hero-letter"
        :style="{ animationDelay: i * 0.06 + 's' }"
      >
        {{ char === ' ' ? '\u00A0' : char }}
      </span>
    </h1>

    <!-- Subtext -->
    <p class="text-subtitle-1 mb-6 hero-subtitle">
      We create websites, business automation tools, and systems that help companies scale efficiently.
    </p>

    <!-- CTA Button -->
    <div class="hero-buttons">
      <v-btn
        class="hero-btn primary-btn"
        :loading="isLoading"
        @click="goToSolutions"
      >
        {{ buttonText }}
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import hero from '@/assets/hero.png'

const title = "Build Smart. Grow Faster."
const titleChars = title.split("")

const isLoading = ref(false)
const buttonText = ref("View Solutions")

const goToSolutions = () => {
  if (isLoading.value) return

  isLoading.value = true
  buttonText.value = "Loading Solutions..."

  setTimeout(() => {
    const section = document.getElementById('solutions')

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/solutions'
    }

    // reset after UX delay
    setTimeout(() => {
      isLoading.value = false
      buttonText.value = "View Solutions"
    }, 800)

  }, 900)
}
</script>

<style scoped>
.hero-btn {
  position: relative;
  overflow: hidden;
}

/* subtle glow pulse while loading */
.hero-btn.v-btn--loading {
  box-shadow: 0 0 20px rgba(255, 179, 0, 0.4);
}
.hero-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);

  /* gradient text */
  background: linear-gradient(90deg, #ffb300, #ffffff, #ffb300);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* smooth glow movement (clean version) */
  animation:
    letterIn 0.6s ease forwards,
    shimmer 6s linear infinite;
}

/* entry */
@keyframes letterIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* smoother gradient flow */
@keyframes shimmer {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

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
.hero-title:hover .hero-letter {
  transform: translateY(-2px);
  transition: 0.2s ease;
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

/* Content above overlay */
.hero-title,
.hero-subtitle,
.hero-buttons {
  position: relative;
  z-index: 1;
}

.hero-buttons {
  display: flex;
  justify-content: center;
}

/* Button */
.hero-btn {
  font-weight: 600;
  text-transform: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  padding: 12px 28px;
  font-size: 1rem;
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
  transform: translateY(-2px); /* 🔥 subtle lift */
}
</style>