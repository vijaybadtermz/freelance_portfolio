import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Mail, Send, CheckCircle2, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from '../components/ui/SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_3hzsosf';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_h226ip2';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'VWkXNbrPGl7Lu64Pv';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Application',
    budget: '$1,000 - $3,000',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage(null);

    const currentTime = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const fullFormattedMessage = `[Project Type]: ${formData.projectType}
[Budget Scope]: ${formData.budget}
[Sender Email]: ${formData.email}

[Project Details]:
${formData.message}`;

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      time: currentTime,
      message: fullFormattedMessage,
      project_type: formData.projectType,
      budget_scope: formData.budget,
      details: formData.message
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS Send Error:', error);
      setErrorMessage(
        error?.text || 'Failed to send message via EmailJS. Please try again or email directly.'
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: '',
      email: '',
      projectType: 'Web Application',
      budget: '$1,000 - $3,000',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="06 / CONTACT"
          title="Have a project in mind?"
          subtitle="Let's build something useful. Whether you need a web platform, Android application, desktop tool or custom business system, tell me what you're trying to build."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Cards Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
              <h3 className="text-xl font-display font-bold text-slate-100 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" /> Start a Conversation
              </h3>
              <p className="text-sm font-sans text-slate-300 leading-relaxed">
                Direct communication is the fastest way to get your project moving forward. Send me an email or connect via social platforms.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-all font-mono text-xs group"
                >
                  <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-slate-500 block">Direct Email</span>
                    <span className="font-semibold">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-all font-mono text-xs group"
                >
                  <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Professional Profile</span>
                    <span className="font-semibold">LinkedIn / Vijayakumar K</span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-all font-mono text-xs group"
                >
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Source Code & Repositories</span>
                    <span className="font-semibold">GitHub Profile</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* EmailJS Integrated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-center space-y-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="font-display font-bold text-xl text-slate-100">Inquiry Sent Successfully!</h4>
                  <p className="text-xs font-mono text-emerald-300 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. Your project details have been sent to Vijayakumar K. You will receive a response within 24 hours.
                  </p>
                  <Button onClick={handleReset} variant="outline" size="sm">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-sm text-slate-100 font-sans outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-sm text-slate-100 font-sans outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-sm text-slate-100 font-mono outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option>Web Application</option>
                        <option>Android Application</option>
                        <option>Desktop Application</option>
                        <option>Automation / AI</option>
                        <option>Existing Project Improvement</option>
                        <option>Other / Full-Time Role</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">Estimated Budget Scope</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-sm text-slate-100 font-mono outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option>$500 - $1,000</option>
                        <option>$1,000 - $3,000</option>
                        <option>$3,000 - $5,000</option>
                        <option>$5,000+</option>
                        <option>Flexible / Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">Project Details & Workflows Needed</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe what you want to build, key user roles, software features, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-sm text-slate-100 font-sans outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
