import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate } from 'react-icons/fa';

export default function AdmissionForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="admission" className="py-20 bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl text-white text-2xl mb-4 backdrop-blur-sm">
                        <FaUserGraduate />
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">Apply for Admission</h2>
                    <p className="text-white/70 mt-3 max-w-lg mx-auto">
                        Fill the form below and our team will get in touch with you for the admission process.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-2xl"
                >
                    {submitted ? (
                        <div className="text-center py-10">
                            <div className="text-5xl mb-4">🎉</div>
                            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                            <p className="text-gray-500">We'll contact you shortly regarding your admission.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Student Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter full name"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="Enter phone number"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition"
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Select Class</label>
                                    <select
                                        required
                                        defaultValue=""
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition bg-white"
                                    >
                                        <option value="" disabled>Choose class</option>
                                        <option value="10th">Class 10th</option>
                                        <option value="12th">Class 12th</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject Interest</label>
                                    <select
                                        defaultValue=""
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition bg-white"
                                    >
                                        <option value="" disabled>Choose subject</option>
                                        <option>All Subjects</option>
                                        <option>Mathematics</option>
                                        <option>Physics & Chemistry</option>
                                        <option>Biology</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message (Optional)</label>
                                <textarea
                                    rows={3}
                                    placeholder="Any questions or additional info..."
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-accent-500/30 transition-all text-lg"
                            >
                                Submit Application
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
