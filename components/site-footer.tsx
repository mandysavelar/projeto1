const CATEGORIES = [
  "All Star",
  "Coturno",
  "Camiseta",
  "Baby Look",
  "Infantil",
  "Kits",
  "Acessórios",
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-soft bg-ink px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <span className="font-display text-xl tracking-wide text-paper">
            ROCK<span className="text-blood">N&apos;</span>ROLL
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-smoke">
            Camisetas oficiais de banda, All Star, coturnos e acessórios desde
            1993. Rio de Janeiro pro Brasil inteiro.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-gold">
            Categorias
          </h3>
          <ul className="mt-4 space-y-2">
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <a
                  href="#categorias"
                  className="text-sm text-smoke transition-colors hover:text-paper"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-gold">
            Contato
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-smoke">
            <li>Telefone / WhatsApp: (21) 99604-9885</li>
            <li>
              <a href="#" className="transition-colors hover:text-paper">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-paper">
                Política de Trocas e Devoluções
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-ink-soft pt-6 text-xs text-smoke">
        <p>AIIN Comércio e Confecções LTDA — CNPJ: 73.415.937/0001-00</p>
        <p className="mt-1">
          &copy; {year} Rock n Roll. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
