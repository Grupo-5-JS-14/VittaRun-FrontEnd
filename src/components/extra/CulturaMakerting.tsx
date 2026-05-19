export function CulturaMarketing() {
  return (
    <section className="bg-[#FFFDF9] px-4 py-12 md:px-10 md:py-20 border-b-2 border-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative overflow-hidden rounded-3xl bg-[#FFC700] border-4 border-black px-6 py-12 md:px-16 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] bg-size-[16px_16px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-left">
            <span className="inline-block text-xs font-black uppercase tracking-wider text-[#FFFDF9] bg-black border-2 border-black px-3 py-1 rounded-md -rotate-2 shadow-[2px_2px_0px_#FF5F1F]">
              Nossa Realidade 
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-black text-black leading-none tracking-tighter uppercase">
              Comida saudável não é milagre, <br />
              <span className="text-[#006644] bg-[#FFFDF9] px-2 inline-block my-1 border-2 border-black rounded-lg rotate-1 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                é rotina sem complicação!
              </span>
            </h2>

            <p className="mt-6 text-black font-bold text-sm md:text-base leading-relaxed max-w-xl">
              A gente não veio prometer dieta mágica de internet. A Vitta Run serve rango de verdade, 
              feito por quem entende de sabor e entrega na velocidade que o teu dia exige. 
              Sem frescura, sem perder tempo.
            </p>
          </div>

          <div className="relative flex flex-col gap-4 w-full lg:w-auto items-center lg:items-start z-10">
            
            <span className="px-5 py-3 bg-[#006644] border-3 border-black rounded-xl text-xs md:text-sm font-black uppercase tracking-wider text-[#FFFDF9] shadow-[4px_4px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-0 transition-transform w-full text-center lg:text-left">
              🍃 Nutrição sem neura
            </span>

            <span className="px-5 py-3 bg-[#FF5F1F] border-3 border-black rounded-xl text-xs md:text-sm font-black uppercase tracking-wider text-[#FFFDF9] shadow-[4px_4px_0px_rgba(0,0,0,1)] rotate-2 hover:rotate-0 transition-transform w-full text-center lg:text-left">
              ⚡ Rápido feito um raio
            </span>

            <span className="px-5 py-3 bg-[#FFFDF9] border-3 border-black rounded-xl text-xs md:text-sm font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform w-full text-center lg:text-left">
              🧡 Apoie os locais
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}