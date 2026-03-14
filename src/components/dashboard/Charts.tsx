'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const messageData = [
    { day: 'Mon', messages: 1200 },
    { day: 'Tue', messages: 1800 },
    { day: 'Wed', messages: 1400 },
    { day: 'Thu', messages: 2200 },
    { day: 'Fri', messages: 1900 },
    { day: 'Sat', messages: 1100 },
    { day: 'Sun', messages: 900 },
];

const responseData = [
    { name: 'AI Replies', value: 78, color: '#00f5a0' },
    { name: 'Human Replies', value: 22, color: '#7c3aed' },
];

export default function Charts() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }} className="charts-grid">
            {/* Line Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                    background: 'rgba(20, 29, 53, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                }}
            >
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Messages Overview</h3>
                <div style={{ height: '260px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={messageData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" />
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                            <Tooltip
                                contentStyle={{
                                    background: 'rgba(15, 22, 41, 0.95)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '12px', color: '#fff',
                                }}
                            />
                            <Line type="monotone" dataKey="messages" stroke="#00f5a0" strokeWidth={3} dot={{ fill: '#00f5a0', strokeWidth: 2 }} activeDot={{ r: 6, fill: '#00f5a0' }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>

            {/* Pie Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                    background: 'rgba(20, 29, 53, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                }}
            >
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Response Distribution</h3>
                <div style={{ height: '200px', position: 'relative' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={responseData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                                {responseData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#00f5a0' }}>78%</div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>AI Handled</div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
                    {responseData.map((item) => (
                        <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color }} />
                            <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{item.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            <style jsx global>{`
        @media (max-width: 1024px) {
          .charts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}
