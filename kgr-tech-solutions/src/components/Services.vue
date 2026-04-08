<template>
  <v-container class="py-24" style="background-color: #FFFFFF;"> <!-- White background -->
    <!-- Section Title -->
    <h2 class="text-h4 text-center mb-12 font-weight-bold" style="color: #000000;">
      Our Services
    </h2>

    <!-- Service Cards -->
    <v-row dense>
      <!-- Web Development -->
      <v-col cols="12" md="4">
        <v-card
          elevation="5"
          class="pa-6 hoverable service-card"
          style="border: 2px solid #ffb300;"
        >
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
        <v-card
          elevation="5"
          class="pa-6 hoverable service-card"
          style="border: 2px solid #ffb300;"
        >
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
        <v-card
          elevation="5"
          class="pa-6 hoverable service-card"
          style="border: 2px solid #ffb300;"
        >
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