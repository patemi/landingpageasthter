'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Users, Bot, Clock, TrendingUp, TrendingDown } from 'lucide-react';

const kpis = [
    {
        title: 'Total Conversations',
        value: '12,847',
        change: '+12.5%',
        trend: 'up',
        icon: MessageSquare,
        gradient: 'linear-gradient(135deg, #00f5a0, #00d9f5)',
    },
    {
        title: 'Active Chats',
        value: '342',
        change: '+8.2%',
        trend: 'up',
        icon: Users,
        gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)',
    },
    {
        title: 'AI Response Rate',
        value: '94.7%',
        change: '+2.1%',
        trend: 'up',
        icon: Bot,
        gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    },
    {
        title: 'Avg. Response Time',
        value: '1.2s',
        change: '-0.3s',
        trend: 'down',
        icon: Clock,
        gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    },
];

export default function KPICards() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }} className="kpi-grid">
            {kpis.map((kpi, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
                    style={{
                        background: 'rgba(20, 29, 53, 0.6)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '20px',
                        padding: '1.5rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div style={{
                            width: '48px', height: '48px',
                            background: kpi.gradient,
                            borderRadius: '14px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <kpi.icon size={24} color="#0a0e1a" />
                        </div>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '0.25rem',
                            color: kpi.trend === 'up' ? '#00f5a0' : '#00d9f5',
                            fontSize: '0.8rem', fontWeight: 600,
                        }}>
                            {kpi.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                            {kpi.change}
                        </div>
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", marginBottom: '0.25rem' }}>
                        {kpi.value}
                    </div>
                    <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{kpi.title}</div>
                </motion.div>
            ))}

            <style jsx global>{`
        @media (max-width: 1024px) {
          .kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .kpi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}
