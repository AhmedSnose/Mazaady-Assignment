export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: "Live Auction" | "Hot Sale";
  countdown: { days: number; hours: number; minutes: number };
  isFavorite?: boolean;
};
