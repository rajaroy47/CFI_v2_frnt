import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';

export default function Sidebar({ isOpen, onClose, menuItems }) {
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubmenu = (name) => {
    setExpandedMenus(prev => ({ ...prev, [name]: !prev[name] }));
  };

  // Safe helper to convert sidebar titles into real browser path names
  // e.g., "UI Elements" -> "/ui-elements", "Dashboard" -> "/"
  const getPath = (name) => {
    if (name.toLowerCase() === 'dashboard') return '/';
    return `/${name.toLowerCase().replace(/[\s&]+/g, '-')}`;
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/60 z-50 lg:hidden backdrop-blur-sm" onClick={onClose} />}
      
      <aside className={`fixed inset-y-0 left-0 z-50 w-60 bg-[#1a1c30] border-r border-[#242745] transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-[#242745]">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-xl text-white">
            <span className="w-6 h-6 bg-gradient-to-tr from-violet-600 to-indigo-400 rounded transform rotate-45 flex items-center justify-center">
              <span className="text-xs -rotate-45 text-white">Y</span>
            </span>
            <span className="tracking-wide">Yora<span className="text-indigo-400">UI</span></span>
          </NavLink>
          <button className="lg:hidden text-gray-400 hover:text-white" onClick={onClose}><X size={20} /></button>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {menuItems.map((item, idx) => {
            const isExpanded = !!expandedMenus[item.name];
            const itemPath = getPath(item.name);

            if (item.hasSub) {
              return (
                <div key={idx} className="space-y-1">
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] font-medium text-[#8a8ea8] hover:bg-[#20223b] hover:text-white transition-all"
                  >
                    <div className="flex items-center gap-3">{item.icon}<span>{item.name}</span></div>
                    <ChevronDown size={14} className={`opacity-60 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isExpanded && (
                    <div className="pl-9 space-y-1">
                      {item.subItems.map((sub, sIdx) => {
                        const subPath = `${itemPath}${getPath(sub)}`;
                        return (
                          <NavLink
                            key={sIdx}
                            to={subPath}
                            onClick={onClose}
                            className={({ isActive }) => 
                              `block py-1.5 text-[12px] font-medium transition-colors ${
                                isActive ? 'text-indigo-400 font-semibold' : 'text-[#717593] hover:text-indigo-400'
                              }`
                            }
                          >
                            {sub}
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // Normal Top Level Links without drop sub-menus
            return (
              <NavLink
                key={idx}
                to={itemPath}
                onClick={onClose}
                className={({ isActive }) => 
                  `w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all ${
                    isActive 
                      ? 'bg-[#242745] text-indigo-400 border-l-2 border-indigo-500' 
                      : 'text-[#8a8ea8] hover:bg-[#20223b] hover:text-white'
                  }`
                }
              >
                <div className="flex items-center gap-3">{item.icon}<span>{item.name}</span></div>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}