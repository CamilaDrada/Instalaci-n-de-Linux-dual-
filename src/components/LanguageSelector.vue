<!-- LanguageSelector.vue -->
<template>
  <div class="relative">
    <button @click="toggleDropdown" class="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none">
      <span>{{ currentLanguage }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M15 10a5 5 0 11-10 0 5 5 0 0110 0zm-7-2a1 1 0 112 0v4a1 1 0 11-2 0V8z" clip-rule="evenodd" />
      </svg>
    </button>

    <div v-if="isOpen" class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
      <ul>
        <li v-for="(lang, key) in languages" :key="key">
          <button @click="changeLanguage(key)" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
            {{ lang }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      languages: {
        en: 'English',
        es: 'Español'
        // Añade más idiomas aquí si es necesario
      }
    };
  },
  computed: {
    currentLanguage() {
      return this.$i18n.locale.toUpperCase();
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    changeLanguage(locale) {
      this.$i18n.locale = locale;
      this.isOpen = false; // Cerrar el menú desplegable después de cambiar el idioma
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para el componente LanguageSelector.vue */
.button-language {
  @apply flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none;
}

.dropdown-menu {
  @apply absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10;
}

.dropdown-item {
  @apply block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left;
}
</style>
