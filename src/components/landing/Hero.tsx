'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const GLSLHills = dynamic(
    () => import('@/components/ui/glsl-hills').then((mod) => ({ default: mod.GLSLHills })),
    { ssr: false }
);

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const mockupY = useTransform(scrollYProgress, [0, 0.5], ['0%', '8%']);

    return (
        <section ref={ref} className="relative min-h-[100vh] flex flex-col items-center overflow-hidden">

            {/* ── Dark gradient background ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0" style={{
                    background: 'linear-gradient(180deg, #0a0e1a 0%, #070a12 30%, #06080f 100%)'
                }} />
                {/* Subtle glow orbs */}
                <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full opacity-15"
                    style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4), transparent 65%)', filter: 'blur(100px)' }} />
                <div className="absolute top-[35%] right-[10%] w-[400px] h-[400px] rounded-full opacity-10"
                    style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.4), transparent 65%)', filter: 'blur(100px)' }} />
            </div>

            {/* ── GLSL Hills animated background ── */}
            <div className="absolute inset-0 z-[2] pointer-events-none opacity-60">
                <GLSLHills width="100%" height="100%" cameraZ={125} planeSize={256} speed={0.35} />
            </div>

            {/* ── Gradient fade at bottom ── */}
            <div className="absolute bottom-0 left-0 right-0 h-[200px] z-[3] pointer-events-none"
                style={{ background: 'linear-gradient(to top, #06080f, transparent)' }} />

            {/* ── Main content ── */}
            <motion.div style={{ opacity: fadeOut }} className="relative z-10 w-full max-w-[900px] px-6 text-center pt-[160px]">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6, ease }}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.06] glass border border-border-default rounded-full mb-8"
                >
                    <span className="text-[1rem]">✨</span>
                    <span className="text-[0.78rem] font-semibold text-text-secondary tracking-wide">
                        Indonesia&apos;s No.1 AI Agent for Business
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.9, ease }}
                    className="text-[clamp(2.5rem,5.5vw,3.6rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-text-primary mb-7 font-[family-name:var(--font-space-grotesk)]"
                >
                    Hemat Waktu, Biaya, dan Scale
                    <br className="hidden sm:block" />
                    Up Bisnis anda 10X dengan
                    <br className="hidden sm:block" />
                    <span className="text-gradient">AI Agent Ecosystem</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7, ease }}
                    className="text-[1.1rem] text-text-secondary leading-[1.8] max-w-[560px] mx-auto mb-10"
                >
                    Jawab semua pertanyaan customer, closing penjualan otomatis 24/7, dan optimalkan operasional bisnis anda dengan Astheron AI
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6, ease }}
                    className="flex gap-4 justify-center flex-wrap mb-10"
                >
                    <button className="relative flex items-center text-[0.92rem] font-semibold rounded-full h-12 p-1 ps-6 pe-14 bg-primary text-white group transition-all duration-500 hover:ps-14 hover:pe-6 overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(59,130,246,0.4)] active:scale-[0.97]">
                        <span className="relative z-10 transition-all duration-500 whitespace-nowrap">
                            Konsultasi Dengan Kami
                        </span>
                        <div className="absolute right-1 w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                            <ArrowUpRight size={16} strokeWidth={2.5} />
                        </div>
                    </button>
                    <button className="group relative flex items-center gap-1 overflow-hidden rounded-full border-[1.5px] border-white/20 bg-transparent px-8 py-[14px] text-[0.92rem] font-semibold text-text-primary cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-base hover:rounded-xl active:scale-[0.95]">
                        <ArrowRight className="absolute w-4 h-4 left-[-25%] stroke-white fill-none z-[9] group-hover:left-4 group-hover:stroke-base transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                        <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
                            Daftar Sekarang
                        </span>
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]" />
                        <ArrowRight className="absolute w-4 h-4 right-4 stroke-white fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-base transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
