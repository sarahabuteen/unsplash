const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
    {
        label: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        url: {
            data: Buffer,
            contentType: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Photo", photoSchema);
