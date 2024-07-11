// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc', // Color azul primario
        'secondary': '#4a5568', // Color gris oscuro para texto
        'accent': '#ffed4a', // Color amarillo para acentos
        'background': '#f7fafc', // Color de fondo claro
        'border': '#cbd5e0', // Color del borde
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'], // Fuentes sans-serif predeterminadas
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'], // Fuentes serif predeterminadas
      },
      fontSize: {
        'base': '1rem', // Tamaño de fuente base
        'lg': '1.125rem', // Tamaño de fuente grande
        'xl': '1.25rem', // Tamaño de fuente extra grande
        '2xl': '1.5rem', // Tamaño de fuente 2XL
      },
      spacing: {
        'px': '1px', // Espacio de 1 píxel
        '0': '0',
        '1': '0.25rem', // Espacio de 0.25 rem (4px)
        '2': '0.5rem', // Espacio de 0.5 rem (8px)
        '3': '0.75rem', // Espacio de 0.75 rem (12px)
        '4': '1rem', // Espacio de 1 rem (16px)
        '6': '1.5rem', // Espacio de 1.5 rem (24px)
        '8': '2rem', // Espacio de 2 rem (32px)
        '10': '2.5rem', // Espacio de 2.5 rem (40px)
        '12': '3rem', // Espacio de 3 rem (48px)
        '16': '4rem', // Espacio de 4 rem (64px)
        '20': '5rem', // Espacio de 5 rem (80px)
        '24': '6rem', // Espacio de 6 rem (96px)
        '32': '8rem', // Espacio de 8 rem (128px)
        '40': '10rem', // Espacio de 10 rem (160px)
        '48': '12rem', // Espacio de 12 rem (192px)
        '56': '14rem', // Espacio de 14 rem (224px)
        '64': '16rem', // Espacio de 16 rem (256px)
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem', // Bordes redondeados pequeños (2px)
        'default': '0.25rem', // Bordes redondeados predeterminados (4px)
        'lg': '0.5rem', // Bordes redondeados grandes (8px)
        'full': '9999px', // Bordes completamente redondeados
      },
      boxShadow: {
        'xs': '0 0 0 1px rgba(0, 0, 0, 0.05)', // Sombra muy pequeña
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // Sombra pequeña
        'default': '0 2px 4px 0 rgba(0, 0, 0, 0.1)', // Sombra predeterminada
        'lg': '0 4px 8px 0 rgba(0, 0, 0, 0.1)', // Sombra grande
        'xl': '0 8px 16px 0 rgba(0, 0, 0, 0.1)', // Sombra extra grande
        '2xl': '0 12px 24px 0 rgba(0, 0, 0, 0.1)', // Sombra 2XL
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)', // Sombra interna
        'outline': '0 0 0 3px rgba(52, 144, 220, 0.5)', // Sombra de contorno
        'none': 'none', // Sin sombra
      },
    },
  },
  plugins: [],
};
