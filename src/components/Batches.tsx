import { motion } from 'framer-motion';
import { FaBook, FaFlask, FaCalculator, FaAtom, FaClock, FaUserTie, FaCalendarAlt } from 'react-icons/fa';

const batches = [
    {
        title: 'Foundation Batch – Class 10',
        subjects: ['Mathematics', 'Science', 'English', 'Social Science'],
        teacher: 'Rajesh Kumar',
        duration: '12 Months',
        startDate: 'April 2026',
        icon: <FaBook />,
        gradient: 'from-primary-600 to-primary-800',
        tag: 'Popular',
    },
    {
        title: 'Science Board Batch – Class 12',
        subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
        teacher: 'Priya Sharma',
        duration: '12 Months',
        startDate: 'April 2026',
        icon: <FaFlask />,
        gradient: 'from-green-500 to-emerald-700',
        tag: 'Best Seller',
    },
    {
        title: 'Mathematics Special Batch',
        subjects: ['Algebra', 'Calculus', 'Geometry', 'Statistics'],
        teacher: 'Rajesh Kumar',
        duration: '6 Months',
        startDate: 'May 2026',
        icon: <FaCalculator />,
        gradient: 'from-accent-500 to-accent-700',
        tag: 'New',
    },
    {
        title: 'Physics + Chemistry Crash Course',
        subjects: ['Physics', 'Chemistry'],
        teacher: 'Amit Singh',
        duration: '4 Months',
        startDate: 'June 2026',
        icon: <FaAtom />,
        gradient: 'from-violet-500 to-purple-700',
        tag: 'Crash Course',
    },
];

export default function Batches() {
    return (
        <section id="batches" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent-500 font-heading font-semibold text-sm uppercase tracking-wider">Our Batches</span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Choose Your Learning Path</h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Structured batches designed for Class 10th and 12th students with expert faculty and proven results.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {batches.map((batch, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Card Header */}
                            <div className={`bg-gradient-to-r ${batch.gradient} p-5 text-white relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                                <div className="flex items-start justify-between relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl backdrop-blur-sm">
                                            {batch.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-bold text-lg">{batch.title}</h3>
                                            <div className="flex flex-wrap gap-1.5 mt-1">
                                                {batch.subjects.map((s, j) => (
                                                    <span key={j} className="text-[10px] bg-white/20 rounded-full px-2 py-0.5">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="bg-white/25 text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1 backdrop-blur-sm">
                                        {batch.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5">
                                <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <FaUserTie className="text-primary-500" />
                                        <span>{batch.teacher}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <FaClock className="text-accent-500" />
                                        <span>{batch.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <FaCalendarAlt className="text-green-500" />
                                        <span>{batch.startDate}</span>
                                    </div>
                                </div>
                                <button className="w-full py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-500/25 transition-all">
                                    Enroll Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
