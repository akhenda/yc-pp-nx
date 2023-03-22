import Cart from './cart';

describe('Cart', () => {
  const code = 123;
  const street = 'AAA';
  const province = 'BBB';
  const city = 'CCC';
  const address = { city, code, province, street };
  const item1 = { name: 'PSVR 2', price: 549 };
  const item2 = { name: 'PSVR 2 Bundle', price: 599 };

  it('should be empty when initialized', () => {
    const cart = new Cart(address);

    expect(cart.address).toEqual(address);
    expect(cart.items).toHaveLength(0);
    expect(cart.total).toEqual(0);
  });

  it('should not be valid when initialized', async () => {
    const cart = new Cart(address);

    expect(cart.isValid()).toEqual(false);
  });

  it('should be valid when an item is added', async () => {
    const cart = new Cart(address);

    await cart.addItem(item1);

    expect(cart.total).toBe(549);
    expect(cart.isValid()).toEqual(true);
  });

  it('should persist the cart', async () => {
    const userId = 'jack-oneall';
    const cart = new Cart(address, userId);
    const response = await cart.addItem(item2);

    expect(cart.total).toBe(599);
    expect(response?.userId).toBe(userId);
  });
});
