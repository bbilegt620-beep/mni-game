import React, { useState } from 'react';

export default function App() {
  const maxHp = 100;
  const [hp, setHp] = useState(100);
  const [isDead, setIsDead] = useState(false);


  const handleAttack = () => {
    if (isDead) return;
    setHp((prev) => {
      const nextHp = prev - 15;
      if (nextHp <= 0) {
        setIsDead(true);
        return 0;
      }
      return nextHp;
    });
  };

  
  const handleHeal = () => {
    if (isDead) return;
    setHp((prev) => {
      const nextHp = prev + 20;
      return nextHp > maxHp ? maxHp : nextHp;
    });
  };


  const handleReset = () => {
    setHp(maxHp);
    setIsDead(false);
  };

 
  const hpPercentage = (hp / maxHp) * 100;

  return (
    <div className="bg-gray-900 flex items-center justify-center h-screen w-screen">
      {/* Card Container */}
      <div className="bg-[#18181b] border border-gray-800 rounded-2xl p-6 w-96 shadow-2xl text-white font-sans">
        
        {/* Header (Name & Level) */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold tracking-wide">Arin</h2>
          <span className="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-700">
            LVL 5
          </span>
        </div>

        {/* HP Label & Value */}
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-bold tracking-wider text-gray-400">HP</span>
          <span className={`font-bold text-xl ${isDead ? 'text-red-500' : 'text-green-400'}`}>
            {isDead ? 'DEAD' : `${hp} / ${maxHp}`}
          </span>
        </div>

        {/* HP Progress Bar */}
        <div className="w-full bg-gray-900 rounded-full h-4 p-0.5 border border-gray-800 mb-6 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-green-500 to-emerald-400 h-full rounded-full shadow-[0_0_12px_rgba(74,222,128,0.4)] transition-all duration-300"
            style={{ width: `${hpPercentage}%` }}
          ></div>
        </div>

        {/* Action Buttons OR Reset Button if Dead */}
        {!isDead ? (
          <div className="grid grid-cols-2 gap-3">
            {/* Attack Button */}
            <button 
              onClick={handleAttack}
              className="flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-red-700 active:scale-95 transition-all text-white font-semibold py-3 px-4 rounded-xl shadow-lg cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.9 6.9a2.121 2.121 0 01-3-3l6.9-6.9a6 6 0 017.94-7.94l-3.76 3.76z"></path>
              </svg>
              Attack
            </button>

            {/* Heal Button */}
            <button 
              onClick={handleHeal}
              className="flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-blue-700 active:scale-95 transition-all text-white font-semibold py-3 px-4 rounded-xl shadow-lg cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
              Heal
            </button>
          </div>
        ) : (
          <button 
            onClick={handleReset}
            className="w-full bg-gray-700 hover:bg-gray-600 active:scale-95 transition-all text-white font-semibold py-3 px-4 rounded-xl shadow-lg cursor-pointer"
          >
            Revive / Reset
          </button>
        )}

      </div>
    </div>
  );
}