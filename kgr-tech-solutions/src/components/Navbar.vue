<template>
  <v-app-bar flat color="black" dark elevate-on-scroll>
    <v-container class="d-flex align-center">

      <!-- Left: Logo -->
      <div class="d-flex align-left">
        <router-link to="/">
          <img 
            src="@/assets/kgrlogo.png" 
            alt="KGR Logo" 
            class="logo-img"
          />
        </router-link>
      </div>

      <!-- Spacer to push nav links to the right -->
      <v-spacer></v-spacer>

      <!-- Right: Navigation Links -->
      <v-row class="align-center" dense>

        <v-btn icon class="nav-btn no-underline" @click="goHome">
          <v-img
            :src="homeIcon"
            alt="Home"
            contain
            width="28"
            height="28"
          />
        </v-btn>

        <v-btn text class="nav-btn">Services</v-btn>
        <v-btn text class="nav-btn">Portfolio</v-btn>

        <!-- Solutions Mega Menu -->
        <v-menu
          v-model="menuOpen"
          offset-y
          open-on-hover
          transition="scale-transition"
          max-width="800"
          min-width="500"
          close-on-content-click="false"
        >
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text class="nav-btn">
              Solutions
              <v-icon end>mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <v-card flat class="pa-4 solutions-panel">
            <v-row dense>
              <v-col
                v-for="(solution, i) in solutions"
                :key="i"
                cols="12"
                sm="6"
                class="solution-line"
              >
                <div class="solution-item">
                  <div class="d-flex align-center gap-2">
                    <v-img
                      :src="solution.img"
                      alt="solution image"
                      contain
                      width="60"
                      height="60"
                      class="rounded"
                    />
                    <div>
                      <span class="solution-title">{{ solution.title }}</span>
                      <div class="solution-desc">{{ solution.desc }}</div>
                    </div>
                  </div>
                  <v-btn
                    size="small"
                    variant="text"
                    class="learn-more-btn"
                    :href="solution.link"
                  >
                    Learn More
                  </v-btn>
                </div>
                <v-divider class="my-2" color="#ffb300"></v-divider>
              </v-col>
            </v-row>
          </v-card>
        </v-menu>

        <v-btn text class="nav-btn">Contact</v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref, reactive } from 'vue'
import homeIcon from '@/assets/homeicon.png'

const menuOpen = ref(false)

// Home click handler
const goHome = () => {
  const section = document.getElementById('home')
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = '/'
  }
}

// Solutions data with images
const solutions = reactive([
  { title: 'Web Applications', desc: 'Custom websites and landing pages.', link: '/solutions/web-applications', img: '@/assets/webapps.jpg' },
  { title: 'Salesforce Solutions', desc: 'Automate CRM processes efficiently.', link: '/solutions/salesforce', img: '@/assets/salesforce.png' },
  { title: 'Automation Workflows', desc: 'Boost productivity with smart automation.', link: '/solutions/automation', img: '@/assets/automation.jpg' },
  { title: 'AI Powered Tools', desc: 'Leverage AI to enhance insights.', link: '/solutions/ai-tools', img: '@/assets/AI.webp' },
  { title: 'Frontend Development', desc: 'Responsive, modern interfaces.', link: '/solutions/frontend', img: '@/assets/frontend.webp' },
  { title: 'Full-Stack Systems', desc: 'End-to-end scalable systems.', link: '/solutions/fullstack', img: '@/assets/fullstack.jpg' },
  { title: 'UI/UX Design', desc: 'Intuitive and user-friendly designs.', link: '/solutions/ui-ux', img: '@/assets/ux.webp' },
  { title: 'System Integrations', desc: 'Connect your software seamlessly.', link: '/solutions/integrations', img: '@/assets/system.png' },
])
</script>

<style scoped>
.nav-btn {
  position: relative;
  color: #FFFFFF;
  transition: all 0.3s ease;
}

/* Underline base */
.nav-btn::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 2px;
  width: 0%;
  height: 2px;
  background-color: #FFD700;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

/* Hover */
.nav-btn:hover {
  color: #FFD700 !important;
}

.nav-btn:hover::after {
  width: 80%;
}

/* ❌ Remove underline from icon */
.no-underline::after {
  display: none;
}

/* Mega Menu */
.solutions-panel {
  background-color: #a6a3a3;
  color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.solution-line {
  padding: 0 12px;
}

.solution-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.solution-title {
  font-weight: 600;
  color: #000000;
}

.solution-desc {
  font-size: 0.85rem;
  color: #ffffff;
  margin-top: 2px;
}

.learn-more-btn {
  font-size: 0.85rem;
  font-weight: 500;
  color: #FFD700;
  transition: all 0.3s ease;
  padding: 2px 8px;
}

.learn-more-btn:hover {
  color: #ffb300 !important;
  background-color: rgba(255, 179, 0, 0.1);
  border-radius: 4px;
}

.v-divider {
  border-color: #ffb300 !important;
}
.logo-img {
  height: 140px; /* adjust size */
  width: auto;
  cursor: pointer;
}
</style>