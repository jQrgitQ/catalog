<template>
  <div id="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Georgia', 'Times New Roman', serif;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #252525 100%);
  color: #b0b0b0;
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at 20% 80%, rgba(100, 150, 200, 0.03) 0%, transparent 50%),
  radial-gradient(circle at 80% 20%, rgba(100, 150, 200, 0.02) 0%, transparent 50%),
  linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

.main-content {
  flex: 1;
  padding-top: 80px;
  padding-bottom: 70px;
}

/* Estilos globales para textos */
h1, h2, h3, h4, h5, h6 {
  color: #c0c0c0;
  font-weight: 400;
  letter-spacing: 0.5px;
}

p {
  color: #a0a0a0;
  line-height: 1.6;
}

/* Scrollbar personalizado */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #666;
}
</style>