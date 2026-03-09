import { motion } from 'framer-motion';

const galleryItems = [
    { src: '/gallery-1.png', label: 'Modern Classroom' },
    { src: '/gallery-2.png', label: 'Teaching Session' },
    { src: '/gallery-3.png', label: 'Group Study' },
    { src: '/hero-bg.png', label: 'Learning Environment' },
    { src: '/gallery-2.png', label: 'Interactive Teaching' },
    { src: '/gallery-1.png', label: 'Study Hall' },
];

export default function Gallery() {
    return (
        <section className="gallery section" id="gallery">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Gallery</span>
                    <h2 className="section-title">A Glimpse Inside Our Center</h2>
                    <p className="section-subtitle">
                        Take a virtual tour of our classrooms, teaching sessions, and student activities.
                    </p>
                </motion.div>

                <div className="gallery-grid">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <img src={item.src} alt={item.label} loading="lazy" />
                            <div className="gallery-item-overlay">
                                <p>{item.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
