import { UserPlus, Search, BookOpen, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and tell us about your skills, interests, and career goals.",
  },
  {
    icon: Search,
    title: "Discover Opportunities",
    description: "Browse personalized internships, jobs, and hackathons that match your profile.",
  },
  {
    icon: BookOpen,
    title: "Access Resources",
    description: "Learn with placement prep materials, mock tests, and expert guidance.",
  },
  {
    icon: TrendingUp,
    title: "Track & Grow",
    description: "Monitor your progress, participate in competitions, and land your dream role.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Your journey to career success in four simple steps
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-base shadow-md">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 bg-secondary rounded-lg group-hover:scale-105 transition-transform">
                  <step.icon className="h-6 w-6 text-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-base md:text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
