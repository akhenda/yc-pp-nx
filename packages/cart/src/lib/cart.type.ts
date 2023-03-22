export interface IAddress {
  street: string;
  code: number;
  province: string;
  city: string;
}

export interface IItem {
  name: string;
  price: number;
}

export interface ICart {
  items: IItem[];
  address?: IAddress;
  total: number;

  isValid: () => boolean;
  addItem: (item: IItem) => void;
}

export interface ICartRequest {
  userId: 'string';
  name: 'string';
  price: number;
}

export interface ICartResponse {
  userId: 'string';
  cartItemId: 'string';
  createdAt: number;
}
