"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="bg-zinc-100 py-16 px-4 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-blue-800">Medical Management System</h3>
            <p className="text-gray-700 mb-4">
              A full-stack healthcare app using Next.js, MongoDB, Docker, and GPT-4o. Features include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Patient record management</li>
              <li>Appointment scheduling</li>
              <li>Secure user authentication</li>
              <li>AI document analysis via GPT-4o</li>
            </ul>
            <a
              href="https://github.com/enepac/AiCare"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Project on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
