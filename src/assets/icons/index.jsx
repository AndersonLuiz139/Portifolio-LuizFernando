function Icon({ size = 24, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Dumbbell(props) {
  return (
    <Icon {...props}>
      <path d="M3.5 9v6" />
      <path d="M6.5 6.5v11" />
      <path d="M17.5 6.5v11" />
      <path d="M20.5 9v6" />
      <path d="M6.5 12h11" />
    </Icon>
  );
}

export function Runner(props) {
  return (
    <Icon {...props}>
      <circle cx="15" cy="4.5" r="2" />
      <path d="M14 8 11 13" />
      <path d="m14 8 3.5 2 1.5 3" />
      <path d="M14 8 10.5 9.5" />
      <path d="m11 13 3.5 2.5-.5 4.5" />
      <path d="m11 13-4 2-2.5 4" />
    </Icon>
  );
}

export function Activity(props) {
  return (
    <Icon {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </Icon>
  );
}

export function MessageCircle(props) {
  return (
    <Icon {...props}>
      <path d="M20.5 11.8a8 8 0 0 1-8.6 8 8.6 8.6 0 0 1-3.3-.8L4 20.5l1.5-4.4a8 8 0 0 1-.9-3.6 8 8 0 0 1 7.5-8.2 8 8 0 0 1 8.4 7.5Z" />
    </Icon>
  );
}

export function MapPin(props) {
  return (
    <Icon {...props}>
      <path d="M20 10.5c0 6-8 11.5-8 11.5s-8-5.5-8-11.5a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10.5" r="3" />
    </Icon>
  );
}

export function ArrowRight(props) {
  return (
    <Icon {...props}>
      <path d="M4 12h15" />
      <path d="m12.5 5.5 7 6.5-7 6.5" />
    </Icon>
  );
}

export function Menu(props) {
  return (
    <Icon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Icon>
  );
}

export function Close(props) {
  return (
    <Icon {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </Icon>
  );
}

export function Whatsapp(props) {
  return (
    <Icon {...props}>
      <path d="M20.5 11.8a8 8 0 0 1-8.6 8 8.6 8.6 0 0 1-3.3-.8L4 20.5l1.5-4.4a8 8 0 0 1-.9-3.6 8 8 0 0 1 7.5-8.2 8 8 0 0 1 8.4 7.5Z" />
      <path d="M9.6 9.4h1.2l1 2-1 1a5.5 5.5 0 0 0 2.8 2.8l1-1 2 1v1.2a1 1 0 0 1-1.1 1 8 8 0 0 1-7-7 1 1 0 0 1 1.1-1Z" />
    </Icon>
  );
}

export function Instagram(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7h.01" />
    </Icon>
  );
}
