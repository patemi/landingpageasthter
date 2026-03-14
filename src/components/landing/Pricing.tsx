'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
    {
        name: 'Starter', desc: 'Untuk bisnis kecil yang baru memulai otomatisasi CS.',
        price: '490.000', period: '/bulan', popular: false, highlighted: false,
        features: ['1 Nomor WhatsApp', '1.000 pesan/bulan', 'Basic AI Agent', 'Knowledge Base (5MB)', 'Email support'],
        cta: 'Mulai Trial Gratis',
    },
    {
        name: 'Business', desc: 'Untuk bisnis berkembang dengan kebutuhan customer service tinggi.',
        price: '1.490.000', period: '/bulan', popular: true, highlighted: true,
        features: ['5 Nomor WhatsApp', '10.000 pesan/bulan', 'Advanced AI + RAG', 'Unlimited Knowledge Base', 'Priority support 24/7', 'Flow Builder', 'Multi AI Agent'],
        cta: 'Mulai Trial Gratis',
    },
    {
        name: 'Enterprise', desc: 'Solusi khusus untuk korporasi besar dan enterprise.',
        price: 'Custom', period: '', popular: false, highlighted: false,
        features: ['Unlimited WhatsApp', 'Unlimited pesan', 'Custom AI training', 'Dedicated account manager', 'SSO & API access', 'SLA guarantee', 'On-premise option'],
        cta: 'Hubungi Sales',
    },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Pricing() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="pricing" className="py-32 px-6 bg-surface relative overflow-hidden">
            <div className="max-w-[1100px] mx-auto relative z-10" ref={ref}>
                <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease }}
                    className="text-center max-w-[520px] mx-auto mb-16"
                >
                    <div className="flex items-center gap-2.5 justify-center mb-5">
                        <span className="w-3 h-3 rounded-full bg-accent" />
                        <span className="text-[0.72rem] font-bold text-text-tertiary uppercase tracking-[0.15em]">Pricing</span>
                    </div>
                    <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold text-text-primary tracking-[-0.04em] mb-4">
                        Investasi untuk <span className="text-gradient">Pertumbuhan</span>
                    </h2>
                    <p className="text-text-secondary text-[1.05rem] leading-[1.8]">
                        Semua paket termasuk trial 14 hari gratis. Tanpa kartu kredit.
                    </p>
                </motion.div>

                <div className="grid grid-cols-3 max-[900px]:grid-cols-1 max-[900px]:max-w-[420px] max-[900px]:mx-auto gap-5 items-stretch">
                    {plans.map((plan, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.12 + i * 0.1, duration: 0.7, ease }}
                            className={`relative rounded-[28px] flex flex-col overflow-hidden transition-all duration-300 ${plan.highlighted
                                    ? 'bg-gradient-to-b from-primary to-primary-dark text-white border-2 border-primary/50 shadow-[0_12px_48px_rgba(59,130,246,0.3)] scale-[1.03] z-10'
                                    : 'bg-card border border-border-default hover:border-primary/20 hover:shadow-[0_8px_32px_rgba(59,130,246,0.08)]'
                                }`}
                        >
                            {plan.popular && (
                                <div className="text-center py-2.5 bg-white/10 border-b border-white/10">
                                    <span className="text-[0.68rem] font-bold text-white/90 tracking-[0.12em] uppercase">⭐ Paling Populer</span>
                                </div>
                            )}

                            <div className="flex-1 flex flex-col p-9">
                                <h3 className={`text-[1.3rem] font-bold tracking-[-0.02em] mb-2 ${plan.highlighted ? 'text-white' : 'text-text-primary'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-[0.82rem] leading-[1.7] mb-8 ${plan.highlighted ? 'text-white/65' : 'text-text-secondary'}`}>
                                    {plan.desc}
                                </p>

                                <div className="flex items-baseline gap-1 mb-9">
                                    {plan.price !== 'Custom' && (
                                        <span className={`text-[0.78rem] font-medium ${plan.highlighted ? 'text-white/45' : 'text-text-tertiary'}`}>Rp</span>
                                    )}
                                    <span className={`text-[2.8rem] font-extrabold font-[family-name:var(--font-space-grotesk)] tracking-[-0.05em] leading-none ${plan.highlighted ? 'text-white' : 'text-text-primary'
                                        }`}>
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className={`text-[0.82rem] font-medium ${plan.highlighted ? 'text-white/45' : 'text-text-tertiary'}`}>{plan.period}</span>
                                    )}
                                </div>

                                <ul className="flex flex-col gap-3.5 list-none mb-10 flex-1">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlighted ? 'bg-white/15' : 'bg-accent/15'
                                                }`}>
                                                <Check size={11} className={plan.highlighted ? 'text-accent-light' : 'text-accent'} strokeWidth={3} />
                                            </div>
                                            <span className={`text-[0.85rem] leading-tight ${plan.highlighted ? 'text-white/80' : 'text-text-secondary'}`}>{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`group w-full py-4 rounded-full text-[0.9rem] font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.97] ${plan.highlighted
                                        ? 'bg-white text-primary hover:bg-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.15)]'
                                        : 'bg-primary text-white hover:bg-primary-dark shadow-[0_4px_16px_rgba(59,130,246,0.3)]'
                                    }`}>
                                    {plan.cta}
                                    <ArrowRight size={15} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
