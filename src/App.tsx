import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/UI/Layout";
import ListOfItems from "./components/UI/ListOfItems";
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import translationEN from '../locales/en.json';
import translationES from '../locales/es.json';
import translationESIBA from '../locales/es-iba.json';
import translationENIBA from '../locales/en-iba.json';
import 'animate.css';
import Home from './components/Home';
import CategoryPage from './pages/CategoryPage';
import { useEffect, useState } from 'react';




const App = () => {

  const { pathname } = useLocation();
  const [usePathname, setUsePathaname] = useState("");
  // Configuración de i18next
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: usePathname === 'cali' ? translationEN : translationENIBA,
        },
        es: {
          translation: usePathname === 'cali' ? translationES : translationESIBA,
        },
      },
      lng: 'es', // Idioma predeterminado
      fallbackLng: 'en', // Idioma de respaldo si la traducción no está disponible
      interpolation: {
        escapeValue: false,
      },
    });

  useEffect(() => {

    setUsePathaname(pathname.split('/')[1]);

  }, [pathname])


  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/cali" replace />} />
        <Route path="/:city" element={<CategoryPage />} />
        <Route path="/:city/:category" element={<ListOfItems />} />
        <Route path="*" element={<Navigate to="/cali" replace />} />
      </Routes>
      <Footer />
    </Layout>
  )
}

export default App;
