import { ProductType } from "@/types/ProductType";
const products: ProductType[] = [
  {
    id: 1,
    name: "Six-Piece Clothing Set (Blouse - Pants - Hat And ...",
    price: 1000,
    image: "https://picsum.photos/200/300?random=1",
    type: "Live Auction",
    countdown: { days: 2, hours: 10, minutes: 50 },
  },
  {
    id: 2,
    name: "Six-Piece Clothing Set (Blouse - Pants - Hat And ...",
    price: 1000,
    image: "https://picsum.photos/200/300?random=2",
    type: "Live Auction",
    countdown: { days: 2, hours: 10, minutes: 50 },
  },
  {
    id: 3,
    name: "Jeep Car, New, Used For Only One Time",
    price: 1000,
    image: "https://picsum.photos/200/300?random=3",
    type: "Hot Sale",
    countdown: { days: 2, hours: 10, minutes: 50 },
    isFavorite: true,
  },
];

export const getAllProducts = () => {
  return products;
};
