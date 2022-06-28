export interface Products {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  quantity: number;
}

export interface Menu {
    id: number,
    menu_name: string,
    menu_description: string,
    menu_size: number,
    imageUrl: string,
    cost: string,
}

export interface Stats {
  menus: number,
  products: number
}