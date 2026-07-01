import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Check, ArrowUpRight, Phone } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.4 } })

      // Initial states
      gsap.set('.reveal-item', { y: 60, opacity: 0 })
      gsap.set(imageWrapperRef.current, { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.05 })
      gsap.set(imageRef.current, { scale: 1.2 })

      // Animate text elements
      tl.to('.reveal-item', {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
      })

      // Animate image reveal (slow, confident slide out)
      tl.to(imageWrapperRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.6,
        ease: 'power4.inOut',
      }, '-=1.0')

      // Animate image zoom inside wrapper
      tl.to(imageRef.current, {
        scale: 1,
        duration: 2.0,
        ease: 'power3.out',
      }, '-=1.4')
      
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleQuoteClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="container">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Side: Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Accreditation Badge */}
            <div className="reveal-item" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid rgba(122, 116, 107, 0.2)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-stone)',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-stone)' }}></span>
                Brett Approved Installer
              </div>
            </div>

            {/* Powerful Headline */}
            <div style={{ overflow: 'hidden' }}>
              <h1
                ref={titleRef}
                className="reveal-item"
                style={{
                  fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                  lineHeight: '1.05',
                  color: 'var(--color-charcoal)',
                }}
              >
                Architectural <br />
                <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>Driveways & Patios</span> <br />
                Built to Last.
              </h1>
            </div>

            {/* Description / Natural Copy */}
            <p
              ref={descRef}
              className="reveal-item"
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-muted)',
                maxWidth: '540px',
                lineHeight: '1.7',
              }}
            >
              Fairway Drives & Design Ltd is run & owned by Wayne Smith & we specialise in installing driveways & patios which can transform the exterior of your property. Transforming outdoor spaces across Hampshire.
            </p>

            {/* Call To Actions */}
            <div
              ref={ctasRef}
              className="reveal-item"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                alignItems: 'center',
              }}
            >
              <button
                onClick={handleQuoteClick}
                className="btn btn-primary"
                style={{ display: 'flex', gap: '0.75rem' }}
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight size={16} style={{ position: 'relative', zIndex: 2 }} />
              </button>

              <a
                href="tel:07818555321"
                className="btn btn-secondary"
                style={{ display: 'flex', gap: '0.75rem' }}
              >
                <Phone size={16} />
                <span>Call Wayne</span>
              </a>
            </div>

            {/* Divider */}
            <div className="reveal-item" style={{ width: '100%', height: '1px', backgroundColor: 'rgba(30, 31, 33, 0.1)', margin: '0.5rem 0' }}></div>

            {/* Trust Tags */}
            <div
              ref={badgesRef}
              className="reveal-item"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
              }}
            >
              {[
                'Brett Approved Paving',
                '190+ Checkatrade Reviews',
                '10 Year Product Guarantee'
              ].map((badge) => (
                <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-charcoal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Check size={10} style={{ color: 'var(--text-white)' }} />
                  </div>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.02em' }}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side: Immersive Oversized Image */}
          <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <div
              ref={imageWrapperRef}
              style={{
                width: '100%',
                aspectRatio: '0.85',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-secondary)',
                position: 'relative',
              }}
            >
              {/* Subtle Sand Overlay border style */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                bottom: '1.5rem',
                border: '1px solid rgba(250, 249, 246, 0.15)',
                zIndex: 2,
                pointerEvents: 'none',
              }} />
              
              <img
                ref={imageRef}
                src="/images/hero_driveway.jpg"
                alt="Luxury driveway installation by Fairway Drives & Design"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            
            {/* Small subtle card on top of image */}
            <div
              style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '-2rem',
                backgroundColor: 'var(--color-charcoal)',
                color: 'var(--text-white)',
                padding: '2rem',
                maxWidth: '260px',
                zIndex: 3,
                display: 'none', // Revealed on desktop only
              }}
              className="desktop-only"
            >
              <h4 style={{ color: 'var(--text-white)', fontSize: '1.125rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                Wayne Smith
              </h4>
              <p style={{ color: 'var(--color-sand)', fontSize: '0.8125rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Founder & Installer
              </p>
              <p style={{ color: 'rgba(250,249,246,0.7)', fontSize: '0.8125rem', lineHeight: '1.5' }}>
                Personally overseeing every premium installation in Portsmouth & Hampshire.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
        }
        @media (min-width: 992px) {
          .hero-grid > div:last-child {
            display: flex;
          }
          .hero-grid > div:last-child > div:last-child {
            display: block !important;
          }
        }
      `}</style>
    </section>
  )
}
