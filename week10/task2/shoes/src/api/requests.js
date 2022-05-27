import { BASE_URL } from "../config/config";

export const getProductsRequest = new Request(BASE_URL + "/products", {
  method: "GET",
});

export const getProductRequest = new Request(BASE_URL + "/products", {
  method: "GET",
});
export const createProductRequest = new Request(BASE_URL + "/products", {
  method: "POST",
});

export const updateProductRequest = new Request(BASE_URL + "/products", {
  method: "PUT",
});

export const deleteProductRequest = new Request(BASE_URL + "/products", {
  method: "DELETE",
});
