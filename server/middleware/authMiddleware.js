const jwt = require("jsonwebtoken")

const auth = async (request, response, next) => {
    const token = request.cookies.token || request?.headers?.authorization?.split(" ")[1]

    // console.log(token);
    try {

        if (!token) {
            return response.status(401).json({
                message: "Provide token"
            })
        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET)

        if (!decode) {
            return response.status(401).json({
                message: "unauthorized access",
                error: true,
                success: false
            })
        }

        request.userId = decode.id

        next()

    } catch (error) {
        return response.status(500).json({
            message: "You have not login",
            error: true,
            success: false
        })
    }
}

module.exports = auth