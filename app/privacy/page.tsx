import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
          </div>

          <Card className="border border-gray-200/50 shadow-sm" style={{background: 'linear-gradient(135deg, #faf5ed 0%, #f2ede0 100%)'}}>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Our Commitment to Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Slowdan does not collect, store, or transmit any personal data.</strong>
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  All audio files are processed locally on your device. Your music stays on your machine — 
                  we never see it, store it, or have access to it in any way.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">No analytics, no tracking, no advertising.</strong> 
                  Slowdan is designed with privacy as a core principle, following the tradition of 
                  simple, respectful software tools.
                </p>
                
                <div className="mt-8 p-6 rounded-lg border border-gray-200/50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Questions or Concerns?</h3>
                  <p className="text-gray-700">
                    If you have any questions about this privacy policy or Slowdan in general, 
                    please feel free to contact us at:{" "}
                    <a 
                      href="mailto:gilliganh10@gmail.com" 
                      className="text-[#ff3399] hover:text-[#e6007a] font-medium underline transition-colors"
                    >
                      gilliganh10@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 