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
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your journey to career success in four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
