import { database } from './connect';
import { BeneficiaryModel } from '../model/beneficiaryModel';

(async () => {
    try {
        const result = await database.sync();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
})