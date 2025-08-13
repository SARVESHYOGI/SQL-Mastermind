const jwt = require("jsonwebtoken")

const auth = (request, response, next) => {
    const token = request.cookies.token || request?.headers?.authorization?.split(" ")[1];

    if (!token) {
        return response.status(401).json({
            message: "Provide token",
            error: true,
            success: false
        });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        if (!decode) {
            return response.status(401).json({
                message: "Unauthorized access",
                error: true,
                success: false
            });
        }

        request.userId = decode.userId;

        next();
    } catch (error) {
        console.error("JWT verification error:", error);

        if (error.name === 'TokenExpiredError') {
            return response.status(401).json({
                message: "Token expired. Please log in again.",
                error: true,
                success: false
            });
        }

        return response.status(500).json({
            message: "You have not logged in",
            error: true,
            success: false
        });
    }
};

module.exports = auth
// Check if token is provided
// Verify the token (sync, no need for await)
// If verification fails (invalid or expired token)
// Attach user ID to request for further use in routes
// Proceed to the next middleware or route handler
// If there's a JWT verification error (e.g., expired token)
// Catch all other errors (invalid token, etc.)