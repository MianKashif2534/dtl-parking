"use client"

import { motion } from "framer-motion"

export default function InteractiveButton({
    children,
    className = "",
    scale = 1.05,
    shadow = "0 0 8px rgba(90, 47, 153, 0.8)",
}) {
    const buttonVariants = {
        initial: { scale: 1 },
        hover: {
            scale,
            boxShadow: shadow,
            transition: { type: "spring", stiffness: 400, damping: 10 },
        },
        tap: { scale: 0.98 },
    }

    return (
        <motion.div className={className} variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
            {children}
        </motion.div>
    )
}
