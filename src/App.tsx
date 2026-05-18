import ListaLoja from "./components/loja/listaloja/ListaLoja";

import Categorias from "./components/categorias/Categorias";
import Footer from './components/footer/Footer';
import Navbar from './components/nav/Nav'
import Home from "./pages/home/Home";

function App() {
  return (
    <>
    <ListaLoja/>
      <Categorias />
      </>
      <Navbar />
      <Footer />
      <Home/>
    </>
  )
}
export default App;