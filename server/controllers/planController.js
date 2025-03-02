const fetch = require("node-fetch");
const Plan = require("../models/Plan");

const generatePlan = async (req, res) => {
    const { experience, role, jobTitle, companies, sqlProficiency, dbSystem, focusArea, skillLevel, topics, queryComplexity, industry } = req.body;
    const prompt = `Generate a SQL preparation plan for a user with the following details:
  - Experience: ${experience} years
  - Role: ${role}
  - Target Job Title: ${jobTitle}
  - Target Companies: ${companies}
  - Current SQL Proficiency: ${sqlProficiency}
  - Preferred SQL Database: ${dbSystem}
  - Focus Area: ${focusArea}
  - Target SQL Skill Level: ${skillLevel}
  - Focus Topics in SQL: ${topics}
  - SQL Query Complexity: ${queryComplexity}
  - Target Industry: ${industry}`;

    try {
        const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputs: prompt }),
        });

        if (!response.ok) {
            throw new Error(`Hugging Face API Error: ${response.statusText}`);
        }

        const data = await response.json();
        const generatedText = data[0]?.generated_text || "No response generated.";

        const plan = new Plan({
            userId: req.userId,
            questions: generatedText.split("\n"),
        });
        await plan.save();

        res.json({ plan: generatedText });
    } catch (error) {
        console.error("Hugging Face API Error:", error);
        res.status(500).json({ error: "Failed to generate plan" });
    }
};

module.exports = { generatePlan };