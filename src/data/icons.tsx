export function PhotuLogo({ navigate: navigate }: { navigate: any }) {
  return <div className="flex items-center gap-2" onClick={() => navigate({ to: '/' })}>
    <CameraIcon />
    <span className="font-black tracking-wider text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <span className="logo-p">P</span>
      <span className="logo-h">H</span>
      <span className="logo-o">O</span>
      <span className="logo-t">T</span>
      <span className="logo-u">U</span>
    </span>
  </div>
}

export function CameraIcon() {
  return <svg width={36} height={36} viewBox="0 0 48 48" fill="none">
    <rect x="4" y="13" width="35" height="24" rx="3" fill="#1a1a1a" stroke="rgba(255,255,255,.15)" strokeWidth="0.5"/>
    <rect x="13" y="8" width="12" height="5" rx="1" fill="#1a1a1a" stroke="rgba(255,255,255,.15)" strokeWidth="0.5"/>
    <circle cx="21.5" cy="25" r="10" fill="#111" stroke="rgba(255,255,255,.12)" strokeWidth="0.8"/>
    <circle cx="21.5" cy="25" r="8" fill="#0d0d0d" stroke="rgba(255,255,255,.08)" strokeWidth="0.5"/>
    <circle cx="21.5" cy="25" r="6" fill="#080808" stroke="rgba(233,30,140,.3)" strokeWidth="0.5"/>
    <circle cx="21.5" cy="25" r="4" fill="#050505"/>
    <circle cx="21.5" cy="25" r="2.5" fill="#111" stroke="rgba(255,255,255,.1)" strokeWidth="0.3"/>
    <ellipse cx="20" cy="23" rx="1.5" ry="1" fill="rgba(255,255,255,.08)" transform="rotate(-30 20 23)"/>
    <circle cx="35" cy="11" r="1.8" fill="#ff62d8"/>
    <rect x="19" y="7" width="5" height="1" rx="0.5" fill="#333"/>
  </svg>
}

export function ArrowRightIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
}

export function UserIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
}

export function CartIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
}

export function StarRatingIcon({ rating = 5 }: { rating?: number }) {
  return <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i < rating ? '#ffd700' : '#333'}>
        <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" />
      </svg>
    ))}
  </div>
}
