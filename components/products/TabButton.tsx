import { ReactNode } from "react";

export default ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button className={`p-4 rounded-full text-sm border border-gray-200 text-gray-400 ${className}`}>
      {children}
    </button>
  );
};
