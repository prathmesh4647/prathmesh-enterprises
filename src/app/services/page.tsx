'use client';

import { ShoppingBag, Wrench, Settings, Shield, Droplets, Building2, PenTool, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

// Metadata needs to be in layout or a server component for SEO, but here for simplicity in this demo.
// Ideally, metadata export should be kept separate if using 'use client'. 
// Since this is now a client component for animations, I removed the metadata export 
// (or I should move it to layout.tsx of this segment if strict SEO is needed). 
// For now, I'll rely on global metadata or Next.js handling.

const services = [
    {
        title: 'New RO Installation',
        description: 'Professional installation of new RO systems. We ensure proper fitting, leakage testing, and TDS adjustment for the best water quality.',
        icon: <PenTool className="w-10 h-10 text-blue-600" />,
        delay: 0.1
    },
    {
        title: 'RO Repair & Servicing',
        description: 'Expert diagnosis and repair for all RO problems including low flow, noise, bad taste, and leakage. Quick service at your doorstep.',
        icon: <Wrench className="w-10 h-10 text-blue-600" />,
        delay: 0.2
    },
    {
        title: 'Filter & Membrane Replacement',
        description: 'Genuine spare parts replacement including sediment filters, carbon filters, and RO membranes to ensure safe drinking water.',
        icon: <Droplets className="w-10 h-10 text-blue-600" />,
        delay: 0.3
    },
    {
        title: 'RO Water Purifier Sales',
        description: 'Authorized sales of top brand water purifiers. Get the best advice on choosing the right model for your home or office.',
        icon: <ShoppingBag className="w-10 h-10 text-blue-600" />,
        delay: 0.4
    },
    {
        title: 'Annual Maintenance (AMC)',
        description: 'Cost-effective AMC plans that cover regular servicing and filter replacements, keeping your RO active 365 days a year.',
        icon: <Shield className="w-10 h-10 text-blue-600" />,
        delay: 0.5
    },
    {
        title: 'Commercial RO Systems',
        description: 'Installation and maintenance of large capacity commercial RO plants for offices, schools, and industries.',
        icon: <Building2 className="w-10 h-10 text-blue-600" />,
        delay: 0.6
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <ScrollReveal width="100%">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm bg-white dark:bg-gray-800 px-4 py-1 rounded-full shadow-sm mb-4 inline-block">What We Offer</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">Our Premium Services</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            We provide comprehensive water purification solutions tailored to your needs.
                            From sales to after-sales support, we are your trusted partners for clean water.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={service.delay}>
                            <div
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 flex flex-col items-start h-full group hover:-translate-y-2"
                            >
                                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                    <div className="group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">{service.description}</p>
                                <Link
                                    href="/contact"
                                    className="text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center mt-auto"
                                >
                                    Book Service <Wrench className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* CTA Section */}
                <ScrollReveal width="100%">
                    <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl shadow-2xl overflow-hidden relative">
                        <div className="absolute inset-0 opacity-10">
                            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                            </svg>
                        </div>
                        <div className="px-6 py-12 md:p-20 text-center relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Expert Assistance?</h2>
                            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
                                Our certified technicians are just a call away. Get your RO serviced today!
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-5">
                                <a
                                    href="tel:9423219727"
                                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-blue-700 bg-white hover:bg-gray-50 transition-all hover:scale-105 shadow-lg"
                                >
                                    <PhoneCall className="w-5 h-5 mr-2" />
                                    Call +91 9423219727
                                </a>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-full text-white hover:bg-white/10 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Brands Section */}
                <div className="mt-24 text-center">
                    <p className="text-gray-400 font-bold tracking-widest uppercase mb-10 text-sm">We Service All Major Brands</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Text placeholders for brands as I don't have logos handy - in a real project I'd use SVGs/Images */}
                        <span className="text-3xl font-black text-gray-300 hover:text-blue-600 transition-colors">Kent RO</span>
                        <span className="text-3xl font-black text-gray-300 hover:text-blue-600 transition-colors">Aquaguard</span>
                        <span className="text-3xl font-black text-gray-300 hover:text-blue-600 transition-colors">Pureit</span>
                        <span className="text-3xl font-black text-gray-300 hover:text-blue-600 transition-colors">Livpure</span>
                        <span className="text-3xl font-black text-gray-300 hover:text-blue-600 transition-colors">Blue Star</span>
                        <span className="text-3xl font-black text-gray-300 hover:text-blue-600 transition-colors">Eureka Forbes</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
