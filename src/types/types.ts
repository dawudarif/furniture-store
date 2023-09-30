export interface ShopDataObj {
  id: number;
  title: string;
  img: Array<string>;
  desc: string;
  type: string;
  price: string;
  texture: string;
  weight: string;
  dimensions: string;
}

export interface CartData {
  id: number;
  title: string;
  img: string;
  price: string;
  quantity: number;
}
