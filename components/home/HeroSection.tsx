import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import { Button } from "../ui/button";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-2 text-orange-500 -mb-5 md:-mb-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="font-lato text-sm text-gray-600">
                Trusted by 1000+ students
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Finance Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#164069] to-[#13C8EC]">
                  Future
                </span>
                ,
                <br />
                Not Just Your Fees
              </h1>
              <p className="font-lato text-lg text-gray-600 max-w-lg leading-6">
                Transform your education dreams into reality with our
                student-friendly loan solutions. Quick approvals, competitive
                rates, and zero hidden charges.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primaryColor" />
                <span className="font-segoe-ui">No Collateral Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primaryColor" />
                <span className="font-segoe-ui">Quick After Approval</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primaryColor" />
                <span className="font-segoe-ui">Flexible Payback</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primaryColor" />
                <span className="font-segoe-ui">Expert Guidance</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#164069] to-[#13C8EC] hover:opacity-90 font-segoe-ui text-semibold  text-[16px] w-full md:w-fit md:px-12 shadow-lg"
                >
                  <span className="text-white"> Check My Eligibility</span>
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="font-segoe-ui bg-transparent shadow-lg text-semibold"
              >
                Talk to Expert
              </Button>
            </div>

            <div className="md:pt-4 overflow-hidden">
              <p className="font-lato text-sm text-gray-500 mb-1 md:mb-2">
                Join students from
              </p>
              <div className="flex items-center md:space-x-4 text-sm font-segoe-ui text-gray-600 ">
                <p className="flex gap-1">
                  🇺🇸 <span className="font-semibold">USA</span>{" "}
                </p>
                <p className="flex gap-1">
                  🇬🇧 <span className="font-semibold">UK</span>{" "}
                </p>
                <p className="flex gap-1">
                  🇨🇦 <span className="font-semibold">Canada</span>{" "}
                </p>
                <p className="flex gap-1">
                  🇦🇺 <span className="font-semibold">Australia</span>{" "}
                </p>
                <p className="flex gap-1">
                  🇩🇪 <span className="font-semibold">Germany</span>{" "}
                </p>
                <br />
                <p className="flex gap-1">
                  🇮🇳 <span className="font-semibold">India</span>{" "}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="/images/hero-students.png"
                alt="Happy students celebrating graduation"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-8 right-4 bg-white rounded-lg p-3 md:p-5 shadow-lg">
                <div className="text-2xl font-bold text-[#FB9851]">98%</div>
                <div className="text-xs text-[#737B8C] font-segoe-ui">
                  Success Rate
                </div>
              </div>
              <div className="absolute -bottom-8 left-4 md:-left-8 bg-white rounded-lg p-3 md:p-5 shadow-lg">
                <div className="text-2xl font-bold text-[#164069]">₹50L+</div>
                <div className="text-xs text-[#737B8C] font-segoe-ui">
                  Loans Disbursed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
