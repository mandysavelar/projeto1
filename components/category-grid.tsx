import {
  BootIcon,
  BoxIcon,
  DressIcon,
  KidIcon,
  SneakerIcon,
  StudIcon,
  TeeIcon,
} from "./category-icons";

const CATEGORIES = [
  { name: "All Star", icon: SneakerIcon },
  { name: "Coturno", icon: BootIcon },
  { name: "Camiseta", icon: TeeIcon },
  { name: "Baby Look", icon: DressIcon },
  { name: "Infantil", icon: KidIcon },
  { name: "Kits", icon: BoxIcon },
  { name: "Acessórios", icon: StudIcon },
];

export function CategoryGrid() {
  return (
    <section id="categorias" className="bg-paper px-6 py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-blood">
          Nas prateleiras
        </span>
        <h2 className="mt-3 font-display text-4xl uppercase tracking-tight sm:text-5xl">
          Escolha seu uniforme
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map(({ name, icon: Icon }) => (
            <a
              key={name}
              href="#"
              className="group flex flex-col items-center gap-4 rounded-2xl border-2 border-ink/10 bg-paper-dim px-4 py-8 text-center transition-colors hover:border-blood hover:bg-ink"
            >
              <Icon className="h-10 w-10 text-ink transition-colors group-hover:text-gold" />
              <span className="font-display text-lg uppercase tracking-wide text-ink transition-colors group-hover:text-paper">
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
