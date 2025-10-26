<template>
  <div class="gallery">
    <div class="gallery-header">
      <h1>Galería de Obras</h1>

      <!-- Filtros -->
      <div class="filters">
        <Dropdown
            v-model="categoriaSeleccionada"
            :options="categorias"
            optionLabel="nombre"
            placeholder="Todas las categorías"
        />
        <InputText v-model="busqueda" placeholder="Buscar obra..." />
      </div>
    </div>

    <!-- Grid de obras -->
    <div class="works-grid">
      <Card
          v-for="obra in obrasFiltradas"
          :key="obra.id"
          class="work-card"
          @click="verDetalle(obra)"
      >
        <template #header>
          <img :src="obra.imagen" :alt="obra.titulo" />
        </template>
        <template #title>{{ obra.titulo }}</template>
        <template #content>
          <p>{{ obra.descripcion }}</p>
          <div class="work-meta">
            <Tag :value="obra.categoria" />
            <span class="year">{{ obra.ano }}</span>
          </div>
        </template>
      </Card>
    </div>

    <!-- Modal de detalle -->
    <Dialog v-model:visible="mostrarDetalle" :header="obraSeleccionada?.titulo">
      <img :src="obraSeleccionada?.imagen" :alt="obraSeleccionada?.titulo" />
      <p>{{ obraSeleccionada?.descripcionLarga }}</p>
      <p><strong>Técnica:</strong> {{ obraSeleccionada?.tecnica }}</p>
      <p><strong>Dimensiones:</strong> {{ obraSeleccionada?.dimensiones }}</p>
    </Dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoriaSeleccionada: null,
      busqueda: '',
      mostrarDetalle: false,
      obraSeleccionada: null,
      categorias: [
        { nombre: 'Pintura', value: 'pintura' },
        { nombre: 'Escultura', value: 'escultura' },
        { nombre: 'Fotografía', value: 'fotografia' },
        { nombre: 'Digital', value: 'digital' }
      ],
      obras: [
        {
          id: 1,
          titulo: 'Obra 1',
          descripcion: 'Descripción breve',
          descripcionLarga: 'Descripción completa de la obra...',
          imagen: '/images/obra1.jpg',
          categoria: 'Pintura',
          tecnica: 'Óleo sobre lienzo',
          dimensiones: '100x80 cm',
          ano: 2024
        }
        // ... más obras
      ]
    }
  },
  computed: {
    obrasFiltradas() {
      return this.obras.filter(obra => {
        const coincideCategoria = !this.categoriaSeleccionada ||
            obra.categoria === this.categoriaSeleccionada.value
        const coincideBusqueda = !this.busqueda ||
            obra.titulo.toLowerCase().includes(this.busqueda.toLowerCase())
        return coincideCategoria && coincideBusqueda
      })
    }
  },
  methods: {
    verDetalle(obra) {
      this.obraSeleccionada = obra
      this.mostrarDetalle = true
    }
  }
}
</script>