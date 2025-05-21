"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-sky-50 py-16 px-4 text-gray-800">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-6">
          I'm open to full-time, contract, or collaborative opportunities. Feel free to reach out!
        </p>
        <div className="space-y-2 text-lg">
          <p>
            📧 <a href="mailto:enrico.acha@gmail.com" className="text-blue-600 hover:underline">enrico.acha@gmail.com</a>
          </p>
          <p>
            🔗 <a href="https://linkedin.com/in/enrico-acha" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
          </p>
          <p>
            💻 <a href="https://github.com/enepac" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
