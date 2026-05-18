import { bd_lojas } from "../../../data/lojas";
import CardLoja from "../cardloja/CardLoja";

function ListaLoja() {
  return (
    <div className="w-full py-8">
      
      {/* Título */}
      <h1 className="text-3xl font-bold text-center text-[#1F2937] mb-8">
        Todas as lojas
      </h1>

      {/* Lista */}
      <div className="flex flex-wrap gap-6 justify-center p-6 text-[#6B7280]">
        
        {bd_lojas.map((loja) => (
          <CardLoja
            key={loja.id}
            imagem={loja.bg}
            logo={loja.logo}
            nome={loja.nome}
            categorias={loja.descricao}
            novo={loja.aberto}
          />
        ))}

      </div>
    </div>
  );
}

export default ListaLoja;