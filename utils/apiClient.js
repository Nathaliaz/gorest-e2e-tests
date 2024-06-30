const supertest = require('supertest');

const api = supertest('https://gorest.co.in/public/v2');

require('dotenv').config()
const token = process.env.TOKEN_GOREST;

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

const createUser = (userData) => api.post('/users').set(headers).send(userData);
const getUser = (userId) => api.get(`/users/${userId}`).set(headers);
const updateUser = (userId, userData) => api.put(`/users/${userId}`).set(headers).send(userData);
const deleteUser = (userId) => api.delete(`/users/${userId}`).set(headers);

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
