import {
  getProductsRequest,
  getProductRequest,
  createProductRequest,
  updateProductRequest,
} from "./requests";

export const hendlerGetProducts = async () => {
  try {
    const res = await fetch(getProductsRequest);
    const products = await res.json();

    return products;
  } catch (error) {
    console.log(error);
  }
};

export const hendlerGetProduct = async (id) => {
  const res = await fetch(getProductRequest.url + "/", getProductRequest);

  return await res.json();
};

export const hendlerCreateProduct = async (body) => {
  createProductRequest.body = JSON.stringify();
  const res = await fetch(createProductRequest.url, createProductRequest);

  return await res.json();
};

export const hendlerUpdateProduct = async (id, body) => {
  createProductRequest.body = JSON.stringify();
  const res = await fetch(updateProductRequest.url + "/", updateProductRequest);

  return await res.json();
};
