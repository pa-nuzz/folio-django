"use client";
import React, { useState, useRef, useEffect } from 'react';
import styles from './AILab.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Send, 
  Terminal, 
  Cpu, 
  FileText, 
  Scan, 
  Activity,
  Zap,
  Loader2,
  ChevronRight,
  Shield,
  Layers,
  Database
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type Message = {
  role: 'ai' | 'user' | 'system';
  content: string;
};

export default function AILab() {
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: 'Neural link established. I am Monk, your Industrial Portfolio Guide. Ready for transmission.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, isLoading]);

  useGSAP(() => {
    if (!sectionRef.current) return;
    
    // Reveal Dashboard
    gsap.from(".lab-dashboard", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
      },
      scale: 0.95,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out"
    });

    ScrollTrigger.refresh();
  }, { scope: sectionRef });

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage].map(m => ({ role: m.role === 'ai' ? 'assistant' : m.role, content: m.content })) })
      });
      
      const data = await res.json();
      if (res.ok) {
        setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'system', content: `[FAULT_DETECTED]: ${data.message || data.error}` }]);
      }
    } catch {
      setMessages(prev => [...prev, { role: 'system', content: '[FAULT_DETECTED]: Neural matrix offline. Re-initializing...' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (type: 'resume' | 'ocr', file: File) => {
    setIsLoading(true);
    setMessages(prev => [...prev, { role: 'user', content: `[DATA_INJECTION]: ${type === 'resume' ? 'Bio-Payload' : 'Visual Matrix'} detected: ${file.name}` }]);
    setActiveTab('chat');

    // Simulate progress
    for (let i = 0; i <= 100; i += 25) {
      setAnalysisProgress(i);
      await new Promise(r => setTimeout(r, 600));
    }

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, fileName: file.name })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.result }]);
    } catch {
      setMessages(prev => [...prev, { role: 'system', content: '[FAULT_DETECTED]: Analysis module non-responsive.' }]);
    } finally {
      setIsLoading(false);
      setAnalysisProgress(0);
    }
  };

  return (
    <section id="lab" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <Shield size={12} /> SECURE_UPLINK_v3.0
          </div>
          <h2 className={styles.title}>AI <span className="text-gradient">LAB</span></h2>
          <p className={styles.subtitle}>Industrial Intelligence Modules</p>
        </div>
        
        <div className={`lab-dashboard ${styles.dashboard}`}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarTitle}>MODULES_</div>
            <button className={`lab-tab ${styles.tab} ${activeTab === 'chat' ? styles.activeTab : ''}`} onClick={() => setActiveTab('chat')}>
               <Terminal size={18} /> 01. Neural Chat
               <ChevronRight className={styles.chevron} size={14} />
            </button>
            <button className={`lab-tab ${styles.tab} ${activeTab === 'resume' ? styles.activeTab : ''}`} onClick={() => setActiveTab('resume')}>
               <FileText size={18} /> 02. Resume Matrix
               <ChevronRight className={styles.chevron} size={14} />
            </button>
            <button className={`lab-tab ${styles.tab} ${activeTab === 'ocr' ? styles.activeTab : ''}`} onClick={() => setActiveTab('ocr')}>
               <Scan size={18} /> 03. Vision Scan
               <ChevronRight className={styles.chevron} size={14} />
            </button>
            <button className={`lab-tab ${styles.tab} ${activeTab === 'system' ? styles.activeTab : ''}`} onClick={() => setActiveTab('system')}>
               <Activity size={18} /> 04. System Core
               <ChevronRight className={styles.chevron} size={14} />
            </button>
          </div>
          
          <div className={styles.content}>
            {activeTab === 'chat' && (
              <div className={styles.chatWindow}>
                <div className={styles.messages}>
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`${styles.message} ${msg.role === 'ai' ? styles.aiMessage : msg.role === 'system' ? styles.systemMessage : styles.userMessage}`}>
                      <div className={styles.roleHeader}>
                        <span className={styles.roleLabel}>
                          {msg.role === 'ai' ? 'MONK_CORE' : msg.role === 'system' ? 'KERNEL_REPORT' : 'USER_UPLINK'}
                        </span>
                        <span className={styles.timeStamp}>
                          {isMounted ? new Date().toLocaleTimeString() : '--:--:--'}
                        </span>
                      </div>
                      <p>{msg.content}</p>
                    </div>
                  ))}
                  {isLoading && (
                    <div className={styles.typingIndicator}>
                      {analysisProgress > 0 ? `[SYNCING_MATRIX: ${analysisProgress}%]` : '[COMMUTING_RESPONSE...]'}
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <form className={styles.inputArea} onSubmit={handleSend}>
                  <div className={styles.inputWrapper}>
                    <Terminal size={16} className={styles.inputIcon} />
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={isLoading ? "SYSTEM_BUSY..." : "ENTER_COMMAND_"} 
                      className={styles.input}
                      disabled={isLoading}
                    />
                  </div>
                  <button type="submit" className={styles.sendBtn} disabled={isLoading}>
                    {isLoading ? <Loader2 className={styles.spinner} size={18} /> : <Zap size={18} />}
                  </button>
                </form>
              </div>
            )}
            
            {activeTab === 'resume' && (
              <div className={styles.modulePanel}>
                <div className={styles.moduleIcon}><FileText size={64} /></div>
                <h3>Resume Matrix</h3>
                <p>Proprietary neural parsing for professional bio-payloads. Matrix extraction identifies core skill vectors and growth potential.</p>
                <input 
                  type="file" 
                  id="resume-upload" 
                  accept=".pdf,.doc,.docx" 
                  className={styles.hiddenInput} 
                  onChange={(e) => e.target.files?.[0] && handleFileUpload('resume', e.target.files[0])}
                />
                <label htmlFor="resume-upload" className={styles.actionBtn}>Initialize Matrix Scan</label>
              </div>
            )}

            {activeTab === 'ocr' && (
              <div className={styles.modulePanel}>
                <div className={styles.moduleIcon}><Scan size={64} /></div>
                <h3>Vision Scan</h3>
                <p>Advanced optical character recognition. Decrypt visual payloads into actionable neural data with 99.8% precision.</p>
                <input 
                  type="file" 
                  id="ocr-upload" 
                  accept="image/*" 
                  className={styles.hiddenInput} 
                  onChange={(e) => e.target.files?.[0] && handleFileUpload('ocr', e.target.files[0])}
                />
                <label htmlFor="ocr-upload" className={styles.actionBtn}>Activate Visual Sensor</label>
              </div>
            )}

            {activeTab === 'system' && (
              <div className={styles.systemGrid}>
                <div className={styles.statCard}>
                   <Cpu size={24} />
                   <div className={styles.statInfo}>
                     <label>Processors</label>
                     <div className={styles.statValue}>8 Core / Neural</div>
                   </div>
                </div>
                <div className={styles.statCard}>
                   <Layers size={24} />
                   <div className={styles.statInfo}>
                     <label>Memory</label>
                     <div className={styles.statValue}>SYNAPTIC_OVERLOAD</div>
                   </div>
                </div>
                <div className={styles.statCard}>
                   <Database size={24} />
                   <div className={styles.statInfo}>
                     <label>Uptime</label>
                     <div className={styles.statValue}>99.999%</div>
                   </div>
                </div>
                <div className={styles.statCard}>
                   <Activity size={24} />
                   <div className={styles.statInfo}>
                     <label>Latency</label>
                     <div className={styles.statValue}>14ms</div>
                   </div>
                </div>
                <div className={styles.diagnostics}>
                   <h3>System Diagnostics</h3>
                   <div className={styles.diagLine}><span>CORE_INTEGRITY</span> <span className={styles.ok}>OK</span></div>
                   <div className={styles.diagLine}><span>NEURAL_LINK</span> <span className={styles.ok}>SYNCED</span></div>
                   <div className={styles.diagLine}><span>ENCRYPTION</span> <span className={styles.ok}>AES_256</span></div>
                   <button className={styles.diagBtn}>Run Deep Scan</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
