'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
	{ label: 'Features', href: '#features' },
	{ label: 'Cara Kerja', href: '#how-it-works' },
	{ label: 'Harga', href: '#pricing' },
	{ label: 'Testimonial', href: '#testimonials' },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const ids = navLinks.map((l) => l.href.replace('#', ''));
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				if (visible.length > 0) setActiveSection('#' + visible[0].target.id);
			},
			{ rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] }
		);

		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [mobileOpen]);

	const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		setMobileOpen(false);
	}, []);

	return (
		<>
			<motion.header
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.1 }}
				className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
			>
				<div
					className={`max-w-[1120px] mx-auto px-6 transition-all duration-500 ${
						scrolled
							? 'bg-[#0c1017]/80 glass rounded-[20px] shadow-[0_2px_24px_rgba(0,0,0,0.4)]'
							: ''
					}`}
				>
					<div className="flex items-center justify-between h-[52px]">
						<Link href="/" className="flex items-center gap-2.5 shrink-0">
							<Image src="/logo.png" alt="Astheron" width={30} height={30} className="object-contain" priority />
							<span className="text-[0.95rem] font-bold text-text-primary tracking-[-0.03em] leading-tight font-[family-name:var(--font-space-grotesk)]">
								Astheron
							</span>
						</Link>

						<nav className="hidden md:flex items-center gap-0.5">
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={(e) => scrollTo(e, link.href)}
									className="relative px-4 py-2 text-[0.84rem] whitespace-nowrap rounded-xl transition-all duration-300 text-text-secondary hover:text-text-primary hover:bg-white/[0.04]"
								>
									{link.label}
								</a>
							))}
						</nav>

						<div className="hidden md:flex items-center gap-2.5 shrink-0">
							<a
								href="/dashboard"
								className="px-5 py-2 text-[0.84rem] text-text-primary font-semibold rounded-full border border-border-strong hover:bg-white/[0.04] transition-all duration-200"
							>
								Login
							</a>
							<a
								href="#pricing"
								onClick={(e) => scrollTo(e, '#pricing')}
								className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-primary text-white rounded-full text-[0.84rem] font-semibold hover:bg-primary-dark active:scale-[0.97] transition-all duration-200 shadow-[0_2px_16px_rgba(59,130,246,0.35)]"
							>
								Sign Up
							</a>
						</div>

						<button
							onClick={() => setMobileOpen((v) => !v)}
							aria-label="Menu"
							className="flex md:hidden items-center justify-center w-10 h-10 rounded-xl text-text-secondary hover:text-text-primary hover:bg-primary-50 transition-all"
						>
							{mobileOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>
				</div>
			</motion.header>

			<AnimatePresence>
				{mobileOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setMobileOpen(false)}
							className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
						/>
						<motion.div
							initial={{ opacity: 0, y: -12 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -12 }}
							transition={{ duration: 0.25 }}
							className="fixed top-[80px] left-4 right-4 z-50 bg-card border border-border-default rounded-3xl p-3 shadow-[0_12px_48px_rgba(0,0,0,0.5)]"
						>
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={(e) => scrollTo(e, link.href)}
									className={`block px-5 py-4 rounded-2xl text-[0.92rem] transition-colors duration-150 hover:bg-primary-50 ${
										activeSection === link.href
											? 'text-primary-light font-semibold bg-primary-50'
											: 'text-text-secondary'
									}`}
								>
									{link.label}
								</a>
							))}
							<div className="h-px bg-border-default mx-4 my-2" />
							<div className="flex gap-2 p-2">
								<Link
									href="/dashboard"
									onClick={() => setMobileOpen(false)}
									className="flex-1 text-center py-3 text-text-primary text-[0.88rem] font-semibold rounded-2xl border border-border-strong"
								>
									Login
								</Link>
								<a
									href="#pricing"
									onClick={(e) => scrollTo(e, '#pricing')}
									className="flex-1 text-center py-3 bg-primary text-white rounded-2xl text-[0.88rem] font-semibold"
								>
									Sign Up
								</a>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}

