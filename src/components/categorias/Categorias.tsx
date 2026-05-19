import { Grid2x2, Salad, Soup, Dumbbell, Leaf, Wheat, CupSoda, Hamburger, CakeSlice,} from "lucide-react";

const categorias = [
  { nome: "Todas", icon: Grid2x2, hoverBg: "group-hover:bg-[#FF5F1F]" },
  { nome: "Saladas", icon: Salad, hoverBg: "group-hover:bg-[#006644]" },
  { nome: "Bowls", icon: Soup, hoverBg: "group-hover:bg-[#FFC700]" },
  { nome: "Fitness", icon: Dumbbell, hoverBg: "group-hover:bg-[#006644]" },
  { nome: "Veganas", icon: Leaf, hoverBg: "group-hover:bg-[#2E9E45]" },
  { nome: "Low Carb", icon: Wheat, hoverBg: "group-hover:bg-[#FF5F1F]" },
  { nome: "Sucos", icon: CupSoda, hoverBg: "group-hover:bg-[#FFC700]" },
  { nome: "Lanches", icon: Hamburger, hoverBg: "group-hover:bg-[#FF5F1F]" },
  { nome: "Sobremesas", icon: CakeSlice, hoverBg: "group-hover:bg-[#FFC700]" },
];

function Categorias() {
  return (
    <section className="w-full bg-[#FFFDF9] py-10 md:py-2 overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-4xl font-black text-black tracking-tighter uppercase leading-none">
            Explore por categorias
          </h2>

          <p className="text-black font-bold text-xs md:text-sm uppercase tracking-wider mt-3 bg-amber-100 border-2 border-black px-3 py-1 inline-block rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            Encontre o tipo de comida ideal pra você
          </p>
        </div>

        <a 
          href=""
          className="bg-black text-[#FFFDF9] font-black uppercase text-xs md:text-sm tracking-wider px-4 py-2.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_#FF5F1F] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_#FF5F1F] transition-all self-start sm:self-auto"
        >
          Ver todas →
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-4 pt-2">
        
        <div className="flex flex-nowrap overflow-x-auto pb-4 gap-4 scrollbar-hide sm:grid sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 justify-items-center snap-x">
          
          {categorias.map((categoria, index) => {
            const Icon = categoria.icon;

            return (
              <button
                key={index}
                className="
                  flex flex-col items-center gap-2.5
                  group shrink-0 w-21 md:w-24
                  snap-center
                "
              >
                <div
                  className={`
                    w-full aspect-square
                    rounded-2xl
                    bg-[#FFFDF9]
                    border-4 border-black
                    flex items-center justify-center
                    shadow-[4px_4px_0px_rgba(0,0,0,1)]
                    transition-all duration-200
                    group-hover:translate-x-0.5 group-hover:translate-y-0.5
                    group-hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]
                    ${categoria.hoverBg}
                  `}
                >
                  <Icon
                    className="
                      text-black
                      stroke-[2.5px]
                      w-7 h-7 md:w-9 md:h-9
                      transition-colors duration-200
                      group-hover:text-[#FFFDF9]
                    "
                  />
                </div>

                <span
                  className="
                    text-[10px] md:text-xs font-black text-black
                    text-center
                    w-full
                    uppercase
                    tracking-wider
                    whitespace-nowrap
                    overflow-hidden
                    text-ellipsis
                    bg-white border-2 border-black py-0.5 px-1 rounded-lg
                    shadow-[2px_2px_0px_rgba(0,0,0,1)]
                    group-hover:bg-black group-hover:text-white
                    transition-all duration-200
                  "
                >
                  {categoria.nome}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categorias;