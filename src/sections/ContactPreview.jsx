import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { googleMapsUrl, businessStreetAddress } from '../constants/location.js';

const ContactPreview = () => (
  <section className="relative overflow-hidden border-t border-white/10 px-6 py-20 sm:px-10 lg:px-14">
    <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-r from-[#1b1611]/90 via-[#2b2218]/90 to-[#1c1612]/90 p-10 shadow-glow sm:p-14">
      <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Let's build together</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Start your next flagship project with confidence.</h2>
          <p className="mt-6 max-w-xl leading-8 text-crown-beige/90 sm:text-lg">
            Connect with our Kondapur team for a consultation that blends luxury interiors, turnkey delivery, and premium architectural excellence.
          </p>
          <div className="mt-8 space-y-4 text-sm text-crown-beige/90">
            <a href="mailto:crownhomespaces@gmail.com" className="inline-flex items-center gap-3 text-white transition hover:text-crown-gold"><FaEnvelope /> Email: crownhomespaces@gmail.com</a>
            <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white transition hover:text-crown-gold"><FaWhatsapp /> +91 95530 41347</a>
            <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white transition hover:text-crown-gold"><FaMapMarkerAlt /> {businessStreetAddress}</a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="rounded-[32px] border border-white/10 bg-black/20 p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Follow our journey</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://instagram.com/crownhomespaces" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white transition hover:border-crown-gold/40 hover:text-crown-gold">
              <FaInstagram /> Instagram
            </a>
            <a href="https://wa.me/918712217250" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white transition hover:border-crown-gold/40 hover:text-crown-gold">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactPreview;
