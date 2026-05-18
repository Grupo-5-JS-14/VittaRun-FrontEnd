import { Grid2x2, Salad, Soup, Dumbbell, Leaf, Wheat, CupSoda, Hamburger, CakeSlice } from "lucide-react";

const categorias = [
  {
    nome: "Todas",
    icon: Grid2x2
  },
  {
    nome: "Saladas",
    icon: Salad
  },
  {
    nome: "Bowls",
    icon: Soup
  },
  {
    nome: "Fitness",
    icon: Dumbbell
  },
  {
    nome: "Veganas",
    icon: Leaf
  },
  {
    nome: "Low Carb",
    icon: Wheat
  },
  {
    nome: "Sucos",
    icon: CupSoda
  },
  {
    nome: "Lanches",
    icon: Hamburger
  },
  {
    nome: "Sobremesas",
    icon: CakeSlice
  }
];

function Categorias() {
  return (
    <section className="w-full bg-white py-12">

      <div className="flex items-center justify-between px-6 mb-10">

        <h2 className="text-4xl font-bold text-[#1F2937]">
          Categorias
        </h2>

        <button
          className="
            text-[#2E9E45]
            font-semibold
            hover:text-[#1F6E31]
            transition"
        >
          Ver todas →
        </button>
      </div>

      <div
        id="categorias"
        className="
        flex gap-6
        overflow-x-auto
        overflow-y-visible
        scroll-smooth
        px-6
        py-4
        scrollbar-hide"
      >

        {categorias.map((categoria, index) => {
          const Icon = categoria.icon;

          return (
            <button
              key={index}
              className="
                min-w-25
                flex flex-col
                items-center
                gap-3
                group"
            >

              <div
                className="
                  w-20 h-20
                  rounded-full
                  bg-[#F7FAF7]
                  border border-[#E5E7EB]
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:bg-[#2E9E45]
                  group-hover:scale-110
                  group-hover:shadow-lg"
              >
                <Icon
                  size={34}
                  className="
                    text-[#2E9E45]
                    transition-all duration-300
                    group-hover:text-white"
                />
              </div>

              <span
                className="
                  text-sm
                  font-medium
                  text-[#1F2937]
                  whitespace-nowrap
                  group-hover:text-[#2E9E45]
                  transition"
              >
                
                {categoria.nome}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Categorias;