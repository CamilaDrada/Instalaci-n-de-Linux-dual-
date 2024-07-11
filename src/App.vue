<template>
  <div id="app">
    <header class="bg-blue-800 text-white p-4 flex flex-col md:flex-row md:justify-between md:items-center">
      <div class="flex items-center">
        <img src="./assets/images/logo.png" alt="logo del sitio" id="logo" class="h-10 mr-3">
        <div class="text-xl font-bold">Marea.dev</div>
      </div>

      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:text-gray-300">{{ $t('for_students') }}</a></li>
          <li><a href="#" class="hover:text-gray-300">{{ $t('for_companies') }}</a></li>
          <li><a href="#" class="hover:text-gray-300">{{ $t('faqs') }}</a></li>
        </ul>
      </nav>

      <div class="flex items-center space-x-4">
        <button @click="changeLanguage('en')" class="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-2 rounded">EN</button>
        <button @click="changeLanguage('es')" class="bg-gray-200 hover:bg-gray-300 text-black font-bold py-1 px-2 rounded">ES</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{{ $t('start_now') }}</button>
      </div>
    </header>

    <main>
      <section class="bootcamp p-8">
        <div class="banner mb-4">
          <p class="bg-blue-500 text-white p-2 text-center">{{ $t('elevate_skills') }}</p>
        </div>
        <div class="content-wrapper flex flex-col md:flex-row">
          <div class="text-content md:w-1/2 pr-8">
            <h1 class="text-4xl font-bold mb-4">Marea.dev</h1>
            <p class="mb-4">{{ $t('welcome') }}</p>
            <p class="mb-4">En Marea.dev, estamos comprometidos con brindar acceso gratuito a contenido educativo de alta calidad en tecnología y programación. Nuestra plataforma ofrece una amplia gama de recursos que van desde temas para principiantes hasta contenido avanzado, adaptado para que puedas especializarte en áreas específicas.</p>
            <p class="mb-4">Además, hemos habilitado un servidor de chat similar a Discord, donde podrás obtener ayuda y resolver cualquier duda que tengas mientras aprendes. Nuestro objetivo es crear una comunidad de aprendizaje colaborativo y apoyo mutuo. Prepárate para llevar tus habilidades al siguiente nivel.</p>
            <p class="mb-4">{{ $t('join_us') }}</p>
            <div class="buttons flex space-x-4">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{{ $t('start_now') }}</button>
              <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">{{ $t('contact_us') }}</button>
            </div>
          </div>
          <div id="contenedor" class="mt-8 md:mt-0 md:w-1/2">
            <img src="./assets/images/grupo.png" alt="Bootcamp Image" class="w-full h-auto">
          </div>
        </div>
      </section>

      <section class="contact p-8 bg-gray-100">
        <h2 class="text-2xl font-bold mb-4">{{ $t('contact_us') }}</h2>
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
  name: 'App',
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
    }
  }
};
</script>

<style scoped>
/* TailwindCSS debería manejar la mayor parte de los estilos, pero puedes añadir más aquí si es necesario */
</style>
