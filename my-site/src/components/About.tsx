import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Fade and slide text up on scroll
      gsap.from('.about-reveal', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      })

      // Image scale parallax
      gsap.fromTo(imageRef.current, 
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: imageWrapperRef.current,
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
      id="about"
      ref={sectionRef}
      style={{
        padding: '10rem 0',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Editorial Layout */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          
          {/* Left Column: Story */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <span className="section-tag about-reveal">01 / THE STORY</span>
            
            <h2
              className="about-reveal"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                lineHeight: '1.1',
                color: 'var(--color-charcoal)',
              }}
            >
              Transforming Hampshire <br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>one home at a time.</span>
            </h2>

            <div className="about-reveal" style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-stone)' }}></div>
            
            <p
              className="about-reveal"
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-muted)',
                lineHeight: '1.8',
              }}
            >
              Fairway Drives & Design Ltd is run & owned by Wayne Smith & we specialise in installing driveways & patios which can transform the exterior of your property. Based in Portsmouth and covering Hampshire, we have built an enviable local reputation based on peerless quality, complete transparency, and a relentless eye for detail.
            </p>

            <p
              className="about-reveal"
              style={{
                fontSize: '1.0625rem',
                color: 'var(--text-muted)',
                lineHeight: '1.8',
              }}
            >
              We believe a driveway or patio shouldn't just be functional—it should be an architectural extension of your home. By combining premium materials like Brett paving with traditional British craftsmanship and modern engineering, we create stunning outdoor spaces that stand the test of time, complete with our comprehensive 10-year product guarantee.
            </p>

            {/* Signature Quote */}
            <div
              className="about-reveal"
              style={{
                marginTop: '1.5rem',
                padding: '2rem',
                backgroundColor: 'var(--bg-secondary)',
                borderLeft: '2px solid var(--color-stone)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.125rem',
                  fontStyle: 'italic',
                  color: 'var(--color-charcoal)',
                  lineHeight: '1.6',
                }}
              >
                "I personally oversee every project. We don't cut corners, we don't sub-contract our core workmanship, and we treat every home as if it were our own."
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>Wayne Smith</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-stone)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Founder, Fairway Drives & Design</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image and Paving Crafts */}
          <div style={{ position: 'relative' }}>
            <div
              ref={imageWrapperRef}
              style={{
                width: '100%',
                aspectRatio: '0.9',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: 'var(--bg-secondary)',
              }}
            >
              <img
                ref={imageRef}
                src="/images/googleimages/google1.jpg"
                alt="Completed block paving driveway detail"
                style={{
                  width: '100%',
                  height: '120%',
                  objectFit: 'cover',
                }}
              />
            </div>
            
            {/* Overlay Info Card */}
            <div
              className="about-reveal"
              style={{
                position: 'absolute',
                top: '-2.5rem',
                right: '2rem',
                backgroundColor: 'var(--color-sand)',
                color: 'var(--color-charcoal)',
                padding: '1.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.25rem',
                minWidth: '150px',
              }}
            >
              <span style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>190+</span>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center' }}>Checkatrade Reviews</span>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  )
}
