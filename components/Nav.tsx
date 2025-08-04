import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/30 border-b">
      <div className="max-w-8xl mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center h-16">
          <Link href={"/"} className="flex items-center space-x-2">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={500}
              height={500}
              className="object-contain w-14"
            />
            {/* <span className="font-poppins font-semibold text-xl text-gray-900">
              Astrum Fintech
            </span> */}
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="font-lato text-gray-600 hover:text-blue-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#"
              className="font-lato text-gray-600 hover:text-blue-600 transition-colors"
            >
              Loan Products
            </Link>
            <Link
              href="#"
              className="font-lato text-gray-600 hover:text-blue-600 transition-colors"
            >
              Success Stories
            </Link>
            <Link
              href="#"
              className="font-lato text-gray-600 hover:text-blue-600 transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="#"
              className="font-lato text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden font-segoe-ui sm:flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Contact Us
            </Button>
            <Link href="/apply">
              <Button className="bg-gradient-to-r from-[#164069] to-[#13C8EC] hover:opacity-90 font-segoe-ui">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Nav;
