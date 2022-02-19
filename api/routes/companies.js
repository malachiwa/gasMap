const express = require('express');
const router = express.Router();

const {
    getAllCompanies,
    createNewCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/companies');

router.get('/', getAllCompanies);

router.post('/', createNewCompany);

router.patch('/:companyId', updateCompany);

router.delete('/:companyId', deleteCompany);

module.exports = router;