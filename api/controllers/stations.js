module.exports = {
    getAllStations: (req, res) => {
        res.status(200).json({
            message: 'Get All Stations'
        });
    },
    createNewStation: (req, res) => {
        res.status(200).json({
            message: 'Create a new Stations'
        });
    },
    updateStation: (req, res) => {
        const stationId = req.params.stationId;
        
        res.status(200).json({
            message: `update station - ${stationId}`
        });
    },
    deleteStation: (req, res) => {
        const stationId = req.params.stationId;
        
        res.status(200).json({
            message: `delete station - ${stationId}`
        });
    }
}