'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FeatureSteps } from '@/components/ui/feature-steps';

const steps = [
    {
        step: 'Step 1',
        title: 'Pelanggan Mengirim Pesan',
        content: 'Customer kirim pesan via WhatsApp, Instagram, Shopee, atau channel lainnya. Aron AI langsung mendeteksi intent dan konteks percakapan.',
        image: '/images/step1-chat.png',
    },
    {
        step: 'Step 2',
        title: 'AI Memproses & Memahami',
        content: 'Aron AI memahami konteks percakapan, mengecek knowledge base, dan menyiapkan jawaban yang akurat berdasarkan data bisnis Anda.',
        image: '/images/step2-process.png',
    },
    {
        step: 'Step 3',
        title: 'Respon Instan & Closing',
        content: 'Jawaban yang dipersonalisasi terkirim dalam hitungan detik. Follow-up otomatis hingga closing penjualan — 24/7 tanpa jeda.',
        image: '/images/step3-response.png',
    },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function HowItWorks() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="how-it-works" className="py-32 px-6 bg-base relative overflow-hidden">
            <div className="max-w-[1100px] mx-auto relative z-10" ref={ref}>
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease }}
                    className="text-center max-w-[580px] mx-auto mb-6"
                >
                    <div className="flex items-center gap-2.5 justify-center mb-5">
                        <span className="w-3 h-3 rounded-full bg-accent" />
                        <span className="text-[0.72rem] font-bold text-text-tertiary uppercase tracking-[0.15em]">How it Works</span>
                    </div>
                    <p className="text-text-secondary text-[1.05rem] leading-[1.8]">
                        Dari pesan masuk hingga respons terkirim, semuanya otomatis dalam hitungan detik.
                    </p>
                </motion.div>

                {/* Feature Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.9, ease }}
                >
                    <FeatureSteps
                        features={steps}
                        title="Built for end-to-end customer experience."
                        autoPlayInterval={4000}
                    />
                </motion.div>
            </div>
        </section>
    );
}
