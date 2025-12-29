'use client';

import Link from 'next/link';
import { Phone, CheckCircle, Wrench, Droplets, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CountUp } from '@/components/ui/CountUp';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 overflow-hidden text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 z-10"></div>
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
            role="img"
            aria-label="Pure clear blue water background"
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-sm">
              Pure Water, <br className="hidden md:block" />
              <span className="text-blue-200">Pure Life.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-light"
          >
            Trusted RO Sales & Service Partner in Pune. <br className="hidden sm:block" />
            We ensure every drop you drink is safe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <a
              href="tel:9423219727"
              className="group bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Call Now
            </a>
            <a
              href="https://wa.me/918975617931?text=Hi,%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-500 text-white hover:bg-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl">
        <ScrollReveal width="100%">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="text-center p-2">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                <CountUp to={15} />
              </div>
              <p className="text-gray-600 font-medium tracking-wide uppercase text-sm">Years Experience</p>
            </div>
            <div className="text-center p-2">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                <CountUp to={2000} duration={2.5} />
              </div>
              <p className="text-gray-600 font-medium tracking-wide uppercase text-sm">Happy Customers</p>
            </div>
            <div className="text-center p-2">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                <CountUp to={24} />/7
              </div>
              <p className="text-gray-600 font-medium tracking-wide uppercase text-sm">Support</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm bg-blue-50 dark:bg-blue-900/30 px-4 py-1 rounded-full">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-4">Complete Water Solutions</h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional care for your water purifier, ensuring health and safety for your family.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <ServiceCard
                icon={<Droplets className="w-10 h-10 text-white" />}
                title="RO Installation"
                description="Expert installation for all major brands with TDS setup."
                color="bg-blue-500"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ServiceCard
                icon={<Wrench className="w-10 h-10 text-white" />}
                title="Repair Service"
                description="Fast troubleshooting and repair for any breakdown."
                color="bg-indigo-500"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <ServiceCard
                icon={<ShieldCheck className="w-10 h-10 text-white" />}
                title="AMC Plans"
                description="Hassle-free annual maintenance contracts."
                color="bg-purple-500"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <ServiceCard
                icon={<Clock className="w-10 h-10 text-white" />}
                title="Filter Change"
                description="Timely replacement of sediments and membranes."
                color="bg-teal-500"
              />
            </ScrollReveal>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-gray-900 hover:bg-gray-800 md:text-lg transition-transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <ScrollReveal width="100%" delay={0.2}>
              <div className="lg:w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-indigo-700 aspect-video flex items-center justify-center group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                  <div className="text-center p-6 relative z-10">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">Prathmesh</h3>
                    <p className="text-blue-200 text-xl tracking-widest uppercase">Enterprises</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="lg:w-full">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">Why Trust Us?</h2>
              </ScrollReveal>
              <div className="space-y-8">
                <ScrollReveal delay={0.1}>
                  <FeatureRow
                    title="Expert Technicians"
                    description="Highly skilled professionals who understand every RO system."
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <FeatureRow
                    title="Genuine Spare Parts"
                    description="100% authentic filters and membranes for long life."
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <FeatureRow
                    title="Best Price Guarantee"
                    description="Transparent and affordable pricing with no hidden costs."
                  />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center group hover:-translate-y-2">
      <div className={`${color} p-4 rounded-xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureRow({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex items-start group">
      <div className="flex-shrink-0 mt-1 bg-green-100 dark:bg-green-900/30 p-2 rounded-full group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
        <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
      </div>
      <div className="ml-5">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  )
}
