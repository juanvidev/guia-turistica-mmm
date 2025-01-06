import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/UI/Layout";
import ListOfItems from "./components/UI/ListOfItems";
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import translationEN from '../locales/en.json';
import translationES from '../locales/es.json';
import 'animate.css';
import Home from './components/Home';
import CategoryPage from './pages/CategoryPage';




const App = () => {

  // Configuración de i18next
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: translationEN,
        },
        es: {
          translation: translationES,
        },
      },
      lng: 'es', // Idioma predeterminado
      fallbackLng: 'en', // Idioma de respaldo si la traducción no está disponible
      interpolation: {
        escapeValue: false,
      },
    });

  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<CategoryPage />} />
        <Route path="/:city/:category" element={<ListOfItems />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Layout>
  )
}

export default App;
