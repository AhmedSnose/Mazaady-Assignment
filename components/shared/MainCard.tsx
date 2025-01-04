import { ReactNode } from "react";

export default ({ children,className }: { children: ReactNode,className?:string }) => {
  return (
    <div className={`flex flex-col items-center p-3 bg-[#FFF5E9] rounded-xl mb-2 text-xs text-main-color font-semibold ${className}`}>
      {children}
    </div>
  );
};
