"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Star,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Globe,
  MessageCircle,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";

const stats = [
  {
    number: 1000,
    suffix: "+",
    label: "Happy Students",
    color: "text-blue-600"
  },
  {
    number: 250,
    suffix: "Cr+",
    label: "Loans Disbursed",
    color: "text-orange-500"
  },
  { number: 15, suffix: "+", label: "Bank Partners", color: "text-cyan-500" },
  { number: 98, suffix: "%", label: "Success Rate", color: "text-green-600" }
];

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description:
      "Your data is protected with bank-grade security. We never share your information without consent."
  },
  {
    icon: Clock,
    title: "Quick Process",
    description:
      "Get pre-approved in minutes and fast approval for your education loan application."
  },
  {
    icon: Users,
    title: "Personal Support",
    description:
      "Dedicated loan officers guide you through every step. Real humans, not chatbots."
  },
  {
    icon: TrendingUp,
    title: "Best Rates",
    description:
      "Compare offers from 15+ leading banks and choose the best interest rates available."
  },
  {
    icon: CheckCircle,
    title: "Student-First",
    description:
      "Designed for students. We understand your needs and make the process simple."
  },
  {
    icon: Globe,
    title: "Smart Matching",
    description:
      "Our AI matches you with the best lenders based on your profile and requirements."
  }
];

const countries = [
  {
    name: "United States",
    students: "15000+ students funded",
    flag: "🇺🇸",
    subtext: "Top universities, STEM programs"
  },
  {
    name: "United Kingdom",
    students: "8000+ students funded",
    flag: "🇬🇧",
    subtext: "Historic institutions, 1-year masters"
  },
  {
    name: "Canada",
    students: "12000+ students funded",
    flag: "🇨🇦",
    subtext: "Affordable education, PR opportunities"
  },
  {
    name: "Australia",
    students: "6000+ students funded",
    flag: "🇦🇺",
    subtext: "Research excellence, work permits"
  },
  {
    name: "Germany",
    students: "4500+ students funded",
    flag: "🇩🇪",
    subtext: "Low tuition, engineering programs"
  },
  {
    name: "India",
    students: "25000+ students funded",
    flag: "🇮🇳",
    subtext: "IITs, IIMs, premier institutions"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "MS Computer Science",
    university: "Stanford University",
    amount: "₹75 Lakhs",
    quote:
      "Astrum made my Stanford dream possible when others said no. The process was so smooth, and they helped me understand every step. Today, I'm working at Google!",
    image: "/images/pic.png"
  },
  {
    id: 2,
    name: "Rahul Patel",
    course: "MBA Finance",
    university: "Harvard Business School",
    amount: "₹85 Lakhs",
    quote:
      "The team at Astrum was incredibly supportive throughout my application process. They helped me secure funding for Harvard when I thought it was impossible. Now I'm working at Goldman Sachs!",
    image: "/images/pic.png"
  },
  {
    id: 3,
    name: "Ananya Singh",
    course: "MS Data Science",
    university: "MIT",
    amount: "₹70 Lakhs",
    quote:
      "Astrum's expertise in education loans is unmatched. They guided me through every step and helped me get the best rates. MIT was my dream, and they made it reality!",
    image: "/images/pic.png"
  }
];

function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, isVisible]);

  return (
    <span id={`counter-${end}`} className="font-bold">
      {count}
      {suffix}
    </span>
  );
}

function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <Card className="p-8 relative">
      <CardContent className="p-0">
        <div className="text-gray-200 text-8xl font-serif absolute top-8 left-8 opacity-20">
          "
        </div>
        <div className="flex mb-4 ml-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
          ))}
        </div>
        <blockquote className="font-lato text-xl text-gray-700 mb-8 ml-4">
          "{currentData.quote}"
        </blockquote>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={currentData.image || "/placeholder.svg"}
              alt={currentData.name}
              width={70}
              height={70}
              className="rounded-full object-contain"
            />
            <div>
              <div className="font-poppins font-semibold text-lg text-gray-900">
                {currentData.name}
              </div>
              <div className="font-lato text-[#737B8C] text-sm pt-1">
                {currentData.course}
              </div>
              <div className="font-lato text-[#164069] font-semibold">
                {currentData.university}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-poppins font-bold text-2xl text-orange-500">
              {currentData.amount}
            </div>
            <div className="font-lato text-gray-600">Loan Amount</div>
          </div>
        </div>
      </CardContent>
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevTestimonial}
        className="absolute left-4 bottom-0 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-4 bottom-0 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
    </Card>
  );
}

export default function HomePage() {
  const { scrollY } = useScroll();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Header */}
      <Nav />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Students Choose Astrum */}
      <section className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Why Students Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#164069] to-[#13C8EC]">
                Astrum
              </span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another loan company. We're your education
              partners, committed to making your dreams accessible and
              affordable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6  flex gap-5">
                    <div className="min-w-12 h-12 p-1 bg-gradient-to-r from-[#164069] to-[#13C8EC] rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <h3 className="font-poppins font-semibold text-xl text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="font-lato text-gray-600 pt-1">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}
                >
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="font-lato text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Study Anywhere,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#164069] to-[#13C8EC]">
                We're Here
              </span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              From Ivy League to IITs, we fund education dreams across the
              globe. Your destination, our support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 border rounded-lg p-6 text-center hover:shadow-md transition-shadow flex gap-4"
              >
                <div className="text-3xl mb-2">{country.flag}</div>
                <div className="flex flex-col items-start">
                  <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-1">
                    {country.name}
                  </h3>
                  <p className="font-segoe-ui text-sm text-[#737B8C] pb-2">
                    {country.subtext}
                  </p>
                  <p className="font-segoe-ui text-sm text-[#164069] font-semibold flex gap-2">
                    <Users className="w-4" /> {country.students}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#164069] to-[#13C8EC] rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <div className="mb-6">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-80" />
            </div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Can't Find Your Dream Destination?
            </h2>
            <p className="font-lato text-lg mb-8 max-w-2xl mx-auto opacity-90">
              We partner with institutions worldwide. If you have an admission
              letter, we'll find a way to fund your education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-segoe-ui">
                Explore All Destinations
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 font-segoe-ui bg-transparent"
              >
                Talk to an Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-orange-500 fill-current"
                />
              ))}
            </div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Real Students,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#164069] to-[#13C8EC]">
                Real Stories
              </span>
            </h2>
            <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from students who've turned
              their dreams into reality with Astrum.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <TestimonialCarousel />
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Ready to Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#164069] to-[#13C8EC]">
                Education Journey?
              </span>
            </h2>
            <p className="font-lato text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who've made their dreams reality. Let's
              make yours happen too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#164069] to-[#13C8EC] hover:opacity-90 font-segoe-ui"
                >
                  Check My Eligibility <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="font-segoe-ui bg-transparent"
              >
                💬 WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
