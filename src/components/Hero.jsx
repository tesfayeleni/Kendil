import businessInfo from '../data/businessInfo'

function FilmStripRow() {
  return (
    <div className="flex gap-2 items-center" style={{ opacity: 0.25 }}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} style={{ width: 10, height: 8, border: '1px solid var(--accent)', borderRadius: 1 }} />
      ))}
    </div>
  )
}

export default function Hero() {
  const { hero, stats, whatsapp, nameAmharic } = businessInfo
  const wa = `https://wa.me/${whatsapp}?text=Hello, I'd like to book Kendil Production for an event.`

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.image})` }}
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.80) 0%, rgba(10,10,10,0.40) 40%, rgba(10,10,10,0.90) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.65) 100%)' }} />

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--accent)', opacity: 0.5 }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'var(--accent)', opacity: 0.3 }} />

      {/* Film strip decorative row */}
      <div className="absolute top-20 left-0 right-0 flex justify-center z-10">
        <FilmStripRow />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 pt-28 pb-20">

        {/* Badge */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8" style={{ background: 'var(--accent)' }} />
          <span className="text-xs tracking-widest uppercase font-light" style={{ color: 'var(--accent)' }}>
            {hero.badge}
          </span>
          <div className="h-px w-8" style={{ background: 'var(--accent)' }} />
        </div>

        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Kendil"
          className="w-24 h-24 object-contain rounded-full mb-8"
          style={{ filter: 'drop-shadow(0 0 20px rgba(212,168,48,0.35))', opacity: 0.92 }}
          onError={e => e.target.style.display = 'none'}
        />

        {/* Amharic subtitle */}
        <div
          className="font-display text-lg mb-3 font-light tracking-widest"
          style={{ color: 'rgba(212,168,48,0.55)' }}
        >
          {nameAmharic}
        </div>

        {/* Headlines */}
        <h1
          className="font-display font-light leading-[1.05] mb-2"
          style={{ color: 'var(--background)', fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}
        >
          {hero.headline_light}
        </h1>
        <h1
          className="font-display font-light italic leading-[1.05] mb-10"
          style={{ color: 'var(--accent)', fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}
        >
          {hero.headline_italic}
        </h1>

        {/* Gold ornament */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-10" style={{ background: 'var(--accent)' }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'var(--accent)' }} />
          <div className="h-px w-10" style={{ background: 'var(--accent)' }} />
        </div>

        {/* Description */}
        <p
          className="max-w-xl text-base md:text-lg leading-relaxed mb-12 font-light"
          style={{ color: 'var(--soft)' }}
        >
          {businessInfo.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase font-medium px-8 py-4 transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: 'var(--accent)', color: 'var(--primary)' }}
          >
            {hero.cta_primary}
          </a>
          <a
            href="#gallery"
            className="text-xs tracking-widest uppercase font-light px-8 py-4 transition-all duration-300 hover:border-opacity-80"
            style={{
              border: '1px solid rgba(212,168,48,0.45)',
              color: 'var(--background)',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(212,168,48,0.45)'; e.target.style.color = 'var(--background)' }}
          >
            {hero.cta_secondary}
          </a>
        </div>

        {/* Stats */}
        {stats && (
          <div className="mt-20 flex flex-wrap justify-center gap-12 md:gap-20">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-light" style={{ color: 'var(--accent)', fontSize: '2.25rem' }}>
                  {s.value}
                </div>
                <div className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--muted)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-12 overflow-hidden relative">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            animation: 'scrollDown 2s ease-in-out infinite',
          }} />
        </div>
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(212,168,48,0.4)' }}>Scroll</span>
      </div>

      <style>{`
        @keyframes scrollDown {
          0%   { transform: translateY(-100%); opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
