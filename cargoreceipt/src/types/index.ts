export enum BookingStatus {
  Booked = 'Booked',
  Confirmed = 'Confirmed',
  Departed = 'Departed',
  Landed = 'Landed',
  Cancelled = 'Cancelled',
}

export interface Airline {
  value: string;
  label: string;
}

export interface Airport {
  code: string;
  name: string;
}

export interface ReceiptData {
  companyName: string;
  airline: string;
  mawbNo: string;
  shipmentType: string;
  commodity: string;
  pieces: number;
  weight: number;
  shipper: string;
  consignee: string;
  flightNo: string;
  flightDate: string;
  departureTime: string;
  arrivalTime: string;
  departureAirport: string;
  arrivalAirport: string;
  bookingStatus: BookingStatus;
}