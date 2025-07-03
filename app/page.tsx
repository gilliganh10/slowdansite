import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Slowdan
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 font-medium">
              Retro music slowdown and playback tool
            </p>
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-lg text-gray-600 leading-relaxed">
                Slowdan lets you slow down, pitch shift, and play along with your favourite songs. 
              </p>
            </div>
            <Link href="/support">
              <Button 
                size="lg" 
                className="bg-[#ff3399] hover:bg-[#e6007a] text-white font-semibold px-8 py-3 text-lg rounded-lg transition-colors"
              >
                Get Support
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow" style={{background: 'linear-gradient(135deg, #faf5ed 0%, #f2ede0 100%)'}}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#33FF66] rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast & Local</h3>
                <p className="text-gray-600">All processing happens on your device. No internet required.</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow" style={{background: 'linear-gradient(135deg, #faf5ed 0%, #f2ede0 100%)'}}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#ff3399] rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🎵</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pitch Perfect</h3>
                <p className="text-gray-600">Slow down without changing pitch, or adjust both independently.</p>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </div>
    </div>
  );
}
