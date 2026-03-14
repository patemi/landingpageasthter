'use client';

import KPICards from '@/components/dashboard/KPICards';
import Charts from '@/components/dashboard/Charts';
import ConversationsTable from '@/components/dashboard/ConversationsTable';

export default function DashboardPage() {
    return (
        <div>
            <div style={{ marginBottom: '1.5rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>Dashboard</h1>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Overview of your chatbot performance</p>
            </div>
            <KPICards />
            <Charts />
            <ConversationsTable />
        </div>
    );
}
