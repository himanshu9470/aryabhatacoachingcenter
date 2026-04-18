import { motion } from 'framer-motion';

const teachers = [
    {
        name: 'Rajesh Kumar',
        subject: 'Mathematics',
        exp: '15+ Years',
        bio: 'Expert in board exam math coaching with a track record of producing toppers every year.',
        gradient: 'from-primary-600 to-primary-800',
        initials: 'RK',
    },
    {
        name: 'Priya Sharma',
        subject: 'Physics',
        exp: '10+ Years',
        bio: 'M.Sc. Physics with deep expertise in competitive exam preparation and conceptual teaching.',
        gradient: 'from-accent-500 to-accent-700',
        initials: 'PS',
    },
    {
        name: 'Amit Singh',
        subject: 'Chemistry',
        exp: '12+ Years',
        bio: 'Known for simplifying complex organic and inorganic chemistry concepts for board exams.',
        gradient: 'from-green-500 to-emerald-700',
        initials: 'AS',
    },
    {
        name: 'Sunita Devi',
        subject: 'Biology',
        exp: '8+ Years',
        bio: 'Passionate educator specializing in NCERT-based biology teaching for Class 12 boards.',
        gradient: 'from-pink-500 to-rose-700',
        initials: 'SD',
    },
];

export default function Teachers() {
    return (
        <section id="teachers" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent-500 font-heading font-semibold text-sm uppercase tracking-wider">Our Faculty</span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Learn From The Best</h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Experienced educators dedicated to helping you succeed in your board examinations.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teachers.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Avatar */}
                            <div className={`bg-gradient-to-br ${t.gradient} p-8 flex justify-center`}>
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold text-white backdrop-blur-sm border-2 border-white/30">
                                    {t.initials}
                                </div>
                            </div>
                            {/* Info */}
                            <div className="p-5 text-center">
                                <h4 className="font-heading font-bold text-gray-900 text-lg">{t.name}</h4>
                                <p className="text-accent-500 font-semibold text-sm mt-0.5">{t.subject}</p>
                                <span className="inline-block bg-primary-50 text-primary-600 text-xs font-medium px-3 py-1 rounded-full mt-2">
                                    {t.exp} Experience
                                </span>
                                <p className="text-sm text-gray-500 mt-3 leading-relaxed">{t.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
