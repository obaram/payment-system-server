export interface Product {
  id: number;
  productName: string;
  productPrice: number;
}

export interface Shoe extends Product {
  productColor: string;
  productSize: string;
}
