
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChartBar, ChartLine, Home, Map, MessageSquare, Server } from 'lucide-react';

const navItems = [
  { 
    name: 'Dashboard', 
    path: '/', 
    icon: <Home className="h-5 w-5" /> 
  },
  { 
    name: 'Anomaly Detection', 
    path: '/anomaly-detection', 
    icon: <ChartLine className="h-5 w-5" /> 
  },
  { 
    name: 'Network Map', 
    path: '/network-map', 
    icon: <Map className="h-5 w-5" /> 
  },
  { 
    name: 'KPI Analysis', 
    path: '/kpi-analysis', 
    icon: <ChartBar className="h-5 w-5" /> 
  },
  { 
    name: 'Assistant', 
    path: '/assistant', 
    icon: <MessageSquare className="h-5 w-5" /> 
  },
  { 
    name: 'Network Sites', 
    path: '/network-sites', 
    icon: <Server className="h-5 w-5" /> 
  },
];

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-gray-200 h-[calc(100vh-64px)]">
      <div className="p-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full rounded-md border border-gray-200 py-2 pl-3 pr-8 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <svg 
            className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive 
                  ? "bg-orange-50 text-orange-500" 
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="rounded-md bg-orange-50 p-3">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-orange-100 p-1.5">
              <svg className="h-4 w-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h5 className="text-sm font-medium text-orange-800">Need Help?</h5>
              <p className="text-xs text-orange-600">Check our documentation</p>
            </div>
          </div>
          <button className="mt-3 w-full rounded-md bg-white px-3 py-1.5 text-xs font-medium text-orange-500 border border-orange-200 hover:bg-orange-50">
            View Documentation
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
