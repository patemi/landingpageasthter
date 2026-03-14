'use client';

import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import TopBar from '@/components/dashboard/TopBar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#0a0e1a' }}>
            <Sidebar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
            />
            <main style={{
                flex: 1,
                marginLeft: isCollapsed ? '80px' : '280px',
                transition: 'margin-left 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <TopBar
                    onMenuClick={() => setIsMobileOpen(!isMobileOpen)}
                    sidebarCollapsed={isCollapsed}
                />
                <div style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                    {children}
                </div>
            </main>

            <style jsx global>{`
        @media (max-width: 1024px) {
          main { margin-left: 0 !important; }
        }
      `}</style>
        </div>
    );
}
