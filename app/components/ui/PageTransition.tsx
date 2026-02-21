// app/_components/PageTransition.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 10 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   exit={{ opacity: 0, y: -10 }}
    //   transition={{ duration: 0.5, ease: "easeOut" }}
    // >
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
