import { Briefcase, Trophy, GraduationCap, Target, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Briefcase,
    title: "Jobs & Internships",
    description: "Access verified listings from top companies and startups. Filter by domain, location, and requirements.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Trophy,
    title: "Hackathons & Competitions",
    description: "Discover coding contests, case competitions, and innovation challenges. Track deadlines and participate.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Placement Resources",
    description: "Comprehensive study materials, aptitude tests, coding challenges, and interview preparation guides.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Target,
    title: "AI Recommendations",
    description: "Get personalized opportunity suggestions based on your profile, skills, and career aspirations.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Community & Mentorship",
    description: "Connect with peers, find mentors, join study groups, and learn from successful alumni.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Progress Tracking",
    description: "Monitor your applications, track skill development, set goals, and celebrate achievements.",
    gradient: "from-yellow-500 to-orange-500",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive platform designed to accelerate your career journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
