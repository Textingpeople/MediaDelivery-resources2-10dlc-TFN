import Link from 'next/link';
import { BRAND } from '@/lib/siteConfig';
import { NAVY, BLUE, SKY } from '@/lib/theme';

// Text + SVG wordmark (no image file needed).
// variant="light" is for navy backgrounds; variant="dark" is for white/light backgrounds.
export default function Logo({
  variant = 'dark',
  size = 'md',
}: {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}) {
  const dark = variant === 'dark';
  const fontSize = size === 'lg' ? 26 : size === 'sm' ? 18 : 22;
  const markSize = size === 'lg' ? 40 : size === 'sm' ? 28 : 34;

  return (
    <Link href="/" aria-label={`${BRAND} home`} className="inline-flex items-center gap-2.5 flex-shrink-0">
      <span
        className="inline-flex items-center justify-center rounded-lg"
        style={{ width: markSize, height: markSize, background: dark ? NAVY : 'rgba(255,255,255,0.1)' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width={markSize * 0.62} height={markSize * 0.62} fill="none" stroke={SKY} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 16c3-8 15-8 18 0" />
          <path d="M6 17v-3M12 17V11M18 17v-3" />
        </svg>
      </span>
      <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize, color: dark ? NAVY : '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>
        Task<span style={{ color: dark ? BLUE : SKY }}>Bridge</span>
      </span>
    </Link>
  );
}
