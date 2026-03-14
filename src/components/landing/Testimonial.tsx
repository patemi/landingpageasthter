'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns';

const testimonials = [
    {
        text: 'Sejak pakai Aron AI, tim CS kami bisa handle 5x lebih banyak customer tanpa tambah headcount. Response time turun dari 2 jam ke bawah 30 detik.',
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        name: 'Rina Setiawan',
        role: 'Head of CX, TokoBaju.id',
    },
    {
        text: 'Setup-nya sangat cepat — chatbot kami live dalam 15 menit. AI-nya akurat menjawab bahkan pertanyaan teknis tentang produk kami.',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Budi Hartono',
        role: 'CTO, NexTech Solutions',
    },
    {
        text: 'ROI-nya luar biasa. Kami menghemat Rp 30 juta per bulan untuk biaya CS dan customer satisfaction malah naik 15%. Game changer.',
        image: 'https://randomuser.me/api/portraits/women/3.jpg',
        name: 'Diana Pratiwi',
        role: 'CEO, GrowthHub',
    },
    {
        text: 'Integrasi WhatsApp-nya seamless banget. Customer bahkan nggak sadar mereka chat sama AI. Kualitas jawaban sangat natural.',
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
        name: 'Fajar Nugraha',
        role: 'Marketing Director, MediaKita',
    },
    {
        text: 'Aron AI membantu kami closing 40% lebih banyak deal. AI follow-up otomatis ke leads yang belum respond sangat powerful.',
        image: 'https://randomuser.me/api/portraits/women/5.jpg',
        name: 'Sarah Amalia',
        role: 'Sales Manager, CloudWork',
    },
    {
        text: 'Training AI-nya cuma butuh 10 menit upload dokumen. Langsung bisa jawab pertanyaan spesifik tentang produk kami dengan sangat akurat.',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
        name: 'Lina Kusuma',
        role: 'Product Owner, BukaUsaha',
    },
    {
        text: 'Fitur analytics-nya sangat membantu kami memahami apa yang customer butuhkan. Data-driven decisions jadi lebih mudah.',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        name: 'Ahmad Rizki',
        role: 'Data Analyst, PT SafeNet',
    },
    {
        text: 'Customer kami di luar negeri juga bisa dilayani 24/7. AI-nya support multi-bahasa dan timezone tidak jadi masalah lagi.',
        image: 'https://randomuser.me/api/portraits/women/8.jpg',
        name: 'Maya Putri',
        role: 'Operations Lead, EduPro',
    },
    {
        text: 'Sebelum pakai Aron AI, kami perlu 8 CS agent. Sekarang cukup 2 orang untuk handle volume yang sama. Efisiensi luar biasa.',
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        name: 'Deni Saputra',
        role: 'COO, TokoMaju',
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const ease = [0.16, 1, 0.3, 1] as const;

export default function Testimonial() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="testimonials" className="py-32 px-6 bg-base relative overflow-hidden">
            <div className="max-w-[1100px] mx-auto relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
                >
                    <div className="flex items-center gap-2.5 justify-center mb-5">
                        <span className="w-3 h-3 rounded-full bg-accent" />
                        <span className="text-[0.72rem] font-bold text-text-tertiary uppercase tracking-[0.15em]">Testimonials</span>
                    </div>
                    <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold text-text-primary tracking-[-0.04em] mb-4 text-center">
                        Dipercaya 3000+ <span className="text-gradient">Bisnis Indonesia</span>
                    </h2>
                    <p className="text-center text-text-secondary text-[0.95rem]">
                        Lihat apa kata mereka tentang transformasi customer service dengan Aron AI.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
}
