import MainCard from "../shared/MainCard";
import TabButton from "./TabButton";

export default () => (
  <div className="flex gap-2 flex-wrap w-full">
    <MainCard className="!p-2 justify-center !rounded-full border border-[#FF951D] cursor-pointer !m-0">
      Products
    </MainCard>

    <TabButton className="!p-2">Articles</TabButton>

    <TabButton className="!p-2">Reviews</TabButton>
  </div>
);
