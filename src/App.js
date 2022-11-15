import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DetailContainer } from "./components/DetailContainer/DetailContainer";
import { Error } from "./components/Error404/Error";
import { Footer } from "./components/Footer/Footer";
import { FoundMovies } from "./components/FoundMovies";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { ContenedorListado } from "./ContenedorListado/ContenedorListado";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado" element={<ContenedorListado />} />
        <Route path="/detail/:id" element={<DetailContainer />} />
        <Route path="/results" element={<FoundMovies />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
