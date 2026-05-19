type CardLojaProps = {
  imagem: string;
  nome: string;
  categorias: string; 
  categoria: string;  
  logo?: string;
  tag?: string;
};

function CardLoja({
  imagem,
  nome,
  categorias,
  categoria,
  logo,
  tag,
}: CardLojaProps) {
  return (
    <div className="group w-[320px] h-95 flex flex-col bg-white rounded-[28px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      
      <div className="relative overflow-hidden h-44 shrink-0">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {tag && (
          <span className="absolute top-4 left-4 bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-2xl shadow-sm">
            {tag}
          </span>
        )}
      </div>

      <div className="relative px-5 pt-6 pb-5 flex flex-col flex-1 justify-between">
        
        <div className="absolute -top-10 left-5 w-20 h-20 rounded-full bg-white overflow-hidden border border-gray-100 flex items-center justify-center shadow-sm z-10">
          {logo ? (
            <img
              src={logo}
              alt={nome}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-green-700 font-bold text-xl">
              fit
            </span>
          )}
        </div>

        <div className="ml-24 h-20 flex flex-col justify-center">
          <h2 className="text-lg font-bold text-gray-900 leading-tight line-clamp-2 tracking-tight">
            {nome}
          </h2>

          <p className="mt-0.5 text-gray-500 text-xs line-clamp-1">
            {categorias}
          </p>
        </div>

        <div className="flex items-center gap-2.5 mt-auto text-xs text-gray-500 border-t border-gray-50 pt-3">
          <span className="text-orange-500 text-sm">
            ★
          </span>

          <span className="font-semibold text-gray-800">
            4,8
          </span>

          <span>•</span>

          <span>20–35 min</span>

          <span>•</span>

          <span className="text-green-700 font-medium truncate max-w-30" title={categoria}>
            {categoria}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardLoja;