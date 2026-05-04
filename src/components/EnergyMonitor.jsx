import React from 'react';
import { BatteryCharging, Zap } from 'lucide-react';

const EnergyMonitor = () => {
  const currentUsage = 250;
  const maxUsage = 500;
  const percentage = Math.min((currentUsage / maxUsage) * 100, 100);

  return (
    <div className="card mt-auto">
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium flex items-center gap-2">
          <Zap size={18} className="text-warning" />
          Energy Usage
        </span>
      </div>
      
      <div className="flex items-end justify-between mt-4">
        <div>
           <div className="text-3xl font-bold flex items-baseline gap-1">
             {currentUsage} <span className="text-sm font-normal text-muted">kWt</span>
           </div>
           <div className="text-xs text-muted mt-1">Today's Consumption</div>
        </div>
        <div className="flex flex-col items-center">
           <BatteryCharging size={32} className="text-success mb-2" />
           <span className="text-xs font-medium text-success">Optimal</span>
        </div>
      </div>

      <div className="w-full bg-[var(--border-color)] rounded-full h-2 mt-6">
        <div 
          className="bg-[var(--primary)] h-2 rounded-full transition-all duration-1000" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default EnergyMonitor;
