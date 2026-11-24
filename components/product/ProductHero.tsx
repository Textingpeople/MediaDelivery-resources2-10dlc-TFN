import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { NAVY, SKY, SKY_BG } from '@/lib/theme';

export default function ProductHero() {
  return (
    <section className="py-20" style={{ background: NAVY }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: SKY_BG, color: SKY }}>
          The Product
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Georgia, serif' }}>
          One coordinator. Every home to-do{' '}
          <span style={{ color: SKY }}>handled.</span>
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#CBD5E1' }}>
          TaskBridge is an employer-provided home and household task coordination benefit. A dedicated coordinator handles home logistics for you by text or through the portal — contractor quotes and repair bookings, installations and service visits, delivery windows, utility and internet setup, moving logistics and a household maintenance calendar. You approve each step, and TaskBridge sends status updates until the job is done. Your personal requests are never shared with your employer.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/signup" className="btn-blue inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white hover:bg-white/10" style={{ border: `2px solid ${SKY}` }}>
            Book a Demo for Your Team
          </Link>
        </div>
      </div>
    </section>
  );
}
