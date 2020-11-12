const formidable = require('formidable');
const fs = require('fs');
const Photo = require('../models/photo');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.photoById = (req, res, next, id) => {
    Photo.findById(id).exec((err, photo) => {
        if (err || !photo) {
            return res.status(400).json({
                error: 'photo does not exist'
            });
        }
        req.photo = photo;
        next();
    });
};

exports.create = (req, res) => {
    const photo = new Photo(req.body);
    photo.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.list = (req, res) => {
    Photo.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.remove = (req, res) => {
    let photo = req.photo;
    photo.remove((err) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'photo deleted successfully'
        });
    });
};
