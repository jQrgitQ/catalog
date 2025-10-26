<template>
  <div class="about">
    <section class="bio-section">
      <div class="bio-content">
        <h1>Sobre el Artista</h1>
        <div class="bio-text">
          <p>{{ biografia }}</p>
          <p>{{ trayectoria }}</p>
        </div>

        <div class="bio-details">
          <div class="detail-item">
            <strong>Formación:</strong>
            <span>{{ formacion }}</span>
          </div>
          <div class="detail-item">
            <strong>Estilo:</strong>
            <span>{{ estilo }}</span>
          </div>
          <div class="detail-item">
            <strong>Técnicas:</strong>
            <span>{{ tecnicas }}</span>
          </div>
        </div>
      </div>
      <div class="bio-image">
        <img :src="fotoArtista" alt="Foto del artista" />
      </div>
    </section>

    <!-- Exposiciones -->
    <section class="expositions">
      <h2>Exposiciones Destacadas</h2>
      <DataTable :value="exposiciones">
        <Column field="ano" header="Año"></Column>
        <Column field="nombre" header="Exposición"></Column>
        <Column field="lugar" header="Lugar"></Column>
        <Column field="ciudad" header="Ciudad"></Column>
      </DataTable>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      biografia: 'Biografía completa del artista...',
      trayectoria: 'Trayectoria artística y logros...',
      formacion: 'Formación académica y cursos...',
      estilo: 'Estilo artístico característico...',
      tecnicas: 'Técnicas utilizadas en las obras...',
      fotoArtista: '/images/foto-artista.jpg',
      exposiciones: [
        { ano: 2024, nombre: 'Exposición Individual', lugar: 'Galería Central', ciudad: 'Madrid' },
        { ano: 2023, nombre: 'Colectiva Internacional', lugar: 'Museo de Arte', ciudad: 'Barcelona' }
      ]
    }
  }
}
</script>