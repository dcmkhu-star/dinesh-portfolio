import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'

// Replace these with your EmailJS credentials
const SERVICE_ID  = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const INFO = [
  { icon: <FiMail />,   label: 'Email',    value: 'dcmkhu@gmail.com' },
  { icon: <FiMapPin />, label: 'Location', value: 'India' },
]

const SOCIAL = [
  { icon: <FiGithub />,   href: 'https://github.com/dineshkumar',   label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/dineshkumar', label: 'LinkedIn' },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })

  const onChange = e => setFields(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('sent')
      setFields({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)',
    borderRadius: 8, color: 'var(--text)',
    fontSize: '0.9rem', outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'var(--font-body)',
  }

  return (
    <main style={{ paddingTop: 88, paddingBottom: '5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '3rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{
              color: 'var(--gold)', letterSpacing: '0.12em',
              textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem',
            }}>Let's connect</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--warm-white)', marginBottom: '1rem',
            }}>Get In Touch</motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ width: 60, height: 2, background: 'linear-gradient(90deg, var(--gold), transparent)', margin: '0 auto' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem', alignItems: 'start',
        }}>
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem', color: 'var(--warm-white)',
              marginBottom: '1rem',
            }}>Let's build something together.</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
              I'm currently open to new opportunities — freelance projects, full-time roles, or just a friendly chat
              about tech. My inbox is always open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {INFO.map(({ icon, label, value }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--gold)', fontSize: '1rem', flexShrink: 0,
                  }}>{icon}</div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</p>
                    <p style={{ color: 'var(--text)', fontSize: '0.9rem' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {SOCIAL.map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="contact-social"
                  style={{
                    width: 40, height: 40, borderRadius: '50%',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', fontSize: '1rem',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}>
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <form ref={formRef} onSubmit={onSubmit}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 16, padding: '2rem',
                display: 'flex', flexDirection: 'column', gap: '1.1rem',
              }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>Name</label>
                  <input name="name" value={fields.name} onChange={onChange} required
                    placeholder="Dinesh Kumar"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>Email</label>
                  <input name="email" type="email" value={fields.email} onChange={onChange} required
                    placeholder="you@example.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>Subject</label>
                <input name="subject" value={fields.subject} onChange={onChange} required
                  placeholder="Project inquiry / Job opportunity / Just saying hi"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>Message</label>
                <textarea name="message" value={fields.message} onChange={onChange} required
                  rows={5} placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>

              <button type="submit" disabled={status === 'sending' || status === 'sent'}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '0.8rem', borderRadius: 8,
                  background: status === 'sent' ? '#16a34a' : 'var(--gold)',
                  color: 'var(--navy-dark)', fontWeight: 700, fontSize: '0.9rem',
                  border: 'none', cursor: status === 'sending' ? 'wait' : status === 'sent' ? 'default' : 'pointer',
                  transition: 'opacity 0.2s',
                  opacity: status === 'sending' ? 0.7 : 1,
                }}>
                {status === 'sent'
                  ? <><FiCheck /> Message Sent!</>
                  : status === 'sending'
                  ? 'Sending…'
                  : <><FiSend /> Send Message</>}
              </button>

              {status === 'error' && (
                <p style={{ color: '#f87171', fontSize: '0.85rem', textAlign: 'center' }}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`.contact-social:hover { color: var(--gold) !important; border-color: var(--gold) !important; }`}</style>
    </main>
  )
}
