export default function Brands() {
    return (
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
  
          <div className="text-center mb-14">
            <p className="text-cyan-600 font-semibold uppercase tracking-[0.25em]">
              Trusted Brands
            </p>
  
            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              We Sell Top Brands
            </h2>
  
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              Genuine products from the world's leading technology manufacturers.
            </p>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
            {[
                "HP",
                "Dell",
                "Lenovo",
                "ASUS",
                "Acer",
                "MSI",
                "Canon",
                "Epson",
                "TP-Link",
                "D-Link",
                "WD",
                "Seagate",
            ].map((brand) => (
                <div
                key={brand}
                className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-xl font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-white hover:text-cyan-600 hover:shadow-xl"
                >
                {brand}
                </div>
            ))}
            </div>
          </div>
  
        </div>
      </section>
    );
  }