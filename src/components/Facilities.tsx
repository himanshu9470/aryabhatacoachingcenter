import { motion } from 'framer-motion';
import { HiDesktopComputer, HiClipboardCheck, HiQuestionMarkCircle, HiBookOpen, HiLightBulb } from 'react-icons/hi';

const facilities = [
    {
        icon: <HiDesktopComputer />,
        title: 'Smart Classrooms',
        desc: 'Technology-enabled classrooms with projectors and digital tools for immersive learning.',
        color: 'from-primary-500 to-primary-700',
        light: 'bg-primary-50 text-primary-600',
    },
    {
        icon: <HiClipboardCheck />,
        title: 'Weekly Tests',
        desc: 'Regular assessments to track progress and identify areas needing improvement.',
        color: 'from-green-500 to-emerald-700',
        light: 'bg-green-50 text-green-600',
    },
    {
        icon: <HiQuestionMarkCircle />,
        title: 'Doubt Solving Sessions',
        desc: 'Dedicated doubt-clearing sessions after every class so no student falls behind.',
        color: 'from-accent-500 to-accent-700',
        light: 'bg-accent-50 text-accent-600',
    },
    {
        icon: <HiBookOpen />,
        title: 'Study Materials',
        desc: 'Comprehensive materials, practice papers, and previous year question banks provided.',
        color: 'from-violet-500 to-purple-700',
        light: 'bg-violet-50 text-violet-600',
    },
    {
        icon: <HiLightBulb />,
        title: 'Board Exam Strategy',
        desc: 'Expert guidance on exam strategy, time management, and answering techniques.',
        color: 'from-cyan-500 to-teal-700',
        light: 'bg-cyan-50 text-cyan-600',
    },
];

export default function Facilities() {
    return (
        <section id="facilities" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent-500 font-heading font-semibold text-sm uppercase tracking-wider">Facilities</span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Everything You Need to Succeed</h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        A comprehensive learning environment with modern facilities to support your academic journey.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
                        >
                            <div className={`w-14 h-14 ${f.light} rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                {f.icon}
                            </div>
                            <h3 className="font-heading font-bold text-gray-900 mb-2">{f.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
