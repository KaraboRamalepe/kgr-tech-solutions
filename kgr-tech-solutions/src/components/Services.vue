<template>
  <!-- 🔥 TOP SECTION (About + Explore More) -->
  <v-container class="py-16" style="background-color: #FFFFFF;">
    <v-row align="center" justify="center">
      
      <!-- LEFT: IMAGE -->
      <v-col cols="12" md="5">
  <v-img
  src="@/assets/tech.jpg"
  alt="KGR Tech"
  contain
  height="260"
  style="border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);"
/>
      </v-col>

      <!-- RIGHT: TEXT -->
      <v-col cols="12" md="7">
        <h2 class="font-weight-bold mb-3" style="color: #000;">
          KGR Tech Solutions is a forward thinking technology company.
        </h2>

        <p class="mb-4" style="color: #555;">
          It is focused on helping businesses automate processes, build smart digital solutions, and innovate for growth.
          We design and develop systems that simplify operations, improve efficiency, and empower organizations to thrive in a modern digital world.
        </p>

        <!-- Explore More Button -->
        <v-btn
          variant="text"
          style="color: #ffb300; font-weight: bold;"
          @click="scrollToServices"
        >
          Explore more →
        </v-btn>
      </v-col>

    </v-row>
  </v-container>


  <!-- 🔥 SERVICES SECTION -->
  <v-container id="services" class="py-24" style="background-color: #FFFFFF;">
    
    <!-- Section Title -->
    <h2 class="text-h4 text-center mb-12 font-weight-bold" style="color: #000000;">
      Our Services
    </h2>

    <!-- Service Cards -->
    <v-row dense>
      
      <!-- Web Development -->
      <v-col cols="12" md="4">
        <v-card elevation="5" class="pa-6 hoverable service-card" style="border: 2px solid #ffb300;">
          <v-card-title class="font-weight-bold" style="color: #000000;">
            Web Development
          </v-card-title>
          <v-card-text style="color: #555555;">
            Modern websites and landing pages for your business.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Business Automation -->
      <v-col cols="12" md="4">
        <v-card elevation="5" class="pa-6 hoverable service-card" style="border: 2px solid #ffb300;">
          <v-card-title class="font-weight-bold" style="color: #000000;">
            Business Automation
          </v-card-title>
          <v-card-text style="color: #555555;">
            Streamline operations with dashboards and custom tools.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Testing & QA -->
      <v-col cols="12" md="4">
        <v-card elevation="5" class="pa-6 hoverable service-card" style="border: 2px solid #ffb300;">
          <v-card-title class="font-weight-bold" style="color: #000000;">
            Testing & QA
          </v-card-title>
          <v-card-text style="color: #555555;">
            Ensure quality and performance with professional testing services.
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
// 🔥 Scroll to Services section
const scrollToServices = () => {
  const section = document.getElementById('services')
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.service-card {
  transition: all 0.3s ease;
}

.service-card:hover {
  background-color: #000000 !important;
  color: #ffb300 !important;
  border-color: #ffb300 !important;
}

.service-card:hover v-card-title {
  color: #ffb300 !important;
}

.service-card:hover v-card-text {
  color: #FFFFFF !important;
}
</style>