const { GoogleGenerativeAI } = require("@google/generative-ai");
const Plan = require("../models/Plan");

const generatePlan = async (req, res) => {
  const { experience, role, jobTitle, companies, sqlProficiency, dbSystem, focusArea, skillLevel, topics, queryComplexity, industry } = req.body;

  const prompt = `
    Generate a SQL preparation plan for a user with the following details:
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
      - Target Industry: ${industry}
    
    Please structure the response in JSON format with the following sections:
    
    1. **Submitted Information**: Include the user's details as provided.
    2. **Preparation Plan**: Provide two detailed SQL preparation plans:
       - **4-week Plan**: Outline the SQL topics, exercises, and steps for a 4-week preparation cycle.
       - **8-week Plan**: Outline the SQL topics, exercises, and steps for an 8-week preparation cycle.
    
    For each plan, include the following details:
    
    - **Week-by-Week Breakdown**:
      - What SQL topics will be covered in each week.
      - Specific exercises or types of questions (e.g., problem-solving, database design, etc.).
      - Difficulty level of the tasks (beginner, intermediate, advanced).
      - Suggestions for additional resources (e.g., online tutorials, books, or platforms like LeetCode, HackerRank, etc.).
      - Time commitment estimate for each week (e.g., hours per day or week).
    
    - **Plan Format**:
      - Provide the detailed breakdown in this structure for both 4-week and 8-week plans:
         Example JSON structure for the response
        {
          "submittedInformation"- {
            "experience": "5 years",
            "role": "Data Engineer",
            "targetJobTitle": "Data Analyst",
            "targetCompanies": ["Company A", "Company B"],
            "currentSQLProficiency": "Intermediate",
            "preferredSQLDatabase": "MySQL",
            "focusArea": "Problem Solving",
            "targetSQLSkillLevel": "Advanced",
            "focusTopics": ["Joins", "Subqueries", "Indexing"],
            "sqlQueryComplexity": "Advanced",
            "industry": "Technology"
          },
          "4WeekPlan"- {
            "week1": {
              "topicsCovered": ["SQL Basics", "Basic SELECT Queries"],
              "exercises": ["Basic SELECT queries with WHERE clauses", "Simple aggregate functions"],
              "difficultyLevel": "Beginner",
              "timeCommitment": "2 hours/day",
              "resources": ["SQLZoo tutorial", "W3Schools SQL"]
            },
            "week2": {
              "topicsCovered": ["Joins", "Subqueries"],
              "exercises": ["INNER JOIN, LEFT JOIN exercises", "Writing subqueries for filtering data"],
              "difficultyLevel": "Intermediate",
              "timeCommitment": "2-3 hours/day",
              "resources": ["LeetCode SQL questions", "HackerRank SQL problems"]
            },
            "week3": {
              "topicsCovered": ["Indexes", "Query Optimization"],
              "exercises": ["Implementing indexes", "Analyzing query execution plans"],
              "difficultyLevel": "Intermediate",
              "timeCommitment": "2 hours/day",
              "resources": ["Mode Analytics SQL Guide", "SQL Performance Tuning Blog"]
            },
            "week4": {
              "topicsCovered": ["Advanced SQL Topics", "Complex Queries"],
              "exercises": ["Writing complex queries using multiple joins", "Optimizing queries with CTEs"],
              "difficultyLevel": "Advanced",
              "timeCommitment": "3 hours/day",
              "resources": ["SQL Advanced Tutorial", "EdX SQL Courses"]
            }
          },
          "8WeekPlan"- {
            "week1": {
              "topicsCovered": ["SQL Basics", "Basic SELECT Queries"],
              "exercises": ["Basic SELECT queries with WHERE clauses", "Simple aggregate functions"],
              "difficultyLevel": "Beginner",
              "timeCommitment": "2 hours/day",
              "resources": ["SQLZoo tutorial", "W3Schools SQL"]
            },
            "week2": {
              "topicsCovered": ["Joins", "Subqueries"],
              "exercises": ["INNER JOIN, LEFT JOIN exercises", "Writing subqueries for filtering data"],
              "difficultyLevel": "Intermediate",
              "timeCommitment": "2-3 hours/day",
              "resources": ["LeetCode SQL questions", "HackerRank SQL problems"]
            },
            "week3": {
              "topicsCovered": ["Indexes", "Query Optimization"],
              "exercises": ["Implementing indexes", "Analyzing query execution plans"],
              "difficultyLevel": "Intermediate",
              "timeCommitment": "2 hours/day",
              "resources": ["Mode Analytics SQL Guide", "SQL Performance Tuning Blog"]
            },
            "week4": {
              "topicsCovered": ["Stored Procedures", "Triggers"],
              "exercises": ["Writing stored procedures", "Creating triggers for automatic actions"],
              "difficultyLevel": "Intermediate",
              "timeCommitment": "3 hours/day",
              "resources": ["LeetCode SQL questions", "SQL Server Documentation"]
            },
            "week5": {
              "topicsCovered": ["Window Functions", "CTEs"],
              "exercises": ["Writing queries using window functions", "CTE exercises for organizing complex queries"],
              "difficultyLevel": "Intermediate",
              "timeCommitment": "3 hours/day",
              "resources": ["SQL Advanced Tutorial", "Mode Analytics Blog"]
            },
            "week6": {
              "topicsCovered": ["Advanced SQL Topics", "Recursive Queries"],
              "exercises": ["Writing recursive queries", "Working with hierarchical data"],
              "difficultyLevel": "Advanced",
              "timeCommitment": "3 hours/day",
              "resources": ["SQL Server Advanced Topics", "SQL Recursive Query Articles"]
            },
            "week7": {
              "topicsCovered": ["Complex Query Optimization", "Data Integrity"],
              "exercises": ["Optimizing complex SQL queries", "Ensuring data consistency with constraints"],
              "difficultyLevel": "Advanced",
              "timeCommitment": "3 hours/day",
              "resources": ["SQL Performance Tuning Blog", "LeetCode Advanced SQL"]
            },
            "week8": {
              "topicsCovered": ["SQL for Data Engineering", "Data Pipeline Queries"],
              "exercises": ["Designing queries for data pipelines", "Optimizing SQL queries for big data environments"],
              "difficultyLevel": "Advanced",
              "timeCommitment": "3 hours/day",
              "resources": ["Data Engineering Blogs", "Big Data SQL Tutorials"]
            }
          }
        }
        
        json ends
    
    Please make sure each week in both the 4-week and 8-week plans has:
    - A clear description of the topics being covered.
    - Exercises or challenges for the user.
    - A difficulty level.
    - Time commitment.
    - Links to resources (optional).

    Please structure the response strictly in valid JSON format. 
Ensure proper JSON syntax, including correct key-value pairs and appropriate use of quotes.
Do not include extra words like "json starts" or "json ends". 

    
    `;

  try {
    // Initialize GoogleGenerativeAI with the API key
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate content using the provided prompt
    const result = await model.generateContent(prompt);

    // Check if result is properly returned and extract text
    if (!result || !result.response || !result.response.text) {
      throw new Error("No valid response from Google API.");
    }

    const generatedText = await result.response.text();
    const cleanedText = generatedText.replace(/```json\n|\n```/g, '');
    const jsonData = JSON.parse(cleanedText);
    res.json(jsonData);
  } catch (error) {
    console.error("Error generating plan:", error);
    res.status(500).json({ error: "Failed to generate plan" });
  }
};

const savePlan = async (req, res) => {
  const { plan } = req.body; // Get the plan from the request body
  const { submittedInformation, '4WeekPlan': week4Plan, '8WeekPlan': week8Plan } = plan; // Destructure with valid variable names

  try {
    const newPlan = new Plan({
      userId: req.userId, // Ensure this value is being passed correctly
      experience: submittedInformation.experience,
      role: submittedInformation.role,
      targetJobTitle: submittedInformation.targetJobTitle,
      targetCompanies: submittedInformation.targetCompanies,
      currentSQLProficiency: submittedInformation.currentSQLProficiency,
      preferredSQLDatabase: submittedInformation.preferredSQLDatabase,
      focusArea: submittedInformation.focusArea,
      targetSQLSkillLevel: submittedInformation.targetSQLSkillLevel,
      focusTopics: submittedInformation.focusTopics,
      sqlQueryComplexity: submittedInformation.sqlQueryComplexity,
      industry: submittedInformation.industry,
      "4WeekPlan": week4Plan,  // Rename week4Plan to 4WeekPlan in the schema
      "8WeekPlan": week8Plan,  // Rename week8Plan to 8WeekPlan in the schema
    });

    await newPlan.save(); // Save the plan to the database
    res.status(201).json({ message: 'Plan saved successfully', plan: newPlan });
  } catch (error) {
    console.error('Error saving plan:', error);
    res.status(500).json({ error: 'Failed to save plan' });
  }
};

const getPlan = async (req, res) => {
  console.log('Fetching plan for user:', req.userId); // Log the userId to check if it's passed correctly
  try {
    const plan = await Plan.find({ userId: req.userId });
    console.log('Plan data:', plan);  // Log the data being returned
    res.status(200).json(plan);
  } catch (error) {
    console.error('Error getting plan:', error);
    res.status(500).json({ error: 'Failed to get plan' });
  }
}



module.exports = {
  generatePlan, savePlan, getPlan
};
