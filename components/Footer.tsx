import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-8xl mx-auto px-4 sm:px-0 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#0096c7] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-poppins font-semibold text-xl text-gray-900">
                Astrum Fintech
              </span>
            </div>
            <p className="font-lato text-gray-600 text-sm mb-4">
              Finance Your Future, Not Just Your Fees. Making education loans
              simple, transparent, and accessible for every student.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2 font-segoe-ui text-sm">
              <Link
                href="/"
                className="block text-gray-600 hover:text-blue-600"
              >
                How It Works
              </Link>
              <Link
                href="/"
                className="block text-gray-600 hover:text-blue-600"
              >
                Loan Products
              </Link>
              <Link
                href="/"
                className="block text-gray-600 hover:text-blue-600"
              >
                Success Stories
              </Link>
              <Link
                href="/"
                className="block text-gray-600 hover:text-blue-600"
              >
                FAQs
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-gray-900 mb-4">
              Support
            </h4>
            <div className="space-y-2 font-segoe-ui text-sm">
              <Link
                href="/"
                className="block text-gray-600 hover:text-blue-600"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="block text-gray-600 hover:text-blue-600"
              >
                About Us
              </Link>
              <Link
                href="/"
                className="block text-gray-600 hover:text-blue-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="block text-gray-600 hover:text-blue-600"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-gray-900 mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2 font-segoe-ui text-sm text-gray-600">
              <div>📞 +91 98765 43210</div>
              <div>✉️ hello@astrumfintech.com</div>
              <div>💬 WhatsApp Support</div>
              <div>📍 Mumbai, India</div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="font-segoe-ui text-sm text-gray-600">
            © 2024 Astrum Fintech. All rights reserved.
          </div>
          <div className="font-segoe-ui text-sm text-gray-600 mt-4 md:mt-0">
            🔒 Your data is 100% secure with us
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
