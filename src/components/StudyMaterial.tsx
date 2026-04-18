import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf, FaFlask, FaCalculator, FaClipboardList, FaPenFancy } from 'react-icons/fa';

const materials = [
    { icon: <FaFilePdf />, title: 'Class 10 Notes', desc: 'Complete chapter-wise notes for all subjects.', color: 'bg-primary-50 text-primary-600' },
    { icon: <FaFilePdf />, title: 'Class 12 Notes', desc: 'Detailed notes for Physics, Chemistry, Math & Bio.', color: 'bg-green-50 text-green-600' },
    { icon: <FaCalculator />, title: 'Important Formulas', desc: 'Quick formula sheets for last-minute revision.', color: 'bg-accent-50 text-accent-600' },
    { icon: <FaClipboardList />, title: 'Board Sample Papers', desc: 'Previous year papers with answer keys.', color: 'bg-violet-50 text-violet-600' },
    { icon: <FaPenFancy />, title: 'Practice Questions', desc: 'Topic-wise practice questions with solutions.', color: 'bg-pink-50 text-pink-600' },
    { icon: <FaFlask />, title: 'Lab Practical Notes', desc: 'Step-by-step practical guides for Science.', color: 'bg-cyan-50 text-cyan-600' },
];

export default function StudyMaterial() {
    return (
        <section id="study-material" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent-500 font-heading font-semibold text-sm uppercase tracking-wider">Study Material</span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Download Free Resources</h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Access high-quality study materials prepared by our expert faculty for board exam success.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {materials.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-4"
                        >
                            <div className={`w-12 h-12 ${m.color} rounded-xl flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform`}>
                                {m.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-heading font-bold text-gray-900 mb-1">{m.title}</h3>
                                <p className="text-sm text-gray-500 mb-3">{m.desc}</p>
                                <button className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition">
                                    <FaDownload className="text-xs" /> Download PDF
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
