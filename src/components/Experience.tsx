"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="bg-stone-50 py-16 px-4 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {[{
          role: "Transportation Support Specialist / System Administrator",
          company: "Tamimi and Saihati Transport Co.",
          location: "Saudi Arabia",
          period: "Dec 2014 – 2021",
          bullets: [
            "Coordinated transport systems and provided software/IT support",
            "Developed SOPs for scheduling, dispatching, and document handling",
            "Built foundation in troubleshooting, systems thinking, and operations"
          ]
        }, {
          role: "Data Entry Clerk (Remote)",
          company: "Freelance",
          location: "Saudi Arabia",
          period: "Feb 2019 – 2023",
          bullets: [
            "Managed customer data and back-office operations for small businesses",
            "Maintained strong accuracy and client communication in remote settings"
          ]
        }].map((exp, idx) => (
          <motion.div
            key={idx}
            className="mb-8 bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-500 mb-1">{exp.company} – {exp.location} | {exp.period}</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              {exp.bullets.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
