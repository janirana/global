import { Airline, Airport, BookingStatus } from '../types';

/* Airlines your cargo desk actually uses */
export const AIRLINES: Airline[] = [
  { value: 'kuwait-airways', label: 'Kuwait Airways' },
  { value: 'qatar-airways', label: 'Qatar Airways' },
  { value: 'dhl-aviation', label: 'DHL Aviation' },
  { value: 'emirates', label: 'Emirates Airlines' },
  { value: 'jazeera-airways', label: 'Jazeera Airways' },
  { value: 'salam-air', label: 'Salam Air' },
  { value: 'sri-lankan', label: 'Sri Lankan Airways' },
];

/* Pakistani origin airports */
export const PAK_AIRPORTS: Airport[] = [
  { code: 'KHI', name: 'Karachi (KHI)' },
  { code: 'LHE', name: 'Lahore (LHE)' },
  { code: 'ISB', name: 'Islamabad (ISB)' },
  { code: 'PEW', name: 'Peshawar (PEW)' },
  { code: 'MUX', name: 'Multan (MUX)' },
  { code: 'SKT', name: 'Sialkot (SKT)' },
  { code: 'FSD', name: 'Faisalabad (FSD)' },
  { code: 'QTA', name: 'Quetta (QTA)' },
];

/* GCC destination airports */
export const DEST_AIRPORTS: Airport[] = [
  { code: 'KWI', name: 'Kuwait (KWI)' },
  { code: 'DOH', name: 'Doha (DOH)' },
  { code: 'BAH', name: 'Bahrain (BAH)' },
  { code: 'SHJ', name: 'Sharjah (SHJ)' },
  { code: 'DXB', name: 'Dubai (DXB)' },
  { code: 'RKT', name: 'Ras Al Khaimah (RKT)' },
];

/* Shipment types recognised by IATA */
export const SHIPMENT_TYPES: string[] = [
  'General Cargo',
  'Express',
  'Air Mail',
  'Dangerous Goods',
  'Perishables',
  'Live Animals',
  'Pharma & Healthcare',
  'Valuables / VUN',
];

/* Common cargo commodities */
export const COMMODITIES: string[] = [
  'Perishable Meat',
  'Fresh Vegetables',
  'Electronics',
  'Pharmaceuticals',
  'Textiles',
  'Automotive Parts',
  'Documents',
  'Garments',
  'Seafood',
  'Machinery',
  'Chemicals',
  'Mobile Phones',
];

export const BOOKING_STATUSES = Object.values(BookingStatus);

/* Tailwind color map for status chips */
export const STATUS_COLORS = {
  Booked: 'bg-slate-500',
  Confirmed: 'bg-green-600',
  Departed: 'bg-purple-600',
  Landed: 'bg-teal-600',
  Cancelled: 'bg-red-600',
} as const;