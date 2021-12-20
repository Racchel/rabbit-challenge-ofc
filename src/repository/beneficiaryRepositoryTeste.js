import { BeneficiaryModel } from '../model/beneficiaryModel'

class BeneficiariesRepository {
    create(beneficiary) {
        const resultCreate = await BeneficiaryModel.create({
            nome = beneficiary.name,
            email = beneficiary.email
            //... pensando
    })
        
    }

    findByName(name) {
        
        // pesquisar no banco

        return beneficiary;
    }
}

export { BeneficiariesRepository };    