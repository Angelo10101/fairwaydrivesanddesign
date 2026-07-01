import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        transition: 'var(--transition-smooth)',
        padding: isScrolled ? '1rem 0' : '2rem 0',
        backgroundColor: isScrolled ? 'rgba(247, 246, 243, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(30, 31, 33, 0.05)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              lineHeight: 1,
              color: 'var(--color-charcoal)',
            }}
          >
            FAIRWAY
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.3em',
              color: 'var(--color-stone)',
              textTransform: 'uppercase',
            }}
          >
            Drives & Design
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
          }}
          className="desktop-only"
        >
          {['About', 'Services', 'Work', 'Why Us', 'Reviews'].map((item) => {
            const sectionId = item.toLowerCase().replace(' ', '-');
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(sectionId)
                }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--text-dark)',
                  opacity: 0.8,
                  position: 'relative',
                  padding: '0.25rem 0',
                }}
                className="nav-link"
              >
                {item}
              </a>
            )
          })}
        </nav>

        {/* Navigation CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
          }}
          className="desktop-only"
        >
          <a
            href="tel:07818555321"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--color-charcoal)',
              letterSpacing: '0.05em',
            }}
          >
            <Phone size={14} style={{ color: 'var(--color-stone)' }} />
            <span>07818 555321</span>
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn btn-primary"
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '0.75rem',
            }}
          >
            <span>Get a Quote</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-charcoal)',
          }}
          className="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'var(--bg-primary)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            gap: '2.5rem',
          }}
        >
          {['About', 'Services', 'Work', 'Why Us', 'Reviews'].map((item) => {
            const sectionId = item.toLowerCase().replace(' ', '-');
            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(sectionId)
                }}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  color: 'var(--text-dark)',
                }}
              >
                {item}
              </a>
            )
          })}
          
          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(30, 31, 33, 0.1)', margin: '1rem 0' }} />

          <a
            href="tel:07818555321"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'var(--color-charcoal)',
            }}
          >
            <Phone size={18} style={{ color: 'var(--color-stone)' }} />
            <span>07818 555321</span>
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="btn btn-primary"
            style={{
              width: '100%',
              maxWidth: '300px',
            }}
          >
            <span>Get a Free Quote</span>
          </button>
        </div>
      )}

      {/* Style element for animations and media queries */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--color-charcoal);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
    </header>
  )
}
