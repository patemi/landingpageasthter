'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Bot, Clock, TrendingUp, BarChart3, Users, Smile, Calendar } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, BarChart, Bar } from 'recharts';

const kpis = [
    { title: 'Total Messages', value: '48,293', change: '+18.2%', icon: MessageSquare, gradient: 'linear-gradient(135deg, #00f5a0, #00d9f5)' },
    { title: 'AI Resolution Rate', value: '94.7%', change: '+3.1%', icon: Bot, gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)' },
    { title: 'Avg Response Time', value: '1.2s', change: '-0.4s', icon: Clock, gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)' },
    { title: 'Customer Satisfaction', value: '4.8/5', change: '+0.3', icon: Smile, gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)' },
];

const messagesData = [
    { name: 'Week 1', messages: 8200, resolved: 7800 },
    { name: 'Week 2', messages: 10100, resolved: 9600 },
    { name: 'Week 3', messages: 9400, resolved: 9100 },
    { name: 'Week 4', messages: 12400, resolved: 11800 },
];

const sentimentData = [
    { name: 'Positive', value: 65, color: '#00f5a0' },
    { name: 'Neutral', value: 25, color: '#7c3aed' },
    { name: 'Negative', value: 10, color: '#ef4444' },
];

const responseTimeData = [
    { hour: '8AM', time: 1.8 }, { hour: '10AM', time: 1.2 }, { hour: '12PM', time: 2.1 },
    { hour: '2PM', time: 1.5 }, { hour: '4PM', time: 1.3 }, { hour: '6PM', time: 0.9 },
    { hour: '8PM', time: 1.1 },
];

const topicsData = [
    { topic: 'Order Status', count: 1250 }, { topic: 'Returns', count: 890 },
    { topic: 'Product Info', count: 760 }, { topic: 'Payments', count: 540 },
    { topic: 'Support', count: 320 },
];

export default function AnalyticsPage() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>Analytics</h1>
                    <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Track your chatbot performance metrics</p>
                </div>
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.625rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                }}>
                    <Calendar size={16} color="#64748b" />
                    <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Last 30 days</span>
                </div>
            </div>

            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
                {kpis.map((kpi, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
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
                        <div style={{
                            width: '48px', height: '48px',
                            background: kpi.gradient, borderRadius: '14px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: '1rem',
                        }}>
                            <kpi.icon size={24} color="#0a0e1a" />
                        </div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", marginBottom: '0.25rem' }}>{kpi.value}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{kpi.title}</span>
                            <span style={{ color: '#00f5a0', fontSize: '0.8rem', fontWeight: 600 }}>{kpi.change}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Charts Row 1 */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        background: 'rgba(20, 29, 53, 0.6)', backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '1.5rem',
                    }}
                >
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Messages Overview</h3>
                    <div style={{ height: '280px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={messagesData}>
                                <defs>
                                    <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00f5a0" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#00f5a0" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <Tooltip contentStyle={{ background: 'rgba(15, 22, 41, 0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} />
                                <Area type="monotone" dataKey="messages" stroke="#00f5a0" strokeWidth={2} fill="url(#colorMessages)" />
                                <Area type="monotone" dataKey="resolved" stroke="#7c3aed" strokeWidth={2} fillOpacity={0} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{
                        background: 'rgba(20, 29, 53, 0.6)', backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '1.5rem',
                    }}
                >
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Customer Sentiment</h3>
                    <div style={{ height: '200px', position: 'relative' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={sentimentData} cx="50%" cy="50%" innerRadius={55} outerRadius={75} paddingAngle={5} dataKey="value">
                                    {sentimentData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#00f5a0' }}>65%</div>
                            <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Positive</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                        {sentimentData.map((item) => (
                            <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }} />
                                <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Charts Row 2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        background: 'rgba(20, 29, 53, 0.6)', backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '1.5rem',
                    }}
                >
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Response Time by Hour</h3>
                    <div style={{ height: '220px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={responseTimeData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <Tooltip contentStyle={{ background: 'rgba(15, 22, 41, 0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} />
                                <Line type="monotone" dataKey="time" stroke="#00d9f5" strokeWidth={2} dot={{ fill: '#00d9f5', r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    style={{
                        background: 'rgba(20, 29, 53, 0.6)', backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '1.5rem',
                    }}
                >
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Top Conversation Topics</h3>
                    <div style={{ height: '220px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={topicsData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <YAxis dataKey="topic" type="category" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} width={100} />
                                <Tooltip contentStyle={{ background: 'rgba(15, 22, 41, 0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} />
                                <Bar dataKey="count" fill="#7c3aed" radius={[0, 6, 6, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
