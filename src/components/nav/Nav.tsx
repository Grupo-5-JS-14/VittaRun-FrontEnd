import { MapPin, Salad, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-3 items-center">

        <div className="flex items-center justify-start">
          <div className="flex items-center gap-2">
            <Salad className="text-green-700" size={42} />

            <h1 className="text-4xl font-extrabold italic leading-none">
              <span className="text-green-700">Vitta</span>
              <span className="text-orange-500">Run</span>
            </h1>
          </div>
        </div>

        
        <ul className="flex items-center justify-center gap-10 text-gray-900 font-medium">
        <Link to="/home">
          <li className="text-green-700 border-b-2 border-green-700 pb-1 cursor-pointer hover:text-green-700">
            Início
          </li>
        </Link>

        <Link to="/lojas">
          <li className="cursor-pointer hover:text-green-700">
            Lojas
          </li>
        </Link>

        <Link to="/sobre">
          <li className="cursor-pointer hover:text-green-700">
            Sobre
          </li>
        </Link>
        </ul>

        <div className="flex items-center justify-end gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="text-green-700" size={22} />

            <div className="text-sm leading-tight">
              <p className="text-gray-500">Entregar em:</p>
              <p className="font-semibold text-gray-900">
                Avenida Paulista, 1000
              </p>
            </div>
          </div>

          <div className="h-8 w-px bg-gray-200" />

          <button className="flex items-center gap-2 cursor-pointer">
            <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center">
              <User size={22} className="text-gray-700" />
            </div>

            <span className="font-medium text-gray-800">
              Entrar
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;