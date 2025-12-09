const mongoose = require("mongoose");

const weekSchema = new mongoose.Schema({
    topicsCovered: [String],
    exercises: [String],
    difficultyLevel: String,
    timeCommitment: String,
    resources: [String],
    isCompleted: {
        type: Boolean,
        default: false
    },
}, { _id: false });

const planSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    subject: String,
    experience: String,
    role: String,
    targetJobTitle: String,
    targetCompanies: [String],
    currentSQLProficiency: String,
    preferredSQLDatabase: [String],
    focusArea: String,
    targetSQLSkillLevel: String,
    focusTopics: [String],
    sqlQueryComplexity: String,
    industry: String,
    "4WeekPlan": {
        week1: weekSchema,
        week2: weekSchema,
        week3: weekSchema,
        week4: weekSchema
    },
    "8WeekPlan": {
        week1: weekSchema,
        week2: weekSchema,
        week3: weekSchema,
        week4: weekSchema,
        week5: weekSchema,
        week6: weekSchema,
        week7: weekSchema,
        week8: weekSchema
    }
});

module.exports = mongoose.model("Plan", planSchema);
