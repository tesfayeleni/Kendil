import businessInfo from '../data/businessInfo'

export default function Services() {
  const { services, whatsapp } = businessInfo
  const wa = (title) => `https://wa.me/${whatsapp}?text=Hello, I'd like to enquire about your ${title} service.`

  return (
    <section id="services" className="section-pad" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <span
            className="text-xs tracking-widest uppercase font-light block mb-4"
            style={{ color: 'var(--gold)' }}
          >
            What We Offer
          </span>
          <h2
            className="font-display font-light mb-6"
            style={{ color: '#000000', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10" style={{ background: 'var(--gold)' }} />
            <div className="w-1 h-1 rotate-45" style={{ background: 'var(--gold)' }} />
            <div className="h-px w-10" style={{ background: 'var(--gold)' }} />
          </div>
        </div>

        {/* Services layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {services.map((s, i) => {
          const isGold = i % 4 === 1 || i % 4 === 2; // checkerboard pattern
          return (
            <div
              key={i}
              className="reveal group relative overflow-hidden p-8 md:p-10 cursor-pointer transition-all duration-500 hover:shadow-xl"
              style={{
                background: isGold ? 'var(--gold)' : '#2a2a2e', // luxury grey
                border: '1px solid rgba(212,168,48,0.15)',
              }}
              onClick={() => window.open(wa(s.title), '_blank')}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  style={{
                    color: isGold ? '#111' : 'var(--gold)',
                    fontSize: '1.5rem'
                  }}
                >
                  {s.icon}
                </span>

                <div
                  className="h-px flex-1"
                  style={{
                    background: isGold
                      ? 'rgba(0,0,0,0.2)'
                      : 'rgba(212,168,48,0.2)'
                  }}
                />
              </div>

              <h3
                className="font-display font-light mb-3"
                style={{
                  color: isGold ? '#111' : '#EDEDED',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                }}
              >
                {s.title}
              </h3>

              <p
                className="text-sm font-light leading-relaxed mb-6"
                style={{
                  color: isGold ? 'rgba(0,0,0,0.75)' : 'rgba(237,237,237,0.75)',
                }}
              >
                {s.description}
              </p>

              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  color: isGold ? '#111' : 'var(--gold)'
                }}
              >
                {s.price}
              </span>
            </div>
          )
        })}

      </div>
    </div>
  </section>
  )
}
