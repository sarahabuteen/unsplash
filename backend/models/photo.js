const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
    {
        label: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Photo", photoSchema);
