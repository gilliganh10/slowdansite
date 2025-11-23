"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Shield, Lock, Eye, Database, HardDrive, Mail, BarChart3, FileAudio, Mic, Globe } from "lucide-react";
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
      title: "Local Audio Processing",
      description: "All audio files and microphone input are processed locally on your device. Your music never leaves your computer.",
      color: "gradient-green"
    },
    {
      icon: BarChart3,
      title: "Anonymous Analytics Only",
      description: "We collect anonymous usage analytics via PostHog (EU-hosted) to improve the app. No personal information is collected.",
      color: "gradient-pink"
    },
    {
      icon: Lock,
      title: "No Audio Recording",
      description: "We never record, store, or transmit your audio files or microphone input. All processing happens in real-time on your device.",
      color: "gradient-green"
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "No file names, no metadata, no personal data. We only track how features are used, never what you're playing.",
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
              Privacy Policy
              <span className="block text-[#33FF66]">Transparent & Simple</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We collect anonymous usage data to improve Slowdan. Your audio stays private, 
              and no personal information is ever collected.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: November 23, 2025
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
                What We Collect
              </h2>
              <p className="text-lg text-gray-600">
                Complete transparency about data collection and usage
              </p>
            </motion.div>

            <div className="space-y-8">
              {/* Anonymous Usage Analytics */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={detailsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <div className="w-10 h-10 gradient-pink rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      Anonymous Usage Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We use <strong className="text-gray-900">PostHog</strong>, a third-party analytics service hosted in the EU (eu.i.posthog.com), 
                        to collect anonymous usage data that helps us improve the app.
                      </p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Track:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#ff3399] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>Playback Activity:</strong> Start, pause, stop events, playback duration, and session statistics</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#ff3399] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>Feature Usage:</strong> Control adjustments (speed, pitch, volume, pan settings)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#ff3399] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>App Lifecycle:</strong> App launch events and session duration</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#ff3399] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>Technical Events:</strong> Track loading, audio interface connections, instrument selections</span>
                        </li>
                      </ul>
                      
                      <p className="text-sm text-gray-600 mt-4">
                        PostHog generates an anonymous device identifier to track usage patterns across sessions. 
                        This identifier cannot be linked to your personal identity.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* What We DON'T Collect */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={detailsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <div className="w-10 h-10 gradient-green rounded-xl flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      What We DON'T Collect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="prose prose-lg max-w-none">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#33FF66] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>No Personal Information:</strong> No names, email addresses, phone numbers, or contact details</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#33FF66] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>No Audio Content:</strong> We never record, store, or transmit your audio files or recordings</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#33FF66] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>No File Metadata:</strong> No file names, artist names, song titles, or music metadata</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#33FF66] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>No Microphone Recordings:</strong> Microphone input is processed in real-time only, never recorded</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#33FF66] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>No Location Data:</strong> We don't track your location</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-[#33FF66] rounded-full mt-3 flex-shrink-0"></span>
                          <span><strong>No Contact Lists or Photos:</strong> We don't access your contacts or photo library</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Audio Processing */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={detailsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <div className="w-10 h-10 gradient-pink rounded-xl flex items-center justify-center">
                        <HardDrive className="w-5 h-5 text-white" />
                      </div>
                      Local Audio Processing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong className="text-gray-900">All audio processing happens locally on your device.</strong> 
                        Audio files you load remain on your device and are never uploaded to any servers.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Microphone input for guitar/instrument processing is processed in real-time. 
                        No audio data is recorded, stored, or transmitted to any servers. All effects 
                        and processing occur entirely on-device.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Permissions */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={detailsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <div className="w-10 h-10 gradient-green rounded-xl flex items-center justify-center">
                        <Lock className="w-5 h-5 text-white" />
                      </div>
                      Permissions We Request
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg max-w-none">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Mic className="w-5 h-5 text-[#ff3399]" />
                            Microphone Access
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            Required only for live guitar/instrument input processing. Audio is processed 
                            in real-time and not recorded or stored. You can deny this permission if you 
                            only use the app for audio file playback.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <FileAudio className="w-5 h-5 text-[#ff3399]" />
                            File Access
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            Required only to load audio files from your device for playback. 
                            Files remain on your device and are not uploaded or shared.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Data Sharing */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={detailsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <div className="w-10 h-10 gradient-pink rounded-xl flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      Third-Party Services & Data Sharing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong className="text-gray-900">PostHog Analytics:</strong> We use PostHog (hosted in the EU at eu.i.posthog.com) 
                        for anonymous usage analytics only. View PostHog's privacy policy at{" "}
                        <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#ff3399] hover:underline">
                          posthog.com/privacy
                        </a>
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">We do not:</strong> Use advertising networks, social media integrations, 
                        or other third-party tracking services. We do not sell, rent, or share your data with third parties 
                        except as required by law.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={detailsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <div className="w-10 h-10 gradient-green rounded-xl flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      Your Rights & Data Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Since we only collect anonymous usage data, no personal data profile exists 
                        that can be accessed or deleted. You can stop using the app at any time to 
                        cease data collection. Uninstalling the app removes all local data from your device.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong className="text-gray-900">Data Security:</strong> Analytics data is transmitted 
                        over encrypted connections (HTTPS). PostHog uses industry-standard security practices. 
                        All audio processing occurs locally on your device.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">Children's Privacy:</strong> Slowdan does not knowingly 
                        collect information from children under 13. The app is not directed at children under 13 years of age.
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
                    href="mailto:support@slowdan.com?subject=Privacy%20Policy%20Question" 
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