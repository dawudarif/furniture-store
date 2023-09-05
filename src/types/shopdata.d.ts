interface ShopData {
  id: number;
  title: string;
  img: string[];
  desc: string;
  type: string;
  price: string;
  texture: string;
  weight: string;
  dimensions: string;
}

interface CartData {
  id: number;
  title: string;
  img: string;
  price: string;
  quantity: number;
}
