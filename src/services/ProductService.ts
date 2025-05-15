import api from "./api";
import { Product, Category } from "@/models/ProductInterface";

export const getProducts = (page: number, size: number) => {
  return api.get("/products", {
    params: {
      page: page,
      size: size,
    },
  });
};

export const countProductNumber = () => {
  return api.get("/products/size");
};

export const getProductsByKeyword = (
  page: number,
  size: number,
  keyword: string
) => {
  return api.get("/products/keyword", {
    params: {
      page: page,
      size: size,
      keyword,
    },
  });
};

export const getProductByCategory = (
  page: number,
  size: number,
  category: Category
) => {
  return api.get("/products/category", {
    params: {
      page: page,
      size: size,
      category,
    },
  });
};

export const deleteProduct = (productId: number) => {
  return api.delete("/products", {
    params: {
      productId,
    },
  });
};

export const updateProductPrice = (sellingPrice: number, productId: number) => {
  return api.patch("/products", null, {
    params: {
      sellingPrice,
      productId,
    },
  });
};

export const save = (product: Product) => {
  return api.post("/products", {
    ...product,
  });
};
