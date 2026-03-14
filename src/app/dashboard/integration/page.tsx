'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Plus, Trash2, Copy, Eye, EyeOff, RefreshCw, CheckCircle, AlertCircle, Globe, Key, Webhook } from 'lucide-react';

const phoneNumbers = [
    { id: 1, number: '+62 812 3456 7890', label: 'Main Support', status: 'connected', assignedBot: 'Customer Support Bot', messagesTotal: 12847 },
    { id: 2, number: '+62 813 9876 5432', label: 'Sales Line', status: 'connected', assignedBot: 'Sales Assistant', messagesTotal: 5623 },
    { id: 3, number: '+62 857 1111 2222', label: 'HR Internal', status: 'disconnected', assignedBot: 'Not Assigned', messagesTotal: 0 },
];

const webhookEvents = [
    { id: 'message.received', label: 'Message Received', enabled: true },
    { id: 'message.sent', label: 'Message Sent', enabled: true },
    { id: 'conversation.started', label: 'Conversation Started', enabled: false },
    { id: 'conversation.resolved', label: 'Conversation Resolved', enabled: true },
    { id: 'bot.error', label: 'Bot Error', enabled: false },
];

export default function IntegrationPage() {
    const [activeTab, setActiveTab] = useState('numbers');
    const [showApiKey, setShowApiKey] = useState(false);

    const tabs = [
        { id: 'numbers', label: 'Phone Numbers', icon: Phone },
        { id: 'api', label: 'API Settings', icon: Key },
        { id: 'webhooks', label: 'Webhooks', icon: Webhook },
    ];

    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>WhatsApp Integration</h1>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Manage your WhatsApp Business connections</p>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                {tabs.map((tab) => (
                    <motion.button
                        key={tab.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.75rem 1.25rem',
                            background: activeTab === tab.id ? 'rgba(0, 245, 160, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                            border: activeTab === tab.id ? '1px solid rgba(0, 245, 160, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '12px',
                            color: activeTab === tab.id ? '#00f5a0' : '#94a3b8',
                            fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer',
                        }}
                    >
                        <tab.icon size={16} /> {tab.label}
                    </motion.button>
                ))}
            </div>

            {/* Phone Numbers Tab */}
            {activeTab === 'numbers' && (
                <div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
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
                            <Plus size={18} /> Add Number
                        </motion.button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {phoneNumbers.map((num) => (
                            <motion.div
                                key={num.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.01 }}
                                style={{
                                    background: 'rgba(20, 29, 53, 0.6)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    borderRadius: '16px',
                                    padding: '1.5rem',
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '48px', height: '48px',
                                        background: num.status === 'connected' ? 'rgba(0, 245, 160, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                        borderRadius: '12px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Phone size={22} color={num.status === 'connected' ? '#00f5a0' : '#ef4444'} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '1rem' }}>{num.number}</div>
                                        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{num.label}</div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#94a3b8' }}>{num.assignedBot}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                                        padding: '0.375rem 0.875rem',
                                        background: num.status === 'connected' ? 'rgba(0, 245, 160, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                        borderRadius: '50px',
                                        color: num.status === 'connected' ? '#00f5a0' : '#ef4444',
                                        fontSize: '0.8rem', fontWeight: 600,
                                    }}>
                                        {num.status === 'connected' ? <CheckCircle size={14} /> : <AlertCircle size={14} />}
                                        {num.status === 'connected' ? 'Connected' : 'Disconnected'}
                                    </span>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#ef4444' }}
                                    >
                                        <Trash2 size={16} />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* API Settings Tab */}
            {activeTab === 'api' && (
                <div style={{
                    background: 'rgba(20, 29, 53, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '2rem',
                }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>API Configuration</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>API Key</label>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <div style={{
                                    flex: 1, display: 'flex', alignItems: 'center',
                                    padding: '0.75rem 1rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '10px',
                                }}>
                                    <input
                                        type={showApiKey ? 'text' : 'password'}
                                        value="sk-astheron-xxxxxxxxxxxxxxxxxxxx"
                                        readOnly
                                        style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: '0.9rem', fontFamily: 'monospace' }}
                                    />
                                    <button onClick={() => setShowApiKey(!showApiKey)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                                        {showApiKey ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                                <motion.button whileHover={{ scale: 1.05 }} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#94a3b8', cursor: 'pointer' }}>
                                    <Copy size={16} />
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.05 }} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#94a3b8', cursor: 'pointer' }}>
                                    <RefreshCw size={16} />
                                </motion.button>
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>API Endpoint</label>
                            <div style={{
                                padding: '0.75rem 1rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '10px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#00f5a0',
                            }}>
                                https://api.astheron.com/v1/whatsapp
                            </div>
                        </div>

                        <div style={{
                            padding: '1rem', background: 'rgba(245, 158, 11, 0.08)',
                            border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '10px',
                        }}>
                            <p style={{ color: '#f59e0b', fontSize: '0.85rem' }}>⚠️ Keep your API key secure. Never expose it in client-side code.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Webhooks Tab */}
            {activeTab === 'webhooks' && (
                <div style={{
                    background: 'rgba(20, 29, 53, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '2rem',
                }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Webhook Configuration</h3>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>Webhook URL</label>
                        <input
                            type="text"
                            placeholder="https://your-domain.com/webhook"
                            style={{
                                width: '100%', padding: '0.75rem 1rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '10px', color: '#fff', fontSize: '0.9rem',
                                outline: 'none',
                            }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', marginBottom: '1rem' }}>Events</label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {webhookEvents.map((event) => (
                                <div key={event.id} style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    padding: '1rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '10px',
                                }}>
                                    <div>
                                        <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>{event.label}</div>
                                        <div style={{ color: '#64748b', fontSize: '0.75rem', fontFamily: 'monospace' }}>{event.id}</div>
                                    </div>
                                    <div style={{
                                        width: '44px', height: '24px',
                                        background: event.enabled ? '#00f5a0' : 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '12px', cursor: 'pointer', position: 'relative',
                                        transition: 'background 0.2s',
                                    }}>
                                        <div style={{
                                            width: '20px', height: '20px',
                                            background: '#fff', borderRadius: '50%',
                                            position: 'absolute', top: '2px',
                                            left: event.enabled ? '22px' : '2px',
                                            transition: 'left 0.2s',
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
