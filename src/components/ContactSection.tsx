"use client";
import React, { useState } from 'react';
import { Send, Mail, MapPin, Globe, Instagram, Linkedin, Github, Loader2, CheckCircle, MessageCircle, ArrowRight, X, MailIcon } from 'lucide-react';
import styles from './ContactSection.module.css';

// Real social links - update these with your actual links
const SOCIAL_LINKS = {
  github: 'https://github.com/pa-nuzz',
  linkedin: 'https://linkedin.com/in/anuj-don', // Update with your real LinkedIn
  instagram: 'https://instagram.com/anuj.don', // Update with your real Instagram
  email: 'mailto:anuj.paudel061@gmail.com'
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setStatusMsg(data.message);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
          setShowForm(false);
        }, 3000);
      } else {
        setStatus('error');
        setStatusMsg(data.error || 'Failed to send message.');
      }
    } catch {
      setStatus('error');
      setStatusMsg('Connection error. Please try again.');
    }
  };

  const openForm = () => {
    setShowForm(true);
    setStatus('idle');
  };

  const closeForm = () => {
    setShowForm(false);
    setStatus('idle');
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>GET IN TOUCH</div>
          <h2 className={styles.title}>Let&apos;s Work <span className="text-gradient">Together</span></h2>
          <p className={styles.subtitle}>Have a project in mind? Let&apos;s build something amazing.</p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left: Contact Form Toggle */}
          <div className={styles.formSide}>
            {!showForm ? (
              <div className={styles.revealSection}>
                <button 
                  className={styles.revealBtn}
                  onClick={openForm}
                >
                  <div className={styles.revealIcon}>
                    <MessageCircle size={28} />
                  </div>
                  <span className={styles.revealText}>Send Message</span>
                  <ArrowRight size={20} className={styles.revealArrow} />
                </button>
                
                <p className={styles.revealHint}>
                  Click to open the contact form. I typically respond within 24 hours.
                </p>

                <div className={styles.quickContact}>
                  <a href={SOCIAL_LINKS.email} className={styles.quickLink}>
                    <MailIcon size={18} />
                    <span>anuj.paudel061@gmail.com</span>
                  </a>
                  <div className={styles.quickLink}>
                    <MapPin size={18} />
                    <span>Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`${styles.formContainer} ${styles.fadeIn}`}>
                <div className={styles.formHeader}>
                  <h3>Send a Message</h3>
                  <button className={styles.closeBtn} onClick={closeForm}>
                    <X size={24} />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Your Name</label>
                    <input 
                      id="name"
                      type="text" 
                      placeholder="John Doe" 
                      required 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                      id="message"
                      placeholder="Tell me about your project..." 
                      rows={5} 
                      required 
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      disabled={status === 'loading'}
                    />
                  </div>
                  
                  <div className={styles.formActions}>
                    <button type="button" className={styles.cancelBtn} onClick={closeForm}>
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className={styles.submitBtn} 
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <><Loader2 className={styles.spinner} size={18} /> Sending...</>
                      ) : status === 'success' ? (
                        <><CheckCircle size={18} /> Sent!</>
                      ) : (
                        <><Send size={18} /> Send Message</>
                      )}
                    </button>
                  </div>
                  
                  {status === 'success' && (
                    <p className={styles.successMsg}>{statusMsg}</p>
                  )}
                  {status === 'error' && (
                    <p className={styles.errorMsg}>{statusMsg}</p>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Right: Social Links */}
          <div className={styles.infoSide}>
            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>Connect With Me</h3>
              <p className={styles.socialDesc}>Follow me on social media or reach out directly.</p>
              
              <div className={styles.socialGrid}>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <div className={styles.socialIcon}>
                    <Github size={28} />
                  </div>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialName}>GitHub</span>
                    <span className={styles.socialHandle}>@pa-nuzz</span>
                  </div>
                </a>
                
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <div className={styles.socialIcon}>
                    <Linkedin size={28} />
                  </div>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialName}>LinkedIn</span>
                    <span className={styles.socialHandle}>Anuj Don</span>
                  </div>
                </a>
                
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <div className={styles.socialIcon}>
                    <Instagram size={28} />
                  </div>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialName}>Instagram</span>
                    <span className={styles.socialHandle}>@anuj.don</span>
                  </div>
                </a>
                
                <a href={SOCIAL_LINKS.email} className={styles.socialCard}>
                  <div className={styles.socialIcon}>
                    <Mail size={28} />
                  </div>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialName}>Email</span>
                    <span className={styles.socialHandle}>anuj.paudel061@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <span className={styles.copy}> 2026 Anuj Don. All rights reserved.</span>
          <span className={styles.madeWith}>Made with passion in Nepal</span>
        </footer>
      </div>
    </section>
  );
}
