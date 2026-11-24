// Single source of truth for brand, company info, domain and shared legal copy.
export const BRAND = 'TaskBridge';
export const LEGAL_NAME = 'Media Delivery Solutions LLC';
export const DOMAIN = 'usetaskbridge.com';
export const WEBSITE_URL = `https://${DOMAIN}`;
export const SUPPORT_EMAIL = `support@${DOMAIN}`;
export const PRIVACY_EMAIL = `privacy@${DOMAIN}`;
export const LEGAL_EMAIL = `legal@${DOMAIN}`;
export const PHONE_DISPLAY = '(908) 399-8307';
export const PHONE_TEL = 'tel:+19083998307';
export const ADDRESS_LINE_1 = '9 Johnston Dr';
export const ADDRESS_LINE_2 = 'Bloomsbury, NJ 08804';
export const ADDRESS_COUNTRY = 'United States';
export const ADDRESS_ONE_LINE = '9 Johnston Dr, Bloomsbury, NJ 08804, United States';

export const HOURS = ['Monday – Friday, 8am – 8pm ET', 'Saturday, 9am – 5pm ET'];

// Demo Company ID accepted by the sign-up form (front-end only)
export const DEMO_COMPANY_ID = '1234';

export const LAST_UPDATED = 'November 24, 2026';

export const SITE_TITLE = 'TaskBridge | Home & Household Task Coordination for Employees';
export const SITE_DESCRIPTION =
  "TaskBridge is an employee benefit that coordinates home repairs, installations, deliveries and moves — so you don't have to.";

export const FOOTER_TAGLINE = 'TaskBridge — home task coordination for employees.';
export const COPYRIGHT_LINE =
  '© 2026 Media Delivery Solutions LLC. TaskBridge is operated by Media Delivery Solutions LLC.';

export const LEGAL_OPENING =
  'Media Delivery Solutions LLC, a Wyoming limited liability company, d/b/a TaskBridge ("we," "our," or "us")';

export const DISCLAIMER_LINE =
  'TaskBridge is a home task coordination service. We do not perform repairs, are not a licensed contractor, and do not make payments on your behalf.';

export const NO_SHARING_SENTENCE =
  'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.';

export const NO_SENSITIVE_TEXTS_SENTENCE =
  'Texts never include payment card numbers, account numbers, passwords or SSNs.';

export const MOBILE_SHARING_PRIVACY_SENTENCE =
  'Mobile phone numbers and SMS opt-in data and consent are never shared with service providers or any other third parties for marketing or promotional purposes.';

export const SAMPLE_MESSAGES_INTRO =
  'The following are examples of the text messages TaskBridge may send:';

export type SampleMessageType = 'account' | 'promotional';

export const SAMPLE_MESSAGES: { type: SampleMessageType; text: string }[] = [
  {
    type: 'account',
    text: "TaskBridge: You're signed up for task updates from your employer's home coordination benefit. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.",
  },
  {
    type: 'account',
    text: 'TaskBridge: Update: 3 quotes are in for your dishwasher repair. Review and pick one at usetaskbridge.com. Reply STOP to opt out.',
  },
  {
    type: 'account',
    text: 'TaskBridge: Confirmed: your internet installation is scheduled for Tuesday between 9am and 12pm. Reply STOP to opt out.',
  },
  {
    type: 'promotional',
    text: 'TaskBridge: Moving soon? Your coordinator can line up movers and transfer your services. Start at usetaskbridge.com. Reply STOP to opt out.',
  },
  {
    type: 'promotional',
    text: 'TaskBridge: Winter prep: hand off your furnace check and gutter cleaning. Request at usetaskbridge.com. Reply STOP to opt out.',
  },
];

export const NAV_LINKS = [
  { href: '/product', label: 'Product' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const FOOTER_LINKS = {
  employee: [
    { href: '/login', label: 'Login' },
    { href: '/signup', label: 'Create Account' },
  ],
  company: [
    { href: '/product', label: 'Product' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/consultation', label: 'Book a Demo' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/sms-policy', label: 'SMS Policy' },
  ],
};
