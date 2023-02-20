const { inMemory: inMemoryDb } = import('../../database');
const { v4: uuidv4 } = import('uuid');

export default {
  add: async (user) => {
    if (!user.id) {
      user.id = uuidv4();
    }
    inMemoryDb.users.push(user);
    return user;
  },
  update: async (user) => {
    const index = inMemoryDb.users.findIndex((item) => item.id === user.id);
    if (index > 0) {
      inMemoryDb.users[index] = user;
      return inMemoryDb.users[index];
    }
    return null;
  },
  delete: async (user) => {
    const index = inMemoryDb.users.findIndex((item) => item.id === user.id);
    if (index > 0) {
      inMemoryDb.users.splice(index, 0);
      return user;
    }
    return null;
  },
  getById: async (user) => {
    return inMemoryDb.users.find((item) => item.id === id);
  },
};
