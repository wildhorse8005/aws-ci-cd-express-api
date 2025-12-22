const usersService = require('../services/users.service');
const { ok, created } = require('../utils/apiResponse');

const getAll = (req, res) => {
  const users = usersService.getAll();
  return ok(res, users);
};

const getById = (req, res) => {
  const id = Number(req.params.id);
  const user = usersService.getById(id);
  return ok(res, user);
};

const create = (req, res) => {
  const { name } = req.body;
  const newUser = usersService.create({ name });
  return created(res, newUser);
};

const update = (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  const updated = usersService.update(id, { name });
  return ok(res, updated);
};

const remove = (req, res) => {
  const id = Number(req.params.id);
  usersService.remove(id);
  return res.status(204).send();
};

module.exports = { getAll, getById, create, update, remove };
