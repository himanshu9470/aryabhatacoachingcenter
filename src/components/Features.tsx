import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaUsers, FaTrophy, FaHandsHelping } from 'react-icons/fa';

const features = [
    {
        icon: <FaChalkboardTeacher />,
        title: 'Experienced Teachers',
        description: 'Our faculty includes highly qualified educators with years of board exam coaching experience.',
        color: 'blue',
    },
    {
        icon: <FaUsers />,
        title: 'Small Batch Size',
        description: 'Limited students per batch to ensure personalized attention and better learning outcomes.',
        color: 'orange',
    },
    {
        icon: <FaTrophy />,
        title: 'High Board Results',
        description: '95% of our students consistently score above 80% in their board examinations.',
        color: 'green',
    },
    {
        icon: <FaHandsHelping />,
        title: 'Personal Attention',
        description: 'One-on-one mentoring and doubt-clearing sessions tailored to every student\'s needs.',
        color: 'cyan',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Features() {
    return (
        <section className="features" id="features">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Why Choose Us</span>
                    <h2 className="section-title">What Makes Us Different</h2>
                    <p className="section-subtitle">
                        We are committed to providing quality education that helps students excel in their
                        board exams and build a strong academic foundation.
                    </p>
                </motion.div>

                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} className="feature-card" variants={itemVariants}>
                            <div className={`feature-icon ${feature.color}`}>{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
