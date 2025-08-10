import { Heart, Menu, X } from "lucide-react";
import { useEffect } from "react";


interface NavbarProps {
    isMenuOpen: boolean;
    activeSection: string;
    setIsMenuOpen: (isOpen: boolean) => void;
    setActiveSection: (active: string) => void;
}
export const Navbar = ({ isMenuOpen, activeSection, setActiveSection, setIsMenuOpen }: NavbarProps) => {

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'support', 'register', 'donate', 'eventinfo', 'testimonials', 'sponsors'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Heart className="h-8 w-8 text-red-600 mr-2" />
                        <span className="text-xl font-bold text-gray-900">Sickle Cell Walk Lagos</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {['Home', 'About', 'Support', 'Register', 'Donate', 'Event Info', 'Stories', 'Sponsors'].map((item, index) => {
                            const sectionId = ['home', 'about', 'support', 'register', 'donate', 'eventinfo', 'testimonials', 'sponsors'][index];
                            return (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(sectionId)}
                                    className={`text-gray-700 cursor-pointer hover:text-red-600 font-medium transition-colors ${activeSection === sectionId ? 'text-red-600 border-b-2 border-red-600' : ''
                                        }`}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {['Home', 'About', 'Support', 'Register', 'Donate', 'Event Info', 'Stories', 'Sponsors'].map((item, index) => {
                                const sectionId = ['home', 'about', 'support', 'register', 'donate', 'eventinfo', 'testimonials', 'sponsors'][index];
                                return (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(sectionId)}
                                        className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}