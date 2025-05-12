export interface Product {
  productName: string;
  description: string;
  importingPrice: number;
  sellingPrice: number;
  stock: number;
  category: string;
  imageURL: string;
}

export enum Category {
  GAMING_MOUSE = "GAMING_MOUSE",
  KEYBOARD = "KEYBOARD",
  LAPTOP = "LAPTOP",
  SCREEN = "SCREEN",
  SSD = "SSD",
  LAPTOP_GAMING = "LAPTOP_GAMING",
  LAPTOP_OFFICE = "LAPTOP_OFFICE",
}

export interface ShoppingCartDTO {
  items: ShoppingCartItemDTO[];
  totalPrice: number;
}

export interface ShoppingCartItemDTO {
  product: ProductDTO;
  productQuantity: number;
}

export interface ProductDTO {
  productId: number;
  productName: string;
  description: string;
  sellingPrice: string;
  category: string;
  imageUrl: string;
}
