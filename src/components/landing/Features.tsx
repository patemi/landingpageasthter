'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, Check, Brain, MessageSquare, Zap, Users, BarChart3, Clock } from 'lucide-react';
import { BentoItem } from '@/components/ui/cybernetic-bento-grid';

const oldWay = [
    { text: 'Kehilangan 30%+ Leads Baru', desc: 'Karena slow respond dan kabur ke kompetitor' },
    { text: 'Buang 120+ jam per bulan', desc: 'Menjawab pertanyaan yang sama dan leads yang ghosting' },
    { text: 'Ribet training admin baru', desc: 'Terlalu banyak informasi dan SOP untuk tim admin' },
    { text: 'Data pelanggan berantakan', desc: 'Hilang potensi ratusan juta per bulan dari CRM' },
];

const newWay = [
    { text: 'Respon Pintar, Instant, 24/7', desc: 'Langsung layani pelanggan saat mereka siap beli' },
    { text: 'Filter Ribuan Chat dengan AI', desc: 'AI menjawab pertanyaan umum, menghemat waktu admin' },
    { text: 'Closing Rate Melonjak 30%+', desc: 'Dengan Automatic AI Follow-up' },
    { text: 'Training AI hanya dalam 10 menit', desc: 'Dashboard yang mudah dan intuitif' },
];

const features = [
    { icon: Brain, title: 'AI Agent Builder', desc: 'Buat AI agent dalam 5 menit. Latih dengan data bisnis Anda tanpa coding, seperti memberi instruksi ke Admin CS.', color: '#3b82f6', span: 'col-span-2 row-span-2' },
    { icon: MessageSquare, title: 'Omnichannel Chat', desc: 'WhatsApp, Instagram, Shopee, Tokopedia — semua dalam satu dashboard unified.', color: '#10b981', span: '' },
    { icon: Zap, title: 'Flow Builder', desc: 'Buat alur percakapan kompleks dengan drag & drop. Arahkan customer ke AI atau human agent.', color: '#f59e0b', span: '' },
    { icon: Users, title: 'Multi AI Agent', desc: 'Deploy chatbot spesialis per departemen dengan personality berbeda. Support, sales, HR — semua bisa.', color: '#8b5cf6', span: 'row-span-2' },
    { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Real-time metrics: volume pesan, response time, performa AI, CSAT score dan konversi.', color: '#ef4444', span: 'col-span-2' },
    { icon: Clock, title: 'Smart Handoff', desc: 'AI transfer ke agen manusia secara mulus tanpa kehilangan konteks percakapan.', color: '#06b6d4', span: '' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Features() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="features" className="py-32 px-6 bg-surface relative overflow-hidden">
            <div className="max-w-[1100px] mx-auto relative z-10" ref={ref}>

                {/* ── Comparison ── */}
                <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center gap-2.5 justify-center mb-5">
                        <span className="w-3 h-3 rounded-full bg-accent" />
                        <span className="text-[0.72rem] font-bold text-text-tertiary uppercase tracking-[0.15em]">Kenapa Astheron?</span>
                    </div>
                    <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold text-text-primary tracking-[-0.04em]">
                        Cara Lama vs <span className="text-gradient">Cara Baru</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-36">
                    {/* Cara Lama */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15, duration: 0.7, ease }}
                        className="bg-red/[0.04] border border-red/[0.12] rounded-[28px] p-10"
                    >
                        <div className="inline-flex px-4 py-2 bg-red/[0.1] rounded-full mb-8">
                            <span className="text-[0.78rem] font-bold text-red tracking-wide">Cara Lama</span>
                        </div>
                        <div className="flex flex-col gap-6">
                            {oldWay.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-7 h-7 rounded-full bg-red/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <X size={13} className="text-red" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <div className="text-[0.92rem] font-bold text-text-primary mb-1">{item.text}</div>
                                        <div className="text-[0.82rem] text-text-secondary leading-relaxed">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex items-center gap-3 px-4 py-3 bg-red/[0.06] rounded-2xl border border-red/[0.1]">
                            <span className="text-[0.7rem] text-text-tertiary">Cost per transaksi</span>
                            <span className="text-[1.15rem] font-extrabold text-red font-[family-name:var(--font-space-grotesk)]">Rp150K</span>
                            <span className="text-[0.68rem] text-red font-bold">↑ 35%</span>
                        </div>
                    </motion.div>

                    {/* Cara Baru */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.25, duration: 0.7, ease }}
                        className="bg-primary/[0.04] border border-primary/[0.12] rounded-[28px] p-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/[0.1] rounded-full mb-8">
                            <span className="text-[0.78rem] font-bold text-primary-light tracking-wide">Cara Baru dengan AI Agent</span>
                        </div>
                        <div className="flex flex-col gap-6">
                            {newWay.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check size={13} className="text-accent" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <div className="text-[0.92rem] font-bold text-text-primary mb-1">{item.text}</div>
                                        <div className="text-[0.82rem] text-text-secondary leading-relaxed">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex items-center gap-3 px-4 py-3 bg-accent/[0.06] rounded-2xl border border-accent/[0.1]">
                            <span className="text-[0.7rem] text-text-tertiary">Cost per transaksi</span>
                            <span className="text-[1.15rem] font-extrabold text-primary-light font-[family-name:var(--font-space-grotesk)]">Rp40K</span>
                            <span className="text-[0.68rem] text-accent font-bold">↓ 73%</span>
                        </div>
                    </motion.div>
                </div>

                {/* ── Features Cybernetic Bento Grid ── */}
                <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.8, ease }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center gap-2.5 justify-center mb-5">
                        <span className="w-3 h-3 rounded-full bg-accent" />
                        <span className="text-[0.72rem] font-bold text-text-tertiary uppercase tracking-[0.15em]">Solusi AI + Omnichannel CRM Lengkap</span>
                    </div>
                    <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold text-text-primary tracking-[-0.04em] mb-4">
                        AI Agent Terlengkap Untuk Setiap{' '}
                        <br className="hidden sm:block" />
                        <span className="text-gradient">Kebutuhan Bisnis</span>
                    </h2>
                    <p className="text-text-secondary text-[1.05rem] leading-[1.8] max-w-[580px] mx-auto">
                        Biarkan AI membalas ribuan percakapan agar admin anda bisa fokus ke hal yang lebih penting.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8, ease }}
                >
                    <div className="bento-grid">
                        {features.map((f, i) => (
                            <BentoItem key={i} className={`${f.span} flex flex-col ${f.span.includes('row-span-2') ? 'justify-between' : ''}`}>
                                <div>
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                                        style={{ backgroundColor: `${f.color}15`, border: `1px solid ${f.color}25` }}>
                                        <f.icon size={22} style={{ color: f.color }} strokeWidth={1.6} />
                                    </div>
                                    <h3 className="text-[1.15rem] font-bold text-text-primary mb-2.5 tracking-[-0.02em]">{f.title}</h3>
                                    <p className="text-text-secondary text-[0.88rem] leading-[1.8]">{f.desc}</p>
                                </div>
                                {f.span.includes('row-span-2') && (
                                    <div className="mt-6 h-32 bg-elevated rounded-xl flex items-center justify-center border border-border-default">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${f.color}15` }}>
                                                <f.icon size={18} style={{ color: f.color }} strokeWidth={1.6} />
                                            </div>
                                            <div className="text-[0.75rem] text-text-tertiary">
                                                <div className="text-text-secondary font-semibold">{f.title}</div>
                                                <div>Interactive preview</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </BentoItem>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
