const { inMemory: inMemoryDb } = import('../../database');
const { v4: uuidv4 } = import('uuid');

export default {
  add: async (order) => {
    if (!order.id) {
      order.id = uuidv4();
    }
    inMemoryDb.orders.push(order);
    return order;
  },
  update: async (order) => {
    const index = inMemoryDb.orders.findIndex((item) => item.id === order.id);
    if (index > 0) {
      inMemoryDb.orders[index] = order;
      return inMemoryDb.orders[index];
    }
    return null;
  },
  delete: async (order) => {
    const index = inMemoryDb.orders.findIndex((item) => item.id === order.id);
    if (index > 0) {
      inMemoryDb.orders.splice(index, 0);
      return order;
    }
    return null;
  },
  getById: async (order) => {
    return inMemoryDb.orders.find((item) => item.id === order.id);
  },
};
