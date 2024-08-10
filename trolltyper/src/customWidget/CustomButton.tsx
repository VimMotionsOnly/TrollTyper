import React, { useState } from 'react';

function CustomButton() {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  const moveButton = () => {
    const newTop = Math.random() * 90 + '%';
    const newLeft = Math.random() * 90 + '%';
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <a href="/login">
        <button
          style={{ position: 'absolute', top: position.top, left: position.left }}
          onMouseEnter={moveButton}
        >
          Start
        </button>
      </a>
    </div>
  );
}

export default CustomButton;