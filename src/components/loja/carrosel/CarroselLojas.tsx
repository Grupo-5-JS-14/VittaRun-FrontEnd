import { useRef } from "react";
import { bd_lojas } from "../../../data/lojas";
import CardLoja from "../cardloja/CardLoja";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categoriasMap: Record<number, string> = {
  1: "Marmitas Fitness",
  2: "Low Carb",
  3: "Alta Proteína",
  4: "Orgânicos",
  5: "Lanches Saudáveis",
};

function CarrosselLojas() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = 350;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-12 md:py-4 bg-[#FFFDF9]">

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="inline-flex items-center bg-[#FF5F1F] text-[#FFFDF9] text-xs font-black uppercase tracking-wider px-4 py-1.5 border-2 border-black rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-3">
            🔥 Mais escolhidas
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter uppercase">
            Lojas em destaque
          </h2>

          <p className="mt-2 text-black font-bold text-xs md:text-sm uppercase tracking-wider bg-amber-50 border-2 border-black px-3 py-1 inline-block rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            As favoritas de quem quer comer bem sem perder tempo
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">

        <button
          onClick={() => scroll("left")}
          className="
            hidden md:flex
            absolute -left-2 top-1/2 -translate-y-1/2
            bg-[#FFFDF9] border-4 border-black text-black
            rounded-full p-2.5
            shadow-[4px_4px_0px_rgba(0,0,0,1)]
            hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]
            transition-all active:scale-95
            z-20
          "
        >
          <ChevronLeft size={24} className="stroke-[3px]" />
        </button>

        {/* SETA DIREITA (Botão mecânico com sombra sólida) */}
        <button
          onClick={() => scroll("right")}
          className="
            hidden md:flex
            absolute -right-2 top-1/2 -translate-y-1/2
            bg-[#FFFDF9] border-4 border-black text-black
            rounded-full p-2.5
            shadow-[4px_4px_0px_rgba(0,0,0,1)]
            hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]
            transition-all active:scale-95
            z-20
          "
        >
          <ChevronRight size={24} className="stroke-[3px]" />
        </button>

        <div
          ref={scrollRef}
          className="
            flex gap-6
            overflow-x-auto
            md:overflow-x-hidden
            scroll-smooth
            px-2
            pb-8
            pt-2
            scrollbar-none
          "
        >
          {bd_lojas?.map((loja) => (
            <div 
              key={loja.id} 
              className="min-w-75 md:min-w-85"
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

      </div>
    </section>
  );
}

export default CarrosselLojas;