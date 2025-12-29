import Link from 'next/link';
import { Phone, MapPin, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Prathmesh Enterprises</h3>
                        <p className="text-gray-400 mb-4">
                            Trusted RO Water Purifier Sales, Repair & Service at Your Doorstep in Pune & Pimpri-Chinchwad.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-blue-400 transition-colors flex items-center">
                                    <ChevronRight className="w-4 h-4 mr-1" /> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-blue-400 transition-colors flex items-center">
                                    <ChevronRight className="w-4 h-4 mr-1" /> Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/amc-plans" className="hover:text-blue-400 transition-colors flex items-center">
                                    <ChevronRight className="w-4 h-4 mr-1" /> AMC Plans
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-400 transition-colors flex items-center">
                                    <ChevronRight className="w-4 h-4 mr-1" /> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>RO Installation</li>
                            <li>RO Repair & Service</li>
                            <li>Filter Replacement</li>
                            <li>Annual Maintenance (AMC)</li>
                            <li>Commercial RO Systems</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">
                                    Laxmi Hou Soc, Rupeenagar, Talwade, <br />
                                    Pune, Pimpri-Chinchwad, <br />
                                    Maharashtra – 411062
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:9423219727" className="hover:text-blue-400 transition-colors">9423219727</a>
                                    <a href="tel:8975617931" className="hover:text-blue-400 transition-colors">8975617931</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Prathmesh Enterprises. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
