// src/features/planSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
    plan: {}
};

// const initialState = {
//     plan: {
//         "submittedInformation": {
//             "experience": "0 years",
//             "role": "234",
//             "targetJobTitle": "234",
//             "targetCompanies": "234",
//             "currentSQLProficiency": "Intermediate",
//             "preferredSQLDatabase": "MySQL",
//             "focusArea": "Query Optimization",
//             "targetSQLSkillLevel": "Advanced",
//             "focusTopics": "234",
//             "sqlQueryComplexity": "Performance-heavy Queries",
//             "targetIndustry": "234"
//         },
//         "4WeekPlan": {
//             "week1": {
//                 "topicsCovered": [
//                     "MySQL Basics",
//                     "SELECT Statements",
//                     "WHERE Clause",
//                     "Basic Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)"
//                 ],
//                 "exercises": [
//                     "Practice writing basic SELECT statements with various WHERE clause conditions.  Use aggregate functions to calculate simple statistics on sample datasets."
//                 ],
//                 "difficultyLevel": "Intermediate",
//                 "timeCommitment": "5 hours/week",
//                 "resources": [
//                     "https://www.w3schools.com/sql/",
//                     "https://dev.mysql.com/doc/refman/8.0/en/select.html"
//                 ]
//             },
//             "week2": {
//                 "topicsCovered": [
//                     "JOINs (INNER, LEFT, RIGHT, FULL OUTER)",
//                     "Subqueries",
//                     "GROUP BY and HAVING Clauses"
//                 ],
//                 "exercises": [
//                     "Solve problems involving different types of JOINs. Practice writing and optimizing subqueries. Use GROUP BY and HAVING to analyze grouped data."
//                 ],
//                 "difficultyLevel": "Intermediate",
//                 "timeCommitment": "7 hours/week",
//                 "resources": [
//                     "https://www.mysqltutorial.org/mysql-joins.aspx",
//                     "https://www.sqlservertutorial.net/sql-server-subquery/"
//                 ]
//             },
//             "week3": {
//                 "topicsCovered": [
//                     "Indexes",
//                     "Query Optimization Techniques (EXPLAIN PLAN)",
//                     "MySQL Workbench Basics for Query Analysis"
//                 ],
//                 "exercises": [
//                     "Create indexes on tables to improve query performance. Analyze query execution plans using EXPLAIN PLAN.  Practice identifying and resolving performance bottlenecks in sample queries."
//                 ],
//                 "difficultyLevel": "Advanced",
//                 "timeCommitment": "8 hours/week",
//                 "resources": [
//                     "https://dev.mysql.com/doc/refman/8.0/en/mysql-indexes.html",
//                     "https://www.mysqltutorial.org/mysql-explain-plan/"
//                 ]
//             },
//             "week4": {
//                 "topicsCovered": [
//                     "Advanced Query Optimization",
//                     "Common Table Expressions (CTEs)",
//                     "Performance Tuning Strategies"
//                 ],
//                 "exercises": [
//                     "Optimize complex queries using CTEs and other techniques.  Practice writing queries with multiple joins and aggregate functions and optimize for performance. Work on performance-heavy queries involving large datasets."
//                 ],
//                 "difficultyLevel": "Advanced",
//                 "timeCommitment": "10 hours/week",
//                 "resources": [
//                     "https://www.sqlshack.com/optimizing-sql-queries-using-common-table-expressions-ctes/",
//                     "https://www.periscopedata.com/blog/sql-performance-tuning-tips"
//                 ]
//             }
//         },
//         "8WeekPlan": {
//             "week1": {
//                 "topicsCovered": [
//                     "MySQL Basics",
//                     "Data Types",
//                     "Creating Tables",
//                     "Basic SELECT Statements"
//                 ],
//                 "exercises": [
//                     "Create simple tables, insert data, and practice basic SELECT statements."
//                 ],
//                 "difficultyLevel": "Beginner",
//                 "timeCommitment": "5 hours/week",
//                 "resources": [
//                     "https://www.w3schools.com/sql/"
//                 ]
//             },
//             "week2": {
//                 "topicsCovered": [
//                     "WHERE Clause",
//                     "ORDER BY Clause",
//                     "LIMIT Clause",
//                     "Aggregate Functions"
//                 ],
//                 "exercises": [
//                     "Practice filtering and sorting data with WHERE, ORDER BY, and LIMIT.  Use aggregate functions to summarize data."
//                 ],
//                 "difficultyLevel": "Beginner/Intermediate",
//                 "timeCommitment": "5 hours/week",
//                 "resources": [
//                     "https://www.w3schools.com/sql/sql_where.asp"
//                 ]
//             },
//             "week3": {
//                 "topicsCovered": [
//                     "JOINs (INNER, LEFT, RIGHT)",
//                     "Subqueries (correlated and uncorrelated)"
//                 ],
//                 "exercises": [
//                     "Practice different types of joins and solve problems using subqueries."
//                 ],
//                 "difficultyLevel": "Intermediate",
//                 "timeCommitment": "7 hours/week",
//                 "resources": [
//                     "https://www.mysqltutorial.org/mysql-joins.aspx"
//                 ]
//             },
//             "week4": {
//                 "topicsCovered": [
//                     "GROUP BY and HAVING Clauses",
//                     "Window Functions"
//                 ],
//                 "exercises": [
//                     "Practice grouping and aggregating data with GROUP BY and HAVING.  Use window functions for advanced data analysis."
//                 ],
//                 "difficultyLevel": "Intermediate/Advanced",
//                 "timeCommitment": "7 hours/week",
//                 "resources": [
//                     "https://dev.mysql.com/doc/refman/8.0/en/window-functions.html"
//                 ]
//             },
//             "week5": {
//                 "topicsCovered": [
//                     "Common Table Expressions (CTEs)",
//                     "UNION and UNION ALL"
//                 ],
//                 "exercises": [
//                     "Practice using CTEs to simplify complex queries.  Use UNION and UNION ALL to combine result sets."
//                 ],
//                 "difficultyLevel": "Advanced",
//                 "timeCommitment": "7 hours/week",
//                 "resources": [
//                     "https://mode.com/sql-tutorial/common-table-expressions-ctes/"
//                 ]
//             },
//             "week6": {
//                 "topicsCovered": [
//                     "Indexes and Indexing Strategies",
//                     "Query Optimization Basics"
//                 ],
//                 "exercises": [
//                     "Create and analyze indexes to improve query performance. Practice basic query optimization techniques."
//                 ],
//                 "difficultyLevel": "Intermediate/Advanced",
//                 "timeCommitment": "8 hours/week",
//                 "resources": [
//                     "https://dev.mysql.com/doc/refman/8.0/en/mysql-indexes.html"
//                 ]
//             },
//             "week7": {
//                 "topicsCovered": [
//                     "Advanced Query Optimization Techniques (EXPLAIN PLAN, Query Profiling)",
//                     "MySQL Performance Schema"
//                 ],
//                 "exercises": [
//                     "Use EXPLAIN PLAN and other tools to analyze query performance. Practice advanced optimization techniques."
//                 ],
//                 "difficultyLevel": "Advanced",
//                 "timeCommitment": "10 hours/week",
//                 "resources": [
//                     "https://dev.mysql.com/doc/refman/8.0/en/explain.html"
//                 ]
//             },
//             "week8": {
//                 "topicsCovered": [
//                     "Performance Tuning Strategies",
//                     "Case Studies of Performance-Heavy Queries"
//                 ],
//                 "exercises": [
//                     "Work on real-world performance-heavy queries, applying all learned techniques."
//                 ],
//                 "difficultyLevel": "Advanced",
//                 "timeCommitment": "10 hours/week",
//                 "resources": [
//                     "https://www.periscopedata.com/blog/sql-performance-tuning-tips"
//                 ]
//             }
//         }
//     }
// };

// Create a slice to handle the plan state

const planSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        setPlan: (state, action) => {
            state.plan = action.payload; // Updates the plan state
        },
    },
});

export const { setPlan } = planSlice.actions;

export default planSlice.reducer;
