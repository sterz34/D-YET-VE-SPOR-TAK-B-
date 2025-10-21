const express = require('express');
const store = require('../lib/store');

const router = express.Router();

router.get('/', (req, res) => res.json(store.list('meals')));
router.get('/:id', (req, res) => {
  const item = store.get('meals', req.params.id);
  if (!item) return res.status(404).end();
  res.json(item);
});
router.post('/', (req, res) => {
  const payload = req.body;
  if (!payload || !payload.name) return res.status(400).json({ error: 'name required' });
  const item = store.create('meals', payload);
  res.status(201).json(item);
});
router.delete('/:id', (req, res) => {
  const ok = store.remove('meals', req.params.id);
  if (!ok) return res.status(404).end();
  res.status(204).end();
});

module.exports = router;
