import { motion } from 'framer-motion';
import { FaPlay, FaTrophy, FaChartLine, FaClock, FaCheckCircle } from 'react-icons/fa';

const tests = [
    { title: 'Weekly Math Test', subject: 'Mathematics', questions: 30, duration: '60 min', status: 'Live' },
    { title: 'Physics Chapter Test', subject: 'Physics', questions: 25, duration: '45 min', status: 'Upcoming' },
    { title: 'Chemistry Mock', subject: 'Chemistry', questions: 40, duration: '90 min', status: 'Completed' },
    { title: 'Full Board Mock', subject: 'All Subjects', questions: 100, duration: '180 min', status: 'Live' },
];

const leaderboard = [
    { rank: 1, name: 'Ananya K.', score: '96/100', badge: '🥇' },
    { rank: 2, name: 'Rahul V.', score: '94/100', badge: '🥈' },
    { rank: 3, name: 'Sneha S.', score: '92/100', badge: '🥉' },
    { rank: 4, name: 'Vikash K.', score: '89/100', badge: '' },
    { rank: 5, name: 'Priyanka D.', score: '87/100', badge: '' },
];

export default function TestSeries() {
    return (
        <section id="test-series" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent-500 font-heading font-semibold text-sm uppercase tracking-wider">Test Series</span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Practice Makes Perfect</h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Take regular mock tests, track your performance, and compete with fellow students.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Tests List */}
                    <div className="lg:col-span-2 space-y-4">
                        {tests.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="bg-white rounded-xl border border-gray-100 p-5 flex items-center justify-between hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg ${t.status === 'Live' ? 'bg-green-50 text-green-600' :
                                            t.status === 'Completed' ? 'bg-gray-100 text-gray-400' :
                                                'bg-accent-50 text-accent-500'
                                        }`}>
                                        {t.status === 'Completed' ? <FaCheckCircle /> : <FaPlay />}
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-gray-900">{t.title}</h4>
                                        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                                            <span>{t.subject}</span>
                                            <span>•</span>
                                            <span>{t.questions} Qs</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1"><FaClock /> {t.duration}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${t.status === 'Live' ? 'bg-green-100 text-green-700' :
                                            t.status === 'Completed' ? 'bg-gray-100 text-gray-500' :
                                                'bg-accent-100 text-accent-700'
                                        }`}>
                                        {t.status}
                                    </span>
                                    {t.status !== 'Completed' && (
                                        <button className="px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all">
                                            {t.status === 'Live' ? 'Start Test' : 'Remind Me'}
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Leaderboard + Performance */}
                    <div className="space-y-6">
                        {/* Leaderboard */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-6 text-white"
                        >
                            <div className="flex items-center gap-2 mb-5">
                                <FaTrophy className="text-accent-400" />
                                <h3 className="font-heading font-bold text-lg">Leaderboard</h3>
                            </div>
                            <div className="space-y-3">
                                {leaderboard.map((l) => (
                                    <div key={l.rank} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-2.5">
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-bold w-6">{l.badge || `#${l.rank}`}</span>
                                            <span className="text-sm font-medium">{l.name}</span>
                                        </div>
                                        <span className="text-sm font-bold text-accent-300">{l.score}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Performance Chart placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white rounded-2xl border border-gray-100 p-6"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <FaChartLine className="text-primary-600" />
                                <h3 className="font-heading font-bold text-gray-900">Your Progress</h3>
                            </div>
                            {/* Simple bar chart */}
                            <div className="space-y-3">
                                {[
                                    { label: 'Math', pct: 85, color: 'bg-primary-500' },
                                    { label: 'Physics', pct: 72, color: 'bg-green-500' },
                                    { label: 'Chemistry', pct: 90, color: 'bg-accent-500' },
                                    { label: 'Biology', pct: 68, color: 'bg-pink-500' },
                                ].map((b, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                                            <span>{b.label}</span>
                                            <span>{b.pct}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full ${b.color} rounded-full`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${b.pct}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
