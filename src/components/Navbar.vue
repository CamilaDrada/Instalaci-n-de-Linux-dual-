<template>
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
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
/* Estilos específicos del componente */
nav a {
  font-weight: bold;
}

@media (max-width: 768px) {
  .flex-mobile {
    display: flex;
  }
  
  .hidden-mobile {
    display: none;
  }
}
</style>
