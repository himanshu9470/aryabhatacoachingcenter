import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Ananya Kumari',
        board: 'Class 12th Science — BSEB 2025',
        quote: 'Aryabhata Coaching Center transformed my preparation. The teachers made complex Physics and Chemistry concepts so easy to understand. I scored way beyond my expectations!',
        marks: '94.6%',
        bg: 'linear-gradient(135deg, #f97316, #c2410c)',
        initials: 'AK',
    },
    {
        name: 'Rahul Verma',
        board: 'Class 10th — BSEB 2025',
        quote: 'The small batch size meant I could ask questions freely. The weekly tests kept me on track, and the study materials were excellent. Highly recommended!',
        marks: '91.2%',
        bg: 'linear-gradient(135deg, #1e3a8a, #3b60c4)',
        initials: 'RV',
    },
    {
        name: 'Sneha Singh',
        board: 'Class 12th Science — CBSE 2025',
        quote: 'I was struggling with Mathematics until I joined Aryabhata. Rajesh Sir\'s teaching style is amazing — he makes even the toughest problems look simple.',
        marks: '96.4%',
        bg: 'linear-gradient(135deg, #10b981, #047857)',
        initials: 'SS',
    },
    {
        name: 'Vikash Kumar',
        board: 'Class 10th — BSEB 2024',
        quote: 'The doubt-solving sessions were a game changer for me. No question was too small, and the teachers were always patient and encouraging.',
        marks: '89.8%',
        bg: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
        initials: 'VK',
    },
    {
        name: 'Priyanka Devi',
        board: 'Class 12th Science — BSEB 2024',
        quote: 'The board exam strategy sessions helped me manage my time perfectly during exams. I could finish every paper with confidence. Thank you, Aryabhata!',
        marks: '92.8%',
        bg: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        initials: 'PD',
    },
    {
        name: 'Arjun Patel',
        board: 'Class 10th — CBSE 2024',
        quote: 'The coaching center feels like a second home. The environment is very supportive, and the teachers genuinely care about every student\'s progress.',
        marks: '95.0%',
        bg: 'linear-gradient(135deg, #ec4899, #be185d)',
        initials: 'AP',
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-label">Student Results</span>
                    <h2 className="section-title">Our Students Speak</h2>
                    <p className="section-subtitle">
                        Hear from our top-performing students about their journey with Aryabhata Coaching Center.
                    </p>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <p className="testimonial-quote">{t.quote}</p>
                            <div className="testimonial-footer">
                                <div className="testimonial-avatar" style={{ background: t.bg }}>
                                    {t.initials}
                                </div>
                                <div className="testimonial-info">
                                    <h4>{t.name}</h4>
                                    <p>{t.board}</p>
                                </div>
                                <div className="testimonial-marks">
                                    <div className="testimonial-marks-score">{t.marks}</div>
                                    <div className="testimonial-marks-label">Score</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
