import React, { useState } from 'react';
import { Power } from 'lucide-react';

const RoomControl = ({ title, icon, disabled }) => {
  const [isOn, setIsOn] = useState(false);

  const togglePower = () => {
    if (disabled) return;
    setIsOn(!isOn);
  };

  const isActive = isOn && !disabled;

  return (
    <div className={`card cursor-pointer transition-all ${isActive ? 'border-[var(--primary)]' : ''}`} onClick={togglePower}>
      <div className="flex flex-col items-center justify-center text-center py-2">
        <div className={`mb-4 p-4 rounded-full ${isActive ? 'bg-[var(--primary)] text-white' : 'bg-[var(--border-color)] text-[var(--text-secondary)]'}`}>
          {icon}
        </div>
        
        <h3 className="font-medium mb-4">{title}</h3>
        
        <div className="flex w-full gap-3 mt-auto">
           <button 
             className={`btn flex-1 !text-xs ${isActive ? 'btn-primary' : 'btn-toggle'}`}
             onClick={(e) => { e.stopPropagation(); if(!disabled) setIsOn(true); }}
             disabled={disabled}
           >
             ON
           </button>
           <button 
             className={`btn flex-1 !text-xs ${!isActive ? 'bg-danger text-white' : 'btn-toggle'}`}
             onClick={(e) => { e.stopPropagation(); if(!disabled) setIsOn(false); }}
             disabled={disabled}
           >
             OFF
           </button>
        </div>
      </div>
    </div>
  );
};

export default RoomControl;
