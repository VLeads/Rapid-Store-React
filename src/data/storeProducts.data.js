import { v4 as uuidv4 } from "uuid";

export const storeProducts = [
  {
    _id: uuidv4(),
    img: {
      altText: "store-product",
      url: "https://www.linkpicture.com/q/headphone.jpeg",
    },
    heading: "ASUS ROG St. alpha...",
    price: {
      ourPrice: "₹86,990",
      originalPrice: "₹1,06,990",
    },
    badge: { type: "blue", tagline: "LATEST" },
    ratings: 5,
    categoryName: "earphones",
  },
  {
    _id: uuidv4(),
    img: {
      altText: "store-product",
      url: "https://www.linkpicture.com/q/laptop_2.png",
    },
    heading: "ASUS ROG St. alpha series...",
    price: {
      ourPrice: "₹9,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "", tagline: "" },
    ratings: 3.7,
    categoryName: "laptops",
  },
  {
    _id: uuidv4(),
    img: {
      altText: "store-product",
      url: "https://www.linkpicture.com/q/game_2.jpg",
    },
    heading: "ASUS ROG St. alpha...",
    price: {
      ourPrice: "₹3,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "", tagline: "" },
    ratings: 4.2,
    categoryName: "games",
  },

  {
    _id: uuidv4(),
    img: {
      altText: "store-product",
      url: "https://www.linkpicture.com/q/laptop_2.png",
    },
    heading: "ASUS ROG St. alpha...",
    price: {
      ourPrice: "₹10,000",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "green", tagline: "TRENDING" },
    ratings: 4,
    categoryName: "cameras",
  },
  {
    _id: uuidv4(),
    img: {
      altText: "store-product",
      url: "https://www.linkpicture.com/q/game_2.jpg",
    },
    heading: "ASUS ROG St. alpha...",
    price: {
      ourPrice: "₹6,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "", tagline: "" },
    ratings: 4,
    categoryName: "games",
  },
  {
    _id: uuidv4(),
    img: {
      altText: "store-product",
      url: "https://www.linkpicture.com/q/game_2.jpg",
    },
    heading: "ASUS ROG St. alpha...",
    price: {
      ourPrice: "₹96,000",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "", tagline: "" },
    ratings: 2.9,
    categoryName: "earphones",
  },
  {
    _id: uuidv4(),
    img: {
      altText: "store-product",
      url: "https://www.linkpicture.com/q/game_2.jpg",
    },
    heading: "ASUS ROG St. alpha...",
    price: {
      ourPrice: "₹56,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "yellow", tagline: "BEST SELLER" },
    ratings: 4.5,
    categoryName: "earphones",
  },
];
