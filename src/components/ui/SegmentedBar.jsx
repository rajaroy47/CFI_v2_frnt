import React from 'react';

export default function SegmentedBar({ data }) {
  return (
    <div className="space-y-6">
      <div className="w-full h-7 rounded-lg overflow-hidden flex bg-[#111322] shadow-inner">
        {data.map((segment, idx) => (
          <div 
            key={idx} 
            className={`${segment.color} ${segment.width} h-full transition-all duration-300 hover:opacity-90 relative group cursor-help`}
          >
            <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
              {segment.value}%
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
        {data.map((item, idx) => (
          <div key={idx} className="p-3 bg-[#111322]/40 rounded-lg border border-[#242745]/40 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs">
              <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
              <span className="text-gray-400 font-medium truncate">{item.name}</span>
            </div>
            <span className="text-lg font-bold text-white pl-4">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}