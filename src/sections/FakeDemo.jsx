
import React, { useState } from 'react';
import './FakeDemo.css';

const FakeDemo = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRetry = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div id="fake-demo" className="fake-demo-section">
      <h2>Interactive Prototype</h2>
      <div className="demo-rectangle-wrapper">
        <div className="demo-rectangle">
          <iframe 
            key={refreshKey}
            src="https://marvelapp.com/prototype/353dihg6?emb=1&iosapp=false&frameless=false" 
            width="825" 
            height="624" 
            allowTransparency="true" 
            frameBorder="0"
            title="Interactive Prototype"
          ></iframe>
        </div>
      </div>
      <div style={{ minHeight: '60px', marginTop: '24px' }}>
        <button className="retry-button" onClick={handleRetry}>Try Again</button>
      </div>
    </div>
  );
};

export default FakeDemo;
