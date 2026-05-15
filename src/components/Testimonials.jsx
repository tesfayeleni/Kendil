import businessInfo from '../data/businessInfo'

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="var(--accent)" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Initials({ name }) {
  const parts = name.split(' ')
  const initials = parts.map(p => p[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0"
      style={{ background: 'var(--accent)', color: 'var(--primary)' }}
    >
      {initials}
    </div>
  )
}

export default function Testimonials() {
  const { testimonials } = businessInfo

  if (!testimonials || testimonials.length === 0) return null

  return (
    <section id="testimonials" className="section-padding" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          
          <h2
            className="font-display font-light mb-6"
            style={{ color: 'var(--gold)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            What They Say
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10" style={{ background: 'var(--accent)' }} />
            <div className="w-1 h-1 rotate-45" style={{ background: 'var(--accent)' }} />
            <div className="h-px w-10" style={{ background: 'var(--accent)' }} />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} relative p-8 flex flex-col gap-5`}
              style={{
                background: 'var(--background)',
                border: '1px solid rgba(212,168,48,0.12)',
              }}
            >
              {/* Quote mark */}
              <div
                className="font-display text-6xl leading-none font-light absolute top-4 right-6"
                style={{ color: 'var(--accent)', opacity: 0.12 }}
              >
                "
              </div>

              <StarRating />

              <p className="font-display text-base leading-relaxed font-light flex-1 italic" style={{ color: 'var(--muted)' }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: 'rgba(212,168,48,0.12)' }}
              >
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    onError={e => e.target.style.display = 'none'}
                  />
                ) : (
                  <Initials name={t.name} />
                )}
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
