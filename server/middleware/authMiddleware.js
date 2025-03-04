const jwt = require("jsonwebtoken")

const auth = (request, response, next) => {
    const token = request.cookies.token || request?.headers?.authorization?.split(" ")[1];

    // Check if token is provided
    if (!token) {
        return response.status(401).json({
            message: "Provide token",
            error: true,
            success: false
        });
    }

    try {
        // Verify the token (sync, no need for await)
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        // If verification fails (invalid or expired token)
        if (!decode) {
            return response.status(401).json({
                message: "Unauthorized access",
                error: true,
                success: false
            });
        }

        // Attach user ID to request for further use in routes
        request.userId = decode.userId;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // If there's a JWT verification error (e.g., expired token)
        console.error("JWT verification error:", error);

        if (error.name === 'TokenExpiredError') {
            return response.status(401).json({
                message: "Token expired. Please log in again.",
                error: true,
                success: false
            });
        }

        // Catch all other errors (invalid token, etc.)
        return response.status(500).json({
            message: "You have not logged in",
            error: true,
            success: false
        });
    }
};

module.exports = auth