'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, Check } from 'lucide-react';

const rows = [
    { aspect: 'Response Time', manual: '5-30 menit', ai: '< 2 detik' },
    { aspect: 'Ketersediaan', manual: '8-12 jam/hari', ai: '24/7 Nonstop' },
    { aspect: 'Konsistensi Jawaban', manual: 'Bervariasi', ai: '100% Akurat' },
    { aspect: 'Biaya per Bulan', manual: 'Rp 5-10 Juta', ai: 'Mulai Rp 490rb' },
    { aspect: 'Skalabilitas', manual: 'Perlu rekrut', ai: 'Unlimited' },
    { aspect: 'Training', manual: '1-2 minggu', ai: '10 menit setup' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function UseCases() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="py-32 px-6 bg-black relative overflow-hidden">
            <div className="max-w-[800px] mx-auto relative z-10" ref={ref}>
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}
                    className="text-center mb-14"
                >
                    <h2 className="text-[clamp(2rem,4.5vw,2.75rem)] font-bold text-white tracking-[-0.035em] mb-4">
                        CS Manual vs <span className="text-gradient">Aron AI</span>
                    </h2>
                </motion.div>

                {/* Comparison table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15, duration: 0.7, ease }}
                    className="rounded-2xl border border-white/[0.06] overflow-hidden"
                >
                    {/* Table header */}
                    <div className="grid grid-cols-3 bg-[#0a0a0a]">
                        <div className="px-6 py-4 text-[0.82rem] text-text-secondary font-medium">Aspek</div>
                        <div className="px-6 py-4 text-[0.82rem] font-semibold text-center">
                            <span className="text-red-400">Manual</span>{' '}
                            <X size={13} className="inline text-red-400" />
                        </div>
                        <div className="px-6 py-4 text-[0.82rem] font-semibold text-center">
                            <span className="text-green">Aron AI</span>{' '}
                            <Check size={13} className="inline text-green" />
                        </div>
                    </div>

                    {/* Table rows */}
                    {rows.map((row, i) => (
                        <div key={i} className={`grid grid-cols-3 border-t border-white/[0.04] ${i % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#0e0e0e]'}`}>
                            <div className="px-6 py-4 text-[0.85rem] text-text-secondary">{row.aspect}</div>
                            <div className="px-6 py-4 text-[0.85rem] text-text-tertiary text-center">{row.manual}</div>
                            <div className="px-6 py-4 text-[0.85rem] text-white font-semibold text-center">{row.ai}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="text-center text-text-secondary text-[0.88rem] mt-8"
                >
                    Hemat hingga <span className="text-white font-bold">90% biaya CS</span> dengan Aron AI
                </motion.p>
            </div>
        </section>
    );
}
