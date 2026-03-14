'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Send, Paperclip, Smile, Phone, Video, MoreVertical, Bot, User, CheckCheck } from 'lucide-react';

const chatList = [
    { id: 1, name: 'Ahmad Rizki', phone: '+62 812 3456 7890', lastMessage: 'Thank you!', time: '2m', unread: 0, status: 'resolved', avatar: '🟢' },
    { id: 2, name: 'Sarah Williams', phone: '+62 813 9876 5432', lastMessage: 'When will it arrive?', time: '5m', unread: 2, status: 'active', avatar: '🔵' },
    { id: 3, name: 'Budi Santoso', phone: '+62 857 1234 5678', lastMessage: 'I need help...', time: '12m', unread: 1, status: 'pending', avatar: '🟡' },
    { id: 4, name: 'Dewi Lestari', phone: '+62 878 8765 4321', lastMessage: 'Great service!', time: '25m', unread: 0, status: 'resolved', avatar: '🟢' },
    { id: 5, name: 'Eko Prasetyo', phone: '+62 821 2345 6789', lastMessage: 'How to cancel?', time: '1h', unread: 3, status: 'active', avatar: '🔵' },
];

const messages = [
    { id: 1, type: 'customer', text: 'Hi, I need help with my recent order #12345', time: '10:28 AM' },
    { id: 2, type: 'bot', text: "Hello Sarah! I'd be happy to help. Let me look up order #12345 for you. One moment please...", time: '10:28 AM' },
    { id: 3, type: 'bot', text: "I found your order! It was placed yesterday and is currently being packaged. Expected delivery is within 2-3 business days.", time: '10:29 AM' },
    { id: 4, type: 'customer', text: 'Can I change the shipping address?', time: '10:30 AM' },
    { id: 5, type: 'bot', text: "Since your order hasn't shipped yet, yes you can! Please provide your new address and I'll update it right away. 📝", time: '10:30 AM' },
    { id: 6, type: 'customer', text: 'Great! The new address is Jl. Sudirman No. 123, Jakarta 10220', time: '10:31 AM' },
    { id: 7, type: 'bot', text: "Done! I've updated your shipping address. You'll receive a confirmation email shortly. Is there anything else I can help with? 😊", time: '10:31 AM' },
];

const statusColors: Record<string, string> = {
    resolved: '#00f5a0',
    active: '#00d9f5',
    pending: '#f59e0b',
};

export default function ConversationsPage() {
    const [selectedChat, setSelectedChat] = useState(1);
    const [filter, setFilter] = useState('all');

    const filteredChats = filter === 'all' ? chatList : chatList.filter(c => c.status === filter);

    return (
        <div style={{ display: 'flex', height: 'calc(100vh - 140px)', gap: '0' }}>
            {/* Chat List */}
            <div style={{
                width: '360px', flexShrink: 0,
                background: 'rgba(20, 29, 53, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px 0 0 20px',
                display: 'flex', flexDirection: 'column',
            }}>
                <div style={{ padding: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Conversations</h2>
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.625rem 1rem', background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px',
                        marginBottom: '1rem',
                    }}>
                        <Search size={16} color="#64748b" />
                        <input type="text" placeholder="Search..." style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: '0.85rem' }} />
                    </div>
                    <div style={{ display: 'flex', gap: '0.375rem' }}>
                        {['all', 'active', 'pending', 'resolved'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                style={{
                                    padding: '0.375rem 0.75rem',
                                    background: filter === f ? 'rgba(0, 245, 160, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                                    border: filter === f ? '1px solid rgba(0, 245, 160, 0.3)' : '1px solid transparent',
                                    borderRadius: '8px',
                                    color: filter === f ? '#00f5a0' : '#94a3b8',
                                    fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer',
                                    textTransform: 'capitalize',
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ flex: 1, overflowY: 'auto' }}>
                    {filteredChats.map((chat) => (
                        <motion.div
                            key={chat.id}
                            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                            onClick={() => setSelectedChat(chat.id)}
                            style={{
                                padding: '1rem 1.25rem',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                                cursor: 'pointer',
                                background: selectedChat === chat.id ? 'rgba(0, 245, 160, 0.05)' : 'transparent',
                                borderLeft: selectedChat === chat.id ? '3px solid #00f5a0' : '3px solid transparent',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: statusColors[chat.status] }} />
                                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{chat.name}</span>
                                </div>
                                <span style={{ color: '#64748b', fontSize: '0.75rem' }}>{chat.time}</span>
                            </div>
                            <p style={{ color: '#94a3b8', fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{chat.lastMessage}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Chat Thread */}
            <div style={{
                flex: 1,
                background: 'rgba(15, 22, 41, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderLeft: 'none',
                borderRadius: '0 20px 20px 0',
                display: 'flex', flexDirection: 'column',
            }}>
                {/* Chat Header */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '40px', height: '40px',
                            background: 'linear-gradient(135deg, #128C7E, #25D366)',
                            borderRadius: '10px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 700, color: '#fff', fontSize: '0.85rem',
                        }}>
                            SW
                        </div>
                        <div>
                            <div style={{ fontWeight: 600 }}>Sarah Williams</div>
                            <div style={{ color: '#00f5a0', fontSize: '0.75rem' }}>● Online</div>
                        </div>
                    </div>
                </div>

                {/* Messages */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                alignSelf: msg.type === 'customer' ? 'flex-start' : 'flex-end',
                                maxWidth: '70%',
                            }}
                        >
                            {msg.type === 'bot' && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.25rem' }}>
                                    <Bot size={12} color="#00f5a0" />
                                    <span style={{ fontSize: '0.65rem', color: '#00f5a0', fontWeight: 600 }}>AI Assistant</span>
                                </div>
                            )}
                            <div style={{
                                padding: '0.875rem 1.125rem',
                                borderRadius: msg.type === 'customer' ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
                                background: msg.type === 'customer'
                                    ? 'rgba(255, 255, 255, 0.08)'
                                    : 'linear-gradient(135deg, rgba(0, 245, 160, 0.15), rgba(0, 217, 245, 0.1))',
                                border: msg.type === 'bot' ? '1px solid rgba(0, 245, 160, 0.2)' : 'none',
                            }}>
                                <p style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>{msg.text}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginTop: '0.375rem' }}>
                                    <span style={{ fontSize: '0.65rem', color: '#64748b' }}>{msg.time}</span>
                                    {msg.type === 'bot' && <CheckCheck size={12} color="#00f5a0" />}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Input */}
                <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        padding: '0.75rem 1rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '14px',
                    }}>
                        <Paperclip size={18} color="#64748b" style={{ cursor: 'pointer' }} />
                        <input type="text" placeholder="Type a message..." style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: '0.9rem' }} />
                        <Smile size={18} color="#64748b" style={{ cursor: 'pointer' }} />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                width: '36px', height: '36px',
                                background: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
                                border: 'none', borderRadius: '10px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            <Send size={16} color="#0a0e1a" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}
