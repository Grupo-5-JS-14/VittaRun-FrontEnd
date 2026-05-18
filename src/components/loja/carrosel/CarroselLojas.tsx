import { bd_lojas } from "../../../data/lojas";
import CardLoja from "../cardloja/CardLoja";

function CarrosselLojas() {
  return (
    <div className="w-full py-8">

      {/* Título /}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 px-6">
        Lojas em destaque
      </h2>

      {/ Carrossel */}
      <div className="flex gap-6 overflow-x-auto px-6 scrollbar-hide">

        {bd_lojas.map((loja) => (
          <div key={loja.id} className="min-w-[320px]">
            <CardLoja
              imagem={loja.bg}
              logo={loja.logo}
              nome={loja.nome}
              categorias={loja.descricao}
              novo={loja.aberto}
            />
          </div>
        ))}

      </div>
    </div>
  );
}

export default CarrosselLojas;