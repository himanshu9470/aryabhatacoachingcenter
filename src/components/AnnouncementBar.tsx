import { FaBullhorn } from 'react-icons/fa';

export default function AnnouncementBar() {
    return (
        <div className="bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 text-white py-2 relative overflow-hidden z-50">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 text-sm font-medium">
                <FaBullhorn className="text-xs animate-pulse" />
                <span>🎉 Admissions Open for 2026 Batch – Class 10th &amp; 12th | Limited Seats Available!</span>
                <a href="#admission" className="ml-2 underline underline-offset-2 font-semibold hover:text-accent-100 transition">
                    Apply Now →
                </a>
            </div>
        </div>
    );
}
