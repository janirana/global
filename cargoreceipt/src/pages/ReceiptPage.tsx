import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import ReceiptForm from '../features/form/ReceiptForm';
import ReceiptPreview from '../features/liveView/ReceiptPreview';
import { ReceiptData, BookingStatus } from '../types';

const initialData: ReceiptData = {
  companyName: 'Global Logistics',
  airline: 'kuwait-airways',
  mawbNo: 'KU-2024-001234',
  shipmentType: 'General Cargo',
  commodity: 'Textiles',
  pieces: 5,
  weight: 150,
  shipper: 'ABC Textiles Ltd, Karachi Export Zone\nKarachi, Pakistan | Tel: +92-21-12345678',
  consignee: 'Al-Kuwaitia Trading Co, Salmiya\nKuwait City, Kuwait | Tel: +965-12345678',
  flightNo: 'KU-302',
  flightDate: new Date().toISOString().split('T')[0],
  bookingStatus: BookingStatus.Booked,
  departureAirport: 'KHI',
  arrivalAirport: 'KWI',
  departureTime: '14:30',
  arrivalTime: '17:45',
};

const ReceiptPage: React.FC = () => {
  const [receiptData, setReceiptData] = useState<ReceiptData>(initialData);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleGenerateImage = async () => {
    if (!previewRef.current) return;
    
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true,
        allowTaint: true,
        foreignObjectRendering: false,
        imageTimeout: 15000,
        removeContainer: true,
        logging: false,
        width: previewRef.current.scrollWidth,
        height: previewRef.current.scrollHeight,
        scrollX: 0,
        scrollY: 0,
      });

      // Create filename with format: date_airline_mawb
      const today = new Date();
      const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD
      const airline = receiptData.airline || 'unknown';
      const mawb = receiptData.mawbNo || 'draft';
      const filename = `${dateStr}_${airline}_${mawb}.jpg`;

      // Create download link
      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL('image/jpeg', 0.8);
      link.click();
    } catch (error) {
      console.error('Failed to generate image:', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-2rem)]">
          {/* Left side - Form */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">
              📋 Receipt Form
            </h2>
            <div className="flex-1 overflow-auto">
              <ReceiptForm
                data={receiptData}
                setData={setReceiptData}
                onGenerate={handleGenerateImage}
              />
            </div>
          </div>

          {/* Right side - Preview */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">
              👁️ Live Preview
            </h2>
            <div className="flex-1 overflow-auto flex justify-center items-start p-6">
              <div className="w-full max-w-lg">
                <ReceiptPreview ref={previewRef} data={receiptData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;