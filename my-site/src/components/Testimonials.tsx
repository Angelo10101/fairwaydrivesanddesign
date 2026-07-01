import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

interface TestimonialItem {
  id: number
  quote: string
  author: string
  location: string
  project: string
  rating: string
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quote: "I'm really pleased with the paving work completed. The team was professional, efficient, and paid great attention to detail. My driveway looks fantastic and has completely transformed the entrance to my home. Everything was finished on time, and the quality of the work is outstanding. Highly recommended!",
    author: "Miranda Walter",
    location: "Portsmouth, Hampshire",
    project: "Driveway Paving Renovation",
    rating: "5/5 Google Review"
  },
  {
    id: 2,
    quote: "Wayne and his team were super professional and super friendly!! They were always on time and there was no delay ! I am thrilled with the work they have done on my garden transferring it to a patio using stunning grey stone slates that is so beautiful.",
    author: "Najla Mansour",
    location: "Hampshire, UK (Local Guide)",
    project: "Garden Patio Slates",
    rating: "5/5 Google Review"
  },
  {
    id: 3,
    quote: "Fabulous work and communication.Very helpfully.Work was carried out to the highest quality.This was the second price of work Wayne did for us ,wouldn't hesitate to use this firm again.Thankyou Wayne",
    author: "Jennifer Reilly",
    location: "Portsmouth, UK",
    project: "Premium Surface Installation",
    rating: "5/5 Google Review"
  }
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.reviews-header-reveal', {
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

      // Testimonial cards list staggered reveal
      gsap.from('.testimonial-editorial-card', {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonials-grid',
          start: 'top 75%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="reviews"
      ref={sectionRef}
      style={{
        padding: '10rem 0',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
      }}
    >
      <div className="container">
        
        {/* Editorial Layout Grid */}
        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '6rem', alignItems: 'start' }}>
          
          {/* Left Column: Title & Rating Stat */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'sticky', top: '120px' }} className="reviews-sticky">
            <span className="section-tag reviews-header-reveal">05 / CLIENT OPINIONS</span>
            
            <h2
              className="reviews-header-reveal"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                lineHeight: '1.1',
                color: 'var(--color-charcoal)',
              }}
            >
              What our clients say when the <br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>stone settles.</span>
            </h2>

            <div className="reviews-header-reveal" style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-stone)' }}></div>

            {/* Google Rating Badge Stat */}
            <div 
              className="reviews-header-reveal"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                borderLeft: '2px solid var(--color-stone)',
                maxWidth: '320px',
              }}
            >
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="var(--color-charcoal)" color="var(--color-charcoal)" />
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-charcoal)', lineHeight: 1 }}>5.0 / 5.0</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-stone)', marginTop: '0.25rem' }}>
                  Google Rating
                </span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Based on verified Google reviews & 190+ Checkatrade installations.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Reviews List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="testimonial-editorial-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  borderBottom: '1px solid rgba(30, 31, 33, 0.1)',
                  paddingBottom: '4rem',
                }}
              >
                {/* Quote Text */}
                <blockquote
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                    color: 'var(--color-charcoal)',
                    lineHeight: '1.5',
                    fontStyle: 'italic',
                  }}
                >
                  "{t.quote}"
                </blockquote>

                {/* Meta details */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <cite style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-charcoal)', fontStyle: 'normal' }}>
                      {t.author}
                    </cite>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                      {t.location}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      padding: '0.35rem 0.75rem',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--color-stone)',
                    }}>
                      {t.project}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                      {t.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .reviews-sticky {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
