<template>
  <!-- 🔥 TOP SECTION -->
  <v-container class="py-16 top-section">
    <v-row align="center" justify="center">

      <v-col cols="12" md="5">
        <v-img
          src="@/assets/tech.jpg"
          alt="KGR Tech"
          contain
          height="260"
          class="top-image"
        />
      </v-col>

      <v-col cols="12" md="7">
        <h2 class="font-weight-bold mb-3">
          KGR Tech Solutions is a forward thinking technology company.
        </h2>

        <p class="mb-4">
          It is focused on helping businesses automate processes, build smart digital solutions, and innovate for growth.
          We design and develop systems that simplify operations, improve efficiency, and empower organizations to thrive in a modern digital world.
        </p>

        <v-btn variant="text" class="cta-btn" @click="scrollToServices">
          Explore more →
        </v-btn>
      </v-col>

    </v-row>
  </v-container>

  <!-- 🔥 STRIPE STYLE HEADER -->
  <v-container class="services-header" fluid>
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">

        <span class="services-tag">What we do</span>

        <h1 class="services-title">Our Services</h1>

        <p class="services-subtitle">
          We design, build, and secure modern digital systems that help businesses scale,
          automate processes, and stay ahead in a fast-changing digital world.
        </p>

      </v-col>
    </v-row>
  </v-container>

  <!-- 🔥 SOFTWARE DEVELOPMENT -->
  <v-container class="service-section dark" fluid>
    <v-row no-gutters align="center">

      <v-col cols="12" md="6" class="text-side">
        <span class="tag">Core Development Service</span>

        <h2>Software Development</h2>

        <p class="hook">
          We build scalable digital products that power modern businesses.
        </p>

        <ul class="features">
          <li>🌐 Websites & landing pages</li>
          <li>⚙️ Web applications & dashboards</li>
          <li>📱 Mobile apps</li>
          <li>🔌 API integration</li>
        </ul>
      </v-col>

      <v-col cols="12" md="6" class="image-side">
        <v-img src="@/assets/frontend.webp" height="240" cover />
      </v-col>

    </v-row>
  </v-container>

  <!-- 🔥 BUSINESS AUTOMATION -->
  <v-container class="service-section light" fluid>
    <v-row no-gutters align="center">

      <v-col cols="12" md="6" class="image-side">
        <v-img src="@/assets/automation.jpg" height="240" cover />
      </v-col>

      <v-col cols="12" md="6" class="text-side">
        <span class="tag">Productivity Engine</span>

        <h2>Business Automation</h2>

        <p class="hook">
          We eliminate manual work through smart automation systems.
        </p>

        <ul class="features">
          <li>📊 Dashboards</li>
          <li>🔄 Workflow automation</li>
          <li>⚙️ Business systems</li>
          <li>📁 Data processing tools</li>
        </ul>
      </v-col>

    </v-row>
  </v-container>

  <!-- 🔥 TESTING & QA -->
  <v-container class="service-section dark" fluid>
    <v-row no-gutters align="center">

      <v-col cols="12" md="6" class="text-side">
        <span class="tag">Quality Assurance</span>

        <h2>Testing & QA</h2>

        <p class="hook">
          We ensure your systems are stable, fast, and production-ready.
        </p>

        <ul class="features">
          <li>🧪 Manual testing</li>
          <li>🤖 Automated testing</li>
          <li>⚡ Performance checks</li>
          <li>🐞 Bug tracking</li>
        </ul>
      </v-col>

      <v-col cols="12" md="6" class="image-side">
        <v-img src="@/assets/system.png" height="240" cover />
      </v-col>

    </v-row>
  </v-container>

  <!-- 🔥 CYBERSECURITY -->
  <v-container class="service-section light" fluid>
    <v-row no-gutters align="center">

      <v-col cols="12" md="6" class="image-side">
        <v-img src="@/assets/AI.webp" height="240" cover />
      </v-col>

      <v-col cols="12" md="6" class="text-side">
        <span class="tag">Security Layer</span>

        <h2>Cybersecurity</h2>

        <p class="hook">
          We protect your systems from threats and vulnerabilities.
        </p>

        <ul class="features">
          <li>🛡 Threat detection</li>
          <li>🏗 Secure architecture</li>
          <li>📊 Risk analysis</li>
          <li>🔍 Vulnerability scanning</li>
        </ul>
      </v-col>

    </v-row>
  </v-container>

</template>

<script setup>
const scrollToServices = () => {
  const section = document.getElementById('services')
  if (section) section.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>

/* TOP SECTION */
.top-section {
  background: #fff;
}

.top-image {
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* BUTTON */
.cta-btn {
  color: #ffb300;
  font-weight: bold;
}

/* HEADER (STRIPE STYLE) */
.services-header {
  padding: 80px 20px 40px;
}

.services-tag {
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 179, 0, 0.12);
  color: #ffb300;
}

.services-title {
  font-size: 42px;
  font-weight: 700;
  margin: 10px 0;
}

.services-subtitle {
  font-size: 16px;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
}

/* SECTION BASE */
.service-section {
  padding: 60px 0;
}

/* DARK / LIGHT ALTERNATING */
.service-section.dark {
  background: linear-gradient(135deg, #0f0f10, #1a1a1d);
  color: #fff;
}

.service-section.light {
  background: linear-gradient(135deg, #ffffff, #f6f6f6);
  color: #111;
}

/* TEXT */
.text-side {
  padding: 30px 40px;
}

.text-side h2 {
  font-size: 26px;
  margin-bottom: 10px;
}

.hook {
  font-size: 15px;
  margin-bottom: 15px;
  opacity: 0.85;
  max-width: 420px;
}

/* TAG */
.tag {
  display: inline-block;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 20px;
  background: rgba(255, 179, 0, 0.12);
  color: #ffb300;
  margin-bottom: 10px;
}

/* FEATURES */
.features {
  list-style: none;
  padding: 0;
}

.features li {
  font-size: 14px;
  margin-bottom: 8px;
  opacity: 0.9;
}

/* IMAGE */
.image-side {
  padding: 20px;
}

.image-side :deep(img) {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.25);
  transition: 0.3s;
}

.image-side :deep(img):hover {
  transform: scale(1.03);
}

/* MOBILE */
@media (max-width: 960px) {
  .text-side {
    text-align: center;
    padding: 20px;
  }

  .hook {
    margin: 0 auto 15px;
  }
}
</style>