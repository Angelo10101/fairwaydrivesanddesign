import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Mail, ArrowRight, Check } from 'lucide-react'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    service: 'block-paving',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.cta-reveal', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API request to Wayne Smith / Fairway Drives
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        postcode: '',
        service: 'block-paving',
        message: ''
      })
    }, 1500)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: '8rem 0',
        backgroundColor: 'var(--color-charcoal)',
        color: 'var(--text-white)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(213, 201, 179, 0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          
          {/* Left Column: Copy & Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <span className="section-tag cta-reveal" style={{ color: 'var(--color-sand)' }}>06 / GET A QUOTE</span>
            
            <h2
              className="cta-reveal"
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                lineHeight: '1.05',
                color: 'var(--text-white)',
              }}
            >
              Let’s design <br />
              something <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-sand)' }}>enduring.</span>
            </h2>

            <p
              className="cta-reveal"
              style={{
                fontSize: '1.0625rem',
                color: 'rgba(250, 249, 246, 0.7)',
                lineHeight: '1.8',
                maxWidth: '540px',
              }}
            >
              Schedule a complimentary site survey and design consultation. Wayne Smith will personally visit your home in Portsmouth or Hampshire to assess your layout, measure the area, and advise on premium Brett paving materials and patterns.
            </p>

            {/* Direct Contact Options */}
            <div className="cta-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <a
                href="tel:07818555321"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  color: 'var(--text-white)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  transition: 'var(--transition-fast)',
                }}
                className="cta-contact-link"
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(213, 201, 179, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-sand)',
                }}>
                  <Phone size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--color-sand)', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.2 }}>Call Wayne Directly</span>
                  <span>07818 555321</span>
                </div>
              </a>

              <a
                href="mailto:wayne@fairwaydrives.co.uk"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  color: 'var(--text-white)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  transition: 'var(--transition-fast)',
                }}
                className="cta-contact-link"
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(213, 201, 179, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-sand)',
                }}>
                  <Mail size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, color: 'var(--color-sand)', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.2 }}>Email Proposal Team</span>
                  <span>wayne@fairwaydrives.co.uk</span>
                </div>
              </a>

            </div>

            {/* Sub-text notes */}
            <div className="cta-reveal" style={{ display: 'flex', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              {['✔ Fully Insured to £5m', '✔ 5-Year Installation Guarantee', '✔ Transparent Written Quotes'].map((note) => (
                <span key={note} style={{ fontSize: '0.8125rem', color: 'var(--color-sand)', fontWeight: 500 }}>
                  {note}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="cta-reveal">
            {isSuccess ? (
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--color-charcoal)',
                  padding: '4rem 3rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1.5rem',
                  minHeight: '520px',
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-charcoal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-white)',
                }}>
                  <Check size={32} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-charcoal)' }}>
                  Proposal Requested.
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '340px', lineHeight: '1.6' }}>
                  Thank you. Wayne Smith will review your project requirements and call you within 24 hours to arrange your site survey.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn btn-primary"
                  style={{ marginTop: '1rem' }}
                >
                  <span>Submit Another Request</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: 'rgba(250, 249, 246, 0.04)',
                  border: '1px solid rgba(250, 249, 246, 0.1)',
                  padding: '4rem 3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.75rem',
                }}
              >
                <h3 style={{ color: 'var(--text-white)', fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Request Consultation
                </h3>

                {/* Form fields */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row-split">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="name" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sand)' }}>Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(250, 249, 246, 0.05)',
                        border: '1px solid rgba(250, 249, 246, 0.15)',
                        color: '#fff',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                      }}
                      className="form-input"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="phone" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sand)' }}>Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(250, 249, 246, 0.05)',
                        border: '1px solid rgba(250, 249, 246, 0.15)',
                        color: '#fff',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                      }}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.5rem' }} className="form-row-split">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="email" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sand)' }}>Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(250, 249, 246, 0.05)',
                        border: '1px solid rgba(250, 249, 246, 0.15)',
                        color: '#fff',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                      }}
                      className="form-input"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="postcode" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sand)' }}>Postcode *</label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      required
                      placeholder="e.g. PO1 2AB"
                      value={formData.postcode}
                      onChange={handleChange}
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(250, 249, 246, 0.05)',
                        border: '1px solid rgba(250, 249, 246, 0.15)',
                        color: '#fff',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                      }}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="service" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sand)' }}>Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      padding: '1rem',
                      backgroundColor: 'var(--color-charcoal)',
                      border: '1px solid rgba(250, 249, 246, 0.15)',
                      color: '#fff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9375rem',
                    }}
                    className="form-input"
                  >
                    <option value="block-paving">Block Paving Driveway</option>
                    <option value="patios">Porcelain & Stone Patio</option>
                    <option value="dropped-kerbs">Dropped Kerb lowering</option>
                    <option value="tarmac">Tarmacadam Surface</option>
                    <option value="gravel">Gravel & Resin</option>
                    <option value="concrete">Concrete Installation</option>
                    <option value="groundworks">Groundworks / Drainage</option>
                    <option value="driveway-design">Architectural Driveway Design</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sand)' }}>Project Details (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="e.g. Dimensions, current condition, brick preference..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      padding: '1rem',
                      backgroundColor: 'rgba(250, 249, 246, 0.05)',
                      border: '1px solid rgba(250, 249, 246, 0.15)',
                      color: '#fff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9375rem',
                      resize: 'none',
                    }}
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn"
                  style={{
                    backgroundColor: 'var(--color-sand)',
                    color: 'var(--color-charcoal)',
                    fontWeight: 700,
                    width: '100%',
                    marginTop: '0.5rem',
                    display: 'flex',
                    gap: '0.5rem',
                  }}
                >
                  {isSubmitting ? (
                    <span>Scheduling survey...</span>
                  ) : (
                    <>
                      <span>Request Free Consultation</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
      <style>{`
        .form-input:focus {
          outline: none;
          border-color: var(--color-sand) !important;
          box-shadow: 0 0 0 1px var(--color-sand);
        }
        .cta-contact-link:hover {
          color: var(--color-sand) !important;
        }
        @media (max-width: 900px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
        @media (max-width: 540px) {
          .form-row-split {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  )
}
