import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Disclaimer from '@/components/Disclaimer';
import CompanyInfo from '@/components/CompanyInfo';
import { BRAND, LEGAL_NAME } from '@/lib/siteConfig';
import { NAVY, SKY, SKY_BG, SKY_TINT, BG, BORDER, TEXT, MUTED } from '@/lib/theme';

const values = [
  { title: 'Privacy first', body: 'Your personal requests are never shared with your employer. What you ask us to coordinate stays between you and your coordinator.' },
  { title: 'Follow-through', body: 'We follow every task through. When you send a task, you can trust it will be tracked until the job is done.' },
  { title: 'You stay in control', body: 'You approve every quote and every booking. Nothing is scheduled without your say-so.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <SiteNav />

      {/* Hero */}
      <section className="py-20" style={{ background: NAVY }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: SKY_BG, color: SKY }}>
            About Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Georgia, serif' }}>
            We give employees their weekends back.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#CBD5E1' }}>
            {BRAND} is a home and household task coordination service offered exclusively as an employee benefit. We handle the scheduling behind repairs, installs, deliveries and moves so your team can focus on what matters most — at work and at home.
          </p>
          <p className="text-sm mt-4" style={{ color: '#94A3B8' }}>{BRAND} is operated by {LEGAL_NAME}.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ background: '#fff', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Our mission</h2>
              <p className="leading-relaxed mb-4" style={{ color: MUTED }}>
                Home tasks are a hidden time drain. Getting quotes, waiting for a service window, setting up internet or lining up movers can quietly eat hours out of an employee&apos;s week.
              </p>
              <p className="leading-relaxed" style={{ color: MUTED }}>
                {BRAND} was built to change that. We partner with employers to offer a dedicated coordinator who handles home logistics — from contractor quotes and installations to delivery windows and moving day — and keeps every task moving until it is done.
              </p>
            </div>
            <div className="rounded-2xl p-8 text-center" style={{ background: SKY_TINT, border: `1px solid ${BORDER}` }}>
              <p className="text-lg font-semibold mb-2" style={{ color: NAVY }}>A benefit employees actually use</p>
              <p className="text-sm" style={{ color: MUTED }}>Home to-dos come up every week, so a coordinator who handles them solves a real, recurring problem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ background: BG }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>What we stand for</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ title, body }) => (
              <div key={title} className="rounded-2xl p-6" style={{ background: '#fff', border: `1px solid ${BORDER}`, borderTop: `4px solid ${SKY}` }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: NAVY }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-16" style={{ background: '#fff', borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Company information</h2>
          <div className="text-left">
            <CompanyInfo />
          </div>
          <p className="text-sm mt-4" style={{ color: MUTED }}>{BRAND} is operated by {LEGAL_NAME}, a Wyoming limited liability company.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="px-6 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50" style={{ border: `2px solid ${NAVY}`, color: NAVY }}>
              Contact Us
            </Link>
            <Link href="/consultation" className="btn-blue px-6 py-3 rounded-xl text-sm font-semibold">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8" style={{ background: BG }}>
        <Disclaimer />
      </section>

      <SiteFooter />
    </div>
  );
}
