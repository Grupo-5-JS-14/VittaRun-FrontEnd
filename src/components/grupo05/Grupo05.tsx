import { useState } from "react";
import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon} from "@phosphor-icons/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Grupo05Props = {
  variante?: "compacto" | "grande";
};

function Grupo05({ variante = "grande" }: Grupo05Props) {
  const integrantes = [
    {
      nome: "Lohanna Benjamim",
      cargo: "Login, Cadastro e Responsividade",
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
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={voltar}
            className="w-7 h-7 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-green-50 transition cursor-pointer"
          >
            <ChevronLeft className="text-green-700" size={18} />
          </button>

          <div className="w-56 bg-white rounded-2xl shadow-sm border border-gray-200 p-3 flex items-center gap-3">
            <img
              src={pessoa.foto}
              alt={pessoa.nome}
              className="w-16 h-16 rounded-full object-cover border-2 border-green-700"
            />

            <div className="flex flex-col text-left min-w-0">
              <h3 className="text-sm font-bold text-gray-900 truncate">
                {pessoa.nome}
              </h3>

              <p className="text-[11px] text-green-700 font-semibold leading-tight mt-1">
                {pessoa.cargo}
              </p>

              <div className="flex gap-3 mt-2 text-gray-500">
                <a
                  href={pessoa.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-700 transition"
                >
                  <GithubLogoIcon size={18} weight="fill" />
                </a>

                <a
                  href={pessoa.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-700 transition"
                >
                  <LinkedinLogoIcon size={18} weight="fill" />
                </a>

                <a
                  href={pessoa.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  <InstagramLogoIcon size={18} weight="bold" />
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={avancar}
            className="w-7 h-7 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-green-50 transition cursor-pointer"
          >
            <ChevronRight className="text-green-700" size={18} />
          </button>
        </div>

        <div className="flex gap-1.5">
          {integrantes.map((_, posicao) => (
            <button
              key={posicao}
              onClick={() => setIndex(posicao)}
              className={`w-2 h-2 rounded-full transition cursor-pointer ${
                posicao === index ? "bg-green-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center gap-5">
        <button
          onClick={voltar}
          className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-green-50 transition cursor-pointer"
        >
          <ChevronLeft className="text-green-700" size={28} />
        </button>

        <div className="w-72 bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          <img
            src={pessoa.foto}
            alt={pessoa.nome}
            className="w-full h-72 object-cover"
          />

          <div className="p-6 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              {pessoa.nome}
            </h3>

            <p className="text-green-700 font-semibold mt-2 min-h-10 flex items-center justify-center leading-tight">
              {pessoa.cargo}
            </p>

            <div className="flex gap-5 mt-5 text-gray-500">
              <a
                href={pessoa.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition"
              >
                <GithubLogoIcon size={32} weight="fill" />
              </a>

              <a
                href={pessoa.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition"
              >
                <LinkedinLogoIcon size={32} weight="fill" />
              </a>

              <a
                href={pessoa.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
              >
                <InstagramLogoIcon size={32} weight="bold" />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={avancar}
          className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-green-50 transition cursor-pointer"
        >
          <ChevronRight className="text-green-700" size={28} />
        </button>
      </div>

      <div className="flex gap-2">
        {integrantes.map((_, posicao) => (
          <button
            key={posicao}
            onClick={() => setIndex(posicao)}
            className={`w-3 h-3 rounded-full transition cursor-pointer ${
              posicao === index ? "bg-green-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Grupo05;