import { Target, ShieldCheck, Truck } from "lucide-react";

function About() {
  return (
    <>

      <div className="bg-[#FFFFFF] flex justify-center">
        <div className="container text-[#1F6E31]">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h1 className="text-5xl font-bold">
              Sobre a VittaRun
            </h1>
            <p className='text-[#1F2937] text-2xl font-bold'>
              Comida saudável, vida leve!
            </p>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">

              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#2E9E45]/40 hover:bg-linear-to-b hover:from-white hover:to-green-50 group">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 text-[#2E9E45] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2E9E45] group-hover:text-white">
                  <Target size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-[#1F2937] mb-3 transition-colors duration-300 group-hover:text-[#2E9E45]">
                  Nossa Missão
                  </h3>

                <p className="text-[#6B7280] text-sm leading-relaxed transition-colors duration-300 group-hover:text-[#374151]">
                  Levar comida saudável de qualidade até você, com a praticidade que sua rotina exige. Queremos provar que comer bem é para todos.
                </p>
              </div>

              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#2E9E45]/40 hover:bg-linear-to-b hover:from-white hover:to-green-50 group">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 text-[#2E9E45] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2E9E45] group-hover:text-white">
                  <ShieldCheck size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-[#1F2937] mb-3 transition-colors duration-300 group-hover:text-[#2E9E45]">
                  Nossa Curadoria
                  </h3>

                <p className="text-[#6B7280] text-sm leading-relaxed transition-colors duration-300 group-hover:text-[#374151]">
                  Selecionamos criteriosamente restaurantes que priorizam ingredientes frescos e naturais. Sua saúde é nossa prioridade.
                </p>
              </div>

              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#2E9E45]/40 hover:bg-linear-to-b hover:from-white hover:to-green-50 group">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 text-[#2E9E45] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2E9E45] group-hover:text-white">
                  <Truck size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-[#1F2937] mb-3 transition-colors duration-300 group-hover:text-[#2E9E45]">
                  Nossa Promessa
                  </h3>

                <p className="text-[#6B7280] text-sm leading-relaxed transition-colors duration-300 group-hover:text-[#374151]">
                  Rapidez e sabor sem concessões. Do pedido à entrega, focamos na sua experiência saudável.
                </p>
              </div>

            </div>
            {/* TEXTO */}
            <p className="max-w-4xl mx-auto text-center indent-8 text-[#1F2937] text-base md:text-lg leading-relaxed font-medium mb-16">
              A VittaRun vai além de um serviço de entrega. Somos uma parceira na construção de uma rotina mais saudável, equilibrada e ativa. Nascemos de uma ideia simples, tornar escolhas saudáveis mais acessíveis no dia a dia. Hoje, seguimos criando uma comunidade conectada pelo bem-estar e pela qualidade de vida.
            </p>

            {/* IMAGEM */}
            <div className="w-full rounded-2xl overflow-hidden h-87.5 md:h-112.5 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop"
                alt="Mesa cheia de pratos saudáveis, saladas e bowls coloridos vistos de cima"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About;