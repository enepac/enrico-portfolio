"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-4 pt-24 pb-12 bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/profile.jpeg"
          alt="Enrico Acha"
          width={160}
          height={160}
          className="rounded-full border-1 border-blue-500 shadow-md"
        />
      </motion.div>

      <motion.h1
        className="text-5xl font-extrabold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Enrico Epifanio Acha
      </motion.h1>

      <motion.h2
        className="text-2xl text-gray-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Junior Software Developer
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        I build full-stack AI-integrated web applications using Next.js, GPT-4o, and MongoDB. Passionate about crafting scalable solutions in web, AI, and SaaS.
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a
          href="mailto:enrico.acha@gmail.com"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
        <a
          href="https://github.com/enepac"
          target="_blank"
          className="px-4 py-2 border border-gray-700 text-gray-700 rounded-lg hover:bg-gray-100 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/enrico-acha"
          target="_blank"
          className="px-4 py-2 border border-gray-700 text-gray-700 rounded-lg hover:bg-gray-100 transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
