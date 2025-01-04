import InfoSection from "../components/info/InfoSection";
import ProductsSection from "../components/products/ProductsSection";
import QRCodeSection from "../components/QRCode/QRCodeSection";

export default function Home() {
  return (
    <div className="mx-auto px-4 py-6 grid gap-6 grid-cols-1 md:grid-cols-[1fr_2fr]">
      <div className="space-y-3">
        <InfoSection />
        <QRCodeSection />
      </div>
      <div className="">
        <ProductsSection />
      </div>
    </div>
  );
}
