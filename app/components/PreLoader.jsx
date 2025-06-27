"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Match this duration with your GIF length

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* GIF Preloader */}
          <motion.div
            className="relative w-[50%] md:w-full md:h-full flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.3 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/DTLG.gif" // Path to your GIF in public folder
              alt="Loading..."
              width={400} // Match your GIF dimensions
              height={400}
              unoptimized // Required for GIF auto-play in Next.js
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
