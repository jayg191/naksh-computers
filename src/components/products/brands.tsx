export default function Brands() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 sm:text-sm">
            Trusted Brands
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:mt-4 sm:text-4xl lg:text-5xl">
            We Sell Top Brands
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-lg">
            Genuine products from the world&apos;s leading technology manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-5 lg:grid-cols-6 lg:gap-6">
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
              className="group flex h-[70px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-2 text-center text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-white hover:text-cyan-600 hover:shadow-xl sm:h-24 sm:rounded-2xl sm:text-xl"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}