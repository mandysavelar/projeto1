export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-20 text-center sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 100%, rgba(193,31,46,0.35), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          Fala com a gente
        </span>
        <h2 className="mt-4 font-display text-4xl uppercase tracking-tight text-paper sm:text-5xl">
          Bora conversar?
        </h2>
        <p className="mt-4 text-smoke">
          Dúvida sobre tamanho, prazo ou aquela camiseta que já saiu de linha?
          Chama no WhatsApp que a gente te responde na hora.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/5521996049885"
            className="inline-flex h-12 items-center justify-center rounded-full bg-blood px-8 font-mono text-sm uppercase tracking-wider text-paper transition-colors hover:bg-blood-dark"
          >
            (21) 99604-9885 no WhatsApp
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-paper/30 px-8 font-mono text-sm uppercase tracking-wider text-paper transition-colors hover:border-gold hover:text-gold"
          >
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
