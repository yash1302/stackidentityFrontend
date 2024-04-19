import React from 'react';

const Toast = ({ message, type = 'error' }) => {
  const toastClasses = {
    error: 'bg-red-500 text-white',
    success: 'bg-green-500 text-white',
  };

  return (
    <div className={`fixed bottom-4 right-4 px-4 py-3 rounded-md ${toastClasses[type]}`}>
      <p className="font-bold">{message}</p>
    </div>
  );
};

export default Toast;