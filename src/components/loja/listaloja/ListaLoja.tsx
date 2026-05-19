import { bd_lojas } from "../../../data/lojas";
import CardLoja from "../cardloja/CardLoja";

function ListaLoja() {
  return (
    <section className="w-full py-14 px-5 lg:px-8 bg-linear-to-b from-white to-green-50/30">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Comida saudável na velocidade da sua rotina
        </h1>

        <p className="mt-4 text-gray-500 text-lg leading-relaxed">
          Refeições fitness rápidas, práticas e perto de você.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        {bd_lojas.map((loja) => (
          <CardLoja
            key={loja.id}
            imagem={loja.bg}
            logo={loja.logo}
            nome={loja.nome}
            categorias={loja.descricao}
            tag={loja.tag}
            categoria={
              loja.categoria.id === 1
                ? "Marmitas Fitness"
                : loja.categoria.id === 2
                  ? "Low Carb"
                  : loja.categoria.id === 3
                    ? "Alta Proteína"
                    : loja.categoria.id === 4
                      ? "Orgânicos"
                      : loja.categoria.id === 5
                        ? "Lanches Saudáveis"
                        : "Bowls Fitness"
            }
          />
        ))}
      </div>
    </section>
  );
}

export default ListaLoja;
