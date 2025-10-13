import { ArrowRight, Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Opportunity {
  title: string;
  company: string;
  type: string;
  mode: string;
  registered: number;
  deadline: string;
  image: string;
  badge?: string;
}

interface ScrollingOpportunitiesProps {
  title: string;
  subtitle?: string;
  opportunities: Opportunity[];
}

const ScrollingOpportunities = ({ title, subtitle, opportunities }: ScrollingOpportunitiesProps) => {
  const navigate = useNavigate();
  
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
          <Button 
            variant="link" 
            className="hidden sm:flex"
            onClick={() => navigate("/internships")}
          >
            View all <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="relative">
          {/* Horizontal scroll container */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {opportunities.map((opp, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer snap-start"
                onClick={() => navigate("/internships/1")}
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <div className={`w-full h-full ${opp.image}`} />
                  {opp.badge && (
                    <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      ⚡ {opp.badge}
                    </div>
                  )}
                </div>
                
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex gap-2 mb-2">
                        <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
                          {opp.mode}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent font-medium">
                          {opp.type}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {opp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{opp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-3">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{opp.registered.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{opp.deadline}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/internships/1");
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none hidden lg:flex justify-between px-4">
            <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              ‹
            </div>
            <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              ›
            </div>
          </div>
        </div>
        
        <Button 
          variant="link" 
          className="sm:hidden w-full mt-4"
          onClick={() => navigate("/internships")}
        >
          View all <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ScrollingOpportunities;
