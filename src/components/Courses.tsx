import { motion } from 'framer-motion';
import { FaBook, FaFlask, FaCalculator, FaAtom, FaClock, FaArrowRight } from 'react-icons/fa';

const courses = [
    {
        icon: <FaBook />,
        title: 'Class 10 Board Preparation',
        desc: 'Comprehensive coaching for all subjects — Mathematics, Science, Social Science, English, and Hindi. Designed for BSEB & CBSE board patterns.',
        duration: '12 Months',
        color: 'bg-primary-500',
        light: 'bg-primary-50 text-primary-600',
    },
    {
        icon: <FaFlask />,
        title: 'Class 12 Science Preparation',
        desc: 'In-depth preparation for Physics, Chemistry, Biology, and Mathematics aligned with the latest board exam syllabus.',
        duration: '12 Months',
        color: 'bg-green-500',
        light: 'bg-green-50 text-green-600',
    },
    {
        icon: <FaCalculator />,
        title: 'Mathematics Coaching',
        desc: 'Intensive math coaching covering Algebra, Calculus, Geometry, and Statistics with extensive problem-solving practice.',
        duration: '6 Months',
        color: 'bg-accent-500',
        light: 'bg-accent-50 text-accent-600',
    },
    {
        icon: <FaAtom />,
        title: 'Physics & Chemistry Coaching',
        desc: 'Specialized coaching with practical demonstrations, numerical problem practice, and conceptual clarity sessions.',
        duration: '8 Months',
        color: 'bg-violet-500',
        light: 'bg-violet-50 text-violet-600',
    },
];

export default function Courses() {
    return (
        <section id="courses" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent-500 font-heading font-semibold text-sm uppercase tracking-wider">Courses</span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Programs We Offer</h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Structured courses to help students master every subject and excel in board exams.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                        >
                            <div className={`w-14 h-14 ${c.light} rounded-xl flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform`}>
                                {c.icon}
                            </div>
                            <h3 className="font-heading font-bold text-gray-900 mb-2">{c.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{c.desc}</p>
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-1 text-xs text-gray-400">
                                    <FaClock /> {c.duration}
                                </span>
                                <button className="flex items-center gap-1 text-sm font-semibold text-accent-500 hover:text-accent-600 transition">
                                    Enroll <FaArrowRight className="text-xs" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
