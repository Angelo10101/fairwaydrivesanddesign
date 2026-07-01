import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, ThumbsUp, Star, Award, Settings, Users, Home } from 'lucide-react'

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.why-header-reveal', {
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

      // Stagger credentials blocks
      gsap.from('.credential-block', {
        x: -40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.why-content-grid',
          start: 'top 75%',
        }
      })

      // Stagger checkmarks / features
      gsap.from('.feature-list-item', {
        x: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.why-content-grid',
          start: 'top 75%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="why-us"
      ref={sectionRef}
      style={{
        padding: '10rem 0',
        backgroundColor: 'var(--bg-secondary)',
        position: 'relative',
        borderBottom: '1px solid rgba(30, 31, 33, 0.05)',
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '6rem', maxWidth: '680px' }}>
          <span className="section-tag why-header-reveal">04 / THE FAIRWAY STANDARDS</span>
          <h2
            className="why-header-reveal"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
              lineHeight: '1.1',
              color: 'var(--color-charcoal)',
            }}
          >
            Engineering trust into <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>every square meter.</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="why-content-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '6rem', alignItems: 'start' }}>
          
          {/* Left Column: Guarantees & Credentials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Guarantee Block 1 */}
            <div 
              className="credential-block"
              style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '2.5rem',
                borderLeft: '4px solid var(--color-charcoal)',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
              }}
            >
              <Shield size={32} style={{ color: 'var(--color-stone)', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                  10 Year Product Guarantee
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  As a Brett Approved Paving Installer, our products carry a comprehensive 10-year manufacturer backing, ensuring absolute peace of mind.
                </p>
              </div>
            </div>

            {/* Guarantee Block 2 */}
            <div 
              className="credential-block"
              style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '2.5rem',
                borderLeft: '4px solid var(--color-stone)',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
              }}
            >
              <Award size={32} style={{ color: 'var(--color-charcoal)', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                  5 Year Installation Guarantee
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  We stand by our craftsmanship. Every driveway, kerb, and patio we build features a written 5-year installation warranty.
                </p>
              </div>
            </div>

            {/* Guarantee Block 3 */}
            <div 
              className="credential-block"
              style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '2.5rem',
                borderLeft: '4px solid var(--color-sand)',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
              }}
            >
              <ThumbsUp size={32} style={{ color: 'var(--color-stone)', flexShrink: 0 }} />
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                  Brett Approved Paving Installer
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Rigorously audited by Brett Materials to confirm our engineering practices, sub-base depths, and jointing techniques meet strict standards.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Other differentiators */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Feature 1 */}
            <div className="feature-list-item" style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--bg-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Star size={20} style={{ color: 'var(--color-charcoal)' }} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                  190+ Checkatrade Reviews
                </h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  A stellar local record backed by verified homeowners. We pride ourselves on clean operations, friendly service, and punctuality.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-list-item" style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--bg-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Home size={20} style={{ color: 'var(--color-charcoal)' }} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                  Locally Trusted Specialists
                </h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Based in Portsmouth, Hampshire. We know local ground structures, council regulations, and drainage requirements inside out.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-list-item" style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--bg-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Settings size={20} style={{ color: 'var(--color-charcoal)' }} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                  Our Own Machinery
                </h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  We own and operate our fleet of high-grade diggers, grab loaders, and compaction rollers. No rental bottlenecks, just seamless execution.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="feature-list-item" style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--bg-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Users size={20} style={{ color: 'var(--color-charcoal)' }} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                  Professional In-house Team
                </h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Every craftsman working on your property is a direct employee. Experienced, tidy, respectful, and fully trained in all paving regulations.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
      <style>{`
        @media (max-width: 900px) {
          .why-content-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  )
}
