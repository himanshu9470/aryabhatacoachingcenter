import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi';

const contactInfo = [
    {
        icon: <HiLocationMarker />,
        title: 'Visit Us',
        text: 'Patut Bikram Road, Bihar, India',
    },
    {
        icon: <HiPhone />,
        title: 'Call Us',
        text: '+91 98765 43210',
    },
    {
        icon: <HiMail />,
        title: 'Email Us',
        text: 'info@aryabhatacoaching.com',
    },
    {
        icon: <HiClock />,
        title: 'Timings',
        text: 'Mon – Sat: 7:00 AM – 8:00 PM',
    },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Contact Us</span>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have questions about admissions? Fill out the form below and we'll get
                        back to you shortly.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    {/* Left — Info & Map */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {contactInfo.map((info, index) => (
                            <div key={index} className="contact-info-card">
                                <div className="contact-info-icon">{info.icon}</div>
                                <div>
                                    <h4>{info.title}</h4>
                                    <p>{info.text}</p>
                                </div>
                            </div>
                        ))}

                        <div className="contact-map">
                            <iframe
                                title="Aryabhata Coaching Center Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d213.9997414696577!2d84.8156201674591!3d25.463952099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1773081599831!5m2!1sen!2sin"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </motion.div>

                    {/* Right — Contact Form */}
                    <motion.div
                        className="contact-form"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3>Admission Enquiry</h3>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{
                                    textAlign: 'center',
                                    padding: '3rem 1rem',
                                    color: 'var(--color-success)',
                                }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                                <h3 style={{ color: 'var(--color-gray-900)', marginBottom: '0.5rem' }}>
                                    Thank You!
                                </h3>
                                <p style={{ color: 'var(--color-gray-600)' }}>
                                    We've received your enquiry. Our team will contact you soon.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="contact-name">Full Name</label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="contact-phone"
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="contact-email">Email Address</label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-class">Select Class</label>
                                        <select id="contact-class" required defaultValue="">
                                            <option value="" disabled>
                                                Choose your class
                                            </option>
                                            <option value="10th">Class 10th</option>
                                            <option value="12th-science">Class 12th Science</option>
                                            <option value="math-special">Mathematics Special</option>
                                            <option value="physics-chemistry">Physics & Chemistry</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-message">Message</label>
                                    <textarea
                                        id="contact-message"
                                        placeholder="Any questions or additional information..."
                                        rows={4}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary form-submit-btn">
                                    Submit Enquiry
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
