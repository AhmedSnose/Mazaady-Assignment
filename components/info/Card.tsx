import { ReactElement } from "react";

export default ({
  title,
  number,
  icon,
}: {
  title?: string | ReactElement;
  number?: number;
  icon?: ReactElement;
}) => (
  <div className="flex flex-col items-center p-3 bg-[#FFF5E9] rounded-xl">
    <div className="flex items-center gap-1 mb-1">
      {icon}
      {number ? <span className="font-semibold text-sm">{number}</span> : ""}
    </div>
    <span className="text-xs text-main-color">{title}</span>
  </div>
);
