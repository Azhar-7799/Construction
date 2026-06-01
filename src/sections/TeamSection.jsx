import { motion } from 'framer-motion';
import { team } from '../data/team.js';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { founderImage } from '../assets/images/founder/index.js';

const TeamSection = ({ featuredOnly = false }) => {
  const lead = team.find((m) => m.featured) || team[0];
  const others = team.filter((m) => m !== lead);

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-2 sm:mb-10">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-crown-gold">Leadership</p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:mt-3 sm:text-3xl md:text-4xl lg:text-5xl">Meet our leadership & engineering team</h2>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          <motion.article initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative col-span-full rounded-2xl sm:rounded-[32px] border border-crown-gold/30 bg-gradient-to-br from-[#281f18] to-[#1d140d] p-5 sm:p-6 md:p-8 shadow-[0_30px_80px_rgba(198,156,109,0.08)] lg:col-span-2">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="relative flex-shrink-0">
                <div className="h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-lg sm:rounded-2xl border border-crown-gold bg-crown-rich p-0 flex-shrink-0">
                  <img src={lead.image || founderImage} alt={lead.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="absolute -right-3 -top-3 rounded-full bg-crown-gold p-2 text-crown-dark shadow-glow">★</div>
              </div>
              <div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <h3 className="text-lg sm:text-2xl font-semibold text-white">{lead.name}</h3>
                  <span className="rounded-full bg-crown-gold/10 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-crown-gold text-nowrap">{lead.role}</span>
                </div>
                <p className="mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm leading-5 sm:leading-7 text-crown-beige/90">{lead.summary}</p>

                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <a href={lead.socials.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs sm:text-sm text-white transition hover:bg-white/10">
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a href={lead.socials.email} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-3 py-2 text-xs sm:text-sm text-crown-beige transition hover:bg-white/5">
                    <FiMail /> Email
                  </a>
                </div>

                <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3 text-center">
                  <div>
                    <p className="text-lg sm:text-2xl font-semibold text-white">{lead.projects}</p>
                    <p className="mt-1 text-xs text-crown-beige/90">Projects</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-semibold text-white">{lead.experience}</p>
                    <p className="mt-1 text-xs text-crown-beige/90">Experience</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-base font-semibold text-crown-gold">{lead.specialization}</p>
                    <p className="mt-1 text-xs text-crown-beige/90">Focus</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {!featuredOnly && others.map((member) => (
            <motion.article
              whileHover={{ y: -4, scale: 1.01 }}
              key={member.id}
              className="group relative overflow-hidden rounded-2xl sm:rounded-[24px] border border-white/10 bg-white/5 p-4 sm:p-6 shadow-glow transition hover:border-crown-gold/30 hover:bg-white/10"
            >
              <div className="absolute -inset-px rounded-2xl sm:rounded-[24px] opacity-0 transition group-hover:opacity-100">
                <div className="h-full w-full rounded-2xl sm:rounded-[24px] border-2 border-crown-gold/40" />
              </div>
              <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                <div className="h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-md border border-white/10 bg-crown-rich flex-shrink-0">
                  {member.image ? (
                    <img src={member.image} alt={member.name} loading="lazy" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[10px] text-crown-beige/80">
                      Photo coming soon
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-semibold text-white">{member.name}</p>
                  <p className="mt-1 text-[10px] sm:text-xs text-crown-beige/90">{member.role}</p>
                  <div className="mt-2 flex flex-wrap gap-1 sm:gap-2">
                    {member.experience && <span className="rounded-full bg-crown-rich/40 px-2 py-0.5 text-[8px] sm:text-xs text-crown-beige">{member.experience}</span>}
                    {member.projects && <span className="rounded-full bg-crown-rich/40 px-2 py-0.5 text-[8px] sm:text-xs text-crown-beige">{member.projects}</span>}
                  </div>
                  {member.skills && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {member.skills.slice(0, 2).map((s) => (
                        <span key={s} className="text-[8px] sm:text-xs text-crown-beige/80">• {s}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
