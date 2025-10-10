import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium mb-8 text-white">
            <Sparkles className="h-4 w-4" />
            <span>Start Your Journey Today</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Don't Just Dream It —{" "}
            <span className="relative">
              Build It
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/40 rounded-full" />
            </span>
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students and professionals who are already building their dream careers with our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-2xl text-lg px-8 py-6 h-auto group"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-lg px-8 py-6 h-auto"
            >
              Learn More
            </Button>
          </div>
          
          <p className="text-white/70 mt-8 text-sm">
            No credit card required • Free forever • Join 10,000+ users
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
