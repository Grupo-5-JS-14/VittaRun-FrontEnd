import { useState } from "react";
import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Grupo05Props = {
  variante?: "compacto" | "grande";
};

function Grupo05({ variante = "grande" }: Grupo05Props) {
  const integrantes = [
    {
      nome: "Lohanna Benjamim",
      cargo: "UX/UI, Login, Cadastro e Responsividade",
      foto: "https://avatars.githubusercontent.com/u/188930169?v=4",
      github: "https://github.com/lohannab",
      linkedin: "https://www.linkedin.com/in/lohannab/",
      instagram: "https://www.instagram.com/lohannabr/"
    },
    {
      nome: "André Lucas",
      cargo: "Hero da Home",
      foto: "https://avatars.githubusercontent.com/u/197832797?v=4",
      github: "https://github.com/luhdias-png",
      linkedin: "https://www.linkedin.com/in/andre-lucas-dias-lima/",
      instagram: "https://www.instagram.com/luhdias.gif/"
    },
    {
      nome: "Andressa Andrade",
      cargo: "Lista de Categorias",
      foto: "https://avatars.githubusercontent.com/u/128521737?v=4",
      github: "https://github.com/Dessxevy",
      linkedin: "https://www.linkedin.com/in/andressa-andrade-dev/",
      instagram: "https://www.instagram.com/dessxevy/"
    },
    {
      nome: "Bruna Zuppini",
      cargo: "Navbar e Footer",
      foto: "https://avatars.githubusercontent.com/u/48595147?s=400&u=37fda6b65b1ad54ff3d7d98f6f7662f12df7d2cc&v=4",
      github: "https://github.com/bruzuppini",
      linkedin: "https://www.linkedin.com/in/brunazuppini",
      instagram: "https://instagram.com/bruzuppini"
    },
    {
      nome: "Gabriel Coutinho",
      cargo: "Rotas, Início e Renderização",
      foto: "https://avatars.githubusercontent.com/u/156151153?v=4",
      github: "https://github.com/gcoutinhoo",
      linkedin: "https://www.linkedin.com/in/gabriel-coutinho-de-souza/",
      instagram: "https://www.instagram.com/g_coutinhoo"
    },
    {
      nome: "Kay Ira do Val",
      cargo: "Sobre e Produtos Vitta",
      foto: "https://avatars.githubusercontent.com/u/260806102?v=4",
      github: "https://github.com/kayanedvlsantos-create",
      linkedin: "https://www.linkedin.com/in/kayane-do-val-lima/",
      instagram: "https://www.instagram.com/ratomanchado/"
    },
    {
      nome: "Douglas Santos",
      cargo: "Lista de Lojas e Integração",
      foto: "https://avatars.githubusercontent.com/u/99764080?v=4",
      github: "https://github.com/DougSan7",
      linkedin: "https://www.linkedin.com/in/douglas-santos-ds/",
      instagram: "https://www.instagram.com/douglas_san7/"
    }
  ];

  const [index, setIndex] = useState(0);

  function voltar() {
    setIndex((indexAtual) =>
      indexAtual === 0 ? integrantes.length - 1 : indexAtual - 1
    );
  }

  function avancar() {
    setIndex((indexAtual) =>
      indexAtual === integrantes.length - 1 ? 0 : indexAtual + 1
    );
  }

  const pessoa = integrantes[index];
  const compacto = variante === "compacto";


  if (compacto) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center gap-2.5 w-full justify-center">
          
          <button
            onClick={voltar}
            type="button"
            className="w-8 h-8 rounded-full bg-[#FFFDF9] text-black border-2 border-black flex items-center justify-center hover:bg-[#FFC700] shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all cursor-pointer select-none"
          >
            <ChevronLeft size={16} className="stroke-[3px]" />
          </button>

          <div className="w-full max-w-60 bg-[#FFFDF9] rounded-2xl border-2 border-black p-3 flex items-center gap-3 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <img
              src={pessoa.foto}
              alt={pessoa.nome}
              className="w-12 h-12 rounded-xl object-cover border-2 border-black shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]"
            />

            <div className="flex flex-col text-left min-w-0 flex-1">
              <h3 className="text-xs font-black text-black uppercase tracking-tight truncate">
                {pessoa.nome}
              </h3>

              <p className="text-[10px] text-[#006644] font-bold uppercase tracking-wide mt-0.5 truncate">
                {pessoa.cargo}
              </p>

              <div className="flex gap-2.5 mt-1.5 text-black">
                <a href={pessoa.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5F1F] transition-colors">
                  <GithubLogoIcon size={16} weight="fill" />
                </a>
                <a href={pessoa.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5F1F] transition-colors">
                  <LinkedinLogoIcon size={16} weight="fill" />
                </a>
                <a href={pessoa.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5F1F] transition-colors">
                  <InstagramLogoIcon size={16} weight="bold" />
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={avancar}
            type="button"
            className="w-8 h-8 rounded-full bg-[#FFFDF9] text-black border-2 border-black flex items-center justify-center hover:bg-[#FFC700] shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all cursor-pointer select-none"
          >
            <ChevronRight size={16} className="stroke-[3px]" />
          </button>
        </div>

        <div className="flex gap-1.5 justify-center">
          {integrantes.map((_, posicao) => (
            <button
              key={posicao}
              type="button"
              onClick={() => setIndex(posicao)}
              className={`w-2 h-2 rounded-full border border-black transition-all cursor-pointer ${
                posicao === index ? "bg-[#FF5F1F] w-4" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }


  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-6">
        
        <button
          onClick={voltar}
          type="button"
          className="w-12 h-12 rounded-full bg-[#FFFDF9] text-black border-3 border-black flex items-center justify-center hover:bg-[#FFC700] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-pointer active:scale-95 select-none"
        >
          <ChevronLeft size={24} className="stroke-[3px]" />
        </button>

        <div className="w-72 bg-[#FFFDF9] rounded-3xl overflow-hidden border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]">
          <img
            src={pessoa.foto}
            alt={pessoa.nome}
            className="w-full h-64 object-cover border-b-4 border-black"
          />

          <div className="p-5 flex flex-col items-center text-center bg-white">
            <h3 className="text-xl font-black text-black uppercase tracking-tight">
              {pessoa.nome}
            </h3>

            <p className="text-[#006644] bg-green-50 border-2 border-black px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider mt-3 min-h-10 flex items-center justify-center leading-tight shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              {pessoa.cargo}
            </p>

            <div className="flex gap-4 mt-5 text-black">
              <a href={pessoa.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5F1F] transition-transform hover:scale-110">
                <GithubLogoIcon size={26} weight="fill" />
              </a>
              <a href={pessoa.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5F1F] transition-transform hover:scale-110">
                <LinkedinLogoIcon size={26} weight="fill" />
              </a>
              <a href={pessoa.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5F1F] transition-transform hover:scale-110">
                <InstagramLogoIcon size={26} weight="bold" />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={avancar}
          type="button"
          className="w-12 h-12 rounded-full bg-[#FFFDF9] text-black border-3 border-black flex items-center justify-center hover:bg-[#FFC700] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-pointer active:scale-95 select-none"
        >
          <ChevronRight size={24} className="stroke-[3px]" />
        </button>
      </div>

      <div className="flex gap-2">
        {integrantes.map((_, posicao) => (
          <button
            key={posicao}
            type="button"
            onClick={() => setIndex(posicao)}
            className={`h-3 rounded-full border-2 border-black transition-all cursor-pointer ${
              posicao === index ? "bg-[#FF5F1F] w-6" : "bg-white w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Grupo05;