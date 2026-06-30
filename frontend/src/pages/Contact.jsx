import React, { useState } from 'react';
import { api } from '../services/api';
import { Mail, MessageSquare, User, CheckCircle, AlertCircle, Send } from 'lucide-react';
import Reveal from '../components/Reveal';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    api.post('/contact/', form)
      .then(() => {
        setSubmitSuccess(true);
        setStatus('Message sent successfully! I\'ll get back to you soon.');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch(() => {
        setStatus('Error sending message. Please try again.');
        setSubmitSuccess(false);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="bg-white text-ink min-h-screen">
      <section className="bg-black text-white pt-28 pb-20 px-6 text-center">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tightest mb-6">Get In Touch</h1>
          <p className="text-lg text-white/60">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
        </Reveal>
      </section>

      <div className="max-w-content mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Reveal delay={0}>
            <div className="border border-mist rounded-2xl p-8 h-full">
              <Mail className="text-accent mb-4" size={26} strokeWidth={1.5} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:marvindmohanta@gmail.com" className="text-graphite hover:text-accent transition-colors text-sm">
                marvindmohanta@gmail.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="border border-mist rounded-2xl p-8 h-full">
              <MessageSquare className="text-accent mb-4" size={26} strokeWidth={1.5} />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/arvindmohanta" target="_blank" rel="noopener noreferrer" className="text-graphite hover:text-accent transition-colors text-sm">
                linkedin.com/in/arvindmohanta
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border border-mist rounded-2xl p-8 h-full">
              <User className="text-accent mb-4" size={26} strokeWidth={1.5} />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <a href="https://github.com/ArvindMohanta" target="_blank" rel="noopener noreferrer" className="text-graphite hover:text-accent transition-colors text-sm">
                github.com/ArvindMohanta
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="bg-mist rounded-3xl p-10 md:p-14">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-graphite mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white border border-mist rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-ink placeholder-graphite/60"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-graphite mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white border border-mist rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-ink placeholder-graphite/60"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-graphite mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your project or inquiry..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white border border-mist rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-ink placeholder-graphite/60 resize-none"
                />
              </div>

              {status && (
                <div className={`flex items-center gap-3 p-4 rounded-lg ${submitSuccess ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  {submitSuccess ? (
                    <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  ) : (
                    <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                  )}
                  <span className={submitSuccess ? 'text-green-700 text-sm' : 'text-red-700 text-sm'}>{status}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full pill-btn bg-accent text-white hover:bg-accent-dark disabled:bg-graphite/40 gap-2"
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-center text-graphite text-sm">
                I'll get back to you as soon as possible. Looking forward to connecting!
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
