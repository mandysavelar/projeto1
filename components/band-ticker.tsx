const BANDS = [
  "NIRVANA",
  "AC/DC",
  "METALLICA",
  "BEATLES",
  "QUEEN",
  "LED ZEPPELIN",
  "KISS",
  "RUSH",
  "JOY DIVISION",
  "AEROSMITH",
  "NEW ORDER",
];

export function BandTicker() {
  const line = [...BANDS, ...BANDS];

  return (
    <div className="overflow-hidden border-y border-ink bg-gold py-3" aria-hidden="true">
      <div className="marquee-track flex w-max gap-8">
        {[...line, ...line].map((band, i) => (
          <span
            key={`${band}-${i}`}
            className="flex items-center gap-8 font-display text-xl uppercase tracking-wide text-ink sm:text-2xl"
          >
            {band}
            <span className="text-blood">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
