import { useState } from 'react';

const BlurContainer = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleLinkClick = () => {
    setIsOverlayVisible(true);
  };

  return (
    <div className="relative backdrop-blur">
      {/* Blurred component */}
      <div className="bg-gray-200 p-4">Blurred Component Content</div>

      {/* Components displayed on top */}
      {isOverlayVisible && (
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
          Overlay Components Content
        </div>
      )}

      {/* Link to reveal overlay components */}
      <a
        href="#"
        className="absolute bottom-0 right-0 p-4 text-blue-500"
        onClick={handleLinkClick}
      >
        Click to Reveal Overlay
      </a>
    </div>
  );
};

export default BlurContainer;
