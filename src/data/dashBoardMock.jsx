import React from 'react';
import { LayoutDashboard, Grid, Layers, Settings, FileText, PieChart, MapPin, HelpCircle } from 'lucide-react';

export const salesData = [
  { name: '6am', salesHeight: '16%', purchasesHeight: '10%' },
  { name: '7am', salesHeight: '32%', purchasesHeight: '18%' },
  { name: '8am', salesHeight: '24%', purchasesHeight: '44%' },
  { name: '9am', salesHeight: '48%', purchasesHeight: '32%' },
  { name: '1pm', salesHeight: '64%', purchasesHeight: '84%' },
  { name: '2pm', salesHeight: '100%', purchasesHeight: '88%' },
  { name: '3pm', salesHeight: '76%', purchasesHeight: '76%' },
  { name: '4pm', salesHeight: '88%', purchasesHeight: '68%' },
  { name: '5pm', salesHeight: '36%', purchasesHeight: '60%' },
  { name: '6pm', salesHeight: '0%', purchasesHeight: '72%' },
  { name: '7pm', salesHeight: '0%', purchasesHeight: '64%' },
];

export const visitorData = [
  { name: '5am', height: '10%' },
  { name: '6am', height: '15%' },
  { name: '7am', height: '12%' },
  { name: '8am', height: '20%' },
  { name: '9am', height: '30%' },
  { name: '10am', height: '63%' },
  { name: '11am', height: '73%' },
  { name: '12nn', height: '60%' },
  { name: '1pm', height: '76%' },
  { name: '2pm', height: '50%' },
  { name: '3pm', height: '36%' },
  { name: '4pm', height: '22%' },
];

export const channelData = [
  { name: 'Very Satisfied', value: 26, width: 'w-[26%]', color: 'bg-indigo-500' },
  { name: 'Satisfied', value: 39, width: 'w-[39%]', color: 'bg-blue-500' },
  { name: 'Not Satisfied', value: 20, width: 'w-[20%]', color: 'bg-cyan-400' },
  { name: 'Unsatisfied', value: 15, width: 'w-[15%]', color: 'bg-slate-500' },
];

export const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard size={18} />, hasSub: false },
  { name: 'Widgets', icon: <Grid size={18} />, hasSub: false },
  { name: 'UI Elements', icon: <Layers size={18} />, hasSub: true, subItems: ['Buttons', 'Cards', 'Modals'] },
  { name: 'Advanced UI', icon: <Settings size={18} />, hasSub: true, subItems: ['Drag & Drop', 'Sweet Alerts'] },
  { name: 'Form elements', icon: <FileText size={18} />, hasSub: true, subItems: ['Basic Inputs', 'Validation'] },
  { name: 'Charts', icon: <PieChart size={18} />, hasSub: true, subItems: ['ApexCharts', 'ChartJS'] },
  { name: 'Tables', icon: <Grid size={18} />, hasSub: true, subItems: ['Basic Tables', 'DataTables'] },
  { name: 'Icons', icon: <HelpCircle size={18} />, hasSub: true, subItems: ['Lucide Icons'] },
  { name: 'Maps', icon: <MapPin size={18} />, hasSub: true, subItems: ['Google Maps'] },
  { name: 'Documentation', icon: <FileText size={18} />, hasSub: false },
];