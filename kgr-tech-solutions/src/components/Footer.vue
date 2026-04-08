<template>
  <v-footer
    padless
    style="background-color: #000000; color: #FFFFFF;" <!-- Black background -->
  >
    <v-container class="text-center py-6">
      <!-- Quick Links -->
      <v-row justify="center" class="mb-4">
        <v-col cols="auto">
          <a href="#" class="footer-link">Privacy Policy</a>
        </v-col>
        <v-col cols="auto">
          <a href="#" class="footer-link">Terms of Service</a>
        </v-col>
        <v-col cols="auto">
          <a href="#" class="footer-link">Contact</a>
        </v-col>
      </v-row>

      <!-- Copyright -->
      <div style="color: #FFFFFF;">
        © 2026 <span style="color: #ffb300;">KGR Tech Solutions</span>. All rights reserved.
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
</script>

<style scoped>
.footer-link {
  color: #FFFFFF;
  text-decoration: none;
  margin: 0 8px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffb300; /* Gold on hover */
}
</style>