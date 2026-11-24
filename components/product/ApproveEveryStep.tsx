import { NAVY, SKY, BG, BORDER, MUTED } from '@/lib/theme';

const steps = [
  { n: '01', title: 'Send your task', desc: 'Text or type a home to-do — a repair, an install, a delivery or a move.' },
  { n: '02', title: 'Review your options', desc: 'Your coordinator gathers quotes, availability and time windows and sends them to you.' },
  { n: '03', title: 'You approve', desc: 'Nothing is booked until you say yes. You approve every quote and every booking.' },
  { n: '04', title: 'Status updates until done', desc: 'We confirm each step with you and send a notice when the job is complete.' },
];

export default function ApproveEveryStep() {
  return (
    <section style={{ background: BG }} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>You approve every step</h2>
          <p style={{ color: MUTED }}>You stay in control from the first request to the finished job.</p>
        </div>
        <div className="space-y-4">
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="flex gap-5 items-start rounded-2xl p-5" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: NAVY, color: SKY }}>{n}</div>
              <div>
                <p className="font-bold text-base mb-1" style={{ color: NAVY }}>{title}</p>
                <p className="text-sm" style={{ color: MUTED }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
