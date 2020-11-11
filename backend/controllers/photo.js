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
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Photo could not be uploaded'
            });
        }

        const { label } = fields;

        if (!label) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }

        let photo = new Photo(fields);

        if (files.url) {
            if (files.url.size > 1000000) {
                return res.status(400).json({
                    error: 'Photo size should be less than 1mb'
                });
            }
            photo.url.data = fs.readFileSync(files.url.path);
            photo.url.contentType = files.url.type;
        }

        photo.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
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