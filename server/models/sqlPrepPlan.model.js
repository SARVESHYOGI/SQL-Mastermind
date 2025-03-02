import { Schema } from "mongoose";

const sqlPrepPlanSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    questions: [
        {
            type: String,
            required: true
        }
    ],
    time_allocation: {
        type: String
    },
    difficulty_level: {
        type: String
    },

}, { timestamps: true });

export default mongoose.model('SqlPrepPlan', sqlPrepPlanSchema);