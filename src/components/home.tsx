"use client";

import React, { useState, useEffect } from 'react';
import {
    Menu,
    X,
    MapPin,
    Calendar,
    Clock,
    Users,
    Heart,
    Share2,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Twitter,
    ChevronRight,
    Star,
    Shield,
    Target,
    CheckCircle
} from 'lucide-react';
import { Navbar } from './navbar';
import { HeroSection } from './hero';
import { AboutSection } from './about';
import { SupportSection } from './support';
import { Footer } from './footer';
import { SponsorsPartners } from './sponsors';
import { Testimonials } from './testimonials';
import { EventsSection } from './events';
import { Donation } from './donation';
import { Registration } from './registration';

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');


    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    // Handle scroll for active section
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
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Navbar isMenuOpen={isMenuOpen} activeSection={activeSection} setIsMenuOpen={setIsMenuOpen} setActiveSection={setActiveSection} />

            {/* Hero Section */}

            <HeroSection scrollToSection={scrollToSection} />

            {/* About Section */}
            <AboutSection />

            {/* How You Can Support */}

            <SupportSection scrollToSection={scrollToSection} />

            <Registration />

            <Donation />

            {/* Event Day Info */}
            <EventsSection />

            {/* Testimonials */}
            <Testimonials />

            {/* Sponsors & Partners */}
            <SponsorsPartners />
            {/* Footer */}
            <Footer scrollToSection={scrollToSection} />
        </div>
    );
};

export default HomePage;