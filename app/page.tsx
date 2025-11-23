"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Download, Play, Pause, Volume2, RotateCcw, Settings, Star, Users, Zap, Shield, Music, Headphones, Guitar, Sliders, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import MacOnlyModal from "@/components/mac-only-modal";
import { VideoModal } from "@/components/ui/modal";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [showMacModal, setShowMacModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Scroll transforms for parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Refs for scroll animations
  const heroRef = useRef<HTMLElement>(null);
  const screenshotRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { amount: 0.1 });
  const screenshotInView = useInView(screenshotRef, { amount: 0.1 });
  const featuresInView = useInView(featuresRef, { amount: 0.1 });
  const testimonialsInView = useInView(testimonialsRef, { amount: 0.1 });
  const ctaInView = useInView(ctaRef, { amount: 0.1 });

  const isMacDesktop = () => {
    if (typeof window === "undefined") return false;
    
    const platform = navigator.platform || '';
    const userAgent = navigator.userAgent || '';
    
    // Check if it's a Mac but not iOS
    const isMac = /Mac/.test(platform);
    const isIOS = /iPhone|iPad|iPod/.test(userAgent);
    
    return isMac && !isIOS;
  };

  const handleDownloadClick = (e: React.MouseEvent) => {
    // Always prevent default to handle the download manually
    e.preventDefault();

    if (!isMacDesktop()) {
      setShowMacModal(true);
      if (typeof window !== "undefined" && (window as any).plausible) {
        (window as any).plausible("Non-Mac Download Attempt");
      }
    } else {
      if (typeof window !== "undefined") {
        // For Mac desktop, create a direct download link
        const link = document.createElement('a');
        link.href = '/Slowdan-1.0.1.dmg';
        link.download = 'Slowdan-1.0.1.dmg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        if ((window as any).plausible) {
          (window as any).plausible("Mac Download");
        }
      }
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Global retro-grid background */}
      <div className="fixed inset-0 retro-grid opacity-5 pointer-events-none"></div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden retro-grid"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf5ed]/50 to-[#faf5ed]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
             

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-[#ff3399] to-gray-900 bg-clip-text text-transparent">
                  Slowdan
                </span>
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-6 sm:mb-8 font-light leading-relaxed">
                Slow Down. Pitch Up.<br />
                <span className="text-[#ff3399] font-medium">Slow Jams, Quick Hands.</span>
              </p>

              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                Bend time. Shift pitch. Own the track. <br />
                Slowdan let's you plug in, lock in, and nail every note.'
              </p>

            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button
                size="lg"
                onClick={handleDownloadClick}
                className="gradient-pink text-white font-semibold px-8 py-4 text-lg rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 border-0"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for macOS
              </Button>
              <Button
                size="lg"
                onClick={() => setShowVideoModal(true)}
                className="bg-white/90 text-gray-900 font-semibold px-8 py-4 text-lg rounded-xl hover:shadow-lg hover:bg-white transition-all duration-300 border border-gray-200"
              >
                <Play className="w-5 h-5 mr-2" />
                See it in Action
              </Button>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-20 left-10 w-16 h-16 gradient-green rounded-2xl opacity-20 animate-float"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-30 right-10 w-12 h-12 gradient-pink rounded-xl opacity-20 animate-float"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ animationDelay: "2s" }}
            />
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gray-600 hover:text-[#ff3399] transition-colors cursor-pointer"
              onClick={() => screenshotRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm font-medium ">Explore Features</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* App Screenshot Section */}
      <motion.section
        ref={screenshotRef}
        className="py-8 sm:py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              {[
                { src: "/screens/1.png", alt: "Slowdan Screen 1" },
                { src: "/screens/2.png", alt: "Slowdan Screen 2" },
                { src: "/screens/3.PNG", alt: "Slowdan Screen 3" }
              ].map((screen, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="rounded-lg overflow-hidden shadow-lg border border-gray-100/20 bg-white max-w-[280px] mx-auto"
                >
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={280}
                    height={560}
                    className="w-full h-auto object-contain"
                    priority={index === 0}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={screenshotInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#ff3399] transition-colors cursor-pointer"
              onClick={() => featuresRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm font-medium">See Features</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={featuresInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Practice At Your
              <span className="block text-[#ff3399]">Own Pace</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Independent speed and pitch control.  Crafted for guitarists
              who want to master their craft without compromise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Volume2,
                title: "Independent Speed Control",
                description: "Slow down from 0.5x to 2x speed without affecting pitch. Practice complex passages at your perfect tempo.",
                color: "gradient-pink",
                delay: 0.1
              },
              {
                icon: Music,
                title: "Two-Octave Pitch Range",
                description: "Transpose across two full octaves. Play in any key without retuning, or find the perfect key for your voice.",
                color: "gradient-green",
                delay: 0.2
              },
              {
                icon: Guitar,
                title: "Guitar Input & Pan Controls",
                description: "Plug in directly and mix your guitar into the track. Professional pan controls help you sit perfectly in the mix.",
                color: "gradient-pink",
                delay: 0.3
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={featuresInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: feature.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Card className="glass-card border-0 h-full group-hover:shadow-xl group-hover:shadow-[#ff3399]/10 transition-all duration-500">
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${feature.color} rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technical Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={featuresInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 sm:mt-16 lg:mt-20"
          >
            <div className="grid md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Sliders, stat: "0.5x-2x", label: "Speed Range" },
                { icon: Music, stat: "2 Octaves", label: "Pitch Range" },
                { icon: Headphones, stat: "Low Latency", label: "Real-time Audio" },
                { icon: Guitar, stat: "Direct Input", label: "Guitar Ready" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={featuresInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center glass-card p-3 sm:p-4 lg:p-6 rounded-xl"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 gradient-green rounded-xl mx-auto mb-2 sm:mb-4 flex items-center justify-center">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900">{item.stat}</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <Button
                  size="lg"
                  onClick={handleDownloadClick}
                  className="gradient-pink text-white font-semibold px-12 py-6 text-xl rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 border-0"
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download Slowdan
                </Button>
          </motion.div>
        </div>
      </motion.section>



      

      {/* Mac Only Modal */}
      <MacOnlyModal 
        isOpen={showMacModal}
        onClose={() => setShowMacModal(false)}
      />

      {/* Video Trailer Modal */}
      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoId="rVUcjJeXWHM"
      />
    </div>
  );
}
