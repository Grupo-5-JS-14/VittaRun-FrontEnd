

type CardLojaProps = {
  imagem: string;
  nome: string;
  categorias: string;
  logo?: string;
  novo?: boolean;
};

function CardLoja({
  imagem,
  nome,
  categorias,
  logo,
  novo,
}: CardLojaProps) {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
      
      {/* Imagem */}
      <div className="relative">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-40 object-cover"
        />

        {/* Badge Novo */}
        {novo && (
          <span className="absolute top-3 left-3 bg-[#FF8A00] text-white text-sm font-semibold px-3 py-1 rounded-full">
            Novo
          </span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-4">

        {/* Logo + Nome */}
        <div className="flex items-center gap-3">
          
          <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden shadow flex items-center justify-center">
            {logo ? (
              <img
                src={logo}
                alt={nome}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-orange-500 font-bold text-xl">
                fit
              </span>
            )}
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800">
              {nome}
            </h2>

            <p className="text-sm text-gray-500">
              {categorias}
            </p>
          </div>
        </div>

        {/* Informações */}
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
          <span className="text-orange-500 font-semibold">
          </span>
        </div>

        {/* Frete grátis */}
        <p className="mt-4 text-[#2E9E45] font-semibold text-sm">
          Frete grátis acima de R$ 50
        </p>
      </div>
    </div>
  );
}

export default CardLoja;