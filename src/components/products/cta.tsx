export default function CTA() {
    return (
      <section className="bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 py-24">
        <div className="container mx-auto px-6 text-center">
  
          <p className="text-cyan-400 font-semibold uppercase tracking-[0.25em]">
            Need Help?
          </p>
  
          <h2 className="mt-4 text-5xl font-bold text-white">
            Looking For The Right Product?
          </h2>
  
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Our experts help you choose the perfect laptop, desktop, printer,
            CCTV or networking solution based on your budget and requirements.
          </p>
  
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-cyan-400">
              Contact Our Experts
            </button>
  
            <a
            href="tel:+919924230096"
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            Call Now
          </a>
          </div>
  
        </div>
      </section>
    );
  }