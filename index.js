const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/gamepasses/:username', (req, res) => {
  const username = req.params.username;

  const fakeGamepasses = [
    { id: 123456, name: 'Donación 5 Robux', price: 5 },
    { id: 123457, name: 'Donación 10 Robux', price: 10 },
    { id: 123458, name: 'Donación 50 Robux', price: 50 }
  ];

  res.json({
    user: username,
    gamepasses: fakeGamepasses
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
