"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-sky-900 text-gray-300 text-center py-6 mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p>&copy; {new Date().getFullYear()} Enrico Acha. All rights reserved.</p>
    </motion.footer>
  );
}
