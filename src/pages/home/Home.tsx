import Categorias from "../../components/categorias/Categorias";
import { CulturaMarketing } from "../../components/extra/CulturaMakerting";
import { CreditosEducacionais } from "../../components/extra/CreditosEducacionais";
import Hero from "../../components/hero/Hero";
import CarrosselLojas from "../../components/loja/carrosel/CarroselLojas";

function Home() {
  return (
    <>
      <Hero />
      <Categorias/>
      <CarrosselLojas/>
      <CulturaMarketing/>
      <CreditosEducacionais />
    </>
  );
}

export default Home;