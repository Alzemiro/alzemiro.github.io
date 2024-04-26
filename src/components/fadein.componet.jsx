import { AnimatePresence, motion } from "framer-motion";

export function Fade({ children, isActive, direction }){
    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0, x: direction === "left" ? "-100%" : "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction === "left" ? "-100%" : "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

