import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Hi,<br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Unlock Your Career
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Opportunities
            </Button>
          </div>
          
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
              🚀
            </div>
            <div>
              <p className="text-sm font-semibold">Aisha</p>
              <p className="text-xs text-muted-foreground">Just Went CareerVerse Pro! <span className="text-primary font-medium">Explore Pro</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
