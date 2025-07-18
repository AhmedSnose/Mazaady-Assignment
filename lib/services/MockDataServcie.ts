import type { Category, Property } from "@/types/CategoryType"

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Electronics",
    children: [
      { id: 11, name: "Smartphones" },
      { id: 12, name: "Laptops" },
      { id: 13, name: "Tablets" },
      { id: 14, name: "Smart Watches" },
      { id: 15, name: "Headphones" },
    ],
  },
  {
    id: 2,
    name: "Clothing",
    children: [
      { id: 21, name: "Men's Clothing" },
      { id: 22, name: "Women's Clothing" },
      { id: 23, name: "Kids' Clothing" },
      { id: 24, name: "Shoes" },
      { id: 25, name: "Accessories" },
    ],
  },
  {
    id: 3,
    name: "Home & Garden",
    children: [
      { id: 31, name: "Furniture" },
      { id: 32, name: "Kitchen" },
      { id: 33, name: "Garden Tools" },
      { id: 34, name: "Home Decor" },
      { id: 35, name: "Appliances" },
    ],
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    children: [
      { id: 41, name: "Football" },
      { id: 42, name: "Basketball" },
      { id: 43, name: "Tennis" },
      { id: 44, name: "Camping" },
      { id: 45, name: "Fitness" },
    ],
  },
  {
    id: 5,
    name: "Books & Media",
    children: [
      { id: 51, name: "Fiction Books" },
      { id: 52, name: "Non-Fiction Books" },
      { id: 53, name: "Movies" },
      { id: 54, name: "Music" },
      { id: 55, name: "Games" },
    ],
  },
]

export const MOCK_PROPERTIES: Record<string, Property[]> = {
  // Smartphones (11)
  "11": [
    {
      id: 1,
      name: "Brand",
      options: [
        { id: 101, name: "Apple" },
        { id: 102, name: "Samsung" },
        { id: 103, name: "Google" },
        { id: 104, name: "OnePlus" },
        { id: 105, name: "Xiaomi" },
        { id: 106, name: "Huawei" },
      ],
    },
    {
      id: 2,
      name: "Storage",
      options: [
        { id: 201, name: "64GB" },
        { id: 202, name: "128GB" },
        { id: 203, name: "256GB" },
        { id: 204, name: "512GB" },
        { id: 205, name: "1TB" },
      ],
    },
    {
      id: 3,
      name: "Color",
      options: [
        { id: 301, name: "Black" },
        { id: 302, name: "White" },
        { id: 303, name: "Blue" },
        { id: 304, name: "Red" },
        { id: 305, name: "Gold" },
        { id: 306, name: "Silver" },
      ],
    },
    {
      id: 4,
      name: "Condition",
      options: [
        { id: 401, name: "New" },
        { id: 402, name: "Like New" },
        { id: 403, name: "Good" },
        { id: 404, name: "Fair" },
      ],
    },
  ],

  // Laptops (12)
  "12": [
    {
      id: 5,
      name: "Brand",
      options: [
        { id: 501, name: "Apple" },
        { id: 502, name: "Dell" },
        { id: 503, name: "HP" },
        { id: 504, name: "Lenovo" },
        { id: 505, name: "ASUS" },
        { id: 506, name: "Acer" },
      ],
    },
    {
      id: 6,
      name: "RAM",
      options: [
        { id: 601, name: "4GB" },
        { id: 602, name: "8GB" },
        { id: 603, name: "16GB" },
        { id: 604, name: "32GB" },
        { id: 605, name: "64GB" },
      ],
    },
    {
      id: 7,
      name: "Screen Size",
      options: [
        { id: 701, name: "11 inch" },
        { id: 702, name: "13 inch" },
        { id: 703, name: "15 inch" },
        { id: 704, name: "17 inch" },
      ],
    },
    {
      id: 8,
      name: "Processor",
      options: [
        { id: 801, name: "Intel i3" },
        { id: 802, name: "Intel i5" },
        { id: 803, name: "Intel i7" },
        { id: 804, name: "Intel i9" },
        { id: 805, name: "AMD Ryzen 5" },
        { id: 806, name: "AMD Ryzen 7" },
        { id: 807, name: "Apple M1" },
        { id: 808, name: "Apple M2" },
      ],
    },
  ],

  // Men's Clothing (21)
  "21": [
    {
      id: 9,
      name: "Size",
      options: [
        { id: 901, name: "XS" },
        { id: 902, name: "S" },
        { id: 903, name: "M" },
        { id: 904, name: "L" },
        { id: 905, name: "XL" },
        { id: 906, name: "XXL" },
      ],
    },
    {
      id: 10,
      name: "Color",
      options: [
        { id: 1001, name: "Black" },
        { id: 1002, name: "White" },
        { id: 1003, name: "Blue" },
        { id: 1004, name: "Red" },
        { id: 1005, name: "Green" },
        { id: 1006, name: "Gray" },
      ],
    },
    {
      id: 11,
      name: "Material",
      options: [
        { id: 1101, name: "Cotton" },
        { id: 1102, name: "Polyester" },
        { id: 1103, name: "Wool" },
        { id: 1104, name: "Denim" },
        { id: 1105, name: "Leather" },
      ],
    },
  ],

  // Women's Clothing (22)
  "22": [
    {
      id: 12,
      name: "Size",
      options: [
        { id: 1201, name: "XS" },
        { id: 1202, name: "S" },
        { id: 1203, name: "M" },
        { id: 1204, name: "L" },
        { id: 1205, name: "XL" },
        { id: 1206, name: "XXL" },
      ],
    },
    {
      id: 13,
      name: "Style",
      options: [
        { id: 1301, name: "Casual" },
        { id: 1302, name: "Formal" },
        { id: 1303, name: "Sport" },
        { id: 1304, name: "Evening" },
        { id: 1305, name: "Business" },
      ],
    },
    {
      id: 14,
      name: "Season",
      options: [
        { id: 1401, name: "Spring" },
        { id: 1402, name: "Summer" },
        { id: 1403, name: "Fall" },
        { id: 1404, name: "Winter" },
        { id: 1405, name: "All Season" },
      ],
    },
  ],

  // Furniture (31)
  "31": [
    {
      id: 15,
      name: "Material",
      options: [
        { id: 1501, name: "Wood" },
        { id: 1502, name: "Metal" },
        { id: 1503, name: "Plastic" },
        { id: 1504, name: "Glass" },
        { id: 1505, name: "Fabric" },
        { id: 1506, name: "Leather" },
      ],
    },
    {
      id: 16,
      name: "Room",
      options: [
        { id: 1601, name: "Living Room" },
        { id: 1602, name: "Bedroom" },
        { id: 1603, name: "Dining Room" },
        { id: 1604, name: "Office" },
        { id: 1605, name: "Kitchen" },
        { id: 1606, name: "Bathroom" },
      ],
    },
    {
      id: 17,
      name: "Condition",
      options: [
        { id: 1701, name: "New" },
        { id: 1702, name: "Like New" },
        { id: 1703, name: "Good" },
        { id: 1704, name: "Fair" },
        { id: 1705, name: "Needs Repair" },
      ],
    },
  ],

  // Football (41)
  "41": [
    {
      id: 18,
      name: "Equipment Type",
      options: [
        { id: 1801, name: "Ball" },
        { id: 1802, name: "Cleats" },
        { id: 1803, name: "Jersey" },
        { id: 1804, name: "Helmet" },
        { id: 1805, name: "Pads" },
      ],
    },
    {
      id: 19,
      name: "Size",
      options: [
        { id: 1901, name: "Youth" },
        { id: 1902, name: "Adult Small" },
        { id: 1903, name: "Adult Medium" },
        { id: 1904, name: "Adult Large" },
        { id: 1905, name: "Adult XL" },
      ],
    },
  ],

  // Default properties for categories without specific properties
  "13": [], // Tablets
  "14": [], // Smart Watches
  "15": [], // Headphones
  "23": [], // Kids' Clothing
  "24": [], // Shoes
  "25": [], // Accessories
  "32": [], // Kitchen
  "33": [], // Garden Tools
  "34": [], // Home Decor
  "35": [], // Appliances
  "42": [], // Basketball
  "43": [], // Tennis
  "44": [], // Camping
  "45": [], // Fitness
  "51": [], // Fiction Books
  "52": [], // Non-Fiction Books
  "53": [], // Movies
  "54": [], // Music
  "55": [], // Games
}
