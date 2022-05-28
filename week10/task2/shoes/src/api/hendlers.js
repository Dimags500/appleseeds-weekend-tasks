import {
  getProductsRequest,
  getProductRequest,
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
} from "./requests";

import axios from "axios";

export const hendlerGetProducts = async () => {
  try {
    const res = await fetch(getProductsRequest);
    const products = await res.json();

    return products;
  } catch (error) {
    alert(error);
  }
};

export const hendlerGetProduct = async (id) => {
  const res = await fetch(getProductRequest.url + "/" + id, getProductRequest);
  return await res.json();
};

export const hendlerCreateProduct = async (body) => {
  return await axios.post(createProductRequest.url, body);
};

export const hendlerUpdateProduct = async (id, body) => {
  return await axios.put(updateProductRequest.url + "/" + id, body);
};

export const hendlerDeleteProduct = async (id) => {
  try {
    const res = await fetch(
      deleteProductRequest.url + "/" + id,
      deleteProductRequest
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
