<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="solitary-title">{{ artista.nombre }}</h1>
        <p class="especialidad">{{ artista.especialidad }}</p>
        <p class="descripcion">{{ artista.descripcion }}</p>
        <Button
            label="Explorar Galería"
            @click="$router.push('/galeria')"
            class="solitary-button"
        />
      </div>
      <div class="hero-image">
        <div class="image-frame">
          <img :src="artista.imagenPrincipal" alt="Artista" />
        </div>
      </div>
    </section>

    <!-- Obras Destacadas -->
    <section class="featured-works">
      <h2 class="section-title">Obras Destacadas</h2>
      <div class="works-grid">
        <Card
            v-for="obra in obrasDestacadas"
            :key="obra.id"
            class="work-card solitary-card"
        >
          <template #header>
            <div class="image-container">
              <img :src="obra.imagen" :alt="obra.titulo" />
              <div class="image-overlay"></div>
            </div>
          </template>
          <template #title>
            <span class="card-title">{{ obra.titulo }}</span>
          </template>
          <template #content>
            <p class="card-description">{{ obra.descripcion }}</p>
            <Tag :value="obra.categoria" class="solitary-tag" />
          </template>
        </Card>
      </div>
    </section>

    <!-- Información rápida -->
    <section class="quick-info">
      <div class="info-card solitary-info-card">
        <i class="pi pi-palette"></i>
        <h3>{{ totalObras }}</h3>
        <p>Obras en Colección</p>
      </div>
      <div class="info-card solitary-info-card">
        <i class="pi pi-star"></i>
        <h3>{{ anosExperiencia }}+</h3>
        <p>Años de Trayectoria</p>
      </div>
      <div class="info-card solitary-info-card">
        <i class="pi pi-globe"></i>
        <h3>{{ exposiciones }}</h3>
        <p>Exposiciones</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artista: {
        nombre: 'Van Gogh',
        especialidad: 'Pintor | Escultor | Fotógrafo',
        descripcion: 'Explorando la soledad y la introspección a través del arte contemporáneo. Cada obra es un reflejo del silencio interior.',
        imagenPrincipal: '/images/Van Gogh.jpg'
      },
      obrasDestacadas: [
        {
          id: 1,
          titulo: 'El Grito',
          descripcion: 'Una representación de la angustia existencial y la soledad del ser humano en la sociedad moderna.',
          imagen: '/images/el_grito.jpg',
          categoria: 'Pintura'
        }
      ],
      totalObras: 25,
      anosExperiencia: 5,
      exposiciones: 12
    }
  }
}
</script>

<style scoped>
.home {
  min-height: calc(100vh - 140px);
  padding: 2rem 3rem;
  background:
      radial-gradient(circle at 10% 20%, rgba(100, 150, 200, 0.02) 0%, transparent 40%),
      radial-gradient(circle at 90% 80%, rgba(100, 150, 200, 0.01) 0%, transparent 40%);
}

/* Hero Section */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  margin-bottom: 5rem;
}

.solitary-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #d0d0d0;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.especialidad {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #a0a0a0;
  font-style: italic;
  border-left: 2px solid #555;
  padding-left: 1rem;
}

.descripcion {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  color: #909090;
}

.solitary-button {
  background: transparent;
  border: 1px solid #666;
  color: #c0c0c0;
  font-weight: 300;
  padding: 0.8rem 2rem;
  border-radius: 2px;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.solitary-button:hover {
  border-color: #888;
  background: rgba(100, 100, 100, 0.1);
  color: #e0e0e0;
}

.image-frame {
  border: 1px solid #333;
  border-radius: 3px;
  padding: 8px;
  background: rgba(20, 20, 20, 0.8);
}

.hero-image img {
  width: 100%;
  border-radius: 2px;
  filter: grayscale(0.2) contrast(0.9) brightness(0.8);
}

/* Obras Destacadas */
.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #c0c0c0;
  font-weight: 300;
  letter-spacing: 2px;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 1px;
  background: #555;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.solitary-card {
  background: rgba(25, 25, 25, 0.9);
  border: 1px solid #333;
  border-radius: 3px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.solitary-card:hover {
  transform: translateY(-2px);
  border-color: #555;
  background: rgba(30, 30, 30, 0.95);
}

.image-container {
  position: relative;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s ease;
  filter: grayscale(0.3) contrast(0.95);
}

.solitary-card:hover .image-container img {
  transform: scale(1.05);
  filter: grayscale(0.1) contrast(1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.4) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.solitary-card:hover .image-overlay {
  opacity: 1;
}

.card-title {
  color: #d0d0d0;
  font-size: 1.2rem;
  font-weight: 400;
}

.card-description {
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.solitary-tag {
  background: #333 !important;
  color: #c0c0c0 !important;
  font-weight: 300;
  border: 1px solid #555;
  border-radius: 1px;
}

/* Información rápida */
.quick-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 4rem;
}

.solitary-info-card {
  background: rgba(25, 25, 25, 0.8);
  border: 1px solid #333;
  border-radius: 3px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.solitary-info-card:hover {
  border-color: #555;
  background: rgba(30, 30, 30, 0.9);
}

.solitary-info-card i {
  font-size: 2rem;
  color: #888;
  margin-bottom: 1rem;
}

.solitary-info-card h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #c0c0c0;
  font-weight: 300;
}

.solitary-info-card p {
  color: #888;
  font-size: 0.9rem;
}
</style>