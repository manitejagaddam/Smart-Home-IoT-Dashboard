import React, { useState } from 'react';
import { Thermometer as ThermostatIcon, Power } from 'lucide-react';

const Thermostat = ({ disabled }) => {
  const [temperature, setTemperature] = useState(24);
  const [mode, setMode] = useState('low'); // 'high', 'low', 'off'

  // Calculate SVG stroke dasharray for the dial
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const maxTemp = 40;
  const minTemp = 10;
  // Map temp to a percentage (0 to 1)
  const percentage = (temperature - minTemp) / (maxTemp - minTemp);
  // Dial doesn't go all the way around, say 75% of the circle
  const dashoffset = circumference - (percentage * 0.75 * circumference);
  
  const handleTempChange = (delta) => {
    if (disabled || mode === 'off') return;
    setTemperature(prev => Math.min(maxTemp, Math.max(minTemp, prev + delta)));
  };

  const currentMode = disabled ? 'off' : mode;

  return (
    <div className="card h-full flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium flex items-center gap-2">
          <ThermostatIcon size={18} />
          Air Conditioner
        </span>
        <span className={`text-xs px-2 py-1 rounded-full ${currentMode === 'off' ? 'bg-danger text-white' : 'bg-success text-white'}`}>
          {currentMode.toUpperCase()}
        </span>
      </div>

      <div className="dial-container my-4" style={{ opacity: currentMode === 'off' ? 0.5 : 1 }}>
        <svg className="dial-svg" viewBox="0 0 200 200">
          <circle 
            className="dial-bg" 
            cx="100" cy="100" r={radius} 
            strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
            strokeDashoffset="0"
          />
          <circle 
            className="dial-value" 
            cx="100" cy="100" r={radius}
            strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
            strokeDashoffset={dashoffset}
          />
        </svg>
        <div className="dial-text-center">
          <div className="text-4xl font-bold">{temperature}°</div>
          <div className="text-muted text-sm mt-1">Celsius</div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <button 
          className="btn-icon bg-[var(--border-color)]" 
          onClick={() => handleTempChange(-1)}
          disabled={disabled || mode === 'off'}
        >-</button>
        <button 
          className="btn-icon bg-[var(--border-color)]" 
          onClick={() => handleTempChange(1)}
          disabled={disabled || mode === 'off'}
        >+</button>
      </div>

      <div className="flex justify-between gap-4">
        <button 
          className={`btn flex-1 ${currentMode === 'high' ? 'btn-primary' : 'btn-toggle'}`}
          onClick={() => !disabled && setMode('high')}
          disabled={disabled}
        >
          High
        </button>
        <button 
          className={`btn flex-1 ${currentMode === 'low' ? 'btn-primary' : 'btn-toggle'}`}
          onClick={() => !disabled && setMode('low')}
          disabled={disabled}
        >
          Low
        </button>
        <button 
          className={`btn flex-1 ${currentMode === 'off' ? 'bg-danger text-white' : 'btn-toggle'}`}
          onClick={() => !disabled && setMode('off')}
          disabled={disabled}
        >
          <Power size={14} /> Off
        </button>
      </div>
    </div>
  );
};

export default Thermostat;
