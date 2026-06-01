import { motion } from 'framer-motion';

const WhyChooseSection = () => (
  <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-14 lg:py-20">
    <div className="mx-auto grid max-w-7xl gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
      <div>
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-crown-gold">Why Crown Home Spaces</p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">A strategic partner for luxury architecture and construction.</h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-crown-beige/90 sm:mt-6 sm:text-base sm:leading-7 md:text-base md:leading-8">
          We combine design direction, engineering rigor, and refined finishes to deliver premium projects that stand the test of time.
        </p>
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:gap-6">
        {[
          { title: 'Design Excellence', detail: 'Creative planning and interior styling for elevated brand experiences.' },
          { title: 'Project Delivery', detail: 'On-time procurement, scheduling, and on-site supervision.' },
          { title: 'Technical Precision', detail: 'MEP, civil, and structural planning for robust systems.' },
          { title: 'Local Expertise', detail: 'Kondapur-focused execution with compliance and local approvals.' }
        ].map((item) => (
          <motion.article key={item.title} whileHover={{ y: -4 }} className="rounded-2xl sm:rounded-[32px] border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 transition hover:border-crown-gold/30 hover:bg-white/10">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-crown-beige/90">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
