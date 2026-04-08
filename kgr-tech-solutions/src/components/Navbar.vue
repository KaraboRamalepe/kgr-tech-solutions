<template>
  <v-app-bar flat color="black" dark elevate-on-scroll>
    <v-container class="d-flex justify-space-between align-center">
      <!-- Logo -->
      <h2 class="text-h6 font-weight-bold" style="color: #FFD700;">KGR Tech</h2>

      <!-- Navigation Links -->
      <v-row class="align-center" dense>
        <v-btn text class="nav-btn">Home</v-btn>
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
            <v-btn v-bind="props" text class="nav-btn" @click="toggleMenu">
              Solutions
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <!-- Mega Menu Panel -->
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
                  <div>
                    <span class="solution-title">{{ solution.title }}</span>
                    <div class="solution-desc">{{ solution.desc }}</div>
                  </div>
                  <v-btn
                    small
                    text
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

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Solutions data
const solutions = reactive([
  { title: 'Web Applications', desc: 'Custom websites and landing pages.', link: '/solutions/web-applications' },
  { title: 'Salesforce Solutions', desc: 'Automate CRM processes efficiently.', link: '/solutions/salesforce' },
  { title: 'Automation Workflows', desc: 'Boost productivity with smart automation.', link: '/solutions/automation' },
  { title: 'AI Powered Tools', desc: 'Leverage AI to enhance insights.', link: '/solutions/ai-tools' },
  { title: 'Frontend Development', desc: 'Responsive, modern interfaces.', link: '/solutions/frontend' },
  { title: 'Full-Stack Systems', desc: 'End-to-end scalable systems.', link: '/solutions/fullstack' },
  { title: 'UI/UX Design', desc: 'Intuitive and user-friendly designs.', link: '/solutions/ui-ux' },
  { title: 'System Integrations', desc: 'Connect your software seamlessly.', link: '/solutions/integrations' },
])
</script>

<style scoped>
.nav-btn {
  color: #FFFFFF;
  transition: color 0.3s ease;
}

.nav-btn:hover {
  color: #FFD700 !important;
}

/* Mega Menu Panel */
.solutions-panel {
  background-color: #111111;
  color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

/* Horizontal Solution Items */
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
  color: #FFD700;
}

.solution-desc {
  font-size: 0.85rem;
  color: #CCCCCC;
  margin-top: 2px;
}

/* Learn More button style */
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
</style>