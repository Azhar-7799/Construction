import { useState } from 'react';
import SEO from '../components/SEO.jsx';
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { googleMapsUrl, googleMapsEmbedUrl, businessStreetAddress } from '../constants/location.js';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <SEO title="Contact | Crown Home Spaces" description={`Contact Crown Home Spaces at ${businessStreetAddress} for luxury interiors, turnkey projects, and elite architectural services in Hyderabad.`} />
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Contact</p>
            <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Connect with our Kondapur team for your next premium project.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-crown-beige/90">
              Reach out by WhatsApp, email, phone, or the contact form. We respond swiftly and provide detailed guidance for luxury interiors, construction, and architectural services.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="inline-flex rounded-full bg-crown-gold/10 p-4 text-crown-gold">
                  <FaWhatsapp size={24} />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-white">WhatsApp</h2>
                <p className="mt-3 text-sm leading-7 text-crown-beige/90">+91 95530 41347</p>
                <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm text-crown-gold underline">Message us now</a>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="inline-flex rounded-full bg-crown-gold/10 p-4 text-crown-gold">
                  <FaEnvelope size={24} />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-white">Email</h2>
                <p className="mt-3 text-sm leading-7 text-crown-beige/90">crownhomespaces@gmail.com</p>
                <a href="mailto:crownhomespaces@gmail.com" className="mt-4 inline-flex text-sm text-crown-gold underline">Send an email</a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Request a consultation</p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm text-crown-beige/90">
                    Name
                    <input type="text" name="name" value={form.name} onChange={handleChange} required className="mt-2 w-full rounded-3xl border border-white/10 bg-crown-dark/70 px-4 py-3 text-white outline-none transition focus:border-crown-gold" />
                  </label>
                  <label className="block text-sm text-crown-beige/90">
                    Email
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-3xl border border-white/10 bg-crown-dark/70 px-4 py-3 text-white outline-none transition focus:border-crown-gold" />
                  </label>
                </div>
                <label className="block text-sm text-crown-beige/90">
                  Phone
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="mt-2 w-full rounded-3xl border border-white/10 bg-crown-dark/70 px-4 py-3 text-white outline-none transition focus:border-crown-gold" />
                </label>
                <label className="block text-sm text-crown-beige/90">
                  Project brief
                  <textarea name="message" value={form.message} onChange={handleChange} rows="5" required className="mt-2 w-full rounded-3xl border border-white/10 bg-crown-dark/70 px-4 py-3 text-white outline-none transition focus:border-crown-gold" />
                </label>
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-crown-gold px-6 py-4 text-sm font-semibold text-crown-dark transition hover:bg-white">Submit Request</button>
                {submitted && <p className="text-sm text-crown-gold">Thank you. Your request has been submitted.</p>}
              </form>
            </div>

            <div className="grid gap-6 rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-glow">
              <div className="inline-flex items-center gap-4 rounded-3xl bg-crown-rich/70 p-5">
                <FaMapMarkerAlt className="text-crown-gold" />
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Location</p>
                  <p className="mt-2 text-sm text-crown-beige/90">{businessStreetAddress}</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-4 rounded-3xl bg-crown-rich/70 p-5">
                <FaPhoneAlt className="text-crown-gold" />
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Phone</p>
                  <p className="mt-2 text-sm text-crown-beige/90">+91 95530 41347 · +91 87122 17250</p>
                </div>
              </div>
              <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-glow">
                <iframe
                  title="Crown Home Spaces Location"
                  src={googleMapsEmbedUrl}
                  className="h-64 w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
