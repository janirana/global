// ReceiptPreview.tsx
import React, { forwardRef, useEffect } from 'react';
import { ReceiptData } from '../../types';
import logoImage from '../../assets/logo.png';
/* ------------------------------------------------------------------ */
/* Heroicons (outline) – inline SVGs with fixed positioning           */
/* ------------------------------------------------------------------ */
const IconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <span 
    className={`${className}`} 
    style={{ 
      display: 'inline-block',
      width: '20px', 
      height: '20px', 
      verticalAlign: 'top',
      textAlign: 'center',
      lineHeight: '20px'
    }}
  >
    {children}
  </span>
);

const ClipboardListIcon = () => (
  <IconWrapper>
    <svg 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      style={{ width: '16px', height: '16px', display: 'block', margin: '2px auto' }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    </svg>
  </IconWrapper>
);

const UserCircleIcon = () => (
  <IconWrapper>
    <svg 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      style={{ width: '16px', height: '16px', display: 'block', margin: '2px auto' }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </IconWrapper>
);

const PaperPlaneIcon = () => (
  <IconWrapper>
    <svg 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      style={{ width: '16px', height: '16px', display: 'block', margin: '2px auto' }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
  </IconWrapper>
);

/* ------------------------------------------------------------------ */
/* Props                                                              */
/* ------------------------------------------------------------------ */
interface ReceiptPreviewProps {
  data: ReceiptData;
}

/* ------------------------------------------------------------------ */
/* Airline logo – loads PNG from ../assets                            */
/* ------------------------------------------------------------------ */
const AirlineLogo: React.FC<{ airline: string; className?: string }> = ({
  airline,
  className,
}) => {
  try {
    const src = require(`../../assets/${airline}.png`);
    return (
      <img
        src={src}
        alt={airline}
        className={className || "h-12 w-auto object-contain"}
        style={{
          height: '35px',
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
          maxWidth: '200px',
          flexShrink: 0
        }}
      />
    );
  } catch {
    return (
      <img
        src={logoImage}
        alt="Airline"
        className={className || "h-14 w-auto object-contain opacity-40"}
        style={{
          height: '48px',
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
          maxWidth: '200px',
          flexShrink: 0,
          opacity: 0.4
        }}
      />
    );
  }
};

/* ------------------------------------------------------------------ */
/* Status badge                                                       */
/* ------------------------------------------------------------------ */
const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const getStyles = () => {
    switch (status) {
      case "Cancelled":
        return "bg-red-50 border-red-300 text-red-700";
      case "Confirmed":
        return "bg-green-50 border-green-300 text-green-700";
      case "Pending":
        return "bg-yellow-50 border-yellow-300 text-yellow-700";
      case "Completed":
        return "bg-blue-50 border-blue-300 text-blue-700";
      default:
        return "bg-gray-50 border-gray-300 text-gray-700";
    }
  };

  return (
    <div
      className={`w-full border px-0 py-2 rounded-md text-center text-[14px] font-medium font-semibold uppercase tracking-wide ${getStyles()}`}
    >
      {status}
      <p className="text-center text-[10px] mt-1 opacity-80">
        Shipment Booking Receipt
      </p>

    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Main component                                                     */
/* ------------------------------------------------------------------ */
const ReceiptPreview = forwardRef<HTMLDivElement, ReceiptPreviewProps>(
  ({ data }, ref) => {

    return (
      <div
        ref={ref}
        className="receipt-preview bg-white text-slate-900 font-sans w-full max-w-[700px] min-h-[700px] p-6 flex flex-col gap-3 shadow-lg rounded-lg border border-slate-200 mb-4"
        style={{
          boxSizing: 'border-box',
          pageBreakAfter: 'always',
          margin: 0,
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          lineHeight: '1.0'
        }}
      >
        {/* Header */}
        <header 
          className="flex items-end justify-start gap-3 pb-3 border-b-2 border-slate-200"
          style={{ 
            display: 'flex', 
            alignItems: 'flex-end', 
            justifyContent: 'flex-start', 
            gap: '12px',
            minHeight: '40px'
          }}
        >
          {/* logo first */}
          <img
            src={logoImage}
            alt="Global Logistics Inc."
            className="h-8 w-auto object-contain"
            style={{ 
              height: '32px', 
              width: 'auto', 
              objectFit: 'contain', 
              display: 'block',
              flexShrink: 0
            }}
          />

          {/* text second, bottom-aligned with the logo */}
        </header>        
        {/* Airline logo */}
        <div 
          className="flex justify-center"
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            minHeight: '60px',
            padding: '8px 0'
          }}
        >
          <AirlineLogo airline={data.airline} className="h-12 w-auto" />
        </div>

        {/* Shipment Details */}
        <section>
          <h2 
            className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-2"
            style={{ 
              display: 'block',
              lineHeight: '20px',
              height: '20px',
              position: 'relative'
            }}
          >
            <span>Shipment Details</span>
          </h2>

          <div className="w-full text-sm border border-slate-300 rounded-md p-2 bg-white">
            <div className="flex mb-2">
              <div className="flex-1 px-2 py-1">
                <div className="text-[11px] font-semibold text-slate-400 ">MAWB NO.</div>
                <div className="text-[11px] font-semibold font-bold">{data.mawbNo}</div>
              </div>
              <div className="flex-1 px-2 py-1">
                <div className="text-[11px] text-slate-400 font-semibold">SHIPMENT TYPE</div>
                <div className="text-[11px] font-semibold">{data.shipmentType}</div>
              </div>
              <div className="flex-1 px-2 py-1">
                {/* Empty cell */}
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 px-2 py-1">
                <div className="text-[11px] text-slate-400 font-semibold">COMMODITY</div>
                <div className="text-[11px] text-slate-900 font-semibold">{data.commodity}</div>
              </div>
              <div className="flex-1 px-2 py-1">
                <div className="text-[11px] text-slate-400 font-semibold">PIECES</div>
                <div className="text-[11px] text-slate-900 font-semibold">{data.pieces}</div>
              </div>
              <div className="flex-1 px-2 py-1">
                <div className="text-[11px] text-slate-400 font-semibold">WEIGHT(KG)</div>
                <div className="text-[11px] text-slate-900 font-semibold">{data.weight} Kg</div>
              </div>
            </div>
          </div>
        </section>
        {/* Shipper & Consignee */}
        <section>
          <h2 
            className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-2"
            style={{ 
              display: 'block',
              lineHeight: '20px',
              height: '20px',
              position: 'relative'
            }}
          >
            <span>Shipper & Consignee</span>
          </h2>

          <div 
            className="grid grid-cols-2 gap-4"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
          >
            {/* Shipper */}
            <div className="border border-slate-300 rounded-md p-3">
              <h3 className="text-[11px] font-semibold text-slate-400 uppercase mb-1">SHIPPER</h3>
              <p className="text-[11px]  font-semibold  text-slate-500 whitespace-pre-wrap font-medium">
                {data.shipper}
              </p>
            </div>

            {/* Consignee */}
            <div className="border border-slate-300 rounded-md p-3">
              <h3 className="text-[11px] font-semibold text-slate-400 uppercase mb-1">CONSIGNEE</h3>
              <p className="text-[11px]  font-semibold  text-slate-500 whitespace-pre-wrap font-medium">
                {data.consignee}
              </p>
            </div>
          </div>
        </section>

        {/* Flight Information */}
        <section>
          <h2 
            className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-2"
            style={{ 
              display: 'block',
              lineHeight: '20px',
              height: '20px',
              position: 'relative'
            }}
          >
            <span>Flight Information</span>
          </h2>

          <div className="w-full text-sm border border-slate-300 rounded-md p-2 bg-white">
            <div className="flex mb-2">
              <div className="flex-1 px-2 py-1">
                <div className="text-[11px] text-slate-400 font-semibold">FLIGHT NO.</div>
                <div className="text-[11px] text-slate-900 font-semibold">{data.flightNo}</div>
              </div>
              <div className="flex-1 px-2 py-1">
                <div className="text-[11px] text-slate-400 font-semibold">DATE</div>
                <div className="text-[11px] text-slate-900 font-semibold">{data.flightDate}</div>
              </div>
              <div className="flex-1 px-2 py-1">
                <div className="text-[11px] text-slate-400 font-semibold">STATUS</div>
                <div className="text-[11px] text-slate-900 font-semibold">{data.bookingStatus}</div>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 px-2 py-1">
                <div className="text-[11px] text-slate-400 font-semibold">DEPARTURE TIME</div>
                <div className="text-[11px] text-slate-900 font-semibold">{data.departureTime}</div>
              </div>
              <div className="flex-1 px-2 py-1">
                <div className="text-[11px] text-slate-400 font-semibold">ARRIVAL TIME</div>
                <div className="text-[11px] text-slate-900 font-semibold">{data.arrivalTime}</div>
              </div>
              <div className="flex-1 px-2 py-1">
                <div className="text-[11px] text-slate-400 font-semibold">SECTOR</div>
                <div 
                  className="text-[11px] text-slate-900 font-semibold flex items-center gap-1"
                  style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <span>{data.departureAirport}</span>
                  <p>→</p>
                  <span>{data.arrivalAirport}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Status badge */}
        <div className="mt-auto w-full">
          <StatusBadge status={data.bookingStatus} />
        </div>

        {/* Important note */}
        <aside className="bg-red-50 border-l-4 border-red-400 p-2 rounded-md">
          <p className="font-semibold text-red-800 text-xs">Important Note:</p>
          <p className="text-red-700 text-xs mt-1">
            Cargo must be delivered to the airport at least 4 hours before departure.
          </p>
        </aside>

        {/* Footer */}
        <footer className="mt-2 pt-2 border-t border-slate-200 text-[10px] text-slate-500 flex justify-between">
          <span>© {new Date().getFullYear()} Global Logistics</span>
          <span>Generated: {new Date().toLocaleDateString()}</span>
        </footer>
      </div>
    );
  }
);

ReceiptPreview.displayName = 'ReceiptPreview';
export default ReceiptPreview;
