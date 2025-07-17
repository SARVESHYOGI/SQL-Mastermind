import { motion } from "framer-motion";

function Loading() {
    const progressLineVariants = {
        start: {
            width: "0%",
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
            },
        },
        end: {
            width: "100%",
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
            },
        },
    };

    return (
        <motion.div
            className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 rounded-md"
        >
            {/* Progress line */}
            <motion.div
                className="progress-line"
                variants={progressLineVariants}
                animate="end"
            />
            <StyleSheet />
        </motion.div>
    );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                width: 200px; /* Width of the container */
                height: 20px; /* Height of the container */
            }

            .progress-line {
                height: 6px; /* Line thickness */
                border-radius: 5px;
                background-color: #ffffff;
            }
            `}
        </style>
    );
}

export default Loading;
