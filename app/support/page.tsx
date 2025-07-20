"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, useInView } from "framer-motion";
import { Mail, MessageSquare, Clock, Wrench, Lightbulb, Send, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const headerRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const headerInView = useInView(headerRef, { amount: 0.1 });
  const faqInView = useInView(faqRef, { amount: 0.1 });
  const contactInView = useInView(contactRef, { amount: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form - create mailto link with form data
    const subject = encodeURIComponent(`Slowdan Support: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:gilliganh10@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqItems = [
    {
      "question": "Can I use Slowdan with any music file?",
      "answer": "Slowdan works with DRM-free music files only. This means you can use tracks you’ve purchased or own, but not those protected by streaming services like Apple Music or Spotify."
    },
    
    {
      question: "What audio formats does Slowdan support?",
      answer: "Slowdan supports all major audio formats including MP3, WAV, FLAC, AAC, and M4A. Simply drag and drop your files to get started."
    },
    {
      question: "Is my music data private?",
      answer: "Absolutely. All processing happens locally on your device. Your music never leaves your computer - no uploads, no cloud storage, no tracking."
    },
    
  ];

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Global retro-grid background */}
      <div className="fixed inset-0 retro-grid opacity-5 pointer-events-none"></div>
      
      {/* Header Section */}
      <motion.section 
        ref={headerRef}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-gray-700 mb-6">
              <MessageSquare className="w-4 h-4 mr-2 text-[#ff3399]" />
              Support Center
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              How Can We
              <span className="block text-[#ff3399]">Help You?</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Get the support you need to make the most of Slowdan. 
              From quick answers to detailed guidance, we're here to help.
            </p>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#ff3399] transition-colors cursor-pointer"
              onClick={() => faqRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm font-medium">Explore FAQ</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        ref={faqRef}
        className="py-20 bg-gradient-to-b from-transparent to-[#f2ede0]/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={faqInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about Slowdan
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {faqItems.map((item, index) => (
                                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={faqInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                  <Card className="glass-card border-0 group hover:shadow-xl hover:shadow-[#ff3399]/10 transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 gradient-pink rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold">?</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {item.question}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#ff3399] transition-colors cursor-pointer"
              onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm font-medium">Get in Touch</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        ref={contactRef}
        className="py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={contactInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Still Need Help?
            </h2>
            <p className="text-lg text-gray-600">
              Get in touch with our support team for personalized assistance
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={contactInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="glass-card border-0 h-full">
                  <CardHeader>
                    <CardTitle className="text-3xl text-gray-900 flex items-center gap-3">
                      <div className="w-12 h-12 gradient-pink rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      Get in Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Email us directly and we'll get back to you as soon as possible.
                      </p>
                      
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="p-4 glass rounded-xl"
                      >
                        <a 
                          href="mailto:gilliganh10@gmail.com" 
                          className="text-[#ff3399] hover:text-[#e6007a] font-semibold text-lg underline transition-colors flex items-center gap-2"
                        >
                          <Mail className="w-5 h-5" />
                          gilliganh10@gmail.com
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </motion.div>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        {
                          icon: Clock,
                          title: "Quick Response",
                          description: "We typically respond within 24 hours",
                          color: "gradient-green"
                        },
                        {
                          icon: Wrench,
                          title: "Technical Support",
                          description: "Help with bugs, features, and setup",
                          color: "gradient-pink"
                        },
                        {
                          icon: Lightbulb,
                          title: "Feature Requests",
                          description: "Ideas to make Slowdan even better",
                          color: "gradient-green"
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={contactInView ? { x: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={contactInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="glass-card border-0 h-full">
                  <CardHeader>
                    <CardTitle className="text-3xl text-gray-900 flex items-center gap-3">
                      <div className="w-12 h-12 gradient-green rounded-xl flex items-center justify-center">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      Send a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="glass-card border-0 h-12"
                            placeholder="Your name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="glass-card border-0 h-12"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="glass-card border-0 h-12"
                          placeholder="How can we help?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="glass-card border-0 min-h-[150px] resize-none"
                          placeholder="Tell us more about your question or issue..."
                        />
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          className="w-full gradient-pink text-white font-semibold py-3 text-lg rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 border-0"
                        >
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </Button>
                      </motion.div>
                      
                      <p className="text-sm text-gray-500 text-center">
                        This will open your email client with the message pre-filled
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 