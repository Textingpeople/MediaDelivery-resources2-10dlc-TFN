import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { NAVY, SKY, MUTED_ON_NAVY } from '@/lib/theme';

export default function FinalCta() {
  return (
    <section style={{ background: NAVY }} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Ready to hand off your home to-dos?
        </h2>
        <p className="text-lg mb-10" style={{ color: MUTED_ON_NAVY }}>
          New here? Create your account with your Company ID. Want to offer TaskBridge to your team? Book a free employer demo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signup" className="btn-blue inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all hover:bg-white/10" style={{ border: `2px solid ${SKY}` }}>
            Book Employer Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
