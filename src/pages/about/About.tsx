import { Target, ShieldCheck, Truck } from "lucide-react";
import Grupo05 from "../../components/grupo05/Grupo05";

function About() {
  return (
    <main className="w-full min-h-screen bg-[#FFFDF9] pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center flex flex-col gap-3 items-center mb-12">
          <span className="inline-block bg-[#006644] text-[#FFFDF9] border-2 border-black px-4 py-1.5 rounded-xl font-black uppercase text-xs tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,1)] -rotate-1">
            Nossa História
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-none mt-2">
            Sobre a <span className="bg-[#FF5F1F] text-white border-3 border-black px-3 py-0.5 inline-block rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,1)] rotate-1">VittaRun</span>
          </h1>
          
          <p className="text-gray-800 text-lg md:text-xl font-black uppercase tracking-wide mt-2">
            Comida saudável, vida leve!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 w-full">

          {/* CARD 1: MISSÃO */}
          <div className="bg-white border-3 border-black rounded-2xl p-8 shadow-[5px_5px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[6px_6px_0px_#FF5F1F]">
            <div className="w-16 h-16 bg-[#FFFDF9] text-black border-2 border-black rounded-full flex items-center justify-center mb-5 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <Target size={32} className="stroke-[2.5px] text-[#006644]" />
            </div>
            
            <h3 className="text-xl font-black text-black uppercase tracking-tight mb-3">
              Nourish & Move
            </h3>

            <p className="text-gray-700 font-bold text-sm leading-relaxed">
              Levar comida saudável de qualidade até você, com a praticidade que sua rotina exige. Queremos provar que comer bem é para todos.
            </p>
          </div>

          {/* CARD 2: CURADORIA */}
          <div className="bg-white border-3 border-black rounded-2xl p-8 shadow-[5px_5px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[6px_6px_0px_#FFC700]">
            <div className="w-16 h-16 bg-[#FFFDF9] text-black border-2 border-black rounded-full flex items-center justify-center mb-5 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <ShieldCheck size={32} className="stroke-[2.5px] text-[#FF5F1F]" />
            </div>

            <h3 className="text-xl font-black text-black uppercase tracking-tight mb-3">
              Nossa Curadoria
            </h3>

            <p className="text-gray-700 font-bold text-sm leading-relaxed">
              Selecionamos criteriosamente restaurantes que priorizam ingredientes frescos e naturais. Sua saúde é nossa prioridade.
            </p>
          </div>

          {/* CARD 3: PROMESSA */}
          <div className="bg-white border-3 border-black rounded-2xl p-8 shadow-[5px_5px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[6px_6px_0px_#006644]">
            <div className="w-16 h-16 bg-[#FFFDF9] text-black border-2 border-black rounded-full flex items-center justify-center mb-5 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <Truck size={32} className="stroke-[2.5px] text-black" />
            </div>

            <h3 className="text-xl font-black text-black uppercase tracking-tight mb-3">
              Nossa Promessa
            </h3>

            <p className="text-gray-700 font-bold text-sm leading-relaxed">
              Rapidez e sabor sem concessões. Do pedido à entrega, focamos na sua experiência saudável.
            </p>
          </div>

        </div>

        {/* MANIFESTO INSTITUCIONAL */}
        <div className="max-w-3xl mx-auto text-center mb-16 bg-white border-3 border-black p-6 md:p-8 rounded-3xl shadow-[5px_5px_0px_rgba(0,0,0,1)]">
          <p className="text-black text-sm md:text-base leading-relaxed font-bold">
            A VittaRun vai além de um serviço de entrega. Somos uma parceira na construção de uma rotina mais saudável, equilibrada e ativa. Nascemos de uma ideia simples: tornar escolhas saudáveis mais acessíveis no dia a dia. Hoje, seguimos criando uma comunidade conectada pelo bem-estar e pela qualidade de vida.
          </p>
        </div>

        <div className="w-full max-w-5xl rounded-3xl overflow-hidden h-64 md:h-96 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] mb-20">
          <img
            src="./assets/BgAbout.png"
            alt="Mesa cheia de pratos saudáveis, saladas e bowls coloridos vistos de cima"
            className="w-full h-full object-cover"
          />
        </div>

        <hr className="w-full max-w-5xl border-2 border-dashed border-black mb-16" />

        <div className="w-full flex flex-col items-center gap-6 mb-8">
          <span className="inline-block bg-[#FFC700] text-black border-2 border-black px-4 py-1.5 rounded-xl font-black uppercase text-xs tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,1)] rotate-1">
            💻 O Time por trás do Código
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter text-center mb-4">
            Conheça o Grupo 05
          </h2>
          
          {/* Aqui injetamos o carrossel na versão completa dele! */}
          <Grupo05 variante="grande" />
        </div>

      </div>
    </main>
  );
}

export default About;