import { motion } from 'framer-motion';
import { FaArrowRight, FaGraduationCap, FaStar, FaUsers } from 'react-icons/fa';

export default function HeroSection() {
    const scroll = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10 bg-[url('/hero-bg.png')] bg-cover bg-center" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full translate-y-1/2 -translate-x-1/3" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent-500/5 rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-white"
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Admissions Open 2026-27
                    </div>

                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                        <span className="text-accent-400">Aryabhata</span>
                        <br />
                        Coaching Center
                    </h1>

                    <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                        Best Coaching for Class 10th &amp; 12th Board Preparation. Expert faculty,
                        proven results, and a learning environment that brings out the best in every student.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        <button
                            onClick={() => scroll('#batches')}
                            className="px-7 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                        >
                            Explore Batches <FaArrowRight className="text-sm" />
                        </button>
                        <button
                            onClick={() => scroll('#admission')}
                            className="px-7 py-3 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white hover:text-primary-800 transition-all"
                        >
                            Join Now
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 max-w-md">
                        {[
                            { icon: <FaUsers />, num: '500+', label: 'Students' },
                            { icon: <FaStar />, num: '95%', label: 'Board Results' },
                            { icon: <FaGraduationCap />, num: '10+', label: 'Teachers' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="text-accent-400 text-lg mb-1">{s.icon}</div>
                                <div className="font-heading text-2xl font-bold">{s.num}</div>
                                <div className="text-xs text-white/60">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="hidden lg:flex justify-center"
                >
                    <div className="relative">
                        <img
                            src="/hero-bg.png"
                            alt="Students at Aryabhata Coaching Center"
                            className="rounded-2xl shadow-2xl max-w-md w-full"
                        />
                        {/* Floating Badge 1 */}
                        <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg flex items-center gap-3 animate-float">
                            <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center">
                                <FaGraduationCap />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Board Toppers</p>
                                <p className="text-xs text-gray-500">Every Year</p>
                            </div>
                        </div>
                        {/* Floating Badge 2 */}
                        <div className="absolute -top-2 -right-4 bg-white rounded-xl p-3 shadow-lg flex items-center gap-3 animate-float" style={{ animationDelay: '1.5s' }}>
                            <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center">
                                <FaStar />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">95% Results</p>
                                <p className="text-xs text-gray-500">Consistent</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
