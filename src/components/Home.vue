<!-- src/views/Home.vue -->
<template>
  <div>
    <!-- Barra de navegación -->
    <header class="bg-blue-100 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <img src="@/assets/images/logo.png" alt="Logo del sitio" class="block h-8 w-auto mr-2">
          <span class="text-gray-800 font-bold text-lg">Marea.dev</span>
        </div>
        <nav class="flex space-x-4 items-center flex-grow justify-center">
          <a href="#" class="text-black hover:text-gray-900">Para estudiantes</a>
          <a href="#" class="text-black hover:text-gray-900">Para empresas</a>
          <a href="#" class="text-black hover:text-gray-900">FAQs</a>
        </nav>
        <div class="ml-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded">Empieza ahora</button>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <main>
      <section class="bootcamp bg-gray-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="banner mb-8">
            <p class="text-2xl text-center text-blue-600 mb-4">🚀 Eleva tus habilidades con Marea.dev 🚀</p>
          </div>
          <div class="content-wrapper flex flex-col md:flex-row items-center justify-between">
            <div class="text-content md:w-1/2 mb-8 md:mb-0">
              <h1 class="text-3xl font-bold mb-4">Marea.dev</h1>
              <p class="text-lg leading-relaxed mb-4">
                En Marea.dev, estamos comprometidos con brindar acceso gratuito a contenido educativo de alta calidad en tecnología y programación. Nuestra plataforma ofrece una amplia gama de recursos que van desde temas para principiantes hasta contenido avanzado, adaptado para que puedas especializarte en áreas específicas.
              </p>
              <p class="text-lg leading-relaxed mb-4">
                Además, hemos habilitado un servidor de chat similar a Discord, donde podrás obtener ayuda y resolver cualquier duda que tengas mientras aprendes. Nuestro objetivo es crear una comunidad de aprendizaje colaborativo y apoyo mutuo. Prepárate para llevar tus habilidades al siguiente nivel.
              </p>
              <p class="text-lg leading-relaxed mb-4">
                ¡Únete a nosotros y empieza tu viaje de aprendizaje hoy mismo!
              </p>
              <div class="buttons flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <button class="primary bg-blue-500 text-white px-6 py-3 rounded">Empezar Ahora</button>
                <button class="bg-gray-300 text-gray-800 px-6 py-3 rounded">Contactanos</button>
              </div>
            </div>
            <div id="contenedor" class="md:w-1/2">
              <img src="src/assets/images/grupo.png" alt="Bootcamp Image" class="w-full rounded-lg">
            </div>
          </div>
        </div>
      </section>

      <section class="contact bg-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold mb-8">Contactarnos</h2>
          <form>
            <!-- Formulario de Contacto -->
            <!-- Agregar campos según sea necesario -->
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
/* Estilos específicos del componente */
/* Puedes añadir estilos específicos aquí si es necesario */
</style>
