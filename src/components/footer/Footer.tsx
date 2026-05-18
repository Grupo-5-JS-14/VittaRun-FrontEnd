import { Salad } from "lucide-react";
import Grupo05 from "../grupo05/Grupo05";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900">VittaRun</h3>

            <Link to="/home">
            <a href="#" className="hover:text-green-700 transition">
              Início
            </a>
            </Link>

            <Link to="/about">
            <a href="#" className="hover:text-green-700 transition">
              Sobre nós
            </a>
            </Link>

            <a href="#" className="hover:text-green-700 transition">
              Carreiras
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900">Descubra</h3>

            <a href="#" className="hover:text-orange-500 transition">
              Cadastre sua Loja
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Parcerias
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Projetos Vitta
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-bold text-gray-900">Equipe</h3>

            <Grupo05 variante="compacto" />
          </div>

        </div>

        <hr className="border-gray-200 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-center md:text-left">

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center justify-center md:justify-start gap-2 shrink-0">
              <Salad className="text-green-700" size={42} />

              <h1 className="text-4xl font-extrabold italic leading-none">
                <span className="text-green-700">Vitta</span>
                <span className="text-orange-500">Run</span>
              </h1>
            </div>

            <p className="leading-relaxed">
              © Copyright 2026 - VittaRun - Todos os direitos reservados.
              <br />
              VittaRun | Agência de Restaurantes Online S.A.
              <br />
              CNPJ 12.345.678/0001-90
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-5">
            <a href="#" className="hover:text-green-700 transition">
              Termos e condições de uso
            </a>

            <a href="#" className="hover:text-green-700 transition">
              Código de conduta
            </a>

            <a href="#" className="hover:text-green-700 transition">
              Privacidade
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;