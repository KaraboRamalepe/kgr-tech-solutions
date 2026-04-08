<template>
  <v-container class="py-24" style="background-color: #FFFFFF;">
    <!-- Section Title -->
    <h2 class="text-h4 text-center mb-12 font-weight-bold" style="color: #000000;">
      Our Solutions
    </h2>

    <v-row dense>
      <!-- Cloud Solutions -->
      <v-col cols="12" md="4">
        <v-card
          elevation="5"
          class="pa-6 hoverable solution-card"
          style="border: 2px solid #ffb300;"
        >
          <v-card-title class="font-weight-bold" style="color: #000000;">
            Cloud Solutions
          </v-card-title>
          <v-card-text style="color: #555555;">
            Secure, scalable cloud infrastructure tailored for your business needs.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Data Analytics -->
      <v-col cols="12" md="4">
        <v-card
          elevation="5"
          class="pa-6 hoverable solution-card"
          style="border: 2px solid #ffb300;"
        >
          <v-card-title class="font-weight-bold" style="color: #000000;">
            Data Analytics
          </v-card-title>
          <v-card-text style="color: #555555;">
            Turn insights into action with smart analytics and dashboards.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- IT Consulting -->
      <v-col cols="12" md="4">
        <v-card
          elevation="5"
          class="pa-6 hoverable solution-card"
          style="border: 2px solid #ffb300;"
        >
          <v-card-title class="font-weight-bold" style="color: #000000;">
            IT Consulting
          </v-card-title>
          <v-card-text style="color: #555555;">
            Expert guidance to optimize your technology strategy and workflow.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.solution-card {
  transition: all 0.3s ease;
}

.solution-card:hover {
  background-color: #000000 !important;
  color: #ffb300 !important;
  border-color: #ffb300 !important;
}

.solution-card:hover v-card-title {
  color: #ffb300 !important;
}

.solution-card:hover v-card-text {
  color: #FFFFFF !important;
}
</style>