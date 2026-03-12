import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

import { useLanguage } from "../../context/LanguageContext";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { EarthCanvas } from "../canvas";

const ACCESS_KEY = "ae621c74-bd89-4aab-83d3-69dc39a166ce";

const Contact = () => {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
        setShowSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error(error);
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
        className="bg-black-100 flex-[0.75] rounded-2xl p-8 relative"
      >
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-4 right-4 z-10 bg-green-500/20 border border-green-500/50 rounded-lg px-4 py-3 flex items-center gap-3"
            >
              <div className="bg-green-500 rounded-full p-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-green-400 text-sm font-medium">
                {language === "en" ? "Message sent!" : "¡Mensaje enviado!"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

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
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none disabled:opacity-50 flex items-center gap-2"
          >
            {loading && (
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
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
