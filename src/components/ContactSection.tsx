"use client";
import React, { useState } from 'react';
import { Send, Mail, MapPin, Globe, Instagram, Linkedin, Github, Download, Loader2, CheckCircle } from 'lucide-react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

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
        // Reset after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setStatusMsg(data.error || 'Failed to send message.');
      }
    } catch {
      setStatus('error');
      setStatusMsg('Connection error. Please try again.');
    }
  };

  const handleResumeDownload = () => {
    // For now, show a message that resume is coming soon
    // You can replace this with actual resume file URL
    alert('Resume download coming soon! Contact me directly for now.');
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
          {/* Left: Contact Form */}
          <div className={styles.formSide}>
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
                ></textarea>
              </div>
              
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
              
              {status === 'success' && (
                <p className={styles.successMsg}>{statusMsg}</p>
              )}
              {status === 'error' && (
                <p className={styles.errorMsg}>{statusMsg}</p>
              )}
            </form>
          </div>

          {/* Right: Info */}
          <div className={styles.infoSide}>
            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}><Mail size={20} /></div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Email</div>
                <a href="mailto:anuj.paudel061@gmail.com" className={styles.infoValue}>anuj.paudel061@gmail.com</a>
              </div>
            </div>
            
            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}><MapPin size={20} /></div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Location</div>
                <div className={styles.infoValue}>Kathmandu, Nepal</div>
              </div>
            </div>
            
            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}><Globe size={20} /></div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Social</div>
                <div className={styles.socials}>
                  <a href="https://github.com/pa-nuzz" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            <button 
              className={styles.downloadBtn}
              onClick={handleResumeDownload}
            >
              <Download size={18} /> Download Resume
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <span className={styles.copy}>© 2026 Anuj Don. All rights reserved.</span>
        </footer>
      </div>
    </section>
  );
}
