'use client';

import { motion } from 'framer-motion';
import { Search, Bell, Menu, Wifi } from 'lucide-react';

interface TopBarProps {
    onMenuClick: () => void;
    sidebarCollapsed: boolean;
}

export default function TopBar({ onMenuClick, sidebarCollapsed }: TopBarProps) {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '1rem 2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            background: 'rgba(10, 14, 26, 0.5)',
            backdropFilter: 'blur(10px)',
        }}>
            {/* Left */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={onMenuClick}
                    className="mobile-menu-btn"
                    style={{
                        display: 'none', background: 'transparent', border: 'none',
                        color: '#94a3b8', cursor: 'pointer', padding: '0.5rem',
                    }}
                >
                    <Menu size={20} />
                </motion.button>

                <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.625rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px', width: '320px',
                }}>
                    <Search size={18} color="#64748b" />
                    <input
                        type="text"
                        placeholder="Search conversations, contacts..."
                        style={{
                            flex: 1, background: 'transparent', border: 'none', outline: 'none',
                            color: '#fff', fontSize: '0.85rem',
                        }}
                    />
                </div>
            </div>

            {/* Right */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Connection Status */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'rgba(0, 245, 160, 0.08)',
                    border: '1px solid rgba(0, 245, 160, 0.2)',
                    borderRadius: '50px',
                }}>
                    <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ width: '8px', height: '8px', background: '#00f5a0', borderRadius: '50%', display: 'block' }}
                    />
                    <span style={{ color: '#00f5a0', fontSize: '0.8rem', fontWeight: 600 }}>Connected</span>
                </div>

                {/* Notifications */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        position: 'relative', width: '40px', height: '40px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px', color: '#94a3b8', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                >
                    <Bell size={18} />
                    <span style={{
                        position: 'absolute', top: '-4px', right: '-4px',
                        width: '18px', height: '18px',
                        background: '#ef4444', borderRadius: '50%',
                        fontSize: '0.65rem', fontWeight: 700, color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: '2px solid #0a0e1a',
                    }}>
                        3
                    </span>
                </motion.button>

                {/* User Profile */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.375rem 0.75rem 0.375rem 0.375rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px', cursor: 'pointer',
                }}>
                    <div style={{
                        width: '32px', height: '32px',
                        background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                        borderRadius: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.8rem', fontWeight: 700, color: '#fff',
                    }}>
                        JD
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>John Doe</span>
                </div>
            </div>

            <style jsx global>{`
        @media (max-width: 1024px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </div>
    );
}
