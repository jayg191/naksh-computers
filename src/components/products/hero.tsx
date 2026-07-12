export default function ProductsHero() {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white">
        {/* Background Glow */}
        <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
  
        <div className="container mx-auto px-6 py-28">
  
          <div className="max-w-4xl">
  
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
              Premium Computer Store • Ahmedabad
            </span>
  
            <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
              Premium Computers
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Built For Everyone
              </span>
            </h1>
  
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Discover laptops, desktop PCs, gaming computers, printers,
              networking devices, CCTV solutions and premium accessories from
              trusted global brands.
            </p>
  
            
  
          </div>
  
        </div>
      </section>
    );
  }