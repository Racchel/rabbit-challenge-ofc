import { database } from './connect.js';

(async () => {
    try {
        const result = await database.sync();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
})();
