'use client';

import { TextRevealByWord } from '@/components/ui/text-reveal';

export default function TextRevealSection() {
    return (
        <section className="bg-base relative">
            <TextRevealByWord
                text="Aron AI menjawab ribuan pesan pelanggan secara otomatis, closing penjualan 24/7, dan menghemat biaya operasional hingga 73%. Biarkan AI bekerja, Anda fokus mengembangkan bisnis."
            />
        </section>
    );
}
