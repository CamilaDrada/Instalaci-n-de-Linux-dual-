import { createI18n } from 'vue-i18n';

// Traducciones
const messages = {
  en: {
    welcome: 'Welcome to Marea.dev',
    for_students: 'For Students',
    for_companies: 'For Companies',
    faqs: 'FAQs',
    start_now: 'Start Now',
    contact_us: 'Contact Us',
    elevate_skills: 'Elevate your skills with Marea.dev 🚀',
    join_us: 'Join us and start your learning journey today!',
  },
  es: {
    welcome: 'Bienvenido a Marea.dev',
    for_students: 'Para estudiantes',
    for_companies: 'Para Empresas',
    faqs: 'FAQs',
    start_now: 'Empieza ahora',
    contact_us: 'Contactanos',
    elevate_skills: '🚀 Eleva tus habilidades con Marea.dev 🚀',
    join_us: '¡Únete a nosotros y empieza tu viaje de aprendizaje hoy mismo!',
  }
};

const i18n = createI18n({
  locale: 'es', // Idioma predeterminado
  fallbackLocale: 'en', // Idioma de respaldo
  messages, // Mensajes de traducción
});

export default i18n;
