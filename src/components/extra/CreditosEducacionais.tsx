import { GithubLogoIcon } from "@phosphor-icons/react";

export function CreditosEducacionais() {
  return (
    <section className="bg-[#FFFDF9] px-4 py-12 md:py-16 border-t-4 border-b-4 border-black">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="inline-block bg-[#006644] text-[#FFFDF9] border-2 border-black px-4 py-1.5 rounded-lg font-black uppercase text-xs tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,1)] -rotate-1 mb-6">
          Projeto Acadêmico
        </div>

        <h3 className="text-xl md:text-3xl font-black text-black uppercase tracking-tighter leading-none">
          Feito com código de verdade, <br className="hidden md:block" />
          <span className="text-[#FF5F1F] bg-white border-2 border-black px-2 py-0.5 inline-block my-2 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] rotate-1">
            para fins educacionais!
          </span>
        </h3>

        <p className="mt-4 text-sm md:text-base font-bold text-gray-800 max-w-2xl mx-auto leading-relaxed">
          O <span className="font-black text-[#006644]">Vitta Run</span> é um projeto prático desenvolvido com muito esforço, código e colegas para o 
          <span className="font-black bg-amber-100 border border-black px-1.5 py-0.5 rounded ml-1">
            Bootcamp de JavaScript Full Stack da Generation Brasil
          </span>. 
          Uma simulação completa de ecossistema de delivery focada em performance, design de impacto e usabilidade.
        </p>

        <div className="mt-8 mb-6">
          <a
            href="https://github.com/Grupo-5-JS-14/VittaRun-FrontEnd" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-[#FFFDF9] font-black uppercase text-sm tracking-wider px-6 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_#FFC700] hover:translate-x-px hover:translate-y-px hover:shadow-[3px_3px_0px_#FFC700] transition-all active:scale-95"
          >
            <GithubLogoIcon size={20} weight="fill" />
            Ver código no GitHub
          </a>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <span className="text-xs font-black uppercase tracking-wider bg-black text-white px-3 py-1 rounded-md shadow-[2px_2px_0px_#FFC700]">
            ⚡ React + Tailwind
          </span>
          <span className="text-xs font-black uppercase tracking-wider bg-black text-white px-3 py-1 rounded-md shadow-[2px_2px_0px_#006644]">
            💻 Full Stack
          </span>
          <span className="text-xs font-black uppercase tracking-wider bg-black text-white px-3 py-1 rounded-md shadow-[2px_2px_0px_#FF5F1F]">
            🧡 Gen Brasil
          </span>
        </div>

      </div>
    </section>
  );
}

export default CreditosEducacionais;