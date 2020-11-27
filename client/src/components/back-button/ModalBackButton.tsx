import React from 'react';

interface ModalBackButton {
  onClick?: () => void;
}

const ModalBackButton: React.FC<ModalBackButton> = ({ onClick }: ModalBackButton) => {
  return (
    <svg onClick={onClick} width="32" height="32" viewBox="0 0 32 32" fill="#000000" data-svg-content="true">
      <g>
        <path d="M 4.292,15.708l 6,6c 0.39,0.39, 1.024,0.39, 1.414,0c 0.39-0.39, 0.39-1.024,0-1.414L 7.414,16L 22,16 c 4,0, 6,3.692, 6,7c0,0.552, 0.448,1, 1,1s 1-0.448, 1-1C 30,18.588, 28,14, 22,14L 7.414,14 l 4.292-4.292 c 0.39-0.39, 0.39-1.024,0-1.414c-0.39-0.39-1.024-0.39-1.414,0l-6,6C 3.902,14.684, 3.902,15.316, 4.292,15.708z"></path>
      </g>
    </svg>
  );
};

export default ModalBackButton;
