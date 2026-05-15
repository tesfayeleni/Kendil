import businessInfo from '../data/businessInfo'

export default function WhyUs() {
  const { pillars } = businessInfo

  return (
    <section
      className="relative py-16 md:py-20"
      style={{ background: 'var(--panel-dark)' }}
    >
      {/* Edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)', opacity: 0.4 }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)', opacity: 0.4 }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center px-8 ${
                i < pillars.length - 1 ? 'md:border-r' : ''
              }`}
              style={{ borderColor: 'rgba(212,168,48,0.15)' }}
            >
              <div className="mb-4" style={{ color: 'var(--accent)', fontSize: '1.75rem' }}>
                {p.symbol}
              </div>
              <h3
                className="font-display font-light mb-3 text-xl md:text-2xl"
                style={{ color: 'var(--background)' }}
              >
                {p.title}
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--soft)' }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
