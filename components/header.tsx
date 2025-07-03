"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200/50 sticky top-0 z-50" style={{background: 'linear-gradient(135deg, #faf5ed 0%, #f2ede0 100%)'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-xl font-semibold text-gray-900 hover:text-[#ff3399] transition-colors"
          >
            Slowdan
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-[#ff3399] transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-700 hover:text-[#ff3399] transition-colors font-medium"
            >
              Privacy
            </Link>
            <Link 
              href="/support" 
              className="text-gray-700 hover:text-[#ff3399] transition-colors font-medium"
            >
              Support
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#ff3399] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/privacy" 
                className="text-gray-700 hover:text-[#ff3399] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link 
                href="/support" 
                className="text-gray-700 hover:text-[#ff3399] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 