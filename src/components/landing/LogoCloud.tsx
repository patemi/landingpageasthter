'use client';

import { type SVGProps } from 'react';
import { LogoCarousel } from '@/components/ui/logo-carousel';

/* ── SVG Text Logos (white for dark theme) ── */

const TokoBajuLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="80" y="28" textAnchor="middle" fill="white" fontFamily="var(--font-space-grotesk), system-ui" fontSize="22" fontWeight="700" letterSpacing="-0.5">TokoBaju.id</text>
    </svg>
);

const EduProLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="70" y="28" textAnchor="middle" fill="white" fontFamily="var(--font-space-grotesk), system-ui" fontSize="24" fontWeight="700" letterSpacing="-0.5">EduPro</text>
    </svg>
);

const GrowthHubLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 170 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="85" y="28" textAnchor="middle" fill="white" fontFamily="var(--font-space-grotesk), system-ui" fontSize="22" fontWeight="700" letterSpacing="-0.5">GrowthHub</text>
    </svg>
);

const MediaKitaLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="80" y="28" textAnchor="middle" fill="white" fontFamily="var(--font-space-grotesk), system-ui" fontSize="22" fontWeight="700" letterSpacing="-0.5">MediaKita</text>
    </svg>
);

const SafeNetLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="80" y="28" textAnchor="middle" fill="white" fontFamily="var(--font-space-grotesk), system-ui" fontSize="22" fontWeight="700" letterSpacing="-0.5">PT SafeNet</text>
    </svg>
);

const CloudWorkLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="80" y="28" textAnchor="middle" fill="white" fontFamily="var(--font-space-grotesk), system-ui" fontSize="22" fontWeight="700" letterSpacing="-0.5">CloudWork</text>
    </svg>
);

const BukaUsahaLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 170 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="85" y="28" textAnchor="middle" fill="white" fontFamily="var(--font-space-grotesk), system-ui" fontSize="22" fontWeight="700" letterSpacing="-0.5">BukaUsaha</text>
    </svg>
);

const NexTechLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="70" y="28" textAnchor="middle" fill="white" fontFamily="var(--font-space-grotesk), system-ui" fontSize="24" fontWeight="700" letterSpacing="-0.5">NexTech</text>
    </svg>
);

const TokoMajuLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="80" y="28" textAnchor="middle" fill="white" fontFamily="var(--font-space-grotesk), system-ui" fontSize="22" fontWeight="700" letterSpacing="-0.5">TokoMaju</text>
    </svg>
);

const DataFlowLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="75" y="28" textAnchor="middle" fill="white" fontFamily="var(--font-space-grotesk), system-ui" fontSize="22" fontWeight="700" letterSpacing="-0.5">DataFlow</text>
    </svg>
);

const allLogos = [
    { name: 'TokoBaju.id', id: 1, img: TokoBajuLogo },
    { name: 'EduPro', id: 2, img: EduProLogo },
    { name: 'GrowthHub', id: 3, img: GrowthHubLogo },
    { name: 'MediaKita', id: 4, img: MediaKitaLogo },
    { name: 'PT SafeNet', id: 5, img: SafeNetLogo },
    { name: 'CloudWork', id: 6, img: CloudWorkLogo },
    { name: 'BukaUsaha', id: 7, img: BukaUsahaLogo },
    { name: 'NexTech', id: 8, img: NexTechLogo },
    { name: 'TokoMaju', id: 9, img: TokoMajuLogo },
    { name: 'DataFlow', id: 10, img: DataFlowLogo },
];

export default function LogoCloud() {
    return (
        <section className="relative py-16 bg-surface overflow-hidden border-y border-border-subtle">
            <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
                <p className="text-center text-[0.7rem] font-semibold text-text-tertiary uppercase tracking-[0.18em] px-8">
                    Dipercaya oleh 3000+ bisnis dan brands terbesar di Indonesia
                </p>
                <LogoCarousel columnCount={5} logos={allLogos} />
            </div>
        </section>
    );
}
