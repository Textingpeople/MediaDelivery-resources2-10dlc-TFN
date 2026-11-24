import Link from 'next/link';
import { Clock, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { NAVY, BLUE, SKY, SKY_BG, TEXT, MUTED } from '@/lib/theme';

export default function Hero() {
  return (
    <section style={{ background: NAVY }} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: SKY_BG, color: SKY }}>
              Exclusive Employee Benefit
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
              Your bridge to a{' '}
              <span style={{ color: SKY }}>handled home.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: '#CBD5E1' }}>
              Hand off the home to-dos that eat your week — repairs, installs, deliveries and moves — and your TaskBridge coordinator handles the scheduling for you. Available exclusively as an employee benefit.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link href="/signup" className="btn-blue inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold transition-all">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white transition-all hover:bg-white/10" style={{ border: '2px solid rgba(255,255,255,0.35)' }}>
                Login
              </Link>
              <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white transition-all hover:bg-white/10" style={{ border: `2px solid ${SKY}` }}>
                For Employers — Book Demo
              </Link>
            </div>
          </div>

          {/* Right: image band */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl opacity-40" style={{ background: `linear-gradient(135deg, ${SKY_BG}, transparent)` }} />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0B1222 100%)', border: '1px solid rgba(255,255,255,0.08)', minHeight: '380px' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pb-32 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <Clock className="w-8 h-8" style={{ color: SKY }} />
                </div>
                <p className="text-white text-xl font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>More weekends like this.</p>
                <p className="text-sm" style={{ color: '#CBD5E1' }}>Less time waiting on contractors. More time at home.</p>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-xl p-4 shadow-lg" style={{ background: 'rgba(255,255,255,0.98)' }}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: NAVY }}>
                    <MessageSquare className="w-4 h-4" style={{ color: SKY }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                      <span className="font-semibold" style={{ color: TEXT }}>Your coordinator:</span> 3 quotes are in for your dishwasher repair, and your internet install is set for Tuesday 9–12. Want me to book the top quote?
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: BLUE }} />
                  <span className="text-xs font-medium" style={{ color: BLUE }}>Coordinated for you</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
