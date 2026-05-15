import businessInfo from '../data/businessInfo'

export default function Gallery() {
  const { gallery, name, socials } = businessInfo

  if (!gallery || gallery.length === 0) return null

  return (
    <section
      id="gallery"
      className="section-padding"
      style={{ background: 'var(--background)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span
            className="text-xs font-light tracking-widest uppercase mb-4 block"
            style={{ color: 'var(--accent)' }}
          >
            Our Work
          </span>
          <h2
            className="font-display font-light mb-6"
            style={{ color: 'var(--text)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Gallery
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10" style={{ background: 'var(--accent)' }} />
            <div className="w-1 h-1 rotate-45" style={{ background: 'var(--accent)' }} />
            <div className="h-px w-10" style={{ background: 'var(--accent)' }} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.map((src, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden ${
                i === 0 ? 'col-span-2 md:col-span-1 row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? '3/4' : '1/1' }}
            >
              <img
                src={src}
                alt={`${name} gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(212,168,48,0.12)' }}
              />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        {socials?.instagram && (
          <div className="text-center mt-12 reveal">
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-light transition-colors duration-300"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Follow us on Instagram
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
