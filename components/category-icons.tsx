type IconProps = { className?: string };

export function SneakerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 30c4-1 6-3 8-6 2 3 5 4 8 4h4l10 6c2 1 3 2 3 4H6c-1 0-2-1-2-2v-6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 24V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 34h30" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function BootIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M18 6v16l-10 6c-2 1-3 3-3 5v3h29c1 0 2-1 2-2 0-4-3-7-7-8l-7-2V6h-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M18 14h8" stroke="currentColor" strokeWidth="2" />
      <path d="M5 33h29" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function TeeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 8 6 14l4 6 4-2v18h20V18l4 2 4-6-10-6c0 3-3 5-6 5s-6-2-6-5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DressIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M17 8h14l3 6-5 3 3 4-4 17H20l-4-17 3-4-5-3 3-6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M20 8c0 2 1.5 4 4 4s4-2 4-4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function KidIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14 34v-6c0-5 4-9 10-9s10 4 10 9v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M17 34v6M31 34v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function BoxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 16 24 8l18 8-18 8-18-8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M6 16v16l18 8 18-8V16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M24 24v16" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function StudIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 24a16 16 0 1 1 32 0 16 16 0 0 1-32 0Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m24 14 3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6L15 21l6-1 3-6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
