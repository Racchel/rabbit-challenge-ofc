import { BeneficiaryRepository } from '../repository/beneficiaryRepositoryTeste';
import { sendToQueue } from '../db/connectRabbit'

class CreateBeneficiaryService {
    async execute( beneficiary ){
        // const beneficiaryAlreadyExists = this.beneficiaryRepository.findByName(name);

        // if (beneficiaryAlreadyExists) {
        //   throw new Error('Beneficiary already exists!');
        // }

        const isSended = await sendToQueue('beneficiary', beneficiary)

        if(!isSended){
            throw new Error(`Can't send beneficiary to queue`)
        }

        this.beneficiaryRepository.create(beneficiary);

    }
}

export { CreateBeneficiaryService };