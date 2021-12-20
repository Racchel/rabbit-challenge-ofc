import express from 'express';
import bodyParser from 'body-parser';

import { produceBeneficiary } from './controllers/beneficiaryController.js'
import { connectChannel } from './db/connectRabbit.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async(global.channel = await connectChannel('beneficiary'))()

app.post('produceBeneficiary', produceBeneficiary)

app.listen(3333, () => {
    console.log("Application is running");
})