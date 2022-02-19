module.exports = {
    getAllCompanies: (req, res) => {
        res.status(200).json({
            message: 'Get All Companies'
        });
    },
    createNewCompany: (req, res) => {
        res.status(200).json({
            message: 'Create a new Company'
        });
    },
    updateCompany: (req, res) => {
        const companyId = req.params.companyId;
        
        res.status(200).json({
            message: `update company - ${companyId}`
        });
    },
    deleteCompany: (req, res) => {
        const companyId = req.params.companyId;
        
        res.status(200).json({
            message: `delete company - ${companyId}`
        });
    }
}