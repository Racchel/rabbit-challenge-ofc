import { sendToQueue } from '../db/connectRabbit'
import { createBeneficiaryRepository } from '../repository/beneficiaryRepository.js'

const createBeneficiaryService = (beneficiary) => {
  // salva no rabbit
  const isSended = await sendToQueue('beneficiary', beneficiary)

  if(!isSended){
    throw new Error(`Can't send beneficiary to queue`)
  }

  // salva no mysql
  const respCreate = await createBeneficiaryRepository(beneficiary);
  
}

export {
  createBeneficiaryService
}




import { BeneficiariesRepository } from "../repositories/beneficiaries.repository";

interface IRequest {
    name: string;
    email: string;
    gender: string;
}
