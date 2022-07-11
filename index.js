const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/database/database')
const charactersRoute = require('./src/routes/characters.routes');


const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

connectToDatabase();

app.use('/characters' , charactersRoute);

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});
