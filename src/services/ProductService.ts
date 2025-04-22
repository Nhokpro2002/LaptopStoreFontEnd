import api from "@/services/api";

export interface Product {
  productName: string;
  description: string;
  importingPrice: number;
  sellingPrice: number;
  stock: number;
  category: string;
  imageURL: string;
}

export const getProducts = (page: number, size: number) => {
  return api.get("/products", {
    params: {
      page: page,
      size: size,
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
