import { Router } from 'express';
import { BeneficiaryRepository } from '../repository/beneficiaryRepositoryTeste.js';
import { CreateBeneficiaryService } from '../services/CreateBeneficiaryServiceTeste.js';

const beneficiariesRoutes = Router();
const beneficiariesRepository = new BeneficiaryRepository();

beneficiariesRoutes.post("/", (request, response) => {
    const beneficiary = request.body;    

    const beneficiariesService = new CreateBeneficiaryService(beneficiariesRepository); 

    beneficiariesService.execute(beneficiary);

    return response.status(201).send();
})

beneficiariesRoutes.get("/", (request, response) => {
    const all = beneficiariesRepository.list();

    return response.json(all);
})

export { beneficiariesRoutes };