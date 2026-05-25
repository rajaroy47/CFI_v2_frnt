import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Dropdown({ label, options, onSelect, align = 'right' }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 bg-[#1a1c30] px-3 py-2 rounded border border-[#242745] text-xs text-gray-300 hover:border-indigo-500 hover:text-white transition-colors"
      >
        <span>{label}</span>
        <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} mt-1 w-44 bg-[#1a1c30] border border-[#242745] rounded shadow-2xl py-1 z-50 text-xs`}>
          {options.map((opt, idx) => (
            <button 
              key={idx}
              onClick={() => { onSelect(opt); setIsOpen(false); }}
              className="w-full text-left px-3 py-2 text-gray-300 hover:bg-[#242745] hover:text-white transition-colors"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}