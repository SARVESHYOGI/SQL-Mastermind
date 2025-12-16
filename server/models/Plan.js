const mongoose = require("mongoose");

const weekSchema = new mongoose.Schema(
    {
        weekNumber: {
            type: Number,
            required: true,
        },
        topicsCovered: [String],
        exercises: [String],
        difficultyLevel: {
            type: String,
        },
        timeCommitment: String,
        resources: [String],
        isCompleted: {
            type: Boolean,
            default: false,
        },
    },
    { _id: false }
);


const planSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        subject: {
            type: String,
            required: true,
        },
        planDuration: {
            type: Number,
            required: true,
        },
        weeks: {
            type: [weekSchema],
            required: true,
        },

        status: {
            type: String,
            enum: ["incomplete", "completed"],
            default: "incomplete",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Plan", planSchema);