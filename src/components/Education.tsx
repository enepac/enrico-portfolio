"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="bg-indigo-50 py-16 px-4 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education & Certifications
        </motion.h2>

        <motion.div
          className="mb-8 bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold">Diploma in Software Development</h3>
          <p className="text-sm text-gray-500 mb-1">Red Deer Polytechnic – Alberta, Canada</p>
          <p className="text-gray-700">Completed: April 2025</p>
        </motion.div>

        <motion.div
          className="mb-8 bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold">BSc in Mathematics</h3>
          <p className="text-sm text-gray-500 mb-1">Polytechnic University of the Philippines – Manila</p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-2">Professional Certifications</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Full-Stack Developer Specialization – IBM/Coursera</li>
            <li>Prompt Engineering for Web Developers – Scrimba</li>
            <li>Generative AI, React, Node.js, Django, Flask, SQL</li>
            <li>HTML/CSS/JavaScript, Git & GitHub, Cloud Computing</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
