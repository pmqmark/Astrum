"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const benefits = [
  {
    title: "Quick Pre-Approval",
    description: "Get pre-approved in 5 minutes",
    icon: CheckCircle
  },
  {
    title: "Compare Best Rates",
    description: "15+ banks competing for you",
    icon: CheckCircle
  },
  {
    title: "Zero Hidden Charges",
    description: "Complete transparency",
    icon: CheckCircle
  },
  {
    title: "Expert Guidance",
    description: "Personal loan advisor",
    icon: CheckCircle
  }
];

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    studyDestination: "",
    course: "",
    university: "",
    loanAmount: "",
    familyIncome: "",
    additionalInfo: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50 mt-16">
        <div className="py-12 md:py-20 pb-32 md:pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                Apply for Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#164069] to-[#13C8EC]">
                  Education Loan
                </span>
              </h1>
              <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
                Take the first step towards your education dreams. Get
                pre-approved in minutes.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Application Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-2 mb-6">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="font-segoe-ui text-sm text-gray-600">
                        🔒 Your information is 100% secure
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label
                            htmlFor="fullName"
                            className="font-lato font-medium"
                          >
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={(e) =>
                              handleInputChange("fullName", e.target.value)
                            }
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="phoneNumber"
                            className="font-lato font-medium"
                          >
                            Phone Number *
                          </Label>
                          <Input
                            id="phoneNumber"
                            placeholder="+91 98765 43210"
                            value={formData.phoneNumber}
                            onChange={(e) =>
                              handleInputChange("phoneNumber", e.target.value)
                            }
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="email"
                          className="font-lato font-medium"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="mt-1"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label
                            htmlFor="studyDestination"
                            className="font-lato font-medium"
                          >
                            Study Destination *
                          </Label>
                          <Select
                            onValueChange={(value) =>
                              handleInputChange("studyDestination", value)
                            }
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="usa">United States</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="canada">Canada</SelectItem>
                              <SelectItem value="australia">
                                Australia
                              </SelectItem>
                              <SelectItem value="germany">Germany</SelectItem>
                              <SelectItem value="india">India</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label
                            htmlFor="course"
                            className="font-lato font-medium"
                          >
                            Course/Program *
                          </Label>
                          <Input
                            id="course"
                            placeholder="e.g. MS Computer Science"
                            value={formData.course}
                            onChange={(e) =>
                              handleInputChange("course", e.target.value)
                            }
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="university"
                          className="font-lato font-medium"
                        >
                          University/Institution
                        </Label>
                        <Input
                          id="university"
                          placeholder="Enter university name (if known)"
                          value={formData.university}
                          onChange={(e) =>
                            handleInputChange("university", e.target.value)
                          }
                          className="mt-1"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label
                            htmlFor="loanAmount"
                            className="font-lato font-medium"
                          >
                            Loan Amount Needed *
                          </Label>
                          <Select
                            onValueChange={(value) =>
                              handleInputChange("loanAmount", value)
                            }
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select amount" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10-20">
                                ₹10-20 Lakhs
                              </SelectItem>
                              <SelectItem value="20-40">
                                ₹20-40 Lakhs
                              </SelectItem>
                              <SelectItem value="40-60">
                                ₹40-60 Lakhs
                              </SelectItem>
                              <SelectItem value="60-80">
                                ₹60-80 Lakhs
                              </SelectItem>
                              <SelectItem value="80+">₹80+ Lakhs</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label
                            htmlFor="familyIncome"
                            className="font-lato font-medium"
                          >
                            Family Income (Annual)
                          </Label>
                          <Select
                            onValueChange={(value) =>
                              handleInputChange("familyIncome", value)
                            }
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select income range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                              <SelectItem value="10-20">
                                ₹10-20 Lakhs
                              </SelectItem>
                              <SelectItem value="20-40">
                                ₹20-40 Lakhs
                              </SelectItem>
                              <SelectItem value="40+">₹40+ Lakhs</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="additionalInfo"
                          className="font-lato font-medium"
                        >
                          Additional Information
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Tell us about your academic background, admission status, or any specific requirements..."
                          value={formData.additionalInfo}
                          onChange={(e) =>
                            handleInputChange("additionalInfo", e.target.value)
                          }
                          className="mt-1"
                          rows={4}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-[#164069] to-[#13C8EC] hover:opacity-90 font-segoe-ui"
                      >
                        Check My Eligibility{" "}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Benefits Card */}
                <Card className="bg-gradient-to-br from-[#164069] to-[#13C8EC] text-white">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-bold text-xl mb-6">
                      Why Apply Through Astrum?
                    </h3>
                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <div
                          key={benefit.title}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-segoe-ui font-medium">
                              {benefit.title}
                            </div>
                            <div className="font-segoe-ui text-sm opacity-90">
                              {benefit.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Help Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-bold text-lg mb-4">
                      Need Help? We're Here!
                    </h3>
                    <p className="font-lato text-gray-600 mb-4 text-sm">
                      Have questions about the application process? Our loan
                      experts are ready to help.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full font-segoe-ui bg-transparent"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
