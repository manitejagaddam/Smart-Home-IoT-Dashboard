import React, { useState, useEffect } from 'react';
import { Moon, Sun, Home, Shield, Activity } from 'lucide-react';

const Header = ({ theme, toggleTheme, homeMode, toggleHomeMode }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="flex justify-between items-center w-full mb-6 flex-wrap gap-4">
      <div>
        <h1 className="text-3xl font-bold mb-1">Smart Home</h1>
        <p className="text-muted text-sm flex items-center gap-2">
           <Activity size={16} /> System Active & Online
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-right clock-container">
          <div className="text-2xl font-medium">{formatTime(time)}</div>
          <div className="text-muted text-sm">{formatDate(time)}</div>
        </div>
        
        <div className="flex gap-4 bg-surface-color p-1 rounded-md border border-[var(--border-color)]">
           <button 
             className={`btn ${homeMode === 'home' ? 'btn-primary' : 'btn-toggle'} !py-1 !px-3`}
             onClick={() => homeMode !== 'home' && toggleHomeMode()}
           >
             <Home size={16} /> Home
           </button>
           <button 
             className={`btn ${homeMode === 'away' ? 'btn-primary' : 'btn-toggle'} !py-1 !px-3`}
             onClick={() => homeMode !== 'away' && toggleHomeMode()}
           >
             <Shield size={16} /> Away
           </button>
        </div>

        <button 
          onClick={toggleTheme} 
          className="btn-icon card !p-2"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={20} className="text-warning" /> : <Moon size={20} className="text-primary" />}
        </button>
      </div>
    </div>
  );
};

export default Header;
