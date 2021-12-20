import { Sequelize } from 'sequelize';

const database = new Sequelize(
    'db',
    'user',
    'password',
    {dialect: 'mysql', host: 'localhost'}
);
 
export { database };