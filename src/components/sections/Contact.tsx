import React, { useState } from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../context/LanguageContext";

const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const Contact = () => {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", ACCESS_KEY);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append(
      "subject",
      language === "en"
        ? "New contact from portfolio"
        : "Nuevo contacto desde portafolio",
    );
    formData.append("from_name", "Steven Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert(
          language === "en"
            ? "Message sent successfully!"
            : "¡Mensaje enviado exitosamente!",
        );
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(
          language === "en"
            ? "Something went wrong. Please try again."
            : "Algo salió mal. Por favor intenta de nuevo.",
        );
      }
    } catch (error) {
      alert(
        language === "en"
          ? "Something went wrong. Please try again."
          : "Algo salió mal. Por favor intenta de nuevo.",
      );
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none disabled:opacity-50"
          >
            {loading
              ? language === "en"
                ? "Sending..."
                : "Enviando..."
              : language === "en"
                ? "Send"
                : "Enviar"}
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
