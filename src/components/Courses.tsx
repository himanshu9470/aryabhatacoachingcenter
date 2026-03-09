import { motion } from 'framer-motion';
import { FaBook, FaFlask, FaCalculator, FaAtom, FaClock } from 'react-icons/fa';

const courses = [
    {
        icon: <FaBook />,
        title: 'Class 10th Board Preparation',
        description:
            'Comprehensive coaching for all subjects including Mathematics, Science, Social Science, English, and Hindi. Focused on BSEB and CBSE board patterns.',
        duration: '12 Months',
        color: 'linear-gradient(135deg, #1e3a8a, #3b60c4)',
    },
    {
        icon: <FaFlask />,
        title: 'Class 12th Science Preparation',
        description:
            'In-depth preparation for Physics, Chemistry, Biology, and Mathematics. Aligned with the latest board exam syllabus and exam patterns.',
        duration: '12 Months',
        color: 'linear-gradient(135deg, #10b981, #047857)',
    },
    {
        icon: <FaCalculator />,
        title: 'Mathematics Special Batch',
        description:
            'Intensive mathematics coaching for students who want to strengthen their problem-solving skills. Covers algebra, calculus, geometry, and statistics.',
        duration: '6 Months',
        color: 'linear-gradient(135deg, #f97316, #c2410c)',
    },
    {
        icon: <FaAtom />,
        title: 'Physics & Chemistry Coaching',
        description:
            'Specialized coaching in Physics and Chemistry with practical demonstrations, numerical practice, and conceptual clarity sessions.',
        duration: '8 Months',
        color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    },
];

export default function Courses() {
    return (
        <section className="courses section" id="courses">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Our Courses</span>
                    <h2 className="section-title">Programs We Offer</h2>
                    <p className="section-subtitle">
                        Structured courses designed to help students master every subject and excel in
                        their board examinations.
                    </p>
                </motion.div>

                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            className="course-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="course-card-header">
                                <div className="course-icon" style={{ background: course.color, color: '#fff' }}>
                                    {course.icon}
                                </div>
                                <div>
                                    <h3>{course.title}</h3>
                                    <p>{course.description}</p>
                                </div>
                            </div>
                            <div className="course-card-footer">
                                <div className="course-duration">
                                    <FaClock />
                                    {course.duration}
                                </div>
                                <button className="course-enroll-btn">Enroll Now</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
