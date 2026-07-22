const STATS = [
  { value: "31 anos", label: "de estrada" },
  { value: "Milhares", label: "de clientes fiéis" },
  { value: "100%", label: "produtos licenciados" },
];

export function BrandStory() {
  return (
    <section className="bg-paper px-6 py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-blood">
          Nossa história
        </span>
        <p className="mt-6 font-display text-3xl uppercase leading-tight tracking-tight sm:text-4xl">
          &ldquo;Desde 1993 vestindo quem entende que rock é estilo de
          vida, não fase.&rdquo;
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
          Começamos numa banca pequena e viramos referência pra quem procura
          camiseta oficial de banda, All Star e acessório com atitude de
          verdade. Mais de três décadas depois, seguimos escolhendo peça por
          peça com o mesmo ouvido apurado do primeiro dia — e com um
          atendimento que trata cada cliente como parte da plateia.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border-2 border-ink/10 bg-paper-dim px-6 py-8"
            >
              <p className="font-display text-3xl uppercase text-blood">{stat.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
