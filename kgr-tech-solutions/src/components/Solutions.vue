<template>
  <v-container fluid class="solutions-page pa-0">

    <!-- 🔥 HERO SECTION -->
    <div class="hero-section d-flex flex-column justify-center align-center text-center">
      <div class="hero-overlay"></div>

      <h1 class="hero-title">Our Solutions</h1>
      <p class="hero-subtitle">
        Empowering businesses with modern technology, automation, and intelligent systems.
      </p>
    </div>

    <!-- 🔥 SOLUTIONS GRID -->
    <v-container class="py-16">
      <v-row>
        <v-col
          v-for="(solution, i) in solutions"
          :key="i"
          cols="12"
          sm="6"
          md="4"
        >
          <!-- ✅ Add dynamic delay -->
          <div 
            class="solution-card fade-in"
            :style="{ animationDelay: (i * 0.1) + 's' }"
          >

            <!-- Icon -->
            <div class="icon-circle">
              <v-icon size="28">{{ solution.icon }}</v-icon>
            </div>

            <!-- Title -->
            <div class="solution-title">
              {{ solution.title }}
              <div class="title-underline"></div>
            </div>

            <!-- Description -->
            <div class="solution-desc">
              {{ solution.desc }}
            </div>

            <!-- CTA -->
            <v-btn
              variant="text"
              class="explore-btn"
              :to="solution.link"
            >
              Explore more →
            </v-btn>

          </div>
        </v-col>
      </v-row>
    </v-container>

  </v-container>
</template>

<script setup>
const solutions = [
  {
    title: 'Web Applications',
    desc: 'Build modern, scalable web applications tailored to your business needs.',
    link: '/solutions/web-applications',
    icon: 'mdi-web'
  },
  {
    title: 'Salesforce Solutions',
    desc: 'Automate CRM processes and enhance customer engagement efficiently.',
    link: '/solutions/salesforce',
    icon: 'mdi-cloud'
  },
  {
    title: 'Automation Workflows',
    desc: 'Streamline operations with intelligent automation tools.',
    link: '/solutions/automation',
    icon: 'mdi-cog-sync'
  },
  {
    title: 'AI Powered Tools',
    desc: 'Leverage AI to gain insights and improve decision-making.',
    link: '/solutions/ai-tools',
    icon: 'mdi-robot'
  },
  {
    title: 'Frontend Development',
    desc: 'Create responsive, modern, and engaging user interfaces.',
    link: '/solutions/frontend',
    icon: 'mdi-monitor-dashboard'
  },
  {
    title: 'Full-Stack Systems',
    desc: 'Develop end-to-end scalable systems for your business.',
    link: '/solutions/fullstack',
    icon: 'mdi-layers'
  },
  {
    title: 'UI/UX Design',
    desc: 'Design intuitive and user-friendly digital experiences.',
    link: '/solutions/ui-ux',
    icon: 'mdi-palette'
  },
  {
    title: 'System Integrations',
    desc: 'Connect platforms and systems seamlessly.',
    link: '/solutions/integrations',
    icon: 'mdi-connection'
  }
]
</script>

<style scoped>

/* 🔥 HERO */
.hero-section {
  position: relative;
  height: 320px;
  background: linear-gradient(135deg, #000000, #1a1a1a);
  color: white;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 60%);
  animation: moveGlow 10s linear infinite;
}

@keyframes moveGlow {
  0% { transform: translate(-25%, -25%); }
  50% { transform: translate(0%, 0%); }
  100% { transform: translate(-25%, -25%); }
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  z-index: 1;
}

.hero-subtitle {
  max-width: 600px;
  margin-top: 10px;
  color: #ccc;
  z-index: 1;
}

/* 🔥 PAGE */
.solutions-page {
  background: linear-gradient(to bottom, #f5f5f5, #ffffff);
}

/* 🔥 CARD */
.solution-card {
  background: white;
  padding: 28px;
  border-radius: 16px;
  height: 100%;
  transition: all 0.35s ease;
  border: 1px solid #eee;
}

.solution-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

/* 🔥 ICON */
.icon-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFD700, #FFC107);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  color: black;
}

/* 🔥 TITLE */
.solution-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
}

.title-underline {
  width: 30px;
  height: 3px;
  background: #FFD700;
  margin-top: 6px;
  transition: width 0.3s ease;
}

.solution-card:hover .title-underline {
  width: 60px;
}

/* 🔥 DESCRIPTION */
.solution-desc {
  font-size: 0.95rem;
  color: #555;
  margin: 14px 0;
  line-height: 1.6;
}

/* 🔥 BUTTON */
.explore-btn {
  font-size: 0.9rem;
  font-weight: 600;
  color: #008080;
  padding: 0;
  text-transform: none;
}

/* 🔥 ANIMATION */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>