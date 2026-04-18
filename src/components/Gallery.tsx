import { motion } from 'framer-motion';

const images = [
    { src: '/gallery-1.png', label: 'Modern Classroom', span: 'md:col-span-2' },
    { src: '/gallery-2.png', label: 'Teaching Session', span: '' },
    { src: '/gallery-3.png', label: 'Group Study', span: '' },
    { src: '/hero-bg.png', label: 'Learning Environment', span: 'md:col-span-2' },
    { src: '/gallery-2.png', label: 'Interactive Lecture', span: '' },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent-500 font-heading font-semibold text-sm uppercase tracking-wider">Gallery</span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mt-2">A Glimpse Inside Our Center</h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Take a virtual tour of our classrooms, teaching sessions, and student activities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className={`relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/3] ${img.span}`}
                        >
                            <img
                                src={img.src}
                                alt={img.label}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                <p className="text-white font-medium">{img.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
