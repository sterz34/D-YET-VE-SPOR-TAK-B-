// Simple in-memory store for meals and exercises
const { v4: uuidv4 } = require('uuid');

const store = {
  meals: [],
  exercises: []
};

function list(kind) {
  return store[kind];
}

function get(kind, id) {
  return store[kind].find(item => item.id === id) || null;
}

function create(kind, payload) {
  const item = { id: uuidv4(), ...payload };
  store[kind].push(item);
  return item;
}

function remove(kind, id) {
  const idx = store[kind].findIndex(i => i.id === id);
  if (idx === -1) return false;
  store[kind].splice(idx, 1);
  return true;
}

function clear() {
  store.meals = [];
  store.exercises = [];
}

module.exports = { list, get, create, remove, clear };
