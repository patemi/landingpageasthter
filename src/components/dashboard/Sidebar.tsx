'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard, Bot, MessageSquare, BarChart3, Plug, Settings,
    ChevronLeft, ChevronRight,
} from 'lucide-react';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Bot, label: 'Chatbot', href: '/dashboard/chatbot' },
    { icon: MessageSquare, label: 'Conversations', href: '/dashboard/conversations' },
    { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
    { icon: Plug, label: 'WhatsApp Integration', href: '/dashboard/integration' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (value: boolean) => void;
    isMobileOpen: boolean;
    setIsMobileOpen: (value: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }: SidebarProps) {
    const pathname = usePathname();

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                        style={{
                            position: 'fixed', inset: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 40, display: 'none',
                        }}
                        className="mobile-overlay"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                animate={{
                    width: isCollapsed ? '80px' : '280px',
                    x: isMobileOpen ? 0 : undefined,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    height: '100vh',
                    background: 'linear-gradient(180deg, rgba(15, 22, 41, 0.95) 0%, rgba(10, 14, 26, 0.98) 100%)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex', flexDirection: 'column',
                    position: 'fixed', left: 0, top: 0, zIndex: 50,
                    backdropFilter: 'blur(20px)',
                }}
                className="sidebar"
            >
                {/* Logo */}
                <div style={{
                    padding: isCollapsed ? '1.5rem 0.75rem' : '1.5rem 1.5rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex', alignItems: 'center',
                    justifyContent: isCollapsed ? 'center' : 'space-between',
                }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                width: '40px', height: '40px',
                                background: 'linear-gradient(135deg, #00f5a0 0%, #00d9f5 100%)',
                                borderRadius: '12px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                            }}
                        >
                            <MessageSquare size={22} color="#0a0e1a" />
                        </motion.div>
                        <AnimatePresence>
                            {!isCollapsed && (
                                <motion.span
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: 'auto' }}
                                    exit={{ opacity: 0, width: 0 }}
                                    style={{
                                        fontSize: '1.25rem', fontWeight: 700,
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden',
                                    }}
                                >
                                    Astheron
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                </div>

                {/* Navigation */}
                <nav style={{ flex: 1, padding: '1.5rem 0.75rem', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {menuItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <motion.div key={index} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                                    <Link
                                        href={item.href}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '0.875rem',
                                            padding: isCollapsed ? '0.875rem' : '0.875rem 1rem',
                                            borderRadius: '12px', textDecoration: 'none',
                                            background: isActive ? 'rgba(0, 245, 160, 0.1)' : 'transparent',
                                            border: isActive ? '1px solid rgba(0, 245, 160, 0.2)' : '1px solid transparent',
                                            transition: 'all 0.3s ease',
                                            justifyContent: isCollapsed ? 'center' : 'flex-start',
                                        }}
                                        onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; }}
                                        onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
                                    >
                                        <item.icon size={20} style={{ color: isActive ? '#00f5a0' : '#64748b', flexShrink: 0 }} />
                                        <AnimatePresence>
                                            {!isCollapsed && (
                                                <motion.span
                                                    initial={{ opacity: 0, width: 0 }}
                                                    animate={{ opacity: 1, width: 'auto' }}
                                                    exit={{ opacity: 0, width: 0 }}
                                                    style={{
                                                        color: isActive ? '#fff' : '#94a3b8',
                                                        fontSize: '0.9rem', fontWeight: isActive ? 600 : 500,
                                                        whiteSpace: 'nowrap', overflow: 'hidden',
                                                    }}
                                                >
                                                    {item.label}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </nav>

                {/* Collapse Button */}
                <div style={{ padding: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        style={{
                            width: '100%', padding: '0.75rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '10px', color: '#94a3b8', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                            transition: 'all 0.3s ease',
                        }}
                        className="collapse-btn"
                    >
                        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                        <AnimatePresence>
                            {!isCollapsed && (
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ fontSize: '0.85rem' }}>
                                    Collapse
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </motion.aside>

            <style jsx global>{`
        @media (max-width: 1024px) {
          .sidebar { transform: translateX(-100%); }
          .sidebar.open { transform: translateX(0); }
          .mobile-overlay { display: block !important; }
          .collapse-btn { display: none !important; }
        }
      `}</style>
        </>
    );
}
