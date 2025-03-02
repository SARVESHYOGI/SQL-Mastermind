const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error for debugging
    res.status(500).json({ error: "Something went wrong on the server." });
};

module.exports = errorHandler;