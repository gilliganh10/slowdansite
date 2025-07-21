"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import MacOnlyModal from "./mac-only-modal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMacModal, setShowMacModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-card border-b border-white/20' 
            : 'bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/" 
                className="flex items-center space-x-3 group"
              >
                <div className="w-10 h-10 gradient-pink rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all duration-300">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Slowdan
                </span>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#ff3399] transition-colors font-medium relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff3399] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/privacy" 
                className="text-gray-700 hover:text-[#ff3399] transition-colors font-medium relative group"
              >
                Privacy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff3399] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/support" 
                className="text-gray-700 hover:text-[#ff3399] transition-colors font-medium relative group"
              >
                Support
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff3399] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleDownloadClick}
                  className="gradient-pink text-white font-semibold px-6 py-2 rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 border-0"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden border-t border-white/20 mt-4"
              >
                <nav className="flex flex-col py-4 space-y-4">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link 
                      href="/" 
                      className="text-gray-700 hover:text-[#ff3399] transition-colors font-medium py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link 
                      href="/privacy" 
                      className="text-gray-700 hover:text-[#ff3399] transition-colors font-medium py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Privacy
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link 
                      href="/support" 
                      className="text-gray-700 hover:text-[#ff3399] transition-colors font-medium py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Support
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="pt-2"
                  >
                    <Button 
                      onClick={handleDownloadClick}
                      className="gradient-pink text-white font-semibold px-6 py-2 rounded-xl w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mac Only Modal */}
      <MacOnlyModal 
        isOpen={showMacModal}
        onClose={() => setShowMacModal(false)}
      />
    </>
  );
} 