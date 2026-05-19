import { Salad } from "lucide-react";
import Grupo05 from "../grupo05/Grupo05";
import { Link } from "react-router-dom";

function Footer() {
  const newLocal = "flex items-center gap-2 shrink-0 bg-white border-2 border-black p-2 rounded-xl shadow-[3px_3px_0px_#006644] rotate-[-1deg]";
  return (
    <footer className="w-full bg-black text-[#FFFDF9] border-t-4 border-black pt-12 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          <div className="flex flex-col gap-3 items-start">
            <h3 className="font-black text-lg text-[#FFC700] uppercase tracking-wider mb-2">
              VittaRun
            </h3>

            <Link to="/home" className="hover:text-[#FF5F1F] font-bold text-sm uppercase tracking-wide transition-colors">
              Início
            </Link>

            <Link to="/sobre" className="hover:text-[#FF5F1F] font-bold text-sm uppercase tracking-wide transition-colors">
              Sobre nós
            </Link>

            <a href="" className="hover:text-[#FF5F1F] font-bold text-sm uppercase tracking-wide transition-colors">
              Carreiras
            </a>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <h3 className="font-black text-lg text-[#FFC700] uppercase tracking-wider mb-2">
              Descubra
            </h3>

            <a href="#" className="hover:text-[#FF5F1F] font-bold text-sm uppercase tracking-wide transition-colors">
              Cadastre sua Loja
            </a>

            <a href="#" className="hover:text-[#FF5F1F] font-bold text-sm uppercase tracking-wide transition-colors">
              Parcerias
            </a>

            <a href="#" className="hover:text-[#FF5F1F] font-bold text-sm uppercase tracking-wide transition-colors">
              Projetos Vitta
            </a>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h3 className="font-black text-lg text-[#FFC700] uppercase tracking-wider mb-1">
              Equipe de Devs
            </h3>

            <div className="w-full">
              <Grupo05 variante="compacto" />
            </div>
          </div>

        </div>

        <hr className="border-2 border-dashed border-gray-700 mb-8" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-xs text-center lg:text-left">

          <div className="flex flex-col md:flex-row items-center gap-6">
            
            <div className={newLocal}>
              <Salad className="text-[#006644]" size={36} />
              <h1 className="text-3xl font-black tracking-tighter leading-none uppercase">
                <span className="text-black">Vitta</span>
                <span className="text-[#FF5F1F]">Run</span>
              </h1>
            </div>

            <p className="leading-relaxed text-gray-400 font-medium max-w-md">
              © Copyright {new Date().getFullYear()} - VittaRun - Todos os direitos reservados.
              <br />
              Projeto Acadêmico Integrador desenvolvido para o Bootcamp da Generation Brasil.
              <br />
              VittaRun | Agência de Restaurantes Online S.A. • CNPJ 12.345.678/0001-90
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-3 max-w-md">
            <a href="#" className="hover:text-[#FFC700] font-bold uppercase tracking-wider transition-colors">
              Termos e condições
            </a>

            <a href="#" className="hover:text-[#FFC700] font-bold uppercase tracking-wider transition-colors">
              Código de conduta
            </a>

            <a href="#" className="hover:text-[#FFC700] font-bold uppercase tracking-wider transition-colors">
              Privacidade
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;