import { Route, Routes, Redirect, Switch} from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/UI/Layout";
import ListOfItems from "./components/UI/ListOfItems";
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import translationEN from '../locales/en.json';
import translationES from '../locales/es.json';
import 'animate.css';

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


const App = () => {

  return (
    <Layout>
      <Header />
      <Routes>
       <Switch>
        <Route path="/" element={<Content />} />
        <Route path="/:category" element={<ListOfItems />} />


<Route path="*" render={() => <Redirect to="/" />} />

</Switch>

      </Routes>
      <Footer />
    </Layout>
  )
}

export default App;
