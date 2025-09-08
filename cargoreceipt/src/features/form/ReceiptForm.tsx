import React, { Dispatch, SetStateAction } from 'react';
import { ReceiptData } from '../../types';
import {
  AIRLINES,
  PAK_AIRPORTS,
  DEST_AIRPORTS,
  SHIPMENT_TYPES,
  COMMODITIES,
  BOOKING_STATUSES,
} from '../../constants';

interface ReceiptFormProps {
  data: ReceiptData;
  setData: Dispatch<SetStateAction<ReceiptData>>;
  onGenerate: () => void;
}

/* ---------- UI atoms ---------- */
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="w-full p-2 border border-slate-300 rounded-md text-sm h-9 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
  />
);

const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    {...props}
    className="w-full p-2 border border-slate-300 rounded-md text-sm h-9 bg-slate-900/10 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition"
  />
);

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    rows={2}
    className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition resize-none"
  />
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="bg-white/20 rounded-xl shadow-sm border border-slate-200">
    <div className="px-4 py-2 border-b border-slate-200 text-sm font-semibold text-slate-700">
      {title}
    </div>
    <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3">
      {children}
    </div>
  </div>
);

/* ---------- main ---------- */
const ReceiptForm: React.FC<ReceiptFormProps> = ({
  data,
  setData,
  onGenerate,
}) => {
  const handleChange = <
    T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  >(
    e: React.ChangeEvent<T>,
  ) => {
    const { name, value, type } = e.target;
    let final: string | number = value;
    if (type === 'number') final = value === '' ? '' : +value;
    setData((p) => ({ ...p, [name]: final }));
  };

  return (
    <form
      className="bg-slate-10 rounded-lg shadow flex flex-col h-[calc(95vh-120px)] overflow-hidden"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* header */}
      {/* <div className="px-4 py-3 border-b border-slate-200">
        <h2 className="text-lg font-bold text-slate-800">Receipt Details</h2>
        <p className="text-xs text-slate-500">
          Fill in the details below to generate your cargo receipt
        </p>
      </div> */}

      {/* scrollable body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Company & Airline */}
        <Section title="Company & Airline">
          <div>
            <label className="text-xs font-medium text-slate-600 ">Company</label>
            <Input
              type="text"
              name="companyName"
              value={data.companyName}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">Airline</label>
            <Select name="airline" value={data.airline} onChange={handleChange}>
              {AIRLINES.map((a) => (
                <option key={a.value} value={a.value}>
                  {a.label}
                </option>
              ))}
            </Select>
          </div>
        </Section>

        {/* Shipment Details */}
        <Section title="Shipment Details">
          <div>
            <label className="text-xs font-medium text-slate-600">MAWB No.</label>
            <Input
              name="mawbNo"
              value={data.mawbNo}
              onChange={handleChange}
              placeholder="123-45678901"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">
              Shipment Type
            </label>
            <Select name="shipmentType" value={data.shipmentType} onChange={handleChange}>
              {SHIPMENT_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </Select>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">
              Commodity
            </label>
            <Select name="commodity" value={data.commodity} onChange={handleChange}>
              {COMMODITIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs font-medium text-slate-600">Pieces</label>
              <Input
                type="number"
                name="pieces"
                value={data.pieces}
                onChange={handleChange}
                min={0}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                Weight (kg)
              </label>
              <Input
                type="number"
                name="weight"
                value={data.weight}
                onChange={handleChange}
                min={0}
                step="0.01"
              />
            </div>
          </div>
        </Section>

        {/* Addresses */}
        <Section title="Shipper & Consignee">
          <div>
            <label className="text-xs font-medium text-slate-600">Shipper</label>
            <Textarea
              name="shipper"
              value={data.shipper}
              onChange={handleChange}
              placeholder="Name&#10;Address&#10;City, Country"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">
              Consignee
            </label>
            <Textarea
              name="consignee"
              value={data.consignee}
              onChange={handleChange}
              placeholder="Name&#10;Address&#10;City, Country"
            />
          </div>
        </Section>

        {/* Flight Information */}
        <Section title="Flight Information">
          <div>
            <label className="text-xs font-medium text-slate-600">
              Flight No.
            </label>
            <Input
              name="flightNo"
              value={data.flightNo}
              onChange={handleChange}
              placeholder="e.g. QR-601"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">Date</label>
            <Input
              type="date"
              name="flightDate"
              value={data.flightDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">Status</label>
            <Select
              name="bookingStatus"
              value={data.bookingStatus}
              onChange={handleChange}
            >
              {BOOKING_STATUSES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </Select>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">From</label>
            <Select
              name="departureAirport"
              value={data.departureAirport}
              onChange={handleChange}
            >
              {PAK_AIRPORTS.map((a) => (
                <option key={a.code} value={a.code}>
                  {a.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label className="text-xs font-medium text-slate-600">To</label>
            <Select
              name="arrivalAirport"
              value={data.arrivalAirport}
              onChange={handleChange}
            >
              {DEST_AIRPORTS.map((a) => (
                <option key={a.code} value={a.code}>
                  {a.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs font-medium text-slate-600">
                Departure Time
              </label>
              <Input
                type="time"
                name="departureTime"
                value={data.departureTime}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                Arrival Time
              </label>
              <Input
                type="time"
                name="arrivalTime"
                value={data.arrivalTime}
                onChange={handleChange}
              />
            </div>
          </div>
        </Section>
      </div>

      {/* sticky action bar */}
      <div className="px-4 py-3 border-t border-slate-200 flex justify-end">
        <button
          type="button"
          onClick={onGenerate}
          className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-md transition"
        >
          Generate JPG
        </button>
      </div>
    </form>
  );
};

export default ReceiptForm;