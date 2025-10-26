<template>
  <div class="contact">
    <div class="contact-container">
      <!-- Información de contacto -->
      <div class="contact-info">
        <h1>Contacto</h1>
        <p>¿Interesado en una obra o colaboración? Contáctame.</p>

        <div class="contact-methods">
          <div class="contact-item">
            <i class="pi pi-whatsapp"></i>
            <div>
              <h3>WhatsApp</h3>
              <p>{{ telefono }}</p>
              <a :href="whatsappLink" target="_blank">Enviar mensaje</a>
            </div>
          </div>

          <div class="contact-item">
            <i class="pi pi-instagram"></i>
            <div>
              <h3>Instagram</h3>
              <p>@{{ instagramUser }}</p>
              <a :href="instagramLink" target="_blank">Seguir</a>
            </div>
          </div>

          <div class="contact-item">
            <i class="pi pi-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>{{ email }}</p>
              <a :href="`mailto:${email}`">Enviar correo</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulario de contacto -->
      <div class="contact-form">
        <Card>
          <template #title>Envíame un mensaje</template>
          <template #content>
            <div class="field">
              <label for="nombre">Nombre</label>
              <InputText id="nombre" v-model="form.nombre" />
            </div>

            <div class="field">
              <label for="email">Email</label>
              <InputText id="email" v-model="form.email" />
            </div>

            <div class="field">
              <label for="asunto">Asunto</label>
              <InputText id="asunto" v-model="form.asunto" />
            </div>

            <div class="field">
              <label for="mensaje">Mensaje</label>
              <Textarea id="mensaje" v-model="form.mensaje" rows="5" />
            </div>

            <Button label="Enviar Mensaje" @click="enviarMensaje" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telefono: '+34 123 456 789',
      instagramUser: 'artista',
      email: 'artista@email.com',
      form: {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      }
    }
  },
  computed: {
    whatsappLink() {
      return `https://wa.me/${this.telefono.replace(/\D/g, '')}`
    },
    instagramLink() {
      return `https://instagram.com/${this.instagramUser}`
    }
  },
  methods: {
    enviarMensaje() {
      // Lógica para enviar el formulario
      this.$toast.add({
        severity: 'success',
        summary: 'Mensaje enviado',
        detail: 'Te contactaré pronto',
        life: 3000
      })
      // Reset form
      this.form = { nombre: '', email: '', asunto: '', mensaje: '' }
    }
  }
}
</script>