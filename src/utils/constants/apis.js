import axios from "axios";

const token = localStorage.getItem("token");

function getConfig() {
  const config = {
    headers: {
      authorization: token ? token : "",
      "content-type": "application/json",
    },
  };
  return config;
}

const httpConfig = "/api";

// Signup
export function postSignUpDetailsApi(data) {
  const URL = httpConfig + "/auth/signup";
  return axios.post(URL, data, getConfig());
}

// Login
export function postLoginDetailsApi(data) {
  const URL = httpConfig + "/auth/login";
  return axios.post(URL, data, getConfig());
}

export function getAllProducts() {
  const URL = httpConfig + "/products";
  return axios.get(URL, getConfig());
}

export function getAllCategories() {
  const URL = httpConfig + "/categories";
  return axios.get(URL, getConfig());
}

export function getAllWishlistItem() {
  const URL = httpConfig + "/user/wishlist";
  return axios.get(URL, getConfig());
}

export function deleteWishlistItemApi(id) {
  const URL = httpConfig + "/user/wishlist/" + id;
  return axios.delete(URL, getConfig());
}

export function postWishlistApi(data) {
  const URL = httpConfig + "/user/wishlist";
  return axios.post(URL, data, getConfig());
}

export function getAllCartItemsApi() {
  const URL = httpConfig + "/user/cart";
  return axios.get(URL, getConfig());
}
export function deleteCartItemApi(id) {
  const URL = httpConfig + "/user/cart/" + id;
  return axios.delete(URL, getConfig());
}

export function postCartItemApi(data) {
  const URL = httpConfig + "/user/cart";
  return axios.post(URL, data, getConfig());
}

export function postCartItemQtyApi(id, type) {
  const URL = httpConfig + "/user/cart/" + id;
  return axios.post(URL, { action: { type } }, getConfig());
}
