'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Palette, CreditCard, Mail, Phone, Building, MapPin, Lock, Smartphone, Check } from 'lucide-react';

const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'billing', label: 'Billing', icon: CreditCard },
];

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>Settings</h1>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Manage your account preferences</p>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }} className="settings-layout">
                {/* Sidebar Tabs */}
                <div style={{ width: '240px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            whileHover={{ x: 4 }}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.75rem',
                                padding: '0.875rem 1rem',
                                background: activeTab === tab.id ? 'rgba(0, 245, 160, 0.1)' : 'transparent',
                                border: activeTab === tab.id ? '1px solid rgba(0, 245, 160, 0.2)' : '1px solid transparent',
                                borderRadius: '12px',
                                color: activeTab === tab.id ? '#00f5a0' : '#94a3b8',
                                fontSize: '0.9rem', fontWeight: activeTab === tab.id ? 600 : 500,
                                cursor: 'pointer', textAlign: 'left', width: '100%',
                            }}
                        >
                            <tab.icon size={18} /> {tab.label}
                        </motion.button>
                    ))}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Profile Tab */}
                    {activeTab === 'profile' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                background: 'rgba(20, 29, 53, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '20px',
                                padding: '2rem',
                            }}
                        >
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '2rem' }}>Profile Information</h3>

                            {/* Avatar */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div style={{
                                    width: '80px', height: '80px',
                                    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                                    borderRadius: '20px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.75rem', fontWeight: 700, color: '#fff',
                                }}>
                                    JD
                                </div>
                                <div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        style={{
                                            padding: '0.625rem 1.25rem',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.15)',
                                            borderRadius: '10px', color: '#fff',
                                            fontSize: '0.85rem', cursor: 'pointer', marginRight: '0.5rem',
                                        }}
                                    >
                                        Change Avatar
                                    </motion.button>
                                    <button style={{
                                        padding: '0.625rem 1.25rem', background: 'transparent',
                                        border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '10px',
                                        color: '#ef4444', fontSize: '0.85rem', cursor: 'pointer',
                                    }}>
                                        Remove
                                    </button>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                {[
                                    { label: 'Full Name', icon: User, value: 'John Doe', type: 'text' },
                                    { label: 'Email', icon: Mail, value: 'john@astheron.com', type: 'email' },
                                    { label: 'Phone', icon: Phone, value: '+62 812 3456 7890', type: 'tel' },
                                    { label: 'Company', icon: Building, value: 'Astheron Technologies', type: 'text' },
                                ].map((field, i) => (
                                    <div key={i}>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.5rem' }}>
                                            <field.icon size={14} /> {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            defaultValue={field.value}
                                            style={{
                                                width: '100%', padding: '0.75rem 1rem',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                borderRadius: '10px', color: '#fff', fontSize: '0.9rem', outline: 'none',
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        padding: '0.75rem 2rem',
                                        background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
                                        border: 'none', borderRadius: '12px',
                                        color: '#0a0e1a', fontWeight: 600, cursor: 'pointer',
                                    }}
                                >
                                    Save Changes
                                </motion.button>
                            </div>
                        </motion.div>
                    )}

                    {/* Notifications Tab */}
                    {activeTab === 'notifications' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                background: 'rgba(20, 29, 53, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '20px',
                                padding: '2rem',
                            }}
                        >
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '2rem' }}>Notification Preferences</h3>
                            {[
                                { label: 'Email Notifications', desc: 'Receive updates via email', enabled: true },
                                { label: 'Push Notifications', desc: 'Browser notifications for new messages', enabled: true },
                                { label: 'SMS Alerts', desc: 'Get critical alerts via SMS', enabled: false },
                                { label: 'Weekly Report', desc: 'Receive weekly analytics report', enabled: true },
                                { label: 'Marketing Emails', desc: 'Product updates and tips', enabled: false },
                            ].map((item, i) => (
                                <div key={i} style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    padding: '1.25rem 0',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                                }}>
                                    <div>
                                        <div style={{ fontWeight: 500, fontSize: '0.95rem', color: '#fff' }}>{item.label}</div>
                                        <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{item.desc}</div>
                                    </div>
                                    <div style={{
                                        width: '44px', height: '24px',
                                        background: item.enabled ? '#00f5a0' : 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '12px', cursor: 'pointer', position: 'relative',
                                    }}>
                                        <div style={{
                                            width: '20px', height: '20px',
                                            background: '#fff', borderRadius: '50%',
                                            position: 'absolute', top: '2px',
                                            left: item.enabled ? '22px' : '2px',
                                            transition: 'left 0.2s',
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Security Tab */}
                    {activeTab === 'security' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                background: 'rgba(20, 29, 53, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '20px',
                                padding: '2rem',
                            }}
                        >
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '2rem' }}>Security Settings</h3>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Change Password</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {['Current Password', 'New Password', 'Confirm Password'].map((label) => (
                                        <div key={label}>
                                            <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>{label}</label>
                                            <input
                                                type="password"
                                                placeholder="••••••••"
                                                style={{
                                                    width: '100%', padding: '0.75rem 1rem',
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    borderRadius: '10px', color: '#fff', fontSize: '0.9rem', outline: 'none',
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    style={{
                                        marginTop: '1rem', padding: '0.75rem 1.5rem',
                                        background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
                                        border: 'none', borderRadius: '12px',
                                        color: '#0a0e1a', fontWeight: 600, cursor: 'pointer',
                                    }}
                                >
                                    Update Password
                                </motion.button>
                            </div>

                            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '2rem' }}>
                                <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Two-Factor Authentication</h4>
                                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1rem' }}>Add an extra layer of security to your account.</p>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        padding: '0.75rem 1.25rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.15)',
                                        borderRadius: '10px', color: '#fff', cursor: 'pointer',
                                    }}
                                >
                                    <Smartphone size={16} /> Enable 2FA
                                </motion.button>
                            </div>
                        </motion.div>
                    )}

                    {/* Appearance Tab */}
                    {activeTab === 'appearance' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                background: 'rgba(20, 29, 53, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '20px',
                                padding: '2rem',
                            }}
                        >
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '2rem' }}>Appearance</h3>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Theme</h4>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {[
                                        { label: 'Dark', bg: '#0a0e1a', selected: true },
                                        { label: 'Light', bg: '#f8fafc', selected: false },
                                        { label: 'System', bg: 'linear-gradient(135deg, #0a0e1a 50%, #f8fafc 50%)', selected: false },
                                    ].map((theme) => (
                                        <div key={theme.label} style={{
                                            padding: '1rem', borderRadius: '12px', cursor: 'pointer', textAlign: 'center',
                                            border: theme.selected ? '2px solid #00f5a0' : '1px solid rgba(255, 255, 255, 0.1)',
                                            width: '120px',
                                        }}>
                                            <div style={{
                                                width: '100%', height: '60px',
                                                background: theme.bg, borderRadius: '8px', marginBottom: '0.5rem',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                            }} />
                                            <span style={{ fontSize: '0.85rem', fontWeight: 500, color: theme.selected ? '#00f5a0' : '#94a3b8' }}>{theme.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Accent Color</h4>
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    {['#00f5a0', '#7c3aed', '#00d9f5', '#f59e0b', '#ef4444', '#ec4899'].map((color) => (
                                        <motion.div
                                            key={color}
                                            whileHover={{ scale: 1.15 }}
                                            style={{
                                                width: '36px', height: '36px',
                                                background: color, borderRadius: '10px', cursor: 'pointer',
                                                border: color === '#00f5a0' ? '3px solid #fff' : '3px solid transparent',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}
                                        >
                                            {color === '#00f5a0' && <Check size={16} color="#0a0e1a" />}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Billing Tab */}
                    {activeTab === 'billing' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                background: 'rgba(20, 29, 53, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '20px',
                                padding: '2rem',
                            }}
                        >
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '2rem' }}>Billing & Subscription</h3>

                            <div style={{
                                padding: '1.5rem',
                                background: 'linear-gradient(135deg, rgba(0, 245, 160, 0.1), rgba(0, 217, 245, 0.05))',
                                border: '1px solid rgba(0, 245, 160, 0.2)',
                                borderRadius: '16px', marginBottom: '2rem',
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <span style={{ fontSize: '0.75rem', color: '#00f5a0', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Current Plan</span>
                                        <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '0.25rem' }}>Professional</h4>
                                        <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>$149/month · Renews March 1, 2026</p>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        style={{
                                            padding: '0.75rem 1.5rem',
                                            background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
                                            border: 'none', borderRadius: '12px',
                                            color: '#0a0e1a', fontWeight: 600, cursor: 'pointer',
                                        }}
                                    >
                                        Upgrade Plan
                                    </motion.button>
                                </div>
                            </div>

                            <div>
                                <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Payment Method</h4>
                                <div style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    padding: '1rem',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255, 255, 255, 0.06)',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{
                                            width: '48px', height: '32px',
                                            background: 'linear-gradient(135deg, #1a1f71, #2d70e2)',
                                            borderRadius: '6px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '0.6rem', fontWeight: 700, color: '#fff',
                                        }}>
                                            VISA
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>•••• •••• •••• 4242</div>
                                            <div style={{ color: '#64748b', fontSize: '0.8rem' }}>Expires 12/2027</div>
                                        </div>
                                    </div>
                                    <button style={{
                                        padding: '0.5rem 1rem', background: 'transparent',
                                        border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px',
                                        color: '#94a3b8', fontSize: '0.8rem', cursor: 'pointer',
                                    }}>
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
