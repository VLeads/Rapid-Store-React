import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: {
      altText: "store-product",
      url: "https://www.linkpicture.com/q/headphone.jpeg",
    },
    heading: "ASUS ROG St. alpha product line series sample item ...",
    price: {
      ourPrice: "₹86,990",
      originalPrice: "₹1,06,990",
    },
    badge: { type: "blue", tagline: "LATEST" },
    ratings: 5,
    isInWishList: false,
    categoryName: "earphones",
    popularPurchase: true,
  },
  {
    _id: uuid(),
    img: {
      altText: "store-product",
      url: "https://www.linkpicture.com/q/laptop_2.png",
    },
    heading: "ASUS ROG St. alpha product line series sample item ...",
    price: {
      ourPrice: "₹9,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "", tagline: "" },
    ratings: 3.7,
    isInWishList: false,
    categoryName: "laptops",
  },
  {
    _id: uuid(),
    img: {
      altText: "store-product",
      url: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
    },
    heading: "ASUS ROG St. alpha product series sample item...",
    price: {
      ourPrice: "₹3,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "", tagline: "" },
    ratings: 4.2,
    isInWishList: false,
    categoryName: "mobiles",
  },

  {
    _id: uuid(),
    img: {
      altText: "store-product",
      url: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    heading: "ASUS ROG St. alpha product series sample item...",
    price: {
      ourPrice: "₹10,000",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "green", tagline: "TRENDING" },
    ratings: 4,
    isInWishList: false,
    categoryName: "cameras",
  },
  {
    _id: uuid(),
    img: {
      altText: "store-product",
      url: "https://www.linkpicture.com/q/game_2.jpg",
    },
    heading: "ASUS ROG St. alpha product series sample item...",
    price: {
      ourPrice: "₹6,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "", tagline: "" },
    ratings: 4,
    isInWishList: false,
    categoryName: "games",
  },
  {
    _id: uuid(),
    img: {
      altText: "store-product",
      url: "https://www.linkpicture.com/q/headphone.jpeg",
    },
    heading: "ASUS ROG St. alpha product series sample item...",
    price: {
      ourPrice: "₹96,000",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "", tagline: "" },
    ratings: 2.9,
    isInWishList: false,
    categoryName: "earphones",
  },
  {
    _id: uuid(),
    img: {
      altText: "store-product",
      url: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80",
    },
    heading: "ASUS ROG St. alpha product series sample item...",
    price: {
      ourPrice: "₹86,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "yellow", tagline: "BEST SELLER" },
    ratings: 4.5,
    isInWishList: false,
    categoryName: "laptops",
  },
  {
    _id: uuid(),
    img: {
      altText: "store-product",
      url: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    heading: "ASUS ROG St. alpha product series sample item...",
    price: {
      ourPrice: "₹26,990",
      originalPrice: "₹1,06,990",
    },
    badge: { type: "blue", tagline: "LATEST" },
    ratings: 5,
    isInWishList: false,
    categoryName: "cameras",
  },
  {
    _id: uuid(),
    img: {
      altText: "store-product",
      url: "https://images.unsplash.com/photo-1561928601-2be5d49de6eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    heading: "ASUS ROG St. alpha product series sample item...",
    price: {
      ourPrice: "₹9,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "", tagline: "" },
    ratings: 4.2,
    isInWishList: false,
    categoryName: "mobiles",
  },
  {
    _id: uuid(),
    img: {
      altText: "store-product",
      url: "https://images.unsplash.com/photo-1628210889224-53b2e3082fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    heading: "ASUS ROG St. alpha product series sample item...",
    price: {
      ourPrice: "₹12,990",
      originalPrice: "₹1,36,990",
    },
    badge: { type: "", tagline: "" },
    ratings: 4.2,
    isInWishList: false,
    categoryName: "earphones",
  },
];
