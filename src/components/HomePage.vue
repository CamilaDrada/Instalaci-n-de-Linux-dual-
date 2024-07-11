<template>
  <div>
    <header>
      <img src="@/assets/images/logo.png" alt="Logo del sitio" id="logo">
      <div class="logo">Marea.dev</div>
      
      <nav>
        <ul>
          <li><a href="#">Para estudiantes</a></li>
          <li><a href="#">Para Empresas</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </nav>
      <div class="auth-buttons">
        <button class="primary">Empieza ahora</button>
      </div>
    </header>

    <main>
      <section class="Marea.dev">
        <div class="banner">
          <p>🚀 Eleva tus habilidades con Marea.dev 🚀</p>
        </div>
        <div class="content-wrapper">
          <div class="text-content">
            <h1>Marea.dev</h1>
            <p>En Marea.dev, estamos comprometidos con brindar acceso gratuito a contenido educativo de alta calidad en tecnología y programación...</p>
            <!-- Más contenido según sea necesario -->
            <div class="buttons">
              <button class="primary">Empezar Ahora</button>
              <button>Contactanos</button>
            </div>
          </div>
          <div id="contenedor">
            <img src="@/assets/images/grupo.png" alt="Marea.dev">
          </div>
        </div>
      </section>

      <section class="contact">
        <h2>Contactarnos</h2>
        <form>
          <!-- Formulario de Contacto -->
          <!-- Agregar campos según sea necesario -->
        </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  // Agrega métodos, datos y otras configuraciones de Vue.js según sea necesario
}
</script>

<style scoped>
/* Agrega estilos TailwindCSS o estilos propios aquí */
</style>
