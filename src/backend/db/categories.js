import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    img: {
      altText: "Laptops/PCs",
      url: "https://i.pinimg.com/736x/10/06/43/10064388b210a59cb091dd6ef7210040.jpg",
    },
    name: "Laptops/PCs",
  },
  {
    _id: uuid(),
    img: {
      altText: "Earphone/Headphone",
      url: "https://images.unsplash.com/photo-1575975243243-5462a2054ed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    name: "Earphone/Headphone",
  },
  {
    _id: uuid(),
    img: {
      altText: "Gaming",
      url: "https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1209&q=80",
    },
    name: "Gaming",
  },
  {
    _id: uuid(),
    img: {
      altText: "Cameras",
      url: "https://cdn.pixabay.com/photo/2017/04/22/10/44/camera-2251051_960_720.jpg",
    },
    name: "Cameras",
  },
  {
    _id: uuid(),
    img: {
      altText: "Mobiles",
      url: "https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2022/02/samsung-galaxy-s22-plus-hands-on-review-2.jpg?itok=X2A8QwgJ",
    },
    name: "Mobiles",
  },
];
