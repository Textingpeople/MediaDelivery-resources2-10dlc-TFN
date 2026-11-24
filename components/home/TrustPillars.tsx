import { Clock, Star, Shield } from 'lucide-react';
import { NAVY, SKY, BORDER, MUTED } from '@/lib/theme';

const pillars = [
  { icon: Clock, title: 'Save hours every week', body: 'Stop spending lunch breaks on hold with contractors and service companies.' },
  { icon: Star, title: 'Dedicated coordinators', body: 'One coordinator who knows your home and follows every task through.' },
  { icon: Shield, title: 'Completely confidential', body: 'Your requests are private and never shared with your employer.' },
];

export default function TrustPillars() {
  return (
    <section style={{ background: '#fff', borderTop: `1px solid ${BORDER}` }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Why employees love it</h2>
          <p className="text-lg" style={{ color: MUTED }}>Built around your time, your home, and your privacy</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: NAVY }}>
                <Icon className="w-8 h-8" style={{ color: SKY }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: NAVY }}>{title}</h3>
              <p className="leading-relaxed" style={{ color: MUTED }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
