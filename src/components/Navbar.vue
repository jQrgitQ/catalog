<template>
  <nav class="navbar">
    <div class="nav-brand">
      <h2>{{ artistaNombre }}</h2>
    </div>
    <ul class="nav-menu">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/galeria">Galería</router-link></li>
      <li><router-link to="/sobre-mi">Sobre Mí</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      artistaNombre: 'Van Gogh'
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background: rgba(15, 15, 15, 0.98);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid #333;
  z-index: 1000;
}

.nav-brand h2 {
  color: #c0c0c0;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 2px;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
}

.nav-menu a {
  color: #a0a0a0;
  text-decoration: none;
  font-weight: 300;
  padding: 0.6rem 1.2rem;
  border-radius: 2px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.nav-menu a:hover {
  color: #e0e0e0;
  border-color: #555;
  background: rgba(50, 50, 50, 0.3);
}

.nav-menu a.router-link-active {
  color: #e0e0e0;
  border-color: #666;
  background: rgba(60, 60, 60, 0.3);
}
</style>