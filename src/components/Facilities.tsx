import { motion } from 'framer-motion';
import { HiDesktopComputer, HiQuestionMarkCircle, HiClipboardCheck, HiBookOpen, HiLightBulb } from 'react-icons/hi';

const facilities = [
    {
        icon: <HiDesktopComputer />,
        title: 'Smart Classrooms',
        description: 'Technology-enabled classrooms with projectors and digital learning tools for an immersive learning experience.',
    },
    {
        icon: <HiQuestionMarkCircle />,
        title: 'Doubt Solving Sessions',
        description: 'Dedicated doubt-clearing sessions after every class to ensure no student is left behind.',
    },
    {
        icon: <HiClipboardCheck />,
        title: 'Weekly Tests',
        description: 'Regular weekly assessments to track progress and identify areas that need improvement.',
    },
    {
        icon: <HiBookOpen />,
        title: 'Study Materials',
        description: 'Comprehensive study materials, practice papers, and previous year question banks provided to every student.',
    },
    {
        icon: <HiLightBulb />,
        title: 'Board Exam Strategy',
        description: 'Expert guidance on exam strategies, time management, and answering techniques for maximum marks.',
    },
];

export default function Facilities() {
    return (
        <section className="facilities section" id="facilities">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Our Facilities</span>
                    <h2 className="section-title">Everything You Need to Succeed</h2>
                    <p className="section-subtitle">
                        We provide a comprehensive learning environment equipped with modern
                        facilities to support your academic journey.
                    </p>
                </motion.div>

                <div className="facilities-grid">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            className="facility-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <div className="facility-icon">{facility.icon}</div>
                            <h3>{facility.title}</h3>
                            <p>{facility.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
