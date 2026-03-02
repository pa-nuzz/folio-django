"use client";
import React, { useState, useRef, useEffect } from 'react';
import styles from './AILab.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Send, 
  Terminal, 
  FileText, 
  Scan, 
  Loader2,
  ChevronRight,
  Bot,
  User,
  AlertCircle,
  CheckCircle,
  Upload,
  FileUp,
  Image as ImageIcon,
  Sparkles,
  Shield,
  Activity,
  Cpu,
  Layers,
  Database,
  Zap
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type Message = {
  role: 'ai' | 'user' | 'system';
  content: string;
  isAnalysis?: boolean;
};

export default function AILab() {
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'ai', 
      content: "👋 Hi! I'm Monk, Anuj's AI assistant. I can help you learn about his work, analyze resumes, or extract text from images. What would you like to explore?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, isLoading]);

  useGSAP(() => {
    if (!sectionRef.current) return;
    
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
        body: JSON.stringify({ 
          messages: [...messages, userMessage].map(m => ({ 
            role: m.role === 'ai' ? 'assistant' : m.role, 
            content: m.content 
          })) 
        })
      });
      
      const data = await res.json();
      if (res.ok) {
        setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { 
          role: 'system', 
          content: "⚠️ I'm having trouble connecting right now. Please try again in a moment." 
        }]);
      }
    } catch {
      setMessages(prev => [...prev, { 
        role: 'system', 
        content: '⚠️ Connection error. Please check your internet and try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (type: 'resume' | 'ocr', file: File) => {
    setIsLoading(true);
    setUploadedFile(file);
    
    // Show progress animation
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += 5;
      setAnalysisProgress(Math.min(progress, 90));
      if (progress >= 90) clearInterval(progressInterval);
    }, 200);

    try {
      const formData = new FormData();
      formData.append('type', type);
      formData.append('file', file);

      const res = await fetch('/api/analyze', {
        method: 'POST',
        body: formData
      });
      
      clearInterval(progressInterval);
      setAnalysisProgress(100);
      
      const data = await res.json();
      
      if (res.ok && data.result) {
        setMessages(prev => [...prev, { 
          role: 'ai', 
          content: `✅ Analysis complete for **${file.name}**\n\n${data.result.substring(0, 800)}${data.result.length > 800 ? '...' : ''}`,
          isAnalysis: true 
        }]);
      } else {
        setMessages(prev => [...prev, { 
          role: 'system', 
          content: `⚠️ ${data.error || 'Analysis failed. Please try a different file.'}` 
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'system', 
        content: '⚠️ Upload failed. Please try again with a smaller file.' 
      }]);
    } finally {
      setIsLoading(false);
      setAnalysisProgress(0);
      setActiveTab('chat');
    }
  };

  const renderMessage = (msg: Message, idx: number) => {
    const isAi = msg.role === 'ai';
    const isSystem = msg.role === 'system';
    
    return (
      <div key={idx} className={`${styles.message} ${isAi ? styles.aiMessage : isSystem ? styles.systemMessage : styles.userMessage}`}>
        <div className={styles.messageHeader}>
          <div className={styles.messageAvatar}>
            {isAi ? <Bot size={16} /> : isSystem ? <AlertCircle size={16} /> : <User size={16} />}
          </div>
          <span className={styles.messageName}>
            {isAi ? 'Monk AI' : isSystem ? 'System' : 'You'}
          </span>
          <span className={styles.messageTime}>
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className={styles.messageContent}>
          {msg.content.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="ai-lab" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <Sparkles size={14} /> AI POWERED
          </div>
          <h2 className={styles.title}>AI <span className="text-gradient">Lab</span></h2>
          <p className={styles.subtitle}>Chat with Monk, analyze resumes, or extract text from images</p>
        </div>
        
        <div className={`lab-dashboard ${styles.dashboard}`}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <div className={styles.sidebarIcon}>
                <Bot size={24} />
              </div>
              <div className={styles.sidebarInfo}>
                <div className={styles.sidebarTitle}>Monk AI</div>
                <div className={styles.sidebarStatus}>
                  <span className={styles.statusDot}></span>
                  Online
                </div>
              </div>
            </div>
            
            <div className={styles.moduleList}>
              <button 
                className={`${styles.moduleButton} ${activeTab === 'chat' ? styles.moduleButtonActive : ''}`} 
                onClick={() => setActiveTab('chat')}
              >
                <div className={styles.moduleButtonIcon}><Terminal size={18} /></div>
                <div className={styles.moduleButtonInfo}>
                  <span className={styles.moduleButtonLabel}>Neural Chat</span>
                  <span className={styles.moduleButtonDesc}>Ask me anything</span>
                </div>
                <ChevronRight size={16} className={styles.moduleButtonChevron} />
              </button>
              
              <button 
                className={`${styles.moduleButton} ${activeTab === 'resume' ? styles.moduleButtonActive : ''}`} 
                onClick={() => {setActiveTab('resume'); fileInputRef.current?.click();}}
              >
                <div className={styles.moduleButtonIcon}><FileText size={18} /></div>
                <div className={styles.moduleButtonInfo}>
                  <span className={styles.moduleButtonLabel}>Resume Analyzer</span>
                  <span className={styles.moduleButtonDesc}>PDF, DOCX files</span>
                </div>
                <Upload size={16} className={styles.moduleButtonChevron} />
              </button>
              
              <button 
                className={`${styles.moduleButton} ${activeTab === 'ocr' ? styles.moduleButtonActive : ''}`} 
                onClick={() => {setActiveTab('ocr'); fileInputRef.current?.click();}}
              >
                <div className={styles.moduleButtonIcon}><Scan size={18} /></div>
                <div className={styles.moduleButtonInfo}>
                  <span className={styles.moduleButtonLabel}>Vision OCR</span>
                  <span className={styles.moduleButtonDesc}>Extract text from images</span>
                </div>
                <Upload size={16} className={styles.moduleButtonChevron} />
              </button>
            </div>

            <div className={styles.sidebarFooter}>
              <div className={styles.systemStats}>
                <div className={styles.stat}>
                  <Activity size={12} />
                  <span>Response time: &lt;2s</span>
                </div>
                <div className={styles.stat}>
                  <CheckCircle size={12} />
                  <span>GPT-3.5 Turbo</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className={styles.content}>
            {activeTab === 'chat' && (
              <div className={styles.chatWindow}>
                <div className={styles.messages}>
                  {messages.map((msg, idx) => renderMessage(msg, idx))}
                  {isLoading && (
                    <div className={styles.typingIndicator}>
                      <div className={styles.typingDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <span>Monk is thinking...</span>
                      {analysisProgress > 0 && (
                        <div className={styles.progressBar}>
                          <div className={styles.progressFill} style={{ width: `${analysisProgress}%` }}></div>
                        </div>
                      )}
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                
                <form className={styles.inputArea} onSubmit={handleSend}>
                  <div className={styles.inputWrapper}>
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={isLoading ? "Please wait..." : "Type your message..."} 
                      className={styles.input}
                      disabled={isLoading}
                    />
                  </div>
                  <button type="submit" className={styles.sendBtn} disabled={isLoading || !input.trim()}>
                    {isLoading ? <Loader2 className={styles.spinner} size={20} /> : <Send size={20} />}
                  </button>
                </form>
              </div>
            )}
            
            {activeTab === 'resume' && (
              <div className={styles.uploadPanel}>
                <div className={styles.uploadCard}>
                  <div className={styles.uploadIcon}>
                    <FileUp size={48} />
                  </div>
                  <h3>Resume Analyzer</h3>
                  <p>Upload your resume (PDF, DOCX) and get AI-powered feedback on strengths, improvements, and recommendations.</p>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    accept=".pdf,.docx,.doc,.txt" 
                    className={styles.hiddenInput} 
                    onChange={(e) => e.target.files?.[0] && handleFileUpload('resume', e.target.files[0])}
                  />
                  <button 
                    className={styles.uploadButton}
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <><Loader2 className={styles.spinner} size={18} /> Analyzing...</>
                    ) : (
                      <><Upload size={18} /> Choose File</>
                    )}
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'ocr' && (
              <div className={styles.uploadPanel}>
                <div className={styles.uploadCard}>
                  <div className={styles.uploadIcon}>
                    <ImageIcon size={48} />
                  </div>
                  <h3>Vision OCR</h3>
                  <p>Upload an image containing text (screenshots, documents, photos) and extract the text with AI analysis.</p>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    accept="image/*" 
                    className={styles.hiddenInput} 
                    onChange={(e) => e.target.files?.[0] && handleFileUpload('ocr', e.target.files[0])}
                  />
                  <button 
                    className={styles.uploadButton}
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <><Loader2 className={styles.spinner} size={18} /> Processing...</>
                    ) : (
                      <><Upload size={18} /> Choose Image</>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
