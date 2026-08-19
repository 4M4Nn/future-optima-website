type IconProps = { className?: string };

function MonogramBadge({
  className,
  bg,
  label,
}: {
  className?: string;
  bg: string;
  label: string;
}) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill={bg} />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        fill="#ffffff"
      >
        {label}
      </text>
    </svg>
  );
}

export function PythonIcon({ className }: IconProps) {
  return <MonogramBadge className={className} bg="#3776AB" label="Py" />;
}

export function DjangoIcon({ className }: IconProps) {
  return <MonogramBadge className={className} bg="#0C4B33" label="Dj" />;
}

export function VSCodeIcon({ className }: IconProps) {
  return <MonogramBadge className={className} bg="#007ACC" label="</>" />;
}

export function AIToolIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        fill="#F5A623"
        d="M12 2.5c.35 0 .66.23.76.57l1.35 4.6 4.6 1.35a.79.79 0 0 1 0 1.52l-4.6 1.35-1.35 4.6a.79.79 0 0 1-1.52 0l-1.35-4.6-4.6-1.35a.79.79 0 0 1 0-1.52l4.6-1.35 1.35-4.6c.1-.34.41-.57.76-.57Z"
      />
      <path
        fill="#0B1E3F"
        d="M19 15.2c.24 0 .46.16.53.4l.5 1.7 1.7.5a.55.55 0 0 1 0 1.06l-1.7.5-.5 1.7a.55.55 0 0 1-1.06 0l-.5-1.7-1.7-.5a.55.55 0 0 1 0-1.06l1.7-.5.5-1.7c.07-.24.29-.4.53-.4Z"
      />
    </svg>
  );
}
