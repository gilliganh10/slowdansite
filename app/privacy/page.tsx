"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Shield, Lock, Eye, Database, HardDrive, Mail } from "lucide-react";
import { useRef } from "react";

export default function Privacy() {
  const headerRef = useRef(null);
  const principlesRef = useRef(null);
  const detailsRef = useRef(null);
  const contactRef = useRef(null);

  const headerInView = useInView(headerRef, { amount: 0.1 });
  const principlesInView = useInView(principlesRef, { amount: 0.1 });
  const detailsInView = useInView(detailsRef, { amount: 0.1 });
  const contactInView = useInView(contactRef, { amount: 0.1 });

  const principles = [
    {
      icon: HardDrive,
      title: "Local Processing",
      description: "All audio processing happens on your device. Your music files never leave your computer.",
      color: "gradient-green"
    },
    {
      icon: Eye,
      title: "No Tracking",
      description: "We don't track your usage, collect analytics, or monitor your behavior in any way.",
      color: "gradient-pink"
    },
    {
      icon: Database,
      title: "Zero Data Collection",
      description: "No personal information, no usage statistics, no metadata - we collect absolutely nothing.",
      color: "gradient-green"
    },
    {
      icon: Lock,
      title: "No Network Requests",
      description: "Slowdan works completely offline. No internet connection required or used.",
      color: "gradient-pink"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <motion.section 
        ref={headerRef}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 retro-grid opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-gray-700 mb-6">
              <Shield className="w-4 h-4 mr-2 text-[#33FF66]" />
              Privacy Policy
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Your Privacy is
              <span className="block text-[#33FF66]">Our Priority</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Slowdan is built with privacy by design. We believe your music and practice sessions 
              should remain completely private and secure.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Privacy Principles */}
      <motion.section 
        ref={principlesRef}
        className="py-20 bg-gradient-to-b from-transparent to-[#f2ede0]/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={principlesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Built on Privacy Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every aspect of Slowdan is designed to protect your privacy and keep your music practice completely confidential.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={principlesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="glass-card border-0 h-full group-hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${principle.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <principle.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Detailed Policy */}
      <motion.section 
        ref={detailsRef}
        className="py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={detailsInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Complete Picture
              </h2>
              <p className="text-lg text-gray-600">
                Here's exactly what Slowdan does and doesn't do with your data
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={detailsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <div className="w-10 h-10 gradient-green rounded-xl flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      What We Don't Collect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="prose prose-lg max-w-none">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#33FF66] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>Personal Information:</strong> No names, emails, or contact details</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#33FF66] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>Usage Analytics:</strong> No tracking of how you use the app</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#33FF66] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>Audio Files:</strong> Your music never leaves your device</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#33FF66] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>System Information:</strong> No device fingerprinting or system monitoring</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#33FF66] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>Cookies or Trackers:</strong> None whatsoever</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={detailsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <div className="w-10 h-10 gradient-pink rounded-xl flex items-center justify-center">
                        <HardDrive className="w-5 h-5 text-white" />
                      </div>
                      How Slowdan Works
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong className="text-gray-900">Slowdan is a completely local application.</strong> 
                        When you load an audio file, it's processed entirely on your Mac using your computer's 
                        processing power. No data is sent to our servers because we don't have any servers 
                        to send it to.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        All audio manipulation, tempo changes, pitch adjustments, and looping happens 
                        in real-time on your device. Your practice sessions, playlists, and preferences 
                        are stored locally in your Mac's application support folder.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">This isn't just a privacy choice - it's an architectural one.</strong> 
                        By keeping everything local, Slowdan is faster, more reliable, and works without 
                        an internet connection.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={detailsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <div className="w-10 h-10 gradient-green rounded-xl flex items-center justify-center">
                        <Lock className="w-5 h-5 text-white" />
                      </div>
                      Updates & Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                      Slowdan now uses Sparkle, a trusted, open‑source update framework for macOS apps. Updates are securely signed and verified, ensuring they can’t be tampered with.

Slowdan never collects or sends personal information—update checks are anonymous and only contact our update server to see if a new version is available.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        ref={contactRef}
        className="py-20 bg-gradient-to-b from-transparent to-[#f2ede0]/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={contactInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="glass-card border-0 text-center">
              <CardContent className="p-12">
                <div className="w-16 h-16 gradient-pink rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Questions About Privacy?
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  If you have any questions about this privacy policy or how Slowdan 
                  handles your data, we're happy to provide more details.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <a 
                    href="mailto:gilliganh10@gmail.com?subject=Privacy%20Policy%20Question" 
                    className="inline-flex items-center gap-3 gradient-pink text-white font-semibold px-8 py-4 text-lg rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 no-underline"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Us
                  </a>
                </motion.div>
                
                <p className="text-sm text-gray-500 mt-6">
                  We typically respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 