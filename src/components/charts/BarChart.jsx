import React from 'react';

export default function BarChart({ data }) {
  return (
    <div className="h-56 w-full relative flex flex-col justify-between">
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-zinc-600">
        <div className="w-full border-b border-[#242745]/60 h-0 flex justify-between"><span>$3000</span></div>
        <div className="w-full border-b border-[#242745]/60 h-0 flex justify-between"><span>$1000</span></div>
        <div className="w-full border-b border-[#242745]/60 h-0 flex justify-between"><span>$500</span></div>
        <div className="w-full h-0"></div>
      </div>

      <div className="flex-1 flex items-end justify-between gap-2 px-8 z-10 h-[88%]">
        {data.map((bar, i) => (
          <div key={i} className="flex-1 h-full flex items-end justify-center gap-[3px] group relative">
            <div className="w-2.5 bg-cyan-400 rounded-t-sm transition-all style-bar" style={{ height: bar.salesHeight }}></div>
            <div className="w-2.5 bg-slate-600 rounded-t-sm transition-all style-bar" style={{ height: bar.purchasesHeight }}></div>
            
            <div className="absolute bottom-full mb-2 bg-[#111322] border border-[#242745] text-[10px] p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 whitespace-nowrap shadow-xl">
              <p className="text-white font-bold">{bar.name}</p>
              <p className="text-cyan-400">Sales: {bar.salesHeight}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center px-8 pt-2 border-t border-[#242745] text-[11px] text-zinc-500">
        {data.map((bar, i) => <span key={i} className="flex-1 text-center scale-90">{bar.name}</span>)}
      </div>
    </div>
  );
}