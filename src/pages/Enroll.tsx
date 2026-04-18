import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaArrowLeft, FaCheckCircle, FaUser, FaPhone, FaEnvelope, FaBookOpen } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnnouncementBar from '../components/AnnouncementBar';

export default function Enroll() {
    const [searchParams] = useSearchParams();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        batch: searchParams.get('batch') || '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="font-body bg-gray-50 min-h-screen">
            <AnnouncementBar />
            <Navbar />

            <main className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-4">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 transition mb-8 group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden"
                    >
                        {submitted ? (
                            <div className="p-12 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                                    className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6"
                                >
                                    <FaCheckCircle />
                                </motion.div>
                                <h1 className="font-heading text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h1>
                                <p className="text-gray-500 max-w-md mx-auto mb-8">
                                    Thank you for choosing Aryabhata Coaching Center. Our academic counselor will contact you within 24 hours to guide you through the next steps.
                                </p>
                                <Link 
                                    to="/" 
                                    className="inline-block px-8 py-3 bg-primary-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                                >
                                    Return to Home
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col md:flex-row">
                                {/* Sidebar info */}
                                <div className="md:w-1/3 bg-gradient-to-br from-primary-600 to-primary-800 p-8 text-white">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl mb-6 backdrop-blur-sm">
                                        <FaGraduationCap />
                                    </div>
                                    <h2 className="font-heading text-2xl font-bold mb-4">Start Your Journey</h2>
                                    <p className="text-white/80 text-sm leading-relaxed mb-8">
                                        Join our premium batches and get access to top-tier education, specialized study materials, and personalized mentoring.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="w-2 h-2 bg-accent-400 rounded-full" />
                                            <span>Expert Faculty</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="w-2 h-2 bg-accent-400 rounded-full" />
                                            <span>Personalized Attention</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="w-2 h-2 bg-accent-400 rounded-full" />
                                            <span>Proven Results</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="md:w-2/3 p-8 md:p-12">
                                    <h1 className="font-heading text-2xl font-bold text-gray-900 mb-2">Enrollment Form</h1>
                                    <p className="text-gray-500 text-sm mb-8">Please fill in your details correctly. All fields marked * are required.</p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                                    <FaUser className="text-primary-500" /> Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Rahul Sharma"
                                                    className="w-full px-4 py-3 border border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                                    <FaPhone className="text-primary-500" /> Phone Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="e.g. +91 98765 43210"
                                                    className="w-full px-4 py-3 border border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                                <FaEnvelope className="text-primary-500" /> Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="e.g. rahul@example.com"
                                                className="w-full px-4 py-3 border border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition"
                                            />
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                                    <FaGraduationCap className="text-primary-500" /> Choose Batch *
                                                </label>
                                                <select
                                                    name="batch"
                                                    required
                                                    value={formData.batch}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition appearance-none"
                                                >
                                                    <option value="" disabled>Select a batch</option>
                                                    <option>Foundation Batch – Class 10</option>
                                                    <option>Science Board Batch – Class 12</option>
                                                    <option>Mathematics Special Batch</option>
                                                    <option>Physics + Chemistry Crash Course</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                                    <FaBookOpen className="text-primary-500" /> Subject Interest *
                                                </label>
                                                <select
                                                    name="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition appearance-none"
                                                >
                                                    <option value="" disabled>Select subjects</option>
                                                    <option>All Subjects</option>
                                                    <option>Physics</option>
                                                    <option>Chemistry</option>
                                                    <option>Mathematics</option>
                                                    <option>Biology</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Any Questions? (Optional)</label>
                                            <textarea
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Let us know if you have any queries..."
                                                className="w-full px-4 py-3 border border-gray-100 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl shadow-lg shadow-accent-500/30 hover:-translate-y-0.5 active:scale-95 transition-all text-lg"
                                        >
                                            Confirm Enrollment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
