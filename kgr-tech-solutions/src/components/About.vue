<template>
  <v-container class="py-24" style="background-color: #000000;">
    <v-row justify="center" align="center">
      <v-col cols="12" md="8" class="text-center">
        <!-- Section Title -->
        <h2 class="text-h4 font-weight-bold mb-6" style="color: #ffb300;">
          About KGR Tech Solutions
        </h2>

        <!-- Description -->
        <p class="text-subtitle-1" style="color: #FFFFFF;">
          At KGR Tech Solutions, we specialize in creating innovative digital experiences that
          help businesses scale efficiently. From custom websites to automation tools and quality
          assurance services, we combine technology and strategy to deliver measurable results.
        </p>

        <!-- Optional CTA Button -->
        <v-btn
          large
          class="mt-6 about-btn"
          style="background-color: #ffb300; color: #000000;"
        >
          Learn More
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.about-btn {
  transition: all 0.3s ease;
}

.about-btn:hover {
  background-color: #000000 !important;
  color: #ffb300 !important;
}
</style>