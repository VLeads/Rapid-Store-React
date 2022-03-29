import { v4 as uuidv4 } from "uuid";

export const homepageProduct = [
  {
    _id: uuidv4(),
    img: {
      altText: "homepage-product",
      url: "https://www.linkpicture.com/q/laptop_2.png",
    },
    heading: "ASUS ROG St. alpha...",
    price: {
      ourPrice: "₹96,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "green", tagline: "TRENDING" },
    ratings: "4+",
  },
  {
    _id: uuidv4(),
    img: {
      altText: "homepage-product",
      url: "https://www.linkpicture.com/q/game_2.jpg",
    },
    heading: "ASUS ROG St. alpha...",
    price: {
      ourPrice: "₹96,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "red", tagline: "SALE" },
    ratings: "5",
  },
  {
    _id: uuidv4(),
    img: {
      altText: "homepage-product",
      url: "https://www.linkpicture.com/q/headphone.jpeg",
    },
    heading: "ASUS ROG St. alpha...",
    price: {
      ourPrice: "₹96,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "blue", tagline: "LATEST" },
    ratings: "4",
  },
  {
    _id: uuidv4(),
    img: {
      altText: "homepage-product",
      url: "https://www.linkpicture.com/q/laptop_2.png",
    },
    heading: "ASUS ROG St. alpha product series...",
    price: {
      ourPrice: "₹96,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "green", tagline: "TRENDING" },
    ratings: "3+",
  },
  {
    _id: uuidv4(),
    img: {
      altText: "homepage-product",
      url: "https://www.linkpicture.com/q/game_2.jpg",
    },
    heading: "ASUS ROG St. alpha product series...",
    price: {
      ourPrice: "₹96,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "yellow", tagline: "BEST SELLER" },
    ratings: "5",
  },
];
