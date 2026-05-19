import { useState } from "react";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react"; // Adicionei o ícone Plus
import { bd_lojas } from "../../data/lojas";
import CardLoja from "../../components/loja/cardloja/CardLoja";

const categoriasMap: Record<number, string> = {
  1: "Marmitas Fitness",
  2: "Low Carb",
  3: "Alta Proteína",
  4: "Orgânicos",
  5: "Lanches Saudáveis",
  6: "Bowls Fitness",
  7: "Pizzas Saudáveis",
  8: "Smoothies e Bebidas",
};

function Lojas() {
  const [busca, setBusca] = useState("");
  const [limiteVisivel, setLimiteVisivel] = useState(6); 

  const lojasFiltradas = bd_lojas?.filter((loja) =>
    loja.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const lojasExibidas = lojasFiltradas?.slice(0, limiteVisivel);

  const carregaMaisLojas = () => {
    setLimiteVisivel((prev) => prev + 6);
  };

  const lidarComBusca = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusca(e.target.value);
    setLimiteVisivel(6);
  };

  return (
    <main className="w-full min-h-screen bg-[#FFFDF9] pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative overflow-hidden bg-[#FF5F1F] border-4 border-black rounded-3xl p-8 md:p-12 mb-10 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] bg-size-[16px_16px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block bg-black text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md -rotate-1 mb-4 shadow-[2px_2px_0px_#FFC700]">
              Os Melhores Parceiros
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none">
              Todas as Lojas e <br />
              <span className="bg-white border-2 border-black px-2 py-0.5 inline-block my-1 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] rotate-1">
                Restaurantes
              </span>
            </h1>
            <p className="mt-4 text-black font-bold text-sm md:text-base max-w-md">
              Encontre os seus lugares favoritos e monte o seu cardápio ideal sem complicação.
            </p>
          </div>
        </div>

        <div className="w-full max-w-md mb-12">
          <div className="relative flex items-center bg-white border-3 border-black rounded-2xl p-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] focus-within:translate-x-px focus-within:translate-y-px focus-within:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
            <div className="pl-3 text-black">
              <MagnifyingGlass size={22} weight="bold" />
            </div>
            <input
              type="text"
              placeholder="Buscar loja pelo nome..."
              value={busca}
              onChange={lidarComBusca}
              className="w-full bg-transparent border-none outline-none py-2 px-3 text-black font-bold placeholder-gray-500 text-sm md:text-base"
            />
          </div>
        </div>

        {lojasExibidas && lojasExibidas.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-items-center pt-2 pb-8 px-2">
              {lojasExibidas.map((loja) => (
                <div 
                  key={loja.id} 
                  className="w-full max-w-90 sm:max-w-none transition-transform hover:scale-[1.02]"
                >
                  <CardLoja
                    imagem={loja.bg}
                    logo={loja.logo}
                    nome={loja.nome}
                    categorias={loja.descricao}
                    tag={loja.tag}
                    categoria={categoriasMap[loja?.categoria?.id] ?? "Bowls Fitness"}
                  />
                </div>
              ))}
            </div>

            {lojasFiltradas.length > limiteVisivel && (
              <div className="flex justify-center mt-12 mb-6">
                <button
                  onClick={carregaMaisLojas}
                  className="flex items-center gap-2 bg-[#FFC700] text-black text-base font-black uppercase border-3 border-black rounded-2xl px-8 py-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
                >
                  <Plus size={20} weight="bold" />
                  Carregar Mais Lojas
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-white border-3 border-dashed border-black rounded-3xl p-8 max-w-lg mx-auto shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-4xl block mb-4">🔍</span>
            <h3 className="text-xl font-black text-black uppercase tracking-tight">
              Nenhuma loja encontrada
            </h3>
            <p className="mt-2 text-sm font-bold text-gray-600">
              Não achamos nenhuma loja com "{busca}". Tente digitar outro nome!
            </p>
          </div>
        )}

      </div>
    </main>
  );
}

export default Lojas;