<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="social-links">
        <a :href="whatsappLink" target="_blank" class="social-link">
          <i class="pi pi-whatsapp"></i>
        </a>
        <a :href="instagramLink" target="_blank" class="social-link">
          <i class="pi pi-instagram"></i>
        </a>
        <a :href="emailLink" class="social-link">
          <i class="pi pi-envelope"></i>
        </a>
      </div>
      <p class="copyright">{{ artistaNombre }} © 2024</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      artistaNombre: 'Van Gogh',
      whatsappLink: 'https://wa.me/12345678900',
      instagramLink: 'https://instagram.com/jorgealfonso.art',
      emailLink: 'mailto:jorge@alfonso-art.com'
    }
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(15, 15, 15, 0.98);
  backdrop-filter: blur(5px);
  border-top: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.footer-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #666;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  padding: 0.4rem;
}

.social-link:hover {
  color: #888;
}

.copyright {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  font-weight: 300;
}
</style>