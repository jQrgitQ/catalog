<template>
  <section class="hero">
    <div class="hero-content">
      <h1>{{ artistaNombre }}</h1>
      <p class="hero-subtitle">{{ especialidad }}</p>
      <p class="hero-description">{{ descripcion }}</p>
      <div class="hero-actions">
        <Button
            label="Ver Galería"
            icon="pi pi-images"
            @click="$router.push('/galeria')"
        />
        <Button
            label="Sobre Mí"
            icon="pi pi-user"
            class="p-button-outlined"
            @click="$router.push('/sobre-mi')"
        />
      </div>
    </div>
    <div class="hero-image">
      <img :src="imagenPrincipal" alt="Artista trabajando" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      artistaNombre: 'Nombre del Artista',
      especialidad: 'Pintor | Escultor | Fotógrafo',
      descripcion: 'Explorando la belleza a través del arte contemporáneo. Cada obra cuenta una historia única.',
      imagenPrincipal: '/images/artista-hero.jpg'
    }
  }
}
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 4rem 2rem;
  min-height: 80vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
  color: white;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #f0a500;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.hero-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
</style>