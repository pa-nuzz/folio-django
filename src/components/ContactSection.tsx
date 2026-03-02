"use client";
import React, { useState } from 'react';
import { Zap, Send, Mail, MapPin, Globe, Instagram, Linkedin, Github, Download, Loader2 } from 'lucide-react';
import styles from './ContactSection.module.css';

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
      } else {
        setStatus('error');
        setStatusMsg(data.error || 'Uplink failed.');
      }
    } catch {
      setStatus('error');
      setStatusMsg('Neural link broken. Please try again.');
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contactGrid}>
          {/* Left: Contact Form */}
          <div className={styles.formSide}>
            <div className={styles.badge}>UPLINK_COMMUNICATION</div>
            <h2 className={styles.title}>Let&apos;s Join <span className="text-gradient">Forces</span></h2>
            <p className={styles.subtitle}>Initialize a direct connection to the Monk network.</p>
            
            {!showForm ? (
              <div className={styles.revealTrigger}>
                <button 
                  className={styles.revealBtn} 
                  onClick={() => setShowForm(true)}
                >
                  <span className={styles.revealText}>INITIALIZE_UPLINK</span>
                  <div className={styles.revealCircle}><Zap size={24} /></div>
                </button>
                <p className={styles.revealHint}>Click to establish a secure neural connection.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={`${styles.form} ${styles.fadeIn}`}>
                <div className={styles.inputGroup}>
                  <label>IDENTIFIER_NAME</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    required 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>SIGNAL_RETURN_EMAIL</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>TRANSMISSION_PAYLOAD</label>
                  <textarea 
                    placeholder="What's the mission?" 
                    rows={4} 
                    required 
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <div className={styles.buttonRow}>
                  <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                    {status === 'loading' ? <Loader2 className={styles.spinner} /> : <><Send size={18} /> Send Transmission</>}
                  </button>
                  <button type="button" className={styles.cancelBtn} onClick={() => setShowForm(false)}>CANCEL_UPLINK</button>
                </div>
                
                {status === 'success' && <p className={styles.successMsg}>{statusMsg}</p>}
                {status === 'error' && <p className={styles.errorMsg}>{statusMsg}</p>}
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div className={styles.infoSide}>
             <div className={styles.infoBlock}>
               <div className={styles.infoLabel}><Mail size={16} /> DIRECT_CHANNEL</div>
               <a href="mailto:anuj.paudel061@gmail.com" className={styles.infoValue}>anuj.paudel061@gmail.com</a>
             </div>
             <div className={styles.infoBlock}>
               <div className={styles.infoLabel}><MapPin size={16} /> NEURAL_STATION</div>
               <div className={styles.infoValue}>Kathmandu, Nepal<br/>Nexus Hub 01</div>
             </div>
             <div className={styles.infoBlock}>
               <div className={styles.infoLabel}><Globe size={16} /> NETWORK</div>
               <div className={styles.socials}>
                 <a href="#"><Instagram size={20} /></a>
                 <a href="#"><Linkedin size={20} /></a>
                 <a href="https://github.com/pa-nuzz"><Github size={20} /></a>
               </div>
             </div>
             <div className={styles.cautionBanner}>
                <div className={styles.stripes}></div>
                <span>CAUTION: DEEP_WORK_IN_PROGRESS</span>
             </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <span className={styles.copy}>© 2026 ANUZ DON. ALL RIGHTS RESERVED.</span>
          </div>
          <div className={styles.footerRight}>
            <button className={styles.downloadBtn}>
              <Download size={16} /> Get Resume
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
