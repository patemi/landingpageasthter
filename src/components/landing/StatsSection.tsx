'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedGradient } from '@/components/ui/animated-gradient-with-svg';

interface BentoCardProps {
    title: string;
    value: string;
    subtitle?: string;
    colors: string[];
    delay: number;
}

const BentoCard: React.FC<BentoCardProps> = ({ title, value, subtitle, colors, delay }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay + 0.3 },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="relative overflow-hidden h-full bg-base/50 rounded-2xl border border-border-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay }}
        >
            <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
            <motion.div className="relative z-10 p-5 sm:p-6 md:p-8 text-text-primary backdrop-blur-xs" variants={container} initial="hidden" animate="show">
                <motion.h3 className="text-sm text-text-secondary mb-2" variants={item}>
                    {title}
                </motion.h3>
                <motion.p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 font-[family-name:var(--font-space-grotesk)] tracking-[-0.04em]" variants={item}>
                    {value}
                </motion.p>
                {subtitle && (
                    <motion.p className="text-sm text-text-tertiary" variants={item}>
                        {subtitle}
                    </motion.p>
                )}
            </motion.div>
        </motion.div>
    );
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function StatsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="py-28 px-6 bg-base relative overflow-hidden">
            <div className="max-w-[1100px] mx-auto" ref={ref}>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }}
                    className="flex items-center gap-2.5 mb-5"
                >
                    <span className="w-3 h-3 rounded-full bg-accent" />
                    <span className="text-[0.72rem] font-bold text-text-tertiary uppercase tracking-[0.15em]">By the Numbers</span>
                </motion.div>

                <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8, ease }}
                    className="text-[clamp(2rem,4.5vw,3rem)] font-bold text-text-primary tracking-[-0.04em] mb-14 max-w-[600px]"
                >
                    Where AI meets{' '}
                    <span className="text-accent">real impact.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        <BentoCard
                            title="Total Pesan Diproses"
                            value="2M++"
                            subtitle="Pesan diproses oleh Aron AI. Otomatis."
                            colors={["#3B82F6", "#60A5FA", "#93C5FD"]}
                            delay={0.2}
                        />
                    </div>
                    <BentoCard
                        title="Peningkatan Sales"
                        value="+42%"
                        subtitle="Peningkatan closing setelah 3 bulan menggunakan Aron AI."
                        colors={["#60A5FA", "#34D399", "#93C5FD"]}
                        delay={0.4}
                    />
                    <BentoCard
                        title="Kepuasan Pelanggan"
                        value="96%"
                        subtitle="Pelanggan lebih suka respons dari Aron AI dibanding manusia."
                        colors={["#F59E0B", "#A78BFA", "#FCD34D"]}
                        delay={0.6}
                    />
                    <div className="md:col-span-2">
                        <BentoCard
                            title="Cost Efficiency"
                            value="20x"
                            subtitle="Lebih hemat biaya dibanding customer service manual."
                            colors={["#3B82F6", "#A78BFA", "#FBCFE8"]}
                            delay={0.8}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
