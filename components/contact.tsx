"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>CONTACT ME</SectionHeading>
      <p className="text-gray-700 -mt-5 dark:text-white/80">
        You can contact me directly via{" "}
        <a className="underline" href="mailto:tobias-ahrens@hotmail.de">
          tobias-ahrens@hotmail.de
        </a>{" "}
        or using the form below.
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Thank you for your E-mail!");
        }}
        className="mt-10 flex flex-col"
      >
        <input
          name="senderEmail"
          className="h-14 rounded-lg border border-black/[0.1] px-4 dark:text-black dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transistion all"
          type="email"
          placeholder="Your E-Mail"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg border border-black/[0.1] p-4 dark:text-black dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transistion all"
          placeholder="Your message"
          required
          maxLength={5000}
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
