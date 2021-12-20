import { createBeneficiaryService } from '../services/beneficiaryService'

const produceBeneficiary = (req, res) => {
  return createBeneficiaryService(res.body)
}

export { produceBeneficiary };