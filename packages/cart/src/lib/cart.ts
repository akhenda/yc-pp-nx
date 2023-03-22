// FIXME: Disabling this for now. Weird issue with nx package scoping
// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from 'cross-fetch';

import { IAddress, ICart, ICartRequest, ICartResponse, IItem } from './cart.type';

class Cart implements ICart {
  address: IAddress;

  items: IItem[] = [];

  total = 0;

  userId: string;

  constructor(address: IAddress, userId = 'somerandomstuff') {
    this.address = address;
    this.userId = userId;
  }

  isValid() {
    // return !!(this.address.city && this.address.code && this.address.province && this.address.street && this.total > 0);
    return Object.values(this.address).every((e) => e) && this.total > 0;
  }

  addItem(item: IItem) {
    this.items.push(item);
    this.total = this.items.reduce((sum, e) => sum + e.price, this.total);

    return this.persist(item);
  }

  private async persist(item: IItem) {
    try {
      const res = await fetch('https://rlmt5u5fqh.execute-api.eu-west-2.amazonaws.com/item', {
        body: JSON.stringify({
          userId: this.userId,
          ...item,
        } as ICartRequest),
        method: 'POST',
      });

      const data = (await res.json()) as ICartResponse;

      return data;
    } catch (error) {
      // TODO: remove console or set up bable to auto remove in prod
      console.error(error);

      // push log to an error service
      return null;
    }
  }
}

export default Cart;
