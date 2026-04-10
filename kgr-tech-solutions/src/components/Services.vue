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
          class="top-image fade-in"
        />
      </v-col>

      <v-col cols="12" md="7" class="fade-in">
        <h2 class="font-weight-bold mb-3">
          KGR Tech Solutions is a forward thinking technology company.
        </h2>

        <p class="mb-4">
          It is focused on helping businesses automate processes, build smart digital solutions, and innovate for growth.
        </p>

        <v-btn variant="text" class="cta-btn" @click="scrollToServices">
          Explore more →
        </v-btn>
      </v-col>

    </v-row>
  </v-container>

  <!-- 🔥 STRIPE HEADER -->
  <v-container class="services-header fade-in" fluid>
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">

        <span class="services-tag">What we do</span>
        <h1 class="services-title">Our Services</h1>

        <p class="services-subtitle">
          We design, build, and secure modern digital systems that help businesses scale.
        </p>

      </v-col>
    </v-row>
  </v-container>

  <!-- 🔥 SOFTWARE DEVELOPMENT -->
  <v-container class="service-section dark slide-up" fluid>
    <v-row align="center">

      <v-col cols="12" md="6" class="text-side">
        <span class="tag">Core Development Service</span>

        <h2 class="title">Software Development</h2>

        <p class="hook">We build scalable digital products for modern businesses.</p>

        <ul class="features">
          <li>🌐 Websites & landing pages</li>
          <li>⚙️ Web apps & dashboards</li>
          <li>📱 Mobile apps</li>
          <li>🔌 API systems</li>
        </ul>

        <v-btn class="get-started-btn mt-6">
          Get Started
        </v-btn>
      </v-col>

      <v-col cols="12" md="6" class="image-side hover-float">
        <v-img src="@/assets/frontend.webp" height="240" cover class="service-img"/>
      </v-col>

    </v-row>
  </v-container>

  <!-- 🔥 BUSINESS AUTOMATION -->
  <v-container class="service-section light slide-up" fluid>
    <v-row align="center">

      <v-col cols="12" md="6" class="image-side hover-float">
        <v-img src="@/assets/automation.jpg" height="240" cover class="service-img"/>
      </v-col>

      <v-col cols="12" md="6" class="text-side">
        <span class="tag">Productivity Engine</span>

        <h2 class="title">Business Automation</h2>

        <p class="hook">We eliminate manual work through smart automation systems.</p>

        <ul class="features">
          <li>📊 Dashboards</li>
          <li>🔄 Workflow automation</li>
          <li>⚙️ Business systems</li>
          <li>📁 Data tools</li>
        </ul>

        <v-btn class="get-started-btn mt-6">
          Get Started
        </v-btn>
      </v-col>

    </v-row>
  </v-container>

  <!-- 🔥 TESTING -->
  <v-container class="service-section dark slide-up" fluid>
    <v-row align="center">

      <v-col cols="12" md="6" class="text-side">
        <span class="tag">Quality Assurance</span>

        <h2 class="title">Testing & QA</h2>

        <p class="hook">We ensure your systems are stable and production-ready.</p>

        <ul class="features">
          <li>🧪 Manual testing</li>
          <li>🤖 Automated testing</li>
          <li>⚡ Performance checks</li>
          <li>🐞 Bug tracking</li>
        </ul>

        <v-btn class="get-started-btn mt-6">
          Get Started
        </v-btn>
      </v-col>

      <v-col cols="12" md="6" class="image-side hover-float">
        <v-img src="@/assets/system.png" height="240" cover class="service-img"/>
      </v-col>

    </v-row>
  </v-container>

  <!-- 🔥 CYBERSECURITY -->
  <v-container class="service-section light slide-up" fluid>
    <v-row align="center">

      <v-col cols="12" md="6" class="image-side hover-float">
        <v-img src="@/assets/AI.webp" height="240" cover class="service-img"/>
      </v-col>

      <v-col cols="12" md="6" class="text-side">
        <span class="tag">Security Layer</span>

        <h2 class="title">Cybersecurity</h2>

        <p class="hook">We protect your systems from threats.</p>

        <ul class="features">
          <li>🛡 Threat detection</li>
          <li>🏗 Secure architecture</li>
          <li>📊 Risk analysis</li>
          <li>🔍 Vulnerability scanning</li>
        </ul>

        <v-btn class="get-started-btn mt-6">
          Get Started
        </v-btn>
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


/* ===== TOP SECTION ===== */
.top-section {
  background: #ffffff;
}

.top-image {
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

/* CTA BUTTON */
.cta-btn {
  color: #ffb300;
  font-weight: 600;
}

/* ===== STRIPE HEADER ===== */
.services-header {
  padding: 80px 20px 40px;
}

.services-tag {
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 179, 0, 0.12);
  color: #ffb300;
  display: inline-block;
}

.services-title {
  font-size: 42px;
  font-weight: 700;
  margin-top: 10px;
}

.services-subtitle {
  color: #555;
  max-width: 600px;
  margin: 10px auto 0;
  font-size: 16px;
}

/* ===== SERVICE SECTIONS ===== */
.service-section {
  padding: 80px 0;
}

/* DARK SECTION */
.service-section.dark {
  background: #0a0a0a;
  color: #ffffff;
}

/* LIGHT SECTION */
.service-section.light {
  background: #f6f6f6;
  color: #111;
}

/* ===== TEXT SIDE ===== */
.text-side {
  padding: 50px 60px;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
}

.hook {
  font-size: 15px;
  opacity: 0.85;
  margin-bottom: 18px;
  max-width: 420px;
}

/* TAG (Gradient badge) */
.tag {
  display: inline-block;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 999px;
  background: linear-gradient(135deg, #ffb300, #ff8f00);
  color: #000;
  margin-bottom: 12px;
}

/* ===== FEATURES LIST ===== */
.features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  font-size: 14px;
  margin-bottom: 8px;
  opacity: 0.9;
}

/* ===== IMAGE SIDE ===== */
.image-side {
  padding: 20px;
}

/* FIXED IMAGE HANDLING (IMPORTANT) */
.image-side :deep(img) {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 12px 35px rgba(0,0,0,0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* HOVER EFFECT */
.image-side :deep(img):hover {
  transform: scale(1.03);
  box-shadow: 0 18px 45px rgba(0,0,0,0.25);
}

/* ===== BUTTON ===== */
.get-started-btn {
  background: linear-gradient(135deg, #ffb300, #ff8f00);
  color: #000;
  font-weight: 700;
  border-radius: 10px;
  padding: 10px 18px;
  transition: all 0.3s ease;
}

.get-started-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(255,179,0,0.35);
}

/* ===== RESPONSIVE FIX ===== */
@media (max-width: 960px) {
  .text-side {
    padding: 30px 20px;
    text-align: center;
  }

  .hook {
    margin: 0 auto 18px;
  }

  .image-side {
    padding: 10px;
  }
}
</style>