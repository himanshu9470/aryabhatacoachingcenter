import { motion } from 'framer-motion';
import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';

export default function HeroSection() {
    const handleScroll = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <div className="hero-bg-overlay" />
            <div className="hero-shapes">
                <div className="hero-shape hero-shape-1" />
                <div className="hero-shape hero-shape-2" />
                <div className="hero-shape hero-shape-3" />
            </div>

            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero-badge">
                        <span className="hero-badge-dot" />
                        Admissions Open 2026-27
                    </div>

                    <h1 className="hero-title">
                        <span className="hero-title-accent">Aryabhata</span>
                        <br />
                        Coaching Center
                    </h1>

                    <p className="hero-description">
                        Shaping the Future of Class 10th and 12th Students. Expert guidance
                        for board exams and competitive exams at Patut Bikram Road, Bihar.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => handleScroll('#contact')}>
                            Join Now <FaArrowRight />
                        </button>
                        <button className="btn btn-outline-white" onClick={() => handleScroll('#courses')}>
                            Explore Courses
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="hero-stat-number">500+</div>
                            <div className="hero-stat-label">Students Taught</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">95%</div>
                            <div className="hero-stat-label">Board Results</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">10+</div>
                            <div className="hero-stat-label">Expert Teachers</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero-image-wrapper">
                        <img src="/hero-bg.png" alt="Students learning at Aryabhata Coaching Center" />

                        <div className="hero-image-badge hero-image-badge-1 animate-float">
                            <div className="hero-image-badge-icon orange">
                                <FaGraduationCap />
                            </div>
                            <div className="hero-image-badge-text">
                                <strong>Board Toppers</strong>
                                <span>Every Year</span>
                            </div>
                        </div>

                        <div className="hero-image-badge hero-image-badge-2 animate-float" style={{ animationDelay: '1s' }}>
                            <div className="hero-image-badge-icon blue">
                                <HiAcademicCap />
                            </div>
                            <div className="hero-image-badge-text">
                                <strong>Expert Faculty</strong>
                                <span>10+ Teachers</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
