'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function FloatingChatButton() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: 'Halo! 👋 Saya Aron, AI assistant Astheron. Ada yang bisa saya bantu?' }
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages((m) => [...m, { role: 'user', text: input.trim() }]);
        setInput('');
        setTimeout(() => {
            setMessages((m) => [...m, { role: 'bot', text: 'Terima kasih! Tim kami akan segera menghubungi Anda. 🚀' }]);
        }, 1200);
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.95 }}
                        transition={{ duration: 0.3, ease }}
                        className="fixed bottom-[100px] right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[480px] bg-card border border-border-default rounded-2xl shadow-[0_12px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-border-default bg-primary">
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                    <Bot size={16} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-[0.82rem] font-semibold text-white leading-tight">Aron AI</div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-[5px] h-[5px] rounded-full bg-accent-light" />
                                        <span className="text-[0.6rem] text-white/70 font-medium">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setOpen(false)}
                                className="w-7 h-7 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                                <X size={14} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-elevated">
                            {messages.map((m, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                                    className={`max-w-[80%] px-3.5 py-2.5 text-[0.82rem] leading-relaxed ${m.role === 'bot'
                                        ? 'self-start bg-surface border border-border-default rounded-[14px_14px_14px_4px] text-text-primary shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                                        : 'self-end bg-primary rounded-[14px_14px_4px_14px] text-white'
                                        }`}
                                >
                                    {m.text}
                                </motion.div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-card border-t border-border-default">
                            <div className="flex items-center gap-2 bg-surface border border-border-default rounded-xl px-3.5 py-2.5">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                    placeholder="Ketik pesan..."
                                    className="flex-1 bg-transparent text-text-primary text-[0.82rem] placeholder:text-text-muted outline-none"
                                />
                                <button onClick={sendMessage}
                                    className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
                                    <Send size={13} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating button */}
            <motion.button
                onClick={() => setOpen((v) => !v)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:bg-primary-dark transition-colors"
            >
                <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    {open ? <X size={20} /> : <MessageCircle size={20} />}
                </motion.div>
            </motion.button>
        </>
    );
}
