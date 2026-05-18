import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Phone,
  ArrowRight,
} from "lucide-react";


function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen bg-[#F8FAF5] flex">
      {/* LEFT SIDE - DESKTOP ONLY */}
<div className="hidden lg:flex w-1/2 h-screen overflow-hidden">
  <img
    src="src/assets/BgVittaRun.png"
    alt="Vitta Run"
    className="w-full h-full object-cover object-left"
  />
</div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          {/* LOGO
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <Salad className="text-green-700" size={54} />

              <h1 className="text-5xl font-extrabold italic">
                <span className="text-green-700">Vitta</span>
                <span className="text-orange-500">Run</span>
              </h1>
            </div>
          </div> */}

          {/* CARD */}
          <div className="bg-white rounded-4xl shadow-md border border-zinc-100 p-8">
            {/* TOGGLE */}
            <div className="relative bg-zinc-100 rounded-2xl p-1 flex mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`relative z-10 flex-1 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isLogin ? "text-white" : "text-zinc-500"
                }`}
              >
                Entrar
              </button>

              <button
                onClick={() => setIsLogin(false)}
                className={`relative z-10 flex-1 py-3 rounded-xl font-medium transition-all duration-300 ${
                  !isLogin ? "text-white" : "text-zinc-500"
                }`}
              >
                Criar conta
              </button>

              {/* SLIDER */}
              <div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-xl bg-green-600 transition-all duration-300 ${
                  isLogin ? "left-1" : "left-[calc(50%)]"
                }`}
              />
            </div>

            {/* HEADER */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-slate-900">
                {isLogin ? "Bem-vindo" : "Criar conta"}
              </h2>

              <p className="text-slate-500 mt-2">
                {isLogin
                  ? "Entre para continuar sua jornada saudável."
                  : "Crie sua conta e comece uma vida mais leve."}
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-4">
              {!isLogin && (
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-green-500 transition"
                  />
                </div>
              )}

              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-green-500 transition"
                />
              </div>

              {!isLogin && (
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Telefone"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-green-500 transition"
                  />
                </div>
              )}

              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-green-500 transition"
                />
              </div>

              {!isLogin && (
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    size={18}
                  />
                  <input
                    type="password"
                    placeholder="Confirmar senha"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-green-500 transition"
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm pt-2">
                  <label className="flex items-center gap-2 text-zinc-500">
                    <input type="checkbox" />
                    Lembrar-me
                  </label>

                  <button
                    type="button"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Esqueci minha senha
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-2xl transition flex items-center justify-center gap-2 shadow-md"
              >
                {isLogin ? "Entrar" : "Criar conta"}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;