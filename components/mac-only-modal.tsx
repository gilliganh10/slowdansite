import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface MacOnlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MacOnlyModal({ isOpen, onClose }: MacOnlyModalProps) {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterInterest = () => {
    if (typeof window !== "undefined" && (window as any).plausible) {
      (window as any).plausible("Platform Interest Vote");
    }
    setIsRegistered(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] max-w-[400px] p-6 rounded-2xl border-0 shadow-2xl bg-[#faf5ed]">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-gray-900 via-[#ff3399] to-gray-900 bg-clip-text text-transparent">
            {isRegistered ? "Thanks for your vote!" : "Currently Mac Only"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {isRegistered ? (
              <div className="flex flex-col items-center space-y-6 pt-2">
                <div className="w-16 h-16 gradient-green rounded-2xl flex items-center justify-center">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <p className="text-base sm:text-lg text-gray-700">
                  We've registered your interest in other platforms. We'll prioritize based on demand!
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700">
                  Slowdan is currently only available for macOS desktop. Want to see it on your platform? Let us know by registering your interest!
                </p>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6 sm:mt-8">
          {!isRegistered ? (
            <div className="flex flex-col space-y-3 w-full">
              <Button
                onClick={handleRegisterInterest}
                className="w-full gradient-pink text-white font-semibold py-3 text-lg rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
              >
                Register Interest
              </Button>
              <Button
                variant="ghost"
                onClick={onClose}
                className="w-full text-gray-600 hover:text-gray-900 font-medium"
              >
                Maybe Later
              </Button>
            </div>
          ) : (
            <Button
              onClick={onClose}
              className="w-full gradient-pink text-white font-semibold py-3 text-lg rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              Close
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 