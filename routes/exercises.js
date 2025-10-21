const express = require('express');
const store = require('../lib/store');

const router = express.Router();

router.get('/', (req, res) => res.json(store.list('exercises')));
router.post('/', (req, res) => {
  const payload = req.body;
  if (!payload || !payload.name) return res.status(400).json({ error: 'name required' });
  const item = store.create('exercises', payload);
  res.status(201).json(item);
});
router.delete('/:id', (req, res) => {
  const ok = store.remove('exercises', req.params.id);
  if (!ok) return res.status(404).end();
  res.status(204).end();
});

module.exports = router;
