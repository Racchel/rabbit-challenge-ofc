import { BeneficiaryModel } from '../model/beneficiaryModel';

const createBeneficiaryRepository = async (beneficiary) => {
    const beneficiary = beneficiary;

    try {
        const response = await BeneficiaryModel.create(beneficiary)
            .then((data) => {
                const resp = { success = true, error: null }
                return resp;
            })
            .catch(err => {
                const resp = { sucess = false, error: err.toString() }
                return resp;
            });

        return response;
    }
    catch (err) {
        console.log('Error create beneficiary', err);
    }
}

export { createBeneficiaryRepository };