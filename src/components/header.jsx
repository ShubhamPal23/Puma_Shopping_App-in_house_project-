import React, { useState } from 'react';
import Comp1 from '../Pages/display-page2';

export const Left = ({ fn }) => {
  const [activeTab, setActiveTab] = useState(0); // State to manage the active tab

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '2px solid #ccc', marginBottom: '16px' }}>
        <button 
          onClick={() => handleTabChange(0)} 
          style={{ flex: 1, padding: '10px', background: activeTab === 0 ? '#007bff' : 'transparent', color: activeTab === 0 ? 'orange' : '#000',border:"none", borderRight: '2px solid aqua',borderLeft:"2px solid black", cursor: 'pointer' }}
        >
          ALL
        </button>
        <button 
          onClick={() => handleTabChange(1)} 
          style={{ flex: 1, padding: '10px', background: activeTab === 1 ? '#007bff' : 'transparent', color: activeTab === 1 ? 'orange' : '#000',border:"none", borderRight: '1px solid aqua', cursor: 'pointer' }}
        >
          Men
        </button>
        <button 
          onClick={() => handleTabChange(2)} 
          style={{ flex: 1, padding: '10px', background: activeTab === 2 ? '#007bff' : 'transparent', color: activeTab === 2 ? 'orange' : '#000', border: 'none',borderLeft:"1px solid aqua",borderRight:"2px solid black", cursor: 'pointer' }}
        >
          Women
        </button>
      </div>

      <div>
        {activeTab === 0 && <Comp1 gender={'Any'} fn={fn} />}
        {activeTab === 1 && <Comp1 gender={'men'} fn={fn} />}
        {activeTab === 2 && <Comp1 gender={'women'} fn={fn} />}
      </div>
    </div>
  );
};
