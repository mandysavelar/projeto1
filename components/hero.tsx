function VinylMark() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="animate-spin-slow h-40 w-40 sm:h-56 sm:w-56"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="98" fill="#19181c" stroke="#9a948a" strokeWidth="1" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="#2a282c" strokeWidth="1" />
      <circle cx="100" cy="100" r="64" fill="none" stroke="#2a282c" strokeWidth="1" />
      <circle cx="100" cy="100" r="48" fill="none" stroke="#2a282c" strokeWidth="1" />
      <circle cx="100" cy="100" r="34" fill="#c11f2e" />
      <circle cx="100" cy="100" r="34" fill="none" stroke="#d9a441" strokeWidth="1" />
      <circle cx="100" cy="100" r="5" fill="#0d0d0e" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex flex-col items-center overflow-hidden px-6 pb-20 pt-16 text-center sm:pb-28 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(193,31,46,0.25), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="absolute -right-10 top-24 hidden opacity-90 sm:block lg:right-10">
        <VinylMark />
      </div>

      <span className="relative font-mono text-xs uppercase tracking-[0.3em] text-gold">
        Desde 1993 · Rio de Janeiro
      </span>

      <h1 className="relative mt-6 max-w-4xl font-display text-5xl uppercase leading-[0.95] tracking-tight text-paper sm:text-7xl lg:text-8xl">
        Rock não sai
        <br />
        de moda.
        <br />
        <span className="text-blood">A gente também não.</span>
      </h1>

      <p className="relative mt-8 max-w-xl text-lg leading-relaxed text-smoke">
        Camisetas oficiais de banda, All Star, coturno e acessórios pra quem
        vive de som alto e atitude. Mais de 30 anos vestindo quem não abre
        mão do rock.
      </p>

      <div className="relative mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#destaques"
          className="inline-flex h-12 items-center justify-center rounded-full bg-blood px-8 font-mono text-sm uppercase tracking-wider text-paper transition-colors hover:bg-blood-dark"
        >
          Ver coleção
        </a>
        <a
          href="https://wa.me/5521996049885"
          className="inline-flex h-12 items-center justify-center rounded-full border border-paper/30 px-8 font-mono text-sm uppercase tracking-wider text-paper transition-colors hover:border-gold hover:text-gold"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
