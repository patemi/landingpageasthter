'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const accordionItems = [
    {
        id: 1,
        title: 'WhatsApp AI Agent',
        imageUrl: '/images/accordion-whatsapp.png',
    },
    {
        id: 2,
        title: 'E-Commerce Assistant',
        imageUrl: '/images/accordion-ecommerce.png',
    },
    {
        id: 3,
        title: 'Analytics Dashboard',
        imageUrl: '/images/accordion-analytics.png',
    },
    {
        id: 4,
        title: 'Omnichannel Hub',
        imageUrl: '/images/accordion-multichannel.png',
    },
    {
        id: 5,
        title: 'AI Training',
        imageUrl: '/images/accordion-training.png',
    },
];

const AccordionItem = ({
    item,
    isActive,
    onMouseEnter,
}: {
    item: typeof accordionItems[0];
    isActive: boolean;
    onMouseEnter: () => void;
}) => (
    <div
        className={`relative h-[420px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out border ${
            isActive
                ? 'flex-[4] border-primary/30'
                : 'flex-[0.5] border-border-default hover:border-border-strong'
        }`}
        onMouseEnter={onMouseEnter}
    >
        <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
        />
        <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'bg-black/30' : 'bg-black/60'}`} />

        <span
            className={`absolute text-white text-base font-semibold whitespace-nowrap transition-all duration-500 ease-in-out ${
                isActive
                    ? 'bottom-6 left-6 rotate-0 opacity-100'
                    : 'bottom-20 left-1/2 -translate-x-1/2 -rotate-90 origin-center opacity-80 text-sm'
            }`}
        >
            {item.title}
        </span>
    </div>
);

const ease = [0.16, 1, 0.3, 1] as const;

export default function Trust() {
    const [activeIndex, setActiveIndex] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="py-32 px-6 bg-surface relative overflow-hidden">
            <div className="max-w-[1100px] mx-auto relative z-10" ref={ref}>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, ease }}
                        className="lg:w-[45%] shrink-0"
                    >
                        <div className="flex items-center gap-2.5 mb-6">
                            <span className="w-3 h-3 rounded-full bg-accent" />
                            <span className="text-[0.72rem] font-bold text-text-tertiary uppercase tracking-[0.15em]">Elevate With Us</span>
                        </div>
                        <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold text-text-primary leading-[1.1] tracking-[-0.04em] mb-7">
                            <span className="text-accent">One platform</span> for all
                            <br className="hidden sm:block" />
                            your customer
                            <br className="hidden sm:block" />
                            experience needs.
                        </h2>
                        <p className="text-text-secondary text-[1.05rem] leading-[1.8] mb-9 max-w-[480px]">
                            Aron AI adalah AI agent all-in-one yang dirancang untuk mengotomatisasi seluruh proses customer service bisnis Anda. Bekerja 24/7 tanpa istirahat.
                        </p>
                        <div className="flex gap-3.5 flex-wrap">
                            <button className="relative flex items-center text-[0.92rem] font-bold rounded-full h-12 p-1 ps-6 pe-14 bg-primary text-white group transition-all duration-500 hover:ps-14 hover:pe-6 overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(59,130,246,0.4)] active:scale-[0.97]">
                                <span className="relative z-10 transition-all duration-500 whitespace-nowrap">
                                    Konsultasi via WhatsApp
                                </span>
                                <div className="absolute right-1 w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                                    <ArrowUpRight size={16} strokeWidth={2.5} />
                                </div>
                            </button>
                            <button className="group relative flex items-center gap-1 overflow-hidden rounded-full border-[1.5px] border-white/20 bg-transparent px-8 py-[14px] text-[0.92rem] font-semibold text-text-primary cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-base hover:rounded-xl active:scale-[0.95]">
                                <ArrowRight className="absolute w-4 h-4 left-[-25%] stroke-white fill-none z-[9] group-hover:left-4 group-hover:stroke-base transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                                <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
                                    Talk to AI Expert
                                </span>
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]" />
                                <ArrowRight className="absolute w-4 h-4 right-4 stroke-white fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-base transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: Image Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.9, ease }}
                        className="lg:w-[55%] w-full"
                    >
                        <div className="flex flex-row items-center gap-2.5">
                            {accordionItems.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    item={item}
                                    isActive={index === activeIndex}
                                    onMouseEnter={() => setActiveIndex(index)}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
