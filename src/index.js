import express from 'express';
import db from './db/connect.js';
import { produceBeneficiary } from './controllers/beneficiaryController'
import { connectChannel } from './db/connectRabbit'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async(global.channel = await connectChannel('beneficiary'))() // a grande questao do universo, essa grandessissima de uma palhaçada so pra nao usar o then

app.post('produceBeneficiary', produceBeneficiary)

channel.close()

app.listen(3333, () => {
    console.log("Application is running");
})