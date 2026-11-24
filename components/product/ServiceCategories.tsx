import { SERVICES, SERVICE_DETAILS } from '@/lib/services';
import { NAVY, SKY, BG, BORDER, MUTED } from '@/lib/theme';

export default function ServiceCategories() {
  return (
    <section style={{ background: '#fff', borderBottom: `1px solid ${BORDER}` }} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Home tasks we coordinate</h2>
          <p className="text-lg" style={{ color: MUTED }}>Send any home to-do and your coordinator takes care of the scheduling.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, label }, i) => (
            <div key={label} className="rounded-2xl p-6" style={{ background: BG, border: `1px solid ${BORDER}` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: NAVY }}>
                <Icon className="w-5 h-5" style={{ color: SKY }} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: NAVY }}>{label}</h3>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{SERVICE_DETAILS[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
