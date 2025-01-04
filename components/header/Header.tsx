import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 py-2">
        {/* Desktop Header */}
        <DesktopHeader />

        {/* Mobile Header */}
        <MobileHeader />
      </div>
    </header>
  );
}
