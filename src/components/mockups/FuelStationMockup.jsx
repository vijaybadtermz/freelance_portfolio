import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Printer, HardDrive, DollarSign, Calculator, RefreshCw, Layers } from 'lucide-react';

export const FuelStationMockup = () => {
  const [shift, setShift] = useState('Shift 1');
  const [fuelType, setFuelType] = useState('Speed Petrol');
  const [litres, setLitres] = useState(35.5);
  const ratePerLitre = 102.50;
  const totalAmount = (litres * ratePerLitre).toFixed(2);
  const gstAmount = (totalAmount * 0.18).toFixed(2);

  return (
    <div className="w-full rounded-2xl bg-[#090b12] border border-slate-800 p-4 sm:p-6 shadow-2xl overflow-hidden text-slate-200">
      {/* Windows Application Title Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-xs text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
            ELECTRON DESKTOP
          </span>
          <span className="font-mono text-xs text-slate-300">FuelStationBilling.exe • NSIS Packaged</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <HardDrive className="w-3.5 h-3.5" /> G-Drive Auto Backup ON
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Billing Controls */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShift('Shift 1')}
                className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold transition-all ${
                  shift === 'Shift 1' ? 'bg-amber-500 text-slate-950 shadow' : 'bg-slate-800 text-slate-400'
                }`}
              >
                Shift 1 (06:00 - 14:00)
              </button>
              <button
                onClick={() => setShift('Shift 2')}
                className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold transition-all ${
                  shift === 'Shift 2' ? 'bg-amber-500 text-slate-950 shadow' : 'bg-slate-800 text-slate-400'
                }`}
              >
                Shift 2 (14:00 - 22:00)
              </button>
            </div>
            <span className="font-mono text-xs text-emerald-400 font-bold">Nozzle #04 Active</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-mono text-slate-400 block mb-1">Fuel Type</label>
              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 font-mono text-xs text-slate-200 outline-none focus:border-amber-500"
              >
                <option>Speed Petrol (₹102.50/L)</option>
                <option>Diesel (₹92.40/L)</option>
                <option>Power Extra (₹110.00/L)</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-mono text-slate-400 block mb-1">Fuel Quantity (Litres)</label>
              <input
                type="number"
                value={litres}
                onChange={(e) => setLitres(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 font-mono text-xs text-amber-300 font-bold outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Meter Readings Reconciliation */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <h5 className="font-mono text-xs font-bold text-slate-300 mb-2 flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-amber-400" /> Daybook & Nozzle Shift Tally
            </h5>
            <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Opening Reading</span>
                <span className="text-slate-200 font-bold">14,285.50</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Closing Reading</span>
                <span className="text-slate-200 font-bold">14,321.00</span>
              </div>
              <div className="p-2 rounded bg-amber-950/40 border border-amber-500/30">
                <span className="text-amber-400 block text-[10px]">Total Dispensed</span>
                <span className="text-amber-300 font-bold">35.50 Litres</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Dot Matrix Slip Printer Simulation */}
        <div className="p-4 rounded-xl bg-[#0f1522] border border-amber-500/30 font-mono text-xs space-y-2 relative shadow-lg">
          <div className="flex items-center justify-between border-b border-dashed border-slate-700 pb-2">
            <span className="text-[10px] text-amber-400 flex items-center gap-1">
              <Printer className="w-3 h-3 animate-pulse" /> Dot-Matrix Printer Ready
            </span>
            <span className="text-[10px] text-slate-400">ESC/POS</span>
          </div>

          <div className="text-center py-1">
            <p className="font-bold text-slate-100 text-sm">RAJSHREE FUEL STATION</p>
            <p className="text-[10px] text-slate-400">GSTIN: 33AAAAA0000A1Z5</p>
            <p className="text-[10px] text-slate-400">Shift: {shift} • Op: Vijaykumar</p>
          </div>

          <div className="border-t border-b border-dashed border-slate-700 py-2 space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span>Item: {fuelType}</span>
              <span>{litres} L</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Rate: ₹{ratePerLitre}</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[10px]">
              <span>CGST (9%) + SGST (9%)</span>
              <span>₹{gstAmount}</span>
            </div>
          </div>

          <div className="flex justify-between font-bold text-sm text-amber-300 pt-1">
            <span>TOTAL BILL:</span>
            <span>₹{totalAmount}</span>
          </div>

          <button className="w-full mt-2 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2">
            <Printer className="w-4 h-4" /> Print Instant Slip
          </button>
        </div>
      </div>
    </div>
  );
};
