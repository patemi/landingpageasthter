'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Power, Copy, Trash2, Plus, MoreVertical, Activity, Clock } from 'lucide-react';

const bots = [
    { id: 1, name: 'Customer Support Bot', status: 'active', messages: 4823, responseRate: 96.3, description: 'Handles general customer inquiries', avatar: '🤖' },
    { id: 2, name: 'Sales Assistant', status: 'active', messages: 2145, responseRate: 92.1, description: 'Helps with product recommendations', avatar: '💼' },
    { id: 3, name: 'Order Tracker', status: 'paused', messages: 892, responseRate: 88.5, description: 'Provides order status updates', avatar: '📦' },
    { id: 4, name: 'Feedback Collector', status: 'draft', messages: 0, responseRate: 0, description: 'Collects customer feedback and reviews', avatar: '📝' },
];

const statusConfig: Record<string, { bg: string; color: string; label: string }> = {
    active: { bg: 'rgba(0, 245, 160, 0.1)', color: '#00f5a0', label: 'Active' },
    paused: { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', label: 'Paused' },
    draft: { bg: 'rgba(100, 116, 139, 0.1)', color: '#64748b', label: 'Draft' },
};

export default function ChatbotPage() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>Chatbot Management</h1>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Manage and monitor your AI chatbots</p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
                        border: 'none', borderRadius: '12px',
                        color: '#0a0e1a', fontWeight: 600, cursor: 'pointer',
                    }}
                >
                    <Plus size={18} /> Create Bot
                </motion.button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
                {bots.map((bot) => {
                    const status = statusConfig[bot.status];
                    return (
                        <motion.div
                            key={bot.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -4 }}
                            style={{
                                background: 'rgba(20, 29, 53, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '20px',
                                padding: '1.5rem',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                                    <div style={{ fontSize: '2rem' }}>{bot.avatar}</div>
                                    <div>
                                        <h3 style={{ fontWeight: 600, fontSize: '1rem' }}>{bot.name}</h3>
                                        <span style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                                            padding: '0.25rem 0.625rem',
                                            background: status.bg, borderRadius: '50px',
                                            fontSize: '0.7rem', fontWeight: 600, color: status.color,
                                        }}>
                                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: status.color }} />
                                            {status.label}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>{bot.description}</p>

                            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem' }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                                        <MessageSquare size={12} /> Messages
                                    </div>
                                    <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{bot.messages.toLocaleString()}</div>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                                        <Activity size={12} /> Response Rate
                                    </div>
                                    <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#00f5a0' }}>{bot.responseRate}%</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1rem' }}>
                                {[
                                    { icon: Power, label: 'Toggle', color: bot.status === 'active' ? '#00f5a0' : '#64748b' },
                                    { icon: Copy, label: 'Duplicate', color: '#94a3b8' },
                                    { icon: Trash2, label: 'Delete', color: '#ef4444' },
                                ].map((action, i) => (
                                    <motion.button
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        title={action.label}
                                        style={{
                                            width: '36px', height: '36px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '8px', color: action.color, cursor: 'pointer',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}
                                    >
                                        <action.icon size={14} />
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
