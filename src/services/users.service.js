// In-memory store (replace with DB later)
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const getAll = () => users;

const getById = (id) => {
  const user = users.find(u => u.id === id);
  if (!user) {
    const err = new Error('User not found');
    err.statusCode = 404;
    throw err;
  }
  return user;
};

const create = ({ name }) => {
  if (!name || typeof name !== 'string') {
    const err = new Error('Name is required');
    err.statusCode = 400;
    throw err;
  }
  const newUser = { id: users.length ? users[users.length - 1].id + 1 : 1, name };
  users.push(newUser);
  return newUser;
};

const update = (id, { name }) => {
  const user = getById(id);
  if (!name || typeof name !== 'string') {
    const err = new Error('Name is required');
    err.statusCode = 400;
    throw err;
  }
  user.name = name;
  return user;
};

const remove = (id) => {
  // ensure exists
  getById(id);
  users = users.filter(u => u.id !== id);
};

module.exports = { getAll, getById, create, update, remove };
