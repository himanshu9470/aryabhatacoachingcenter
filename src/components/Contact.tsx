import { motion } from 'framer-motion';
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi';

const info = [
    { icon: <HiLocationMarker />, title: 'Visit Us', text: 'Patut Bikram Road, Bihar, India' },
    { icon: <HiPhone />, title: 'Call Us', text: '+91 98765 43210' },
    { icon: <HiMail />, title: 'Email', text: 'info@aryabhatacoaching.com' },
    { icon: <HiClock />, title: 'Timings', text: 'Mon – Sat: 7:00 AM – 8:00 PM' },
];

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent-500 font-heading font-semibold text-sm uppercase tracking-wider">Contact Us</span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Get In Touch</h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Have questions? Reach out to us and we'll be happy to help.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Info + Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            {info.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-lg shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold text-gray-900 text-sm">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                title="Aryabhata Coaching Center Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d213.9997414696577!2d84.8156201674591!3d25.463952099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1773081599831!5m2!1sen!2sin"
                                className="w-full h-64"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-gray-50 rounded-2xl p-8"
                    >
                        <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition bg-white" />
                                <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition bg-white" />
                            </div>
                            <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition bg-white" />
                            <textarea rows={4} placeholder="Your Message..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition resize-none bg-white" />
                            <button type="submit" className="w-full py-3 bg-gradient-to-r from-primary-700 to-primary-800 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
