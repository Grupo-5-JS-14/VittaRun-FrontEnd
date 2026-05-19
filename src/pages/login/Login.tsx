import { useState } from "react";
import { User, Mail, Lock, Phone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <section className="min-h-screen bg-[#FFFDF9] flex border-b-4 border-black">
      <div className="hidden lg:flex w-1/2 h-screen overflow-hidden border-r-4 border-black">
        <img
          src="./assets/BgVittaRun.png"
          alt="Vitta Run"
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 md:px-6 py-10">
        <div className="w-full max-w-md">
          
          <div className="bg-white border-4 border-black rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            
            <div className="relative bg-[#FFFDF9] border-2 border-black rounded-xl p-1 flex mb-8 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`relative z-10 flex-1 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isLogin ? "text-[#FFFDF9]" : "text-black hover:bg-amber-50"
                }`}
              >
                Entrar
              </button>

              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`relative z-10 flex-1 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  !isLogin ? "text-[#FFFDF9]" : "text-black hover:bg-amber-50"
                }`}
              >
                Criar conta
              </button>

              <div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg bg-[#006644] border border-black transition-all duration-300 ${
                  isLogin ? "left-1" : "left-[calc(50%)]"
                }`}
              />
            </div>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                {isLogin ? "Bem-vindo" : "Criar conta"}
              </h2>

              <p className="text-gray-700 font-bold text-xs md:text-sm mt-1">
                {isLogin
                  ? "Entre para continuar sua jornada saudável."
                  : "Crie sua conta e comece uma vida mais leve."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black stroke-[2.5px]"
                    size={18}
                  />
                  <input
                    type="text"
                    required
                    placeholder="NOME COMPLETO"
                    className="w-full bg-white border-2 border-black text-black font-bold placeholder-gray-500 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:bg-amber-50 transition text-sm"
                  />
                </div>
              )}

              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-black stroke-[2.5px]"
                  size={18}
                />
                <input
                  type="email"
                  required
                  placeholder="EMAIL"
                  className="w-full bg-white border-2 border-black text-black font-bold placeholder-gray-500 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:bg-amber-50 transition text-sm"
                />
              </div>

              {!isLogin && (
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black stroke-[2.5px]"
                    size={18}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="TELEFONE"
                    className="w-full bg-white border-2 border-black text-black font-bold placeholder-gray-500 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:bg-amber-50 transition text-sm"
                  />
                </div>
              )}

              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-black stroke-[2.5px]"
                  size={18}
                />
                <input
                  type="password"
                  required
                  placeholder="SENHA"
                  className="w-full bg-white border-2 border-black text-black font-bold placeholder-gray-500 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:bg-amber-50 transition text-sm"
                />
              </div>

              {!isLogin && (
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black stroke-[2.5px]"
                    size={18}
                  />
                  <input
                    type="password"
                    required
                    placeholder="CONFIRMAR SENHA"
                    className="w-full bg-white border-2 border-black text-black font-bold placeholder-gray-500 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:bg-amber-50 transition text-sm"
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider pt-1">
                  <label className="flex items-center gap-2 text-black cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      className="accent-[#006644] w-4 h-4 border-2 border-black rounded"
                    />
                    Lembrar-me
                  </label>

                  <button
                    type="button"
                    className="text-[#006644] hover:underline cursor-pointer"
                  >
                    Esqueci minha senha
                  </button>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full mt-6 bg-[#FF5F1F] text-white font-black uppercase text-xs tracking-wider py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isLogin ? "Entrar" : "Criar conta"}</span>
                <ArrowRight size={16} className="stroke-[3px]" />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;