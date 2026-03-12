import React, { useState } from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../context/LanguageContext";

const WHATSAPP_NUMBER = "593968948715";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = form;
    const whatsappMessage = `*Nuevo mensaje de:* ${name}%0A*Email:* ${email}%0A%0A*Mensaje:* ${message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");

    alert(t.language === "en" ? "Opening WhatsApp..." : "Abriendo WhatsApp...");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} p={t.contact.p} h2={t.contact.h2} />

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">
              {t.contact.form.name.span}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t.contact.form.name.placeholder}
              required
              className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">
              {t.contact.form.email.span}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t.contact.form.email.placeholder}
              required
              className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">
              {t.contact.form.message.span}
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t.contact.form.message.placeholder}
              required
              rows={7}
              className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {t.language === "en" ? "Send via WhatsApp" : "Enviar por WhatsApp"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
