import api from "./api";
import { Product } from "@/models/ProductInterface";

export enum Category {
  GAMING_MOUSE = "GAMING_MOUSE",
  KEYBOARD = "KEYBOARD",
  LAPTOP = "LAPTOP",
  SCREEN = "SCREEN",
  SSD = "SSD",
  LAPTOP_GAMING = "LAPTOP_GAMING",
  LAPTOP_OFFICE = "LAPTOP_OFFICE",
}

export const getProducts = (page: number, size: number) => {
  return api.get("/products", {
    params: {
      page: page,
      size: size,
    },
  });
};

export const getProductsByKeyword = (
  keyword: string,
  page: number,
  size: number
) => {
  return api.get("/products/keyword", {
    params: {
      keyword,
      page: page,
      size: size,
    },
  });
};

export const countNumberItems = () => {
  return api.get("/products/size");
};

export const countNumberItemsByCategory = (category: Category) => {
  return api.get("/products/category/size", {
    params: {
      category,
    },
  });
};
export const getProductByCategory = (
  page: number,
  size: number,
  productCategory: Category
) => {
  return api.get("/products/category", {
    params: {
      page: page,
      size: size,
      productCategory,
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
