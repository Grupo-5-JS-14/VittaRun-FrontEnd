import Categorias from "../../components/categorias/Categorias";
import { Extras } from "../../components/extra/Extra";
import Hero from "../../components/hero/Hero";
import CarrosselLojas from "../../components/loja/carrosel/CarroselLojas";

function Home() {
  return (
    <>
      <Hero />
      <Categorias/>
      <CarrosselLojas/>
      <Extras />
    </>
  );
}

export default Home;