import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--color-charcoal)',
        padding: '5rem 0 3rem',
        borderTop: '1px solid rgba(30, 31, 33, 0.08)',
      }}
    >
      <div className="container">
        
        {/* Main Footer Content */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Column 1: Brand & Logo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.625rem',
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
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.3em',
                  color: 'var(--color-stone)',
                  textTransform: 'uppercase',
                }}
              >
                Drives & Design
              </span>
            </a>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '280px' }}>
              Crafting premium architectural driveways and patio terraces across Portsmouth and the wider Hampshire region. Brett Approved.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              {[
                {
                  icon: (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  ),
                  href: 'https://facebook.com'
                },
                {
                  icon: (
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                  href: 'https://instagram.com'
                },
                {
                  icon: (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  ),
                  href: 'https://linkedin.com'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid rgba(122, 116, 107, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-stone)',
                    transition: 'var(--transition-fast)',
                  }}
                  className="social-icon-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-stone)' }}>
              Navigation
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { name: 'About Wayne', id: 'about' },
                { name: 'Our Services', id: 'services' },
                { name: 'Featured Work', id: 'work' },
                { name: 'Why Choose Us', id: 'why-us' },
                { name: 'Client Reviews', id: 'reviews' }
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}
                  className="footer-nav-link"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-stone)' }}>
              Contact Details
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <div>
                <span style={{ display: 'block', fontWeight: 600, color: 'var(--color-charcoal)' }}>Wayne Smith (Mobile)</span>
                <a href="tel:07818555321" className="footer-contact-link">07818 555321</a>
              </div>
              <div>
                <span style={{ display: 'block', fontWeight: 600, color: 'var(--color-charcoal)' }}>Portsmouth Office</span>
                <a href="tel:02392551204" className="footer-contact-link">023 9255 1204</a>
              </div>
              <div>
                <span style={{ display: 'block', fontWeight: 600, color: 'var(--color-charcoal)' }}>Email</span>
                <a href="mailto:wayne@fairwaydrives.co.uk" className="footer-contact-link">wayne@fairwaydrives.co.uk</a>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Credentials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-stone)' }}>
              Office Address
            </h4>
            <address style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontStyle: 'normal', lineHeight: '1.6' }}>
              Fairway Drives & Design Ltd<br />
              93 Northern Parade<br />
              Portsmouth, Hampshire<br />
              PO2 9LN
            </address>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid rgba(30,31,33,0.06)', paddingTop: '1rem', marginTop: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-charcoal)', letterSpacing: '0.05em' }}>Brett Approved Installer</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Reg Number: BR-498231</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(30, 31, 33, 0.08)', margin: '2rem 0' }}></div>

        {/* Bottom copyright and up button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Fairway Drives & Design Ltd. All rights reserved. Registered in England & Wales. Company No. 11048293.
          </p>

          <button
            onClick={scrollToTop}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-charcoal)',
              color: 'var(--text-white)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-smooth)',
            }}
            className="footer-btn-top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
      <style>{`
        .footer-nav-link, .footer-contact-link {
          transition: var(--transition-fast);
        }
        .footer-nav-link:hover, .footer-contact-link:hover {
          color: var(--color-charcoal) !important;
          padding-left: 2px;
        }
        .social-icon-link:hover {
          color: var(--color-charcoal) !important;
          border-color: var(--color-charcoal) !important;
          transform: translateY(-2px);
        }
        .footer-btn-top:hover {
          background-color: var(--color-stone);
          transform: translateY(-4px);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
