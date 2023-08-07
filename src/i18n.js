import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa las traducciones
import translationEN from './lang/en.json'; // Reemplaza con tus archivos de idioma
import translationES from './lang/es.json'; // Reemplaza con tus archivos de idioma

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    es: { translation: translationES },
  },
  lng: 'en', // Idioma predeterminado
  fallbackLng: 'en', // Idioma de respaldo
  interpolation: {
    escapeValue: false, // React ya realiza el escape por defecto
  },
});

export default i18n;