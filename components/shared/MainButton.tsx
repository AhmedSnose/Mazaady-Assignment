import { Component, ReactNode } from "react";

export default ({ children , className }:{children:ReactNode,className?:string}) => {
  return (
    <button className={`w-full py-2.5 rounded-full bg-gradient-to-r from-[#D20653] to-[#FF951D] text-white text-sm  ${className}`}>
      {children}
    </button>
  );
};
