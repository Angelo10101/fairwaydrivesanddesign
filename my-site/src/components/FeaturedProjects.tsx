import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Maximize2 } from 'lucide-react'

export default function FeaturedProjects() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  
  const sectionRef = useRef<HTMLDivElement>(null)
  const sliderContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Reveal header
      gsap.from('.projects-header-reveal', {
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

      // Reveal gallery grid items
      gsap.from('.project-gallery-card', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 75%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleMove = (clientX: number) => {
    if (!sliderContainerRef.current) return
    const rect = sliderContainerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(position)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{
        padding: '10rem 0',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '5rem', maxWidth: '680px' }}>
          <span className="section-tag projects-header-reveal">03 / COMPLETED WORK</span>
          <h2
            className="projects-header-reveal"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
              lineHeight: '1.1',
              color: 'var(--color-charcoal)',
            }}
          >
            A legacy of structural beauty. <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>Before & After.</span>
          </h2>
          <p
            className="projects-header-reveal"
            style={{
              fontSize: '1.0625rem',
              color: 'var(--text-muted)',
              lineHeight: '1.7',
            }}
          >
            Drag the slider below to see the dramatic transformation of a typical Hampshire property from an uneven, weathered driveway into a modern block paved masterpiece.
          </p>
        </div>

        {/* 1. Interactive Before/After Slider */}
        <div
          ref={sliderContainerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1.8',
            overflow: 'hidden',
            cursor: 'ew-resize',
            userSelect: 'none',
            marginBottom: '6rem',
            backgroundColor: 'var(--bg-secondary)',
          }}
          className="projects-header-reveal shadow-sm"
        >
          {/* Before Image (Background) */}
          <img
            src="/images/before_driveway.jpg"
            alt="Driveway before renovation"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: '1.5rem',
              backgroundColor: 'rgba(18, 18, 18, 0.7)',
              color: '#fff',
              padding: '0.4rem 0.8rem',
              fontSize: '0.6875rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 600,
              zIndex: 10,
            }}
          >
            Before
          </div>

          {/* After Image (Overlay, width controlled by slider position) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${sliderPosition}%`,
              height: '100%',
              overflow: 'hidden',
              transition: isDragging ? 'none' : 'width 0.1s ease-out',
            }}
          >
            {/* The image must maintain 100% width of container, not the sliding wrapper */}
            <img
              src="/images/googleimages/google2.jpg"
              alt="Driveway after renovation"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: sliderContainerRef.current?.getBoundingClientRect().width || '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none',
                maxWidth: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                backgroundColor: 'var(--color-charcoal)',
                color: 'var(--color-sand)',
                padding: '0.4rem 0.8rem',
                fontSize: '0.6875rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 700,
                zIndex: 10,
                whiteSpace: 'nowrap',
              }}
            >
              After
            </div>
          </div>

          {/* Slider Drag Bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPosition}%`,
              width: '2px',
              backgroundColor: '#fff',
              cursor: 'ew-resize',
              transform: 'translateX(-50%)',
              zIndex: 20,
              transition: isDragging ? 'none' : 'left 0.1s ease-out',
              boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            }}
          >
            {/* Drag Handle Button */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-charcoal)',
                border: '2px solid #fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ display: 'flex', gap: '4px', color: '#fff' }}>
                <span style={{ fontSize: '12px' }}>◀</span>
                <span style={{ fontSize: '12px' }}>▶</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Masonry / Grid Gallery of other projects */}
        <h3
          className="projects-header-reveal"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '3rem',
            color: 'var(--color-charcoal)',
          }}
        >
          Selected Commissions
        </h3>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          
          {/* Card 1: Luxury Patio */}
          <div className="project-gallery-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                width: '100%',
                aspectRatio: '1.4',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: 'var(--bg-secondary)',
              }}
              className="project-image-container"
            >
              <img
                src="/images/googleimages/google4.jpg"
                alt="Luxury porcelain patio terrace in Hampshire"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="project-hover-image"
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(30, 31, 33, 0.4)',
                  opacity: 0,
                  transition: 'opacity 0.6s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
                className="project-overlay"
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'scale(0.8)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }} className="project-btn-zoom">
                  <Maximize2 size={18} style={{ color: 'var(--color-charcoal)' }} />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.25rem' }}>
                  The Hampshire Country Manor
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Porcelain Outdoor Living Terrace & Custom Seating
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', textAlign: 'right' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.6875rem', color: 'var(--color-stone)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Area</span>
                  <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>140 m²</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.6875rem', color: 'var(--color-stone)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Duration</span>
                  <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>8 Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Block Paving Detail */}
          <div className="project-gallery-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                width: '100%',
                aspectRatio: '1.4',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: 'var(--bg-secondary)',
              }}
              className="project-image-container"
            >
              <img
                src="/images/googleimages/google5.jpg"
                alt="Paving stones close-up in Portsmouth"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="project-hover-image"
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(30, 31, 33, 0.4)',
                  opacity: 0,
                  transition: 'opacity 0.6s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
                className="project-overlay"
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'scale(0.8)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }} className="project-btn-zoom">
                  <Maximize2 size={18} style={{ color: 'var(--color-charcoal)' }} />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.25rem' }}>
                  The Portsmouth Driveway
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Premium Brett Granite Block Paving & Dropped Kerb
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', textAlign: 'right' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.6875rem', color: 'var(--color-stone)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Paving</span>
                  <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>Brett Setts</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.6875rem', color: 'var(--color-stone)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Warranty</span>
                  <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-charcoal)' }}>10 Years</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .project-image-container:hover .project-hover-image {
          transform: scale(1.05);
        }
        .project-image-container:hover .project-overlay {
          opacity: 1;
        }
        .project-image-container:hover .project-btn-zoom {
          transform: scale(1);
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  )
}
