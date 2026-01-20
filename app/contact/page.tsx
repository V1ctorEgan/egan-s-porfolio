"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  Phone,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { sendEmail } from "../../app/actions/sendEmail";
export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await sendEmail(formData);
    setIsPending(false);

    if (result.success) {
      setIsSent(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 lg:px-24 bg-[#0a0c10] text-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl font-bold mb-6">
            Get in <span className="text-teal-400">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Have a project in mind or looking to hire? I'm currently available
            for full-stack and mobile development opportunities. Let's build
            something great.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-4 mr-2 bg-white/5 rounded-2xl text-teal-400 border border-white/5">
                  <Mail size={24} />
                </div>
                <div className="h-3 w-3"> </div>
                <div className="mr-3">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                    Email Me
                  </h4>
                  <p className="text-xl font-medium hover:text-teal-400 transition-colors cursor-pointer">
                    eteinalltech@gmail.com
                  </p>
                </div>
              </div>
              <div className="h-3 w-3"> </div>

              <div className="flex items-start gap-5 my-2.5 mt-2">
                <div className="p-4 bg-white/5 rounded-2xl text-teal-400 border border-white/5">
                  <MapPin size={24} />
                </div>
                <div className="h-3 w-3"> </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
                    Location
                  </h4>
                  <p className="text-xl font-medium">Port Harcourt, Nigeria</p>
                </div>
              </div>
              <div className="h-3 w-3"> </div>
            </div>

            <div className="pt-10 border-t border-white/5 py-2 mt-2">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 mt-2">
                Follow My Work
              </h4>
              <div className="flex gap-4 mb-2">
                {[
                  {
                    icon: <Github />,
                    href: "https://github.com/v1ctorEgan",
                    label: "Github",
                  },
                  {
                    icon: <Linkedin />,
                    href: "https://www.linkedin.com/in/victor-egan-6b5164244",
                    label: "LinkedIn",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(20, 184, 166, 0.1)",
                    }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 text-gray-400 hover:text-teal-400 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center bg-[#111827]/40 border border-teal-500/20 rounded-[2.5rem] p-12 text-center"
              >
                <CheckCircle size={64} className="text-teal-400 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-400">
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-8 text-teal-400 font-bold underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                action={handleSubmit} // 👈 Connect the Server Action
                className="bg-[#111827]/40 border border-white/5 rounded-[2.5rem] p-8 md:p-12 space-y-6 shadow-2xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-teal-400 outline-none transition-all text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-teal-400 outline-none transition-all text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                    Subject
                  </label>
                  <input
                    name="subject"
                    required
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-teal-400 outline-none transition-all text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-teal-400 outline-none transition-all text-white resize-none"
                  />
                </div>

                <motion.button
                  disabled={isPending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-teal-400 text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-teal-300 disabled:opacity-50 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                >
                  {isPending ? "Sending..." : "Send Message"} <Send size={18} />
                </motion.button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
