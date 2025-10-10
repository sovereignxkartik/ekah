import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import internshipImg from "@/assets/internship-card.jpg";
import mentorshipImg from "@/assets/mentorship-card.jpg";
import jobsImg from "@/assets/jobs-card.jpg";
import practiceImg from "@/assets/practice-card.jpg";
import competitionImg from "@/assets/competition-card.jpg";
import moreImg from "@/assets/more-card.jpg";

const categories = [
  {
    title: "Internships",
    subtitle: "Gain Practical Experience",
    color: "bg-gradient-to-br from-green-400 to-emerald-500",
    image: internshipImg,
  },
  {
    title: "Mentorships",
    subtitle: "Guidance From Top Mentors",
    color: "bg-gradient-to-br from-orange-400 to-amber-500",
    image: mentorshipImg,
  },
  {
    title: "Jobs",
    subtitle: "Explore Diverse Careers",
    color: "bg-gradient-to-br from-blue-400 to-cyan-500",
    image: jobsImg,
  },
  {
    title: "Practice",
    subtitle: "Refine Skills Daily",
    color: "bg-gradient-to-br from-purple-400 to-violet-500",
    image: practiceImg,
  },
  {
    title: "Competitions",
    subtitle: "Battle For Excellence",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    image: competitionImg,
  },
  {
    title: "More",
    subtitle: "Explore Everything",
    color: "bg-gradient-to-br from-pink-400 to-rose-500",
    image: moreImg,
  },
];

const Hero = () => {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Unlock Your Career
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
            </p>
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                🚀
              </div>
              <p className="text-sm font-medium">Just Went CareerVerse Pro!</p>
            </div>
          </div>
          
          {/* Right side - Category cards grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className={`${category.color} rounded-2xl p-5 h-32 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                  <div className="relative z-10">
                    <h3 className="text-base font-bold text-white mb-1">{category.title}</h3>
                    <p className="text-xs text-white/90 leading-tight">{category.subtitle}</p>
                  </div>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="absolute bottom-0 right-0 w-16 h-16 object-cover rounded-tl-2xl opacity-80 group-hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
