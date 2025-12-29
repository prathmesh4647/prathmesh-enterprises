'use client';

import { Check, X, Shield, Star, Crown, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

// Removed server-side metadata export since this is a client component

const plans = [
    {
        name: 'Basic Plan',
        price: '₹2,500',
        duration: '/ year',
        description: 'Essential maintenance for standard home usage.',
        icon: <Shield className="w-8 h-8 text-blue-500" />,
        features: [
            { name: '1 Year Warranty', included: true },
            { name: '2 Free Services / Year', included: true },
            { name: '1 Pre-Filter Replacement', included: true },
            { name: '1 Sediment Filter Replacement', included: true },
            { name: '1 Carbon Filter Replacement', included: true },
            { name: 'Membrane Replacement', included: false },
            { name: 'Emergency Breakdown Visits', included: false },
        ],
        cta: 'Select Basic',
        popular: false,
        delay: 0.1
    },
    {
        name: 'Premium Plan',
        price: '₹4,500',
        duration: '/ year',
        description: 'Complete protection with comprehensive coverage.',
        icon: <Star className="w-8 h-8 text-yellow-500" />,
        features: [
            { name: '1 Year Warranty', included: true },
            { name: '4 Free Services / Year (Quarterly)', included: true },
            { name: 'All Filter Replacements', included: true },
            { name: 'RO Membrane Replacement', included: true },
            { name: 'Unlimited Breakdown Calls', included: true },
            { name: 'Priority Service (24hrs)', included: true },
            { name: 'Spare Parts Coverage', included: true },
        ],
        cta: 'Select Premium',
        popular: true,
        delay: 0.2
    },
    {
        name: 'Commercial Plan',
        price: 'Custom',
        duration: '',
        description: 'Tailored solutions for offices, schools, and factories.',
        icon: <Crown className="w-8 h-8 text-purple-600" />,
        features: [
            { name: 'Customized Service Schedule', included: true },
            { name: 'High Capacity Plant Maintenance', included: true },
            { name: 'Monthly Site Visits', included: true },
            { name: 'Water Quality Testing', included: true },
            { name: 'Dedicated Technician', included: true },
            { name: 'GST Invoice Available', included: true },
            { name: 'Bulk Discounts', included: true },
        ],
        cta: 'Get Quote',
        popular: false,
        delay: 0.3
    },
];

export default function AMCPlansPage() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <ScrollReveal width="100%">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Annual Maintenance Contracts</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Choose a plan that suits your needs and forget about water purity worries for the entire year.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <ScrollReveal key={index} delay={plan.delay} width="100%">
                            <div
                                className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg border-2 flex flex-col h-full ${plan.popular ? 'border-blue-500 scale-105 z-10 shadow-2xl' : 'border-transparent dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700'
                                    } transition-all duration-300 p-8 hover:-translate-y-2`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-md">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                                            {plan.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mt-3 text-base leading-relaxed">{plan.description}</p>
                                </div>

                                <div className="mb-8 flex items-baseline">
                                    <span className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">{plan.price}</span>
                                    <span className="text-gray-500 dark:text-gray-400 ml-2 font-medium">{plan.duration}</span>
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            {feature.included ? (
                                                <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-0.5">
                                                    <Check className="w-3 h-3 text-green-600 dark:text-green-400 flex-shrink-0" />
                                                </div>
                                            ) : (
                                                <div className="bg-gray-100 dark:bg-gray-700 p-1 rounded-full mr-3 mt-0.5">
                                                    <X className="w-3 h-3 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                                </div>
                                            )}
                                            <span className={`text-sm font-medium ${feature.included ? 'text-gray-700 dark:text-gray-200' : 'text-gray-400 dark:text-gray-500'}`}>
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                                    className={`w-full block text-center py-4 px-6 rounded-xl font-bold text-lg transition-transform active:scale-95 ${plan.popular
                                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                                            : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40'
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal width="100%" delay={0.4}>
                    <div className="mt-20 text-center bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Not sure which plan is right for you?</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            Our team can inspect your RO system and suggest the best maintenance plan based on its condition and your usage.
                        </p>
                        <a
                            href="tel:9423219727"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-lg"
                        >
                            <PhoneCall className="w-6 h-6 mr-3" />
                            Speak to an Expert
                        </a>
                    </div>
                </ScrollReveal>

            </div>
        </div>
    );
}
