"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export default function SectionAnimation({
    children,
    className = "",
    delay = 0,
    staggerChildren = 0.1,
    direction = "up",
    distance = 50,
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren,
                delayChildren: delay,
                duration: 0.5,
                ease: "easeInOut",
            },
        },
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
                type: "spring",
                stiffness: 50,
                damping: 15,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {children}
        </motion.div>
    )
}
