import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const teachers = [
    {
        name: 'Rajesh Kumar',
        subject: 'Mathematics',
        bio: '15+ years of experience in teaching Mathematics for Class 10th & 12th board exams.',
        bg: 'linear-gradient(135deg, #1e3a8a, #3b60c4)',
        initials: 'RK',
    },
    {
        name: 'Priya Sharma',
        subject: 'Physics',
        bio: 'M.Sc. Physics with 10+ years of coaching experience. Expert in competitive exam preparation.',
        bg: 'linear-gradient(135deg, #f97316, #c2410c)',
        initials: 'PS',
    },
    {
        name: 'Amit Singh',
        subject: 'Chemistry',
        bio: 'Passionate educator with 12+ years in Chemistry coaching. Known for simplifying complex concepts.',
        bg: 'linear-gradient(135deg, #10b981, #047857)',
        initials: 'AS',
    },
];

const aboutFeatures = [
    'Board Exam Focused Curriculum',
    'Regular Parent-Teacher Meetings',
    'Comprehensive Study Materials',
    'Competitive Exam Coaching',
    'Modern Teaching Methods',
    'Performance Tracking',
];

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="/gallery-1.png" alt="Aryabhata Coaching Center classroom" />
                        <div className="about-image-accent" />
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="section-label">About Us</span>
                        <h2>Empowering Students to Achieve Academic Excellence</h2>
                        <p>
                            Located on <strong>Patut Bikram Road, Bihar</strong>, Aryabhata Coaching Center
                            has been a beacon of quality education for Class 10th and 12th students. Our
                            mission is to help every student succeed in their board exams and build a strong
                            foundation for their future.
                        </p>
                        <p>
                            With a team of experienced educators, modern teaching methods, and a
                            student-first approach, we ensure that each student receives the guidance and
                            support they need to excel academically.
                        </p>

                        <div className="about-features">
                            {aboutFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="about-feature-item"
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <span className="about-feature-check">
                                        <FaCheckCircle />
                                    </span>
                                    {feature}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Teachers Section */}
                <div className="teachers-section">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="section-label">Our Faculty</span>
                        <h2 className="section-title">Meet Our Expert Teachers</h2>
                        <p className="section-subtitle">
                            Learn from the best educators who are dedicated to your success.
                        </p>
                    </motion.div>

                    <div className="teachers-grid">
                        {teachers.map((teacher, index) => (
                            <motion.div
                                key={index}
                                className="teacher-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div
                                    className="teacher-avatar"
                                    style={{ background: teacher.bg }}
                                >
                                    {teacher.initials}
                                </div>
                                <h4>{teacher.name}</h4>
                                <p className="teacher-subject">{teacher.subject}</p>
                                <p className="teacher-bio">{teacher.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
