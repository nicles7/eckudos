import React from 'react';

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.586 2.586a2 2 0 012.828 0l.001.001a2 2 0 010 2.828l-1.06 1.06a1 1 0 00.354 1.646l1.414 1.414a1 1 0 01.293 1.707l-.001.001a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 00-1.646-.354l-1.06-1.06a2 2 0 010-2.828l-.001-.001a2 2 0 012.828 0zm-8 8a2 2 0 012.828 0l.001.001a2 2 0 010 2.828l-1.06 1.06a1 1 0 00.354 1.646l1.414 1.414a1 1 0 01.293 1.707l-.001.001a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 00-1.646-.354l-1.06-1.06a2 2 0 010-2.828l-.001-.001a2 2 0 012.828 0z" clipRule="evenodd" />
    <path d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zM3 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM15 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
  </svg>
);

export default SparklesIcon;
