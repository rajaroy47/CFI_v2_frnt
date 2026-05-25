import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Download, Edit3, CreditCard, Archive } from 'lucide-react';

// Layout Modules
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dropdown from './components/ui/Dropdown';
import SegmentedBar from './components/ui/SegmentedBar';

// Custom Graphical Systems
import BarChart from './components/charts/BarChart';
import TrendLineChart from './components/charts/TrendLineChart';

// Sourced Data Blocks
import { salesData, visitorData, channelData, menuItems } from './data/dashboardMock';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [timezone, setTimezone] = useState('UTC time zone');
  const [filter, setFilter] = useState('Filter by');

  const filteredMenu = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // --- SUBSECTION PANELS ---
  // Extracting your core components into a neat mini-render function for the "/" route
  const DashboardHomeView = () => (
    <>
      {/* Metrics Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-white tracking-wide">Sales Trends</h1>
          <span className="text-[11px] bg-cyan-950 text-cyan-400 font-semibold px-2.5 py-0.5 rounded-full border border-cyan-800/30">Enterprise</span>
          <span className="text-xs text-gray-500 hidden sm:inline">Home &gt; Dashboard</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <Dropdown label={timezone} options={['UTC time zone', 'EST (New York)', 'GMT (London)']} onSelect={setTimezone} align="left" />
          <Dropdown label={filter} options={['Filter by', 'This Week', 'Last Month', 'Yearly Overview']} onSelect={setFilter} />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded font-medium flex items-center gap-1.5 transition-colors">
            <Download size={14} /> Download Report
          </button>
        </div>
      </div>

      {/* Action Ribbon */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-b border-[#1e213a] py-3 gap-3">
        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="text-gray-500">Categories :</span>
          <span className="flex items-center gap-1.5 text-gray-300"><span className="w-2 h-2 rounded-sm bg-rose-500"></span> #Sales</span>
          <span className="flex items-center gap-1.5 text-gray-300"><span className="w-2 h-2 rounded-sm bg-green-500"></span> #Purchases</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <button className="flex items-center gap-1 hover:text-white"><Edit3 size={14} /> Edit</button>
          <button className="flex items-center gap-1 hover:text-white"><CreditCard size={14} /> Plans & billing</button>
          <button className="flex items-center gap-1 hover:text-white"><Archive size={14} /> Archive</button>
        </div>
      </div>

      {/* Charts System */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="bg-[#1a1c30] p-5 rounded-lg border border-[#242745] lg:col-span-7">
          <h3 className="text-sm font-semibold text-gray-200 mb-4">Real Time Sales</h3>
          <BarChart data={salesData} />
        </div>
        <div className="bg-[#1a1c30] p-5 rounded-lg border border-[#242745] lg:col-span-5">
          <h3 className="text-sm font-semibold text-gray-200 mb-4">Store Visitors</h3>
          <TrendLineChart data={visitorData} />
        </div>
      </div>

      {/* Sessions Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="bg-[#1a1c30] p-6 rounded-lg border border-[#242745] lg:col-span-8">
          <h3 className="text-sm font-semibold text-gray-200 mb-2">Sessions By Channel</h3>
          <SegmentedBar data={channelData} />
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg p-6 lg:col-span-4 flex flex-col justify-between text-white shadow-xl min-h-[200px]">
          <h3 className="text-lg font-bold">Your business in our hands</h3>
          <p className="text-[11px] text-purple-300">Enterprise Ready Production Framework Platform</p>
        </div>
      </div>
    </>
  );

  // Fallback structural landing page layout when navigating to empty placeholder pages
  const PlaceholderView = ({ title }) => (
    <div className="h-[60vh] flex flex-col items-center justify-center text-center p-6 border border-dashed border-[#242745] rounded-xl bg-[#1a1c30]/50">
      <h2 className="text-2xl font-bold text-white tracking-wide">{title}</h2>
      <p className="text-sm text-gray-500 mt-2 max-w-sm">This frontend application route successfully redirected! You can build out your custom components for this page inside your router ecosystem setup.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#111322] text-[#9ca3af] font-sans flex overflow-x-hidden select-none">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} menuItems={filteredMenu} />

      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <Header onOpenSidebar={() => setSidebarOpen(true)} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <main className="p-4 lg:p-6 space-y-6 flex-1">
          {/* --- ROUTING SWITCH ENGINE --- */}
          <Routes>
            <Route path="/" element={<DashboardHomeView />} />
            <Route path="/widgets" element={<PlaceholderView title="Widgets Portal View Layout" />} />
            <Route path="/ui-elements/buttons" element={<PlaceholderView title="UI Kit: Buttons Framework" />} />
            <Route path="/ui-elements/cards" element={<PlaceholderView title="UI Kit: Cards Layout Modules" />} />
            <Route path="/ui-elements/modals" element={<PlaceholderView title="UI Kit: Modals Overlays" />} />
            <Route path="/advanced-ui/drag-&-drop" element={<PlaceholderView title="Advanced Drag-&-Drop Modules" />} />
            {/* Catch-all safety fallback routing layer */}
            <Route path="*" element={<PlaceholderView title="Module Route Live Redirect Page" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}