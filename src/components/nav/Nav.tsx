import { MapPin, Salad, User, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [address, setAddress] = useState("Obtendo localização...");

  useEffect(() => {
    let isMounted = true;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();

          if (!isMounted) return;

          const road =
            data.address.road ||
            data.address.suburb ||
            data.address.neighbourhood ||
            "Localização encontrada";

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "";

          setAddress(`${road}, ${city}`);
        } catch {
          if (isMounted) setAddress("Localização indisponível");
        }
      },
      () => {
        if (isMounted) setAddress("Permissão negada");
      }
    );

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-full uppercase tracking-wider text-xs font-black transition-all duration-200 border-2 block text-center ${
      isActive
        ? "bg-[#006644] text-[#FFFDF9] border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
        : "text-black border-transparent hover:border-black hover:bg-amber-100"
    }`;

  return (
    <nav className="w-full bg-[#FFFDF9] border-b-4 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        
        <Link to="/home" className="flex items-center gap-2 shrink-0 group">
          <div className="bg-[#006644] p-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform">
            <Salad className="text-[#FFFDF9]" size={26} />
          </div>
          <h1 className="text-2xl font-black tracking-tighter leading-none text-black uppercase">
            Vitta<span className="text-[#FF5F1F]">Run</span>
          </h1>
        </Link>

        <ul className="hidden lg:flex items-center gap-2">
          <li>
            <NavLink to="/home" className={navLinkClass}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/lojas" className={navLinkClass}>
              Lojas
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre" className={navLinkClass}>
              Sobre
            </NavLink>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          
          <div className="flex items-center gap-2 max-w-50 bg-amber-50 border-2 border-black p-2 rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            <MapPin className="text-[#FF5F1F] shrink-0" size={18} />
            <div className="text-xs leading-tight min-w-0 flex-1">
              <p className="text-gray-500 font-bold uppercase tracking-wider text-[8px]">
                Entregar em:
              </p>
              <p className="font-black text-black truncate" title={address}>
                {address}
              </p>
            </div>
          </div>

          <Link
            to="/login"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF5F1F] text-white font-black uppercase text-xs tracking-wider border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all active:scale-95"
          >
            <User size={16} className="stroke-[3px]" />
            <span>Entrar</span>
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 border-2 border-black bg-amber-100 rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,1)] active:scale-95 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Alternar menu"
        >
          {menuOpen ? <X className="text-black" size={20} /> : <Menu className="text-black" size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t-4 border-black bg-[#FFFDF9] px-4 py-6 shadow-[0_4px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4">
            
            <NavLink to="/home" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Início
            </NavLink>

            <NavLink to="/lojas" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Lojas
            </NavLink>

            <NavLink to="/sobre" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Sobre
            </NavLink>

            <div className="border-2 border-black flex items-center gap-3 bg-amber-50 p-3 rounded-xl shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              <MapPin className="text-[#FF5F1F] shrink-0" size={20} />
              <div className="min-w-0 flex-1">
                <p className="text-gray-500 font-bold uppercase tracking-wider text-[9px]">
                  Entregar em:
                </p>
                <p className="font-black text-black text-sm truncate">
                  {address}
                </p>
              </div>
            </div>

            {/* LOGIN MOBILE */}
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex justify-center items-center gap-2 bg-[#FF5F1F] text-white py-3.5 rounded-xl font-black uppercase tracking-wider text-xs border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] active:scale-95"
            >
              <User size={16} className="stroke-[3px]" />
              Entrar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;