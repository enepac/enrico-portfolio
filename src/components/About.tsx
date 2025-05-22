"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-biege-100 py-16 px-4 text-gray-800">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-4">
          I&apos;m a Junior Software Developer with hands-on experience designing, building, and deploying AI-integrated web applications.
        </p>
        <p className="text-lg mb-4">
          I transitioned into tech after years of systems coordination, bringing a process-oriented mindset, rapid learning ability, and strong technical foundation.
        </p>
        <p className="text-lg">
          I&apos;m passionate about building scalable solutions in web, AI, and SaaS environments—and always eager to collaborate, learn, and grow.
        </p>
      </motion.div>
    </section>
  );
}
