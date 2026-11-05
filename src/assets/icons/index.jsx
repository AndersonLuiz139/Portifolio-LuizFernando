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

export function ArrowDown(props) {
  return (
    <Icon {...props}>
      <path d="M12 4v15" />
      <path d="m5.5 12.5 6.5 7 6.5-7" />
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

/* Marca preenchida, desenho do Bootstrap Icons (MIT). */
export function Whatsapp({ size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.15.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
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
