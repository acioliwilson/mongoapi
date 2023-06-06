const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
// const mongoURI = 'mongodb+srv://waciolib:DoDCbCAaD9gWAszf@cluster0.qa6ryar.mongodb.net/?retryWrites=true&w=majority'; // Coloque a URL do seu cluster MongoDB aqui

// Middleware para processar requisições JSON
app.use(express.json());
app.use(cors());

// Rota para teste
app.get('/', (req, res) => {
  try {
    res.status(200).json({ msg: 'Getting API data' });
  } catch (error) {
    res.status(500).json({ error: 'Faillure' });
  }
});

app.listen(port, () => {
    console.log('Running at port: '+port);
});

module.exports = app;