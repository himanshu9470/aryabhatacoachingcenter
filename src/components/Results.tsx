import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const results = [
    { name: 'Ananya Kumari', board: 'Class 12 Science – BSEB 2025', marks: '94.6%', quote: 'The teachers made complex concepts easy. I scored beyond my expectations!', gradient: 'from-accent-500 to-accent-700', initials: 'AK' },
    { name: 'Rahul Verma', board: 'Class 10 – BSEB 2025', marks: '91.2%', quote: 'Small batch size meant I could ask questions freely. Weekly tests kept me on track.', gradient: 'from-primary-600 to-primary-800', initials: 'RV' },
    { name: 'Sneha Singh', board: 'Class 12 Science – CBSE 2025', marks: '96.4%', quote: 'Rajesh Sir\'s mathematics teaching is amazing — toughest problems look simple!', gradient: 'from-green-500 to-emerald-700', initials: 'SS' },
    { name: 'Vikash Kumar', board: 'Class 10 – BSEB 2024', marks: '89.8%', quote: 'The doubt-solving sessions were a game changer. Teachers are always encouraging.', gradient: 'from-violet-500 to-purple-700', initials: 'VK' },
    { name: 'Priyanka Devi', board: 'Class 12 Science – BSEB 2024', marks: '92.8%', quote: 'Board exam strategy sessions helped me manage time perfectly during exams.', gradient: 'from-cyan-500 to-teal-700', initials: 'PD' },
    { name: 'Arjun Patel', board: 'Class 10 – CBSE 2024', marks: '95.0%', quote: 'The coaching center feels like a second home. Very supportive environment.', gradient: 'from-pink-500 to-rose-700', initials: 'AP' },
];

export default function Results() {
    return (
        <section id="results" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent-400 font-heading font-semibold text-sm uppercase tracking-wider">Student Results</span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2">Our Students Speak</h2>
                    <p className="text-white/60 mt-3 max-w-xl mx-auto">
                        Hear from our top-performing students about their journey with Aryabhata Coaching Center.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-0.5 text-accent-400 text-sm mb-3">
                                {[...Array(5)].map((_, j) => <FaStar key={j} />)}
                            </div>
                            <p className="text-sm text-white/80 leading-relaxed mb-5 italic">"{r.quote}"</p>
                            <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 bg-gradient-to-br ${r.gradient} rounded-full flex items-center justify-center text-sm font-bold`}>
                                        {r.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold text-sm">{r.name}</h4>
                                        <p className="text-xs text-white/50">{r.board}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-heading font-bold text-accent-400 text-lg">{r.marks}</div>
                                    <div className="text-[10px] text-white/40 uppercase tracking-wider">Score</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
