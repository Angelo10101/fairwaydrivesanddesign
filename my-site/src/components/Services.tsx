import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
            marginBottom: '6rem',
            position: 'relative',
            backgroundColor: 'var(--bg-primary)',
            overflow: 'hidden',
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
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              position: 'relative',
            }}
          />
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
