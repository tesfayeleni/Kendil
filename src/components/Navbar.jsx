import { useState, useEffect } from 'react'
import businessInfo from '../data/businessInfo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Services',     href: '#services'    },
    { label: 'Gallery',      href: '#gallery'     },
    { label: 'Testimonials', href: '#testimonials'  },
    { label: 'Contact',      href: '#contact'       },
  ]

  const wa = `https://wa.me/${businessInfo.whatsapp}?text=Hello, I'd like to book Kendil Production for an event.`

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(58,58,64,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,168,48,0.15)' : 'none',
        padding: scrolled ? '0.85rem 0' : '1.6rem 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt="Kendil"
            className="h-10 w-auto object-contain rounded-full"
            onError={e => { e.target.style.display = 'none' }}
          />
          <div>
            <div
              className="font-display text-xl font-medium leading-none tracking-wide"
              style={{ color: 'var(--background)' }}
            >
              KENDIL
            </div>
            <div
              className="tracking-widest"
              style={{ color: 'var(--accent)', fontSize: '0.55rem' }}
            >
              PRODUCTION & EVENTS
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs tracking-widest uppercase font-light transition-colors duration-300"
              style={{ color: 'var(--soft)' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--soft)'}
            >
              {l.label}
            </a>
          ))}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase font-medium px-5 py-2.5 transition-all duration-300 hover:opacity-90"
            style={{
              // Conditionally render background and text color based on scroll
              background: scrolled ? '#111111' : '#e5e7eb', // Black when scrolled, light grey when at top
              color: scrolled ? '#e5e7eb' : '#111111',
            }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-6 transition-all duration-300"
              style={{
                height: '1px',
                background: 'var(--accent)',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translateY(6px)'
                  : i === 2 ? 'rotate(-45deg) translateY(-6px)'
                  : 'none'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? '22rem' : '0',
          background: 'var(--surface)',
          borderTop: menuOpen ? '1px solid rgba(212,168,48,0.15)' : 'none',
        }}
      >
        <div className="flex flex-col px-6 py-6 gap-5">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest uppercase pb-3 border-b"
              style={{ color: 'var(--soft)', borderColor: 'rgba(212,168,48,0.15)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase font-medium px-5 py-3 text-center transition-all duration-300 mt-2"
            style={{
              // Apply the same conditional logic to the mobile button
              background: scrolled ? '#111111' : '#e5e7eb',
              color: scrolled ? '#e5e7eb' : '#111111',
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  )
}