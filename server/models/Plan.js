const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    questions: Array,
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Plan", planSchema);