const mongoose = require("mongoose");

const trackplanSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    planId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan',
        required: true
    }
})

module.exports = mongoose.model("TrackPlan", trackplanSchema)