const HEX: Record<string, string> = {
  ink: "#0d0d0e",
  paper: "#f3eee3",
  gold: "#d9a441",
};

export function PerforatedDivider({
  from,
  to,
}: {
  from: keyof typeof HEX;
  to: keyof typeof HEX;
}) {
  return (
    <div
      className="relative h-5 w-full overflow-hidden"
      style={{ backgroundColor: HEX[from] }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-x-0 top-1/2 h-4 -translate-y-1/2"
        style={{
          backgroundImage: `radial-gradient(circle, ${HEX[to]} 3.5px, transparent 4px)`,
          backgroundSize: "18px 18px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x",
        }}
      />
    </div>
  );
}
