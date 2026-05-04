import React, { useState } from 'react';
import { ShieldAlert, Video, Lock, Unlock, Camera } from 'lucide-react';

const SecurityPanel = () => {
  const [camOn, setCamOn] = useState(true);
  const [locks, setLocks] = useState([
    { id: 1, name: 'Front Door', locked: true },
    { id: 2, name: 'Back Door', locked: false },
    { id: 3, name: 'Garage', locked: true }
  ]);

  const toggleLock = (id) => {
    setLocks(locks.map(lock => lock.id === id ? { ...lock, locked: !lock.locked } : lock));
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium flex items-center gap-2">
           <ShieldAlert size={18} className="text-primary" />
           Security System
        </span>
      </div>

      <div className="bg-[var(--bg-color)] rounded-md p-3 mb-6 flex flex-wrap gap-4 justify-between items-center border border-[var(--border-color)]">
         <div className="flex items-center gap-2">
           <div className={`p-2 rounded-full ${camOn ? 'bg-[var(--primary)] text-white' : 'bg-[var(--border-color)] text-muted'}`}>
             <Video size={18} />
           </div>
           <div>
             <div className="font-medium text-sm">Security Cam</div>
             <div className="text-xs text-muted">Front Yard</div>
           </div>
         </div>
         <div className="flex gap-2">
            <button 
              className={`btn !py-1 !px-2 !text-xs ${camOn ? 'btn-primary' : 'btn-toggle'}`}
              onClick={() => setCamOn(true)}
            >
              ON
            </button>
            <button 
              className={`btn !py-1 !px-2 !text-xs ${!camOn ? 'bg-danger text-white' : 'btn-toggle'}`}
              onClick={() => setCamOn(false)}
            >
              OFF
            </button>
         </div>
      </div>

      <div className="flex flex-col gap-2">
        {locks.map(lock => (
          <div key={lock.id} className="flex justify-between items-center p-3 rounded-md border border-[var(--border-color)] transition-colors hover:bg-[var(--bg-color)]">
            <div className="flex items-center gap-2">
              {lock.locked ? <Lock size={16} className="text-success" /> : <Unlock size={16} className="text-danger" />}
              <span className="text-sm font-medium">{lock.name}</span>
            </div>
            <button 
              className={`btn !py-1 !px-3 !text-xs ${lock.locked ? 'bg-[var(--bg-color)] text-muted border border-[var(--border-color)]' : 'btn-primary'}`}
              onClick={() => toggleLock(lock.id)}
            >
              {lock.locked ? 'LOCKED' : 'LOCK'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityPanel;
