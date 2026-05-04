import React from 'react';
import { Wifi, Server } from 'lucide-react';

const NetworkStatus = () => {
  return (
    <div className="card mt-auto">
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium flex items-center gap-2">
           <Wifi size={18} className="text-primary" />
           Network
        </span>
        <span className="flex items-center gap-1 text-xs text-success font-medium">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
          Online
        </span>
      </div>

      <div className="flex justify-between items-center text-sm">
         <div className="flex items-center gap-2">
            <Server size={14} className="text-muted" />
            <span className="text-muted">Local Hub</span>
         </div>
         <span className="font-medium">192.168.1.104</span>
      </div>
      
      <div className="flex justify-between items-center text-sm mt-3 pt-3 border-t border-[var(--border-color)]">
         <span className="text-muted">Ping</span>
         <span className="font-medium">12 ms</span>
      </div>
    </div>
  );
};

export default NetworkStatus;
