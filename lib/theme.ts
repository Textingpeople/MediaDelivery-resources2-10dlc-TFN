// TaskBridge design tokens (deep navy / electric blue / sky blue)
export const NAVY = '#0F172A'; // primary: header, hero, footer, dark bands
export const BLUE = '#2563EB'; // secondary: buttons (white text), links
export const BLUE_HOVER = '#1D4ED8';
export const SKY = '#60A5FA'; // accent: icons, highlights, step numbers — navy backgrounds only for text
export const SKY_TINT = '#EFF6FF'; // light blue panel / icon background
export const SKY_BG = 'rgba(96,165,250,0.18)'; // translucent sky for pills/icon tiles
export const BG = '#F8FAFC';
export const CARD = '#FFFFFF';
export const TEXT = '#1E293B';
export const MUTED = '#475569';
export const BORDER = '#E2E8F0';
export const MUTED_ON_NAVY = '#94A3B8';

export const inputStyle = {
  background: '#fff',
  border: `1px solid ${BORDER}`,
  color: TEXT,
  width: '100%',
  borderRadius: '12px',
  padding: '12px 16px',
  fontSize: '14px',
  outline: 'none',
} as const;

export const labelStyle = {
  color: MUTED,
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
};
