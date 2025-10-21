const request = require('supertest');
const app = require('../index');
const store = require('../lib/store');

beforeEach(() => store.clear());

test('GET / returns hello', async () => {
  const res = await request(app).get('/');
  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty('message');
});

test('meals CRUD', async () => {
  const createRes = await request(app).post('/meals').send({ name: 'Breakfast' });
  expect(createRes.status).toBe(201);
  expect(createRes.body).toHaveProperty('id');

  const listRes = await request(app).get('/meals');
  expect(listRes.status).toBe(200);
  expect(listRes.body.length).toBe(1);

  const id = createRes.body.id;
  const getRes = await request(app).get(`/meals/${id}`);
  expect(getRes.status).toBe(200);
  expect(getRes.body.name).toBe('Breakfast');

  const delRes = await request(app).delete(`/meals/${id}`);
  expect(delRes.status).toBe(204);

  const listAfter = await request(app).get('/meals');
  expect(listAfter.body.length).toBe(0);
});

test('exercises CRUD', async () => {
  const createRes = await request(app).post('/exercises').send({ name: 'Pushups' });
  expect(createRes.status).toBe(201);
  expect(createRes.body).toHaveProperty('id');

  const listRes = await request(app).get('/exercises');
  expect(listRes.status).toBe(200);
  expect(listRes.body.length).toBe(1);
});
