'use client';

import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';

const conversations = [
    { id: 1, phone: '+62 812 3456 7890', name: 'Ahmad Rizki', lastMessage: 'Thank you for your help!', time: '2 min ago', status: 'resolved', unread: 0 },
    { id: 2, phone: '+62 813 9876 5432', name: 'Sarah Williams', lastMessage: 'When will my package arrive?', time: '5 min ago', status: 'active', unread: 2 },
    { id: 3, phone: '+62 857 1234 5678', name: 'Budi Santoso', lastMessage: 'I need to change my address', time: '12 min ago', status: 'pending', unread: 1 },
    { id: 4, phone: '+62 878 8765 4321', name: 'Dewi Lestari', lastMessage: 'Great service! Will order again.', time: '25 min ago', status: 'resolved', unread: 0 },
    { id: 5, phone: '+62 821 2345 6789', name: 'Eko Prasetyo', lastMessage: 'How do I cancel my subscription?', time: '1 hour ago', status: 'active', unread: 3 },
];

const statusColors: Record<string, { bg: string; color: string }> = {
    resolved: { bg: 'rgba(0, 245, 160, 0.1)', color: '#00f5a0' },
    active: { bg: 'rgba(0, 217, 245, 0.1)', color: '#00d9f5' },
    pending: { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' },
};

export default function ConversationsTable() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
                background: 'rgba(20, 29, 53, 0.6)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '1.5rem',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Recent Conversations</h3>
                <button style={{
                    padding: '0.5rem 1rem', background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px',
                    color: '#94a3b8', fontSize: '0.8rem', cursor: 'pointer',
                }}>
                    View All
                </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                            {['Contact', 'Last Message', 'Status', 'Time'].map((header) => (
                                <th key={header} style={{
                                    padding: '0.75rem 1rem', textAlign: 'left',
                                    color: '#64748b', fontSize: '0.75rem', fontWeight: 600,
                                    textTransform: 'uppercase', letterSpacing: '0.5px',
                                }}>
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {conversations.map((conv) => {
                            const status = statusColors[conv.status];
                            return (
                                <motion.tr
                                    key={conv.id}
                                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                                    style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.03)', cursor: 'pointer', transition: 'background 0.2s' }}
                                >
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <div style={{
                                                width: '40px', height: '40px',
                                                background: 'linear-gradient(135deg, #128C7E, #25D366)',
                                                borderRadius: '10px',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '0.8rem', fontWeight: 700, color: '#fff', position: 'relative',
                                            }}>
                                                {conv.name.split(' ').map(n => n[0]).join('')}
                                                {conv.unread > 0 && (
                                                    <span style={{
                                                        position: 'absolute', top: '-4px', right: '-4px',
                                                        width: '18px', height: '18px',
                                                        background: '#ef4444', borderRadius: '50%',
                                                        fontSize: '0.6rem', fontWeight: 700,
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        border: '2px solid rgba(20, 29, 53, 1)',
                                                    }}>
                                                        {conv.unread}
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{conv.name}</div>
                                                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{conv.phone}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.875rem', maxWidth: '250px' }}>
                                        <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{conv.lastMessage}</p>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                                            padding: '0.375rem 0.75rem',
                                            background: status.bg, borderRadius: '50px',
                                            fontSize: '0.75rem', fontWeight: 600, color: status.color,
                                            textTransform: 'capitalize',
                                        }}>
                                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: status.color }} />
                                            {conv.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', color: '#64748b', fontSize: '0.85rem' }}>{conv.time}</td>
                                </motion.tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
}
