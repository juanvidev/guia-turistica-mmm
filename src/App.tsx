import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/UI/Layout";
import ListOfPlaces from "./components/UI/ListOfPlaces";


const App = () => {

  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/:category" element={<ListOfPlaces />} />
      </Routes>
      <Footer />
    </Layout>
  )
}

export default App;
