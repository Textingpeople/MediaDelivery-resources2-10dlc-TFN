import Link from 'next/link';
import { SUPPORT_EMAIL, PHONE_DISPLAY, PHONE_TEL } from '@/lib/siteConfig';
import { NAVY, SKY, MUTED } from '@/lib/theme';

export default function ThankYou() {
  return (
    <div className="text-center py-4">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: NAVY }}>
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={SKY} strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Request received</h2>
      <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>
        Thanks! Your TaskBridge account request has been sent to your employer&apos;s program admin. If you opted in to texts, you&apos;ll get a confirmation text from TaskBridge. Reply STOP to opt out, HELP for help.
      </p>
      <p className="text-sm mb-8" style={{ color: MUTED }}>
        Questions? Contact us at{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="link-blue underline">{SUPPORT_EMAIL}</a>{' '}
        or <a href={PHONE_TEL} className="link-blue underline">{PHONE_DISPLAY}</a>.
      </p>
      <Link href="/" className="btn-blue inline-block px-8 py-4 rounded-xl text-base font-semibold">
        Back to Home
      </Link>
    </div>
  );
}
