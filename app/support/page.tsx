"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Support
            </h1>
            <p className="text-xl text-gray-600">
              Need help with Slowdan? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="border border-gray-200/50 shadow-sm" style={{background: 'linear-gradient(135deg, #faf5ed 0%, #f2ede0 100%)'}}>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="text-[#ff3399]">✉️</span>
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Email us directly at{" "}
                  <a 
                    href="mailto:gilliganh10@gmail.com" 
                    className="text-[#ff3399] hover:text-[#e6007a] font-semibold underline transition-colors"
                  >
                    gilliganh10@gmail.com
                  </a>
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#33FF66] text-lg">🚀</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Quick Response</h3>
                      <p className="text-gray-600 text-sm">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-[#ff3399] text-lg">🛠️</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Technical Support</h3>
                      <p className="text-gray-600 text-sm">Help with bugs, features, and setup</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-[#33FF66] text-lg">💡</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Feature Requests</h3>
                      <p className="text-gray-600 text-sm">Ideas to make Slowdan even better</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="border border-gray-200/50 shadow-sm" style={{background: 'linear-gradient(135deg, #faf5ed 0%, #f2ede0 100%)'}}>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                  <span className="text-[#33FF66]">📝</span>
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/50"
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[120px] bg-white/50"
                      placeholder="Tell us more about your question or issue..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#ff3399] hover:bg-[#e6007a] text-white font-semibold py-2 transition-colors"
                  >
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    This will open your email client with the message pre-filled
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 