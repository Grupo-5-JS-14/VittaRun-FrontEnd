import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react"; // Importação extra para dar um charme nos botões

function Hero() {
  const banners = [
    {
      title: "QUEM DISSE QUE COMIDA SAUDÁVEL TEM QUE SER SEM GRAÇA?",
      subtitle: "Assa o teu pão de queijo no café da manhã com a Vitta Run.",
      cta: "VER CARDÁPIO",
      bgColor: "bg-[#FF5F1F]", 
      textColor: "text-[#FFFDF9]", 
      titleColor: "text-[#006644]", 
      img: "./assets/lanche-top.png", 
    },
    {
      title: "ALIMENTE SEU CORPO, NÃO SUA PREGUIÇA!",
      subtitle: "Descubra opções leves, frescas e orgânicas perto de você.",
      cta: "VER LOJAS",
      bgColor: "bg-[#006644]", 
      textColor: "text-[#FFFDF9]",
      titleColor: "text-[#FF8A00]", 
      img: "./assets/salada-recortada.png",
    },
    {
      title: "SUA ROTINA MAIS LEVE COMEÇA AQUI",
      subtitle: "Escolha bem, coma melhor e mude sua vibe todos os dias.",
      cta: "PEDIR AGORA",
      bgColor: "bg-[#FFC700]", 
      textColor: "text-black",
      titleColor: "text-[#006644]",
      img: "./assets/cafe-manha.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <main className="bg-[#FFFDF9] w-full">
      <section className="max-w-7xl mx-auto px-4 py-8">
        
        <div className="relative overflow-hidden rounded-3xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`min-w-full relative h-112.5 md:h-125 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 ${banner.bgColor} transition-colors duration-500`}
              >
                <div className="flex flex-col items-start max-w-xl z-10 text-left">
                  
                  <h2 className={`text-2xl md:text-5xl font-black leading-none tracking-tighter ${banner.titleColor}`}>
                    {banner.title}
                  </h2>

                  <div className="mt-6 bg-[#FFFDF9] border-2 border-black p-3 rounded-2xl shadow-[4px_4px_0px_rgba(0,0,0,1)] text-black max-w-sm">
                    <p className="text-xs md:text-sm font-bold leading-tight">
                      {banner.subtitle}
                    </p>
                  </div>

                  <button className="mt-8 flex items-center gap-2 px-6 py-3 bg-[#FFFDF9] text-black font-black uppercase text-xs md:text-sm tracking-wider border-2 border-black rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all">
                    <span>{banner.cta}</span>
                    <ArrowRight size={16} className="stroke-[3px]" />
                  </button>
                </div>

<div className="relative w-full md:w-1/2 h-48 md:h-full flex items-end justify-center">
  <div className="absolute w-56 h-56 md:w-96 md:h-96 bg-[#FFFDF9]/20 rounded-full blur-sm pointer-events-none bottom-[-10%] left-1/2 -translate-x-1/2" />
  
  <img
    src={banner.img}
    alt={`produto-${index}`}
    className="
      absolute bottom-[-15%] md:bottom-[-20%] left-1/2 -translate-x-1/2
      
      h-[110%] md:h-[140%] w-auto
      
      max-w-none 
      
      object-cover object-bottom
      
      drop-shadow-[10px_10px_0px_rgba(0,0,0,0.25)] 
      animate-bounce-slow
    "
  />
</div>

              </div>
            ))}
          </div>

          <div className="absolute bottom-6 left-8 flex gap-2 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 border border-black ${
                  current === index
                    ? "w-8 h-3 bg-[#FFFDF9] shadow-[1px_1px_0px_black]"
                    : "w-3 h-3 bg-[#FFFDF9]/50"
                } rounded-full`}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Hero; 