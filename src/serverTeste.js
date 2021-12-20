import express from 'express';
import { beneficiariesRoutes } from './routes/routes.js';

// import { connectChannel } from './db/connectRabbit.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// async(global.channel = await connectChannel('beneficiary'))()

app.use('/beneficiary', beneficiariesRoutes);

channel.close();

app.listen(3333, () => {
    console.log('🚀 Server is running');
});