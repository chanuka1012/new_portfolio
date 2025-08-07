// Redesigned Contact.jsx with more attractive, modern design touches
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    your_name: "",
    your_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    try {
      await emailjs.sendForm(
        "service_fyxpyhr",
        "template_agels3r",
        form.current,
        "rE_fkaioi-bmm-GPe"
      );
      setFormStatus("success");
      setFormData({ your_name: "", your_email: "", message: "" });
      setTimeout(() => setFormStatus(null), 5000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/chanuka-rathnayake-108323273/",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://www.facebook.com/chanuka.rathnayake.767659/",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Let's <span className="text-blue-900">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interested in working together or just want to say hello? Drop me a
            message below and I’ll get back to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Info
            </h3>
            <div className="space-y-5">
              {[{
                Icon: Mail,
                title: "Email",
                value: "chanukarathnayake1012@gmail.com",
                href: "mailto:chanukarathnayake1012@gmail.com",
              }, {
                Icon: Phone,
                title: "Phone",
                value: "+94 76 638 8120",
                href: "tel:+94766388120",
              }, {
                Icon: MapPin,
                title: "Location",
                value: "Minhettiya, Kurunegala, Sri Lanka",
                href: null,
              }].map(({ Icon, title, value, href }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Icon className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{title}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-white hover:text-blue-400"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">Socials</h4>
              <div className="flex gap-3">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-blue-500"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            ref={form}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800 backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Message Me
            </h3>
            {[
              {
                id: "your_name",
                name: "your_name",
                label: "Your Name",
                type: "text",
                value: formData.your_name,
                placeholder: "Enter your name...",
              },
              {
                id: "your_email",
                name: "your_email",
                label: "Your Email",
                type: "email",
                value: formData.your_email,
                placeholder: "Enter your email...",
              },
            ].map((field, i) => (
              <div className="mb-5" key={i}>
                <label
                  htmlFor={field.id}
                  className="block text-gray-400 mb-1"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  value={field.value}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Type your message here..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center text-white transition-all duration-300 ${
                isSubmitting
                  ? "bg-blue-600 cursor-not-allowed"
                  : "bg-blue-300 hover:bg-blue-500"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin mr-2 w-5 h-5" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {formStatus === "success" && (
              <motion.p
                className="mt-4 text-green-400 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Your message has been sent!
              </motion.p>
            )}
            {formStatus === "error" && (
              <motion.p
                className="mt-4 text-red-400 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ❌ Something went wrong. Try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
