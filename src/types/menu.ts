export interface MenuItem {
  name: string;
  description: string;
  priceM?: string;
  priceG?: string;
  price?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}
