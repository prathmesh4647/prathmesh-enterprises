'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        service: 'New Installation',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const templateParams = {
                to_name: "Prathmesh Enterprises",
                from_name: formData.name,
                from_email: "User (Mobile: " + formData.mobile + ")", // Adjust based on your template
                phone: formData.mobile,
                service: formData.service,
                message: formData.message,
            };

            // USER TO FILL: template_id
            await emailjs.send(
                'service_nzekl47',
                'YOUR_TEMPLATE_ID', // <--- Please paste your Template ID here
                templateParams,
                '-LdwnRPTg9ImjZAhW'
            );

            setIsSubmitted(true);
            setFormData({ name: '', mobile: '', service: 'New Installation', message: '' });
        } catch (error) {
            console.error('FAILED...', error);
            alert("Failed to send message. Please try again or call us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Get in touch for expert RO advice, service booking, or any queries. We are here to help!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Contact Info & Map */}
                    <div className="space-y-10">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Details</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                                        <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Our Address</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                                            Laxmi Hou Soc, Rupeenagar, Talwade,<br />
                                            Pune, Pimpri-Chinchwad,<br />
                                            Maharashtra – 411062
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                                        <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Phone Details</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                                            <a href="tel:9423219727" className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+91 9423219727 (Primary)</a>
                                            <a href="tel:8975617931" className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+91 8975617931 (WhatsApp)</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                                        <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                                            <a
                                                href="https://wa.me/918975617931"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-green-600 dark:text-green-500 font-medium hover:underline"
                                            >
                                                Chat with us directly
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden h-80 shadow-inner">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?q=Prathmesh+Enterprises+water+purifier+sales+and+service+Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                title="Google Map Location"
                                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-800 p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send us a Message</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-8">Fill out the form and we will get back to you shortly.</p>

                        {isSubmitted ? (
                            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
                                <div className="bg-green-100 dark:bg-green-800 p-3 rounded-full inline-flex mb-4">
                                    <Send className="w-8 h-8 text-green-600 dark:text-green-300" />
                                </div>
                                <h4 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Message Sent!</h4>
                                <p className="text-green-700 dark:text-green-400">Thank you for contacting us. We will call you soon.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-6 text-green-600 dark:text-green-400 font-semibold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mobile Number</label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        required
                                        pattern="[0-9]{10}"
                                        title="Please enter a valid 10-digit mobile number"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="10-digit mobile number"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Service Required</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    >
                                        <option>New RO Installation</option>
                                        <option>RO Repair / Breakdown</option>
                                        <option>Filter Replacement</option>
                                        <option>AMC Enquiry</option>
                                        <option>General Enquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="Tell us more about your requirement..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 px-6 rounded-lg font-bold text-white text-lg shadow-md transition-all ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                                        }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Book Service Now'}
                                </button>

                                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                                    * By submitting this form, you agree to receive calls/WhatsApp from us regarding your service request.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
