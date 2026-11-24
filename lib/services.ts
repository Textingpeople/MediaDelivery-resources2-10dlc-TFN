import {
  Wrench, Hammer, Truck, Zap, Box, Snowflake, CalendarCheck, Search,
} from 'lucide-react';

// The 8 home task categories shared by Home and Product
export const SERVICES = [
  { icon: Wrench, label: 'Repairs & Quotes', desc: 'We gather quotes from local service providers and book the repair you choose.' },
  { icon: Hammer, label: 'Installations', desc: 'Appliances, internet, smart-home devices and fixtures scheduled around your calendar.' },
  { icon: Truck, label: 'Delivery Windows', desc: 'We track deliveries and coordinate delivery and service windows that work for you.' },
  { icon: Zap, label: 'Utilities & Internet Setup', desc: 'Start, stop or transfer electric, gas, water and internet service.' },
  { icon: Box, label: 'Moving Logistics', desc: 'Movers, change-of-address and service transfers lined up for moving day.' },
  { icon: Snowflake, label: 'Seasonal Maintenance', desc: 'Furnace checks, gutter cleaning, lawn and snow services scheduled each season.' },
  { icon: CalendarCheck, label: 'Household Calendar', desc: 'One calendar for every service visit, warranty date and maintenance reminder.' },
  { icon: Search, label: 'Provider Research', desc: 'Options, availability and reviews gathered so you can choose with confidence.' },
];

// Longer paragraphs for the Product page (same 8 categories, same order)
export const SERVICE_DETAILS = [
  'Tell us what is broken and we collect quotes from local service providers, compare availability and show you your options. You pick the provider, and we book the visit.',
  'New appliance, internet service, smart-home device or fixture? We schedule the installer around your calendar and confirm the appointment window with you.',
  'Waiting on a delivery or a service visit? We track the order and coordinate delivery and service windows so you are not stuck at home all day.',
  'Moving into a new place or changing providers? We help you start, stop or transfer electric, gas, water and internet service on the dates you choose.',
  'Moving day takes dozens of small steps. We line up movers, handle change-of-address tasks and coordinate service transfers so nothing is missed.',
  'Furnace checks, gutter cleaning, lawn care and snow services are scheduled for the right time each season, so routine upkeep never slips.',
  'Every service visit, warranty date and maintenance reminder lives on one household calendar that your coordinator keeps current.',
  'We research providers, compare availability and read the reviews so you can choose with confidence instead of guessing.',
];
