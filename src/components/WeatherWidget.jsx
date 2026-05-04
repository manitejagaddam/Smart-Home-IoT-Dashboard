import React from 'react';
import { CloudRain, Wind, Thermometer } from 'lucide-react';

const WeatherWidget = () => {
  return (
    <div className="card bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)]">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-muted text-sm font-medium">Outside</div>
          <div className="text-3xl font-bold mt-1">18°<span className="text-xl text-muted font-normal">C</span></div>
          <div className="text-sm mt-1 text-primary font-medium">Light Rain</div>
        </div>
        <CloudRain size={48} className="text-primary opacity-80" strokeWidth={1.5} />
      </div>
      
      <div className="flex gap-4 mt-4 pt-4 border-t border-[var(--border-color)]">
        <div className="flex items-center gap-2">
          <Wind size={16} className="text-muted" />
          <span className="text-xs font-medium">12 km/h</span>
        </div>
        <div className="flex items-center gap-2">
          <Thermometer size={16} className="text-muted" />
          <span className="text-xs font-medium">85% Hum</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
