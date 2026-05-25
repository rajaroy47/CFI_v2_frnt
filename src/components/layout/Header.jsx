import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, Mail, Bell, ChevronDown, User, Settings, Shield, LogOut } from 'lucide-react';

export default function Header({ onOpenSidebar, searchQuery, setSearchQuery }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function clickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    }
    document.addEventListener('mousedown', clickOutside);
    return () => document.removeEventListener('mousedown', clickOutside);
  }, []);

  return (
    <header className="h-16 bg-[#1a1c30] border-b border-[#242745] flex items-center justify-between px-4 lg:px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        <button className="lg:hidden text-gray-400 hover:text-white" onClick={onOpenSidebar}><Menu size={22} /></button>
        <div className="relative max-w-md w-full hidden sm:block">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dashboard links..." 
            className="w-full bg-[#111322] border border-[#242745] rounded-md pl-10 pr-4 py-1.5 text-sm text-gray-200 focus:outline-none focus:border-indigo-500 placeholder-gray-600"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-white"><Mail size={18} /></button>
        <button className="text-gray-400 hover:text-white relative">
          <Bell size={18} /><span className="absolute top-0 right-0 w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
        </button>
        <div className="w-px h-6 bg-[#242745]"></div>
        
        <div className="relative" ref={profileRef}>
          <div onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2 cursor-pointer group">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" className="w-8 h-8 rounded-full border border-[#242745] group-hover:border-indigo-500 transition-colors" alt="User" />
            <ChevronDown size={14} className="text-gray-400 hidden sm:block group-hover:text-white" />
          </div>

          {profileOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-[#1a1c30] border border-[#242745] rounded-lg shadow-2xl py-2 z-50 text-xs text-gray-300">
              <div className="px-4 py-2 border-b border-[#242745] text-white font-semibold">Jane Doe</div>
              <div className="p-1">
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-[#242745] text-left"><User size={14} /> Profile</button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-[#242745] text-left"><Settings size={14} /> Settings</button>
              </div>
              <div className="border-t border-[#242745] m-1 pt-1">
                <button className="w-full flex items-center gap-2 px-3 py-2 text-rose-400 hover:bg-rose-950/20 text-left"><LogOut size={14} /> Logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}