import React from 'react';

export default function TrendLineChart({ data }) {
  return (
    <div className="h-56 w-full relative flex flex-col justify-between">
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-zinc-600">
        <div className="w-full border-b border-[#242745]/60 h-0"><span>300K</span></div>
        <div className="w-full border-b border-[#242745]/60 h-0"><span>200K</span></div>
        <div className="w-full border-b border-[#242745]/60 h-0"><span>100K</span></div>
        <div className="w-full h-0"></div>
      </div>

      <div className="flex-1 flex items-end justify-between px-6 z-10 h-[88%]">
        {data.map((node, i) => (
          <div key={i} className="flex-1 h-full flex flex-col justify-end items-center group relative">
            <div className="w-full bg-gradient-to-t from-rose-500/0 via-rose-500/10 to-rose-500/30 rounded-t" style={{ height: node.height }}>
              <div className="w-full h-0.5 bg-rose-500"></div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-white border border-rose-500 absolute scale-0 group-hover:scale-100 transition-transform" style={{ bottom: node.height }}></div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center px-6 pt-2 border-t border-[#242745] text-[11px] text-zinc-500">
        {data.map((node, i) => <span key={i} className="flex-1 text-center scale-75">{node.name}</span>)}
      </div>
    </div>
  );
}