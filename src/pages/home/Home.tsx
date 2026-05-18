import logo from "../../assets/Comida legal.png"

function Home() {
  return (

    <main className="min-h-screen bg-zinc-100 text-white">

      <section className="relative overflow-hidden max-h-116 bg-green-50">

        <div className="max-w-7xl mx-auto px-2 py-32 relative z-10">

          <div className="flex items-center justify-between gap-20">

            <div className="max-w-xl">

              <div>
                <h1 className=" text-[#1F6E31] text-5xl md:text-7xl">
                  Comida saudavel,
                  <span className="text-black"> <br></br>vida leve!</span>
                </h1>

                <p className="text-zinc-950 text-lg mt-2 leading-relaxed">
                  Os melhores restaurantes com ptstos saudãveis na palma da sua mão.
                </p>
              </div>

            </div>

            <div className="justify-end w-full max-w-md">


              <div>
              <div className="absolute left-full top-0 h-full w-1/2 bg-amber-500 rounded-tl-full z-0"></div>
                <img src={logo} alt="Hero Imagem" className=" relative z-10 max-w-xl w-full scale-120" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex min-h-20 bg-zinc-200 max-h-116 text-black">
        <h1>Categoria</h1>
      </div>
      <div className="flex text-black min-h-28 bg-amber-200">
        <h2>Lojas em destaques</h2>
      </div>
    </main>
  );
}
export default Home
