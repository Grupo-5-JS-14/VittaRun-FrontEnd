import ListaLoja from "./components/loja/listaloja/ListaLoja";
import Categorias from "./components/categorias/Categorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Nav";
import Login from "./pages/login/Login";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home } from "lucide-react";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}

      <div className="min-h80hv">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lojas" element={<ListaLoja />} />
          <Route path="/categorias" element={<Categorias />} />
        </Routes>
      </div>

      {location.pathname !== "/" && <Footer />}

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;