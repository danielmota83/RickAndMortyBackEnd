const mongoose = require ('mongoose');
const DATABASE_URL = 'mongodb://127.0.0.1/paletas-db';

function connectToDataBase() {
    mongoose.connect(DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado com sucesso!')).catch((error) => console.log(`error ao conectar com MongoDb, erro: ${error}`),
    );
};

module.exports = connectToDataBase;
