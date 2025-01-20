const Ikasle = require('../models/ikasle.model');

exports.getIkasleak = async (req, res, next) => {
    try {
        const ikasleak = await Ikasle.find();
        res.json(ikasleak);
    } catch (error) {
        next(error);
    }
};

exports.createIkasle = async (req, res, next) => {
    try {
        const ikasle = new Ikasle(req.body);
        const savedIkasle = await ikasle.save();
        res.status(201).json(savedIkasle);
    } catch (error) {
        next(error);
    }
};

exports.getIkasleById = async (req, res, next) => {
    try {
        const ikasle = await Ikasle.findById(req.params.id);
        if (!ikasle) {
            return res.status(404).json({ message: 'Ikaslea ez da aurkitu' });
        }
        res.json(ikasle);
    } catch (error) {
        next(error);
    }
};

// Gehitu beste kontroladoreak...
exports.deleteIkasleById = async (req, res, next) => {
    try {
        console.log(`Eliminando ikaslea con ID: ${req.params.id}`);
        const ikasle = await Ikasle.findByIdAndDelete(req.params.id);

        if (!ikasle) {
            return res.status(404).json({ message: 'Ikaslea ez da aurkitu' });
        }

        console.log('Ikaslea eliminado:', ikasle);
        res.json({ message: 'Ikaslea ezabatu da', ikasle });
    } catch (error) {
        console.error('Error al eliminar ikaslea:', error);
        next(error);
    }
};

exports.editIkasByEmail = async (req,res,next) => {
    try{
        try {
            const ikasle = await Ikasle.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });
            if (!ikasle) return res.status(404).json({ error: 'Ikaslea ez da aurkitu' });
    
            res.json(ikasle);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }catch{
        next(error);
    }
}
  