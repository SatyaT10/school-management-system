const { SchoolManage } = require('../Models/ManagementModel');
const sequelize = require('../db.config');
const newSchool = async (req, res) => {
    try {
        const { name, address, latitude, longitude } = req.body;
        if (!name || !address || typeof latitude !== 'number' || typeof longitude !== 'number') {
            return res.status(400).json({
                message: 'Invalid request',
                error: 'Please provide all required fields and ensure latitude and longitude are  numbers'
            });
        }
        const isExist = await SchoolManage.findOne({
            where: { name: name }
        })
        if (isExist) {
            return res.status(400).send({
                success: false,
                message: 'School already exists',
            })
        }
        await SchoolManage.create({ name, address, latitude, longitude });
        res.status(200).send({
            success: true,
            message: 'School created successfully',
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

const getAllSchools = async (req, res) => {
    try {

        const { latitude, longitude } = req.query;
        console.log(req.body);
        console.log(req.query);
        

        if (!latitude || !longitude) {
            return res.status(400).send({
                success: false,
                message: 'Please provide latitude and longitude',
            });
        } else if (isNaN(parseFloat(latitude)) || isNaN(parseFloat(longitude))) {
            return res.status(400).send({
                success: false,
                message: 'Please provide valid latitude and longitude',
            });
        }

        const userLatitude = parseFloat(latitude);
        const userLongitude = parseFloat(longitude);

        const getAllschoolList = await SchoolManage.findAll({
            attributes: {
                include: [
                    [sequelize.literal(`(
                        3959 * acos(
                            cos(radians(${userLatitude}))
                            * cos(radians(latitude))
                            * cos(radians(longitude) - radians(${userLongitude}))
                            + sin(radians(${userLatitude})) * sin(radians(latitude))
                        )
                    )`), 'distance']
                ]
            },
            order: sequelize.literal('distance ASC')

        });
        res.status(200).send({
            success: true,
            data: getAllschoolList
        })
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    newSchool,
    getAllSchools
}