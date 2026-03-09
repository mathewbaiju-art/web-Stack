
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Add Player
router.post('/', (req, res) => {
  const { name, club, position, goals } = req.body;

  const sql = 'INSERT INTO players (name, club, position, goals) VALUES (?, ?, ?, ?)';

  db.query(sql, [name, club, position, goals || 0], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });

    res.json({ message: 'Player added successfully' });
  });
});

// Get Players
router.get('/', (req, res) => {
  db.query('SELECT * FROM players', (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });

    res.json(results);
  });
});

module.exports = router;