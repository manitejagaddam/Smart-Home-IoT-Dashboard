import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Thermostat from './components/Thermostat';
import RoomControl from './components/RoomControl';
import EnergyMonitor from './components/EnergyMonitor';
import SecurityPanel from './components/SecurityPanel';
import WeatherWidget from './components/WeatherWidget';
import NetworkStatus from './components/NetworkStatus';
import { Home, Lightbulb, Droplets, Fan } from 'lucide-react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [homeMode, setHomeMode] = useState('home'); // 'home' or 'away'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleHomeMode = () => {
    setHomeMode(prev => prev === 'home' ? 'away' : 'home');
  };

  return (
    <div className="dashboard-container mt-6 mb-6 h-full">
      <Header theme={theme} toggleTheme={toggleTheme} homeMode={homeMode} toggleHomeMode={toggleHomeMode} />
      
      <div className="dashboard-grid mt-6 mb-6">
        {/* Left Column */}
        <div className="grid-col left-col flex flex-col gap-6">
          <Thermostat disabled={homeMode === 'away'} />
          <EnergyMonitor />
        </div>

        {/* Middle Column */}
        <div className="grid-col mid-col flex flex-col gap-6">
          <div className="rooms-grid">
            <RoomControl 
              title="Bathroom" 
              icon={<Lightbulb size={24} />} 
              disabled={homeMode === 'away'} 
            />
            <RoomControl 
              title="Office" 
              icon={<Lightbulb size={24} />} 
              disabled={homeMode === 'away'} 
            />
            <RoomControl 
              title="Bedroom" 
              icon={<Lightbulb size={24} />} 
              disabled={homeMode === 'away'} 
            />
            <RoomControl 
              title="Water Pump" 
              icon={<Droplets size={24} />} 
              disabled={homeMode === 'away'} 
            />
          </div>
          <div className="sliders-section card">
             <div className="flex justify-between items-center mb-4">
                <span className="font-medium flex items-center gap-2"><Fan size={18}/> Ventilation</span>
                <span className="text-sm text-muted">Auto Mode</span>
             </div>
             <div className="flex items-center gap-4">
               <span className="text-xs text-muted">Min</span>
               <input type="range" min="0" max="100" defaultValue="35" className="custom-slider w-full" disabled={homeMode === 'away'} />
               <span className="text-xs text-muted">Max</span>
             </div>
             <div className="text-center mt-2 font-bold text-primary">35%</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid-col right-col flex flex-col gap-6">
          <WeatherWidget />
          <SecurityPanel />
          <NetworkStatus />
        </div>
      </div>
    </div>
  );
}

export default App;
