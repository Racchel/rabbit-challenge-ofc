const Sequelize = require('sequelize');
import { database } from '../db/connect';

const BeneficiaryModel = database.define('beneficiary', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipoBeneficiario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    uf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pais: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ddd: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ramal: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codigoBanco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    agência: {
        type: Sequelize.STRING,
        allowNull: false
    },
    digitoAgencia: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contaCorrente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    digitoContaCorrente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipoConta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codigoMatricula: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codigoINSS: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipoINSS: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    paisNascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    estadoNascimento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidadeNascimento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataAposentadoria: {
        type: Sequelize.DATE,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nomeInstituidora: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codigoConvenio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codigoFilial: {
        type: Sequelize.STRING,
        allowNull: false
    },
    regimeTributario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numeroProposta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codigoEstruturaVendas: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valorReserva: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    codproduto: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

export { BeneficiaryModel };