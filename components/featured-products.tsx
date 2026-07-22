type Product = {
  name: string;
  price: string;
  installment: string;
  tag: string;
};

const PRODUCTS: Product[] = [
  {
    name: "Coturno Vilela Boots Costura Amarela Plataforma",
    price: "R$ 389,00",
    installment: "3x de R$ 129,66 sem juros",
    tag: "Coturno",
  },
  {
    name: "Nirvana Smile",
    price: "R$ 99,00",
    installment: "3x de R$ 33,00 sem juros",
    tag: "Camiseta",
  },
  {
    name: "Beatles Sgt. Peppers",
    price: "R$ 149,00",
    installment: "3x de R$ 49,66 sem juros",
    tag: "Camiseta",
  },
  {
    name: "All Star Chuck Taylor Plataforma Branco Couro",
    price: "R$ 359,00",
    installment: "3x de R$ 119,66 sem juros",
    tag: "All Star",
  },
  {
    name: "Kiss",
    price: "R$ 149,00",
    installment: "3x de R$ 49,66 sem juros",
    tag: "Camiseta",
  },
  {
    name: "Joy Division - Unknown Pleasures",
    price: "R$ 149,00",
    installment: "3x de R$ 49,66 sem juros",
    tag: "Camiseta",
  },
  {
    name: "Queen In Concert",
    price: "R$ 149,00",
    installment: "3x de R$ 49,66 sem juros",
    tag: "Camiseta",
  },
  {
    name: "AC/DC High Voltage Tour 76",
    price: "R$ 149,00",
    installment: "3x de R$ 49,66 sem juros",
    tag: "Camiseta",
  },
];

export function FeaturedProducts() {
  return (
    <section id="destaques" className="bg-ink px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          Mais pedidos
        </span>
        <h2 className="mt-3 font-display text-4xl uppercase tracking-tight text-paper sm:text-5xl">
          Destaques da loja
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => (
            <a
              key={product.name}
              href="#"
              className="group relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-xl border border-paper/10 p-4 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: i % 3 === 0 ? "#19181c" : i % 3 === 1 ? "#1f1418" : "#191510",
              }}
            >
              <span className="w-fit rounded-full border border-gold/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold">
                {product.tag}
              </span>

              <span className="pointer-events-none absolute inset-x-4 top-1/2 -translate-y-1/2 text-center font-display text-2xl uppercase leading-none tracking-tight text-paper/20 transition-colors group-hover:text-blood/40">
                {product.name.split(" ")[0]}
              </span>

              <div>
                <h3 className="font-display text-base uppercase leading-tight tracking-tight text-paper">
                  {product.name}
                </h3>
                <p className="mt-2 font-mono text-lg text-gold">{product.price}</p>
                <p className="font-mono text-[11px] text-smoke">{product.installment}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
