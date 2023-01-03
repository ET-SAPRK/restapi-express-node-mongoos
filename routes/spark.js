const express = require('express')
const router = express.Router()
const Spark = require('../models/spark')


router.get('/', async (req, res) => {
    try {
        const spark = await Spark.find()
        res.json(spark)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})
router.get('/:id', (req,res) => {
    res.send(req.params.id)
})


module.exports = router