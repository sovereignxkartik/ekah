import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import internshipImg from "@/assets/internship-card.jpg";
import mentorshipImg from "@/assets/mentorship-card.jpg";
import jobsImg from "@/assets/jobs-card.jpg";
import practiceImg from "@/assets/practice-card.jpg";
import competitionImg from "@/assets/competition-card.jpg";
import moreImg from "@/assets/more-card.jpg";

const banners = [
  {
    title: "aspire 2.0",
    subtitle: "Case study competition brought to you by HDFC Life",
    headline: "Crack Challenges & Win Big",
    prize: "Cash Prize worth ₹1.5 lakh",
    color: "bg-gradient-to-r from-pink-50 via-purple-50 to-pink-100",
    textColor: "text-purple-900",
    accentColor: "bg-red-500 hover:bg-red-600",
    features: ["Three qualifying rounds", "Grand finale with HDFC Life leadership", "Cash Prize worth ₹1.5 lakh"],
  },
  {
    title: "Unstop National Olympiad",
    subtitle: "Where young minds turn into Champions!",
    headline: "Recognition and prizes",
    prize: "MacBook Air, Cash prizes up to ₹5,00,000",
    color: "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800",
    textColor: "text-white",
    accentColor: "bg-yellow-500 hover:bg-yellow-600",
    features: ["CV points & Certificate", "Participate on Unstop"],
  },
  {
    title: "Tech Innovation Challenge 2025",
    subtitle: "Build the future with cutting-edge technology",
    headline: "Code, Create, Win",
    prize: "₹10 lakh in prizes & internship opportunities",
    color: "bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700",
    textColor: "text-white",
    accentColor: "bg-green-500 hover:bg-green-600",
    features: ["Open to all students", "Team collaboration allowed"],
  },
  {
    title: "AI/ML Hackathon 2025",
    subtitle: "Innovate with Artificial Intelligence",
    headline: "Build Smart Solutions",
    prize: "₹5 lakh in prizes & mentorship",
    color: "bg-gradient-to-r from-orange-500 via-red-500 to-pink-600",
    textColor: "text-white",
    accentColor: "bg-blue-500 hover:bg-blue-600",
    features: ["48-hour virtual hackathon", "Industry mentors"],
  },
];

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
    <section className="relative py-8 lg:py-12 overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        {/* Banner Carousel - Shows 2 banners at once */}
        <Carousel 
          className="w-full mb-8 animate-fade-in"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {banners.map((banner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                <div className={`${banner.color} rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full`}>
                  <div className="p-5 md:p-6 flex flex-col justify-between h-full min-h-[180px]">
                    <div>
                      <p className="text-xs font-medium mb-2 opacity-90 ${banner.textColor}">{banner.title}</p>
                      <h2 className={`text-base md:text-xl font-bold mb-2 ${banner.textColor}`}>{banner.headline}</h2>
                      <p className={`text-xs mb-3 opacity-80 ${banner.textColor}`}>{banner.subtitle}</p>
                      <div className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold mb-3">
                        {banner.prize}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex flex-wrap gap-2">
                        {banner.features.slice(0, 2).map((feature, fIdx) => (
                          <span key={fIdx} className={`text-xs ${banner.textColor} opacity-75 flex items-center gap-1`}>
                            <span className="w-1 h-1 rounded-full bg-current"></span>
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button size="sm" className={`${banner.accentColor} text-white text-xs px-4 py-2 shadow-md flex-shrink-0`}>
                        Register
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2" />
          <CarouselNext className="right-0 translate-x-1/2" />
        </Carousel>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3">
              Unlock Your Career
            </h1>
            
            <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl">
              Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.
            </p>
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold">
                🚀
              </div>
              <p className="text-xs font-medium">Just Went CareerVerse Pro!</p>
            </div>
          </div>
          
          {/* Right side - Category cards grid */}
          <div className="grid grid-cols-2 gap-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className={`${category.color} rounded-xl p-4 h-24 md:h-28 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                  <div className="relative z-10">
                    <h3 className="text-sm font-bold text-white mb-0.5">{category.title}</h3>
                    <p className="text-xs text-white/90 leading-tight">{category.subtitle}</p>
                  </div>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="absolute bottom-0 right-0 w-12 h-12 md:w-14 md:h-14 object-cover rounded-tl-xl opacity-80 group-hover:scale-110 transition-transform duration-300"
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
