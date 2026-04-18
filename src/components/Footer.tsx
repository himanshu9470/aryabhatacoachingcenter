import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const quickLinks = ['Home', 'Batches', 'Courses', 'Teachers', 'Facilities', 'Results', 'Gallery', 'Contact'];
const courseLinks = ['Class 10 Preparation', 'Class 12 Science', 'Mathematics Special', 'Physics & Chemistry', 'Test Series', 'Study Material'];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/Essay-on-Aryabhata.jpg" alt="Aryabhata" className="w-10 h-10 rounded-full object-cover border-2 border-gray-700" />
                            <span className="font-heading font-bold text-white text-lg">Aryabhata Coaching</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-5">
                            Shaping the future of Class 10th & 12th students with expert guidance and modern teaching at Patut Bikram Road, Bihar.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <FaFacebookF />, label: 'Facebook' },
                                { icon: <FaInstagram />, label: 'Instagram' },
                                { icon: <FaTwitter />, label: 'Twitter' },
                                { icon: <FaYoutube />, label: 'YouTube' },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-sm hover:bg-accent-500 hover:border-accent-500 hover:text-white hover:-translate-y-0.5 transition-all"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-white mb-5">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((l) => (
                                <li key={l}>
                                    <a href={`#${l.toLowerCase()}`} className="text-sm hover:text-accent-400 transition">{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="font-heading font-semibold text-white mb-5">Our Courses</h4>
                        <ul className="space-y-2.5">
                            {courseLinks.map((l) => (
                                <li key={l}>
                                    <a href="#courses" className="text-sm hover:text-accent-400 transition">{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-semibold text-white mb-5">Contact Info</h4>
                        <div className="space-y-4">
                            {[
                                { icon: <HiLocationMarker className="text-accent-400 mt-0.5" />, text: 'Patut Bikram Road, Bihar, India' },
                                { icon: <HiPhone className="text-accent-400 mt-0.5" />, text: '+91 98765 43210' },
                                { icon: <HiMail className="text-accent-400 mt-0.5" />, text: 'info@aryabhatacoaching.com' },
                            ].map((c, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm">
                                    {c.icon}
                                    <span>{c.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Aryabhata Coaching Center. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
