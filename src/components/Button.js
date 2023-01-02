import React from 'react';

export const Button = ({ children }) => {
  return (
    <button className="w-[160px] h-[40px] border-solid border-2 rounded-3xl border-accent text-white uppercase text-xs hover:bg-accent">
      {children}
    </button>
  );
};

export default Button;
