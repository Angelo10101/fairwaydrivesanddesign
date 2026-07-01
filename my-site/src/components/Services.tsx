import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

interface ServiceItem {
  id: string
  number: string
  title: string
  description: string
  detail: string
}

const services: ServiceItem[] = [
  {
    id: 'block-paving',
    number: '01',
    title: 'Block Paving',
    description: 'Bespoke laying patterns with premium Brett setts, engineered for durability and heavy usage.',
    detail: 'Herringbone, basketweave, & custom borders.'
  },
  {
    id: 'patios',
    number: '02',
    title: 'Patios & Terraces',
    description: 'High-end porcelain, natural sandstone, and slate paving designed for modern outdoor living.',
    detail: 'Impeccable drainage & leveling.'
  },
  {
    id: 'dropped-kerbs',
    number: '03',
    title: 'Dropped Kerbs',
    description: 'Fully licensed and council-approved street works, dropped kerb lowering for vehicle access.',
    detail: 'Hampshire council authorized.'
  },
  {
    id: 'tarmac',
    number: '04',
    title: 'Tarmacadam',
    description: 'Heavy-duty red or black tarmac driveways bordered with premium stone blocks for a clean finish.',
    detail: 'Seamless borders & structural base.'
  },
  {
    id: 'gravel',
    number: '05',
    title: 'Gravel & Resin',
    description: 'Natural shingle, decorative flint, and high-performance resin-bound permeable surfaces.',
    detail: 'Weed-resistant permeable membranes.'
  },
  {
    id: 'concrete',
    number: '06',
    title: 'Imprinted Concrete',
    description: 'Reinforced pattern-imprinted and textured concrete installations offering minimal maintenance.',
    detail: 'UV resistant sealer finishes.'
  },
  {
    id: 'groundworks',
    number: '07',
    title: 'Groundworks & Drainage',
    description: 'Professional excavation, sub-base preparation, and modern drainage systems built to last.',
    detail: 'SUDS compliant storm drainage.'
  },
  {
    id: 'driveway-design',
    number: '08',
    title: 'Driveway Design',
    description: 'Full architectural layout planning, material selection, and 2D scaling to match your home.',
    detail: 'Aesthetic & structural design.'
  }
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.services-header-reveal', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      })

      // Cards staggered reveal
      gsap.from('.service-card', {
        y: 60,
        opacity: 0,
        stagger: 0.08,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
        }
      })

      // Services Banner Parallax
      gsap.fromTo('.services-banner-img',
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: '.services-banner-wrapper',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        padding: '10rem 0',
        backgroundColor: 'var(--bg-secondary)',
        position: 'relative',
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '5rem', maxWidth: '680px' }}>
          <span className="section-tag services-header-reveal">02 / CORE SERVICES</span>
          <h2
            className="services-header-reveal"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
              lineHeight: '1.1',
              color: 'var(--color-charcoal)',
            }}
          >
            Bespoke outdoor craftsmanship, <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>engineered to last.</span>
          </h2>
          <p
            className="services-header-reveal"
            style={{
              fontSize: '1.0625rem',
              color: 'var(--text-muted)',
              lineHeight: '1.7',
            }}
          >
            From luxurious porcelain patios to hard-wearing block paved driveways, Wayne and his team deliver exceptional surface solutions that increase curb appeal and property value.
          </p>
        </div>

        {/* Wide Banner Image - Real Completed Installation */}
        <div
          className="services-banner-wrapper services-header-reveal"
          style={{
            width: '100%',
            height: '420px',
            overflow: 'hidden',
            marginBottom: '6rem',
            position: 'relative',
            backgroundColor: 'var(--bg-primary)',
          }}
        >
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
            className="services-banner-img"
            src="/images/googleimages/google3.jpg"
            alt="Completed porcelain patio terrace installation in Hampshire"
            style={{
              width: '100%',
              height: '130%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1px',
            backgroundColor: 'rgba(30, 31, 33, 0.1)', // Acts as the border between items
            border: '1px solid rgba(30, 31, 33, 0.1)',
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px',
                transition: 'var(--transition-smooth)',
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
            >
              {/* Card Hover Overlay (Subtle Sand Color slide-up) */}
              <div className="card-hover-bg" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '0%',
                backgroundColor: 'var(--bg-primary)',
                transition: 'var(--transition-smooth)',
                zIndex: 1,
              }} />

              {/* Card Content (z-index: 2 to sit on top of hover overlay) */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    color: 'var(--color-stone)',
                    fontStyle: 'italic',
                  }}>
                    {service.number}
                  </span>
                  <div className="card-icon" style={{
                    transition: 'var(--transition-smooth)',
                    color: 'var(--color-stone)',
                  }}>
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--color-charcoal)',
                    letterSpacing: '-0.01em',
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                  }}>
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom detail text (z-index: 2) */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid rgba(30,31,33,0.06)', paddingTop: '1.25rem', marginTop: '1.5rem' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-stone)',
                }}>
                  {service.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .service-card:hover {
          transform: translateY(-2px);
        }
        .service-card:hover .card-hover-bg {
          height: 100%;
        }
        .service-card:hover .card-icon {
          color: var(--color-charcoal);
          transform: translate(2px, -2px);
        }
      `}</style>
    </section>
  )
}
