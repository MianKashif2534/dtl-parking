"use client"

import { motion } from "framer-motion"

export default function AnimatedItem({
    children,
    className = "",
    delay = 0,
    direction = "up",
    distance = 30,
}) {
    // Set direction of animation
    const getDirectionOffset = () => {
        switch (direction) {
            case "up":
                return { y: distance }
            case "down":
                return { y: -distance }
            case "left":
                return { x: distance }
            case "right":
                return { x: -distance }
            default:
                return { y: distance }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, ...getDirectionOffset() },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeInOut",
                delay,
                type: "spring",
                stiffness: 50,
                damping: 15,
            },
        },
    }

    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    )
}
