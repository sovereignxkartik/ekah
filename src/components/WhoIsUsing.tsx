import { Briefcase, GraduationCap, Building2, TrendingUp, Users, Award } from "lucide-react";

const users = [{
  title: "Students and Professionals",
  tagline: "Unlock Your Potential:",
  description: "Compete, Build Resume, Grow and get Hired!",
  color: "bg-gradient-to-br from-blue-100 to-blue-50",
  icon: GraduationCap,
  features: [
    { icon: Briefcase, text: "Access tailored jobs and internships" },
    { icon: Award, text: "Participate in exciting competitions" },
    { icon: TrendingUp, text: "Upskill with mentorships & workshops" },
    { icon: Users, text: "Showcase your profile to top recruiters" },
  ]
}, {
  title: "Companies and Recruiters",
  tagline: "Discover Right Talent:",
  description: "Hire, Engage, and Brand Like Never Before!",
  color: "bg-gradient-to-br from-purple-100 to-purple-50",
  icon: Building2,
  features: [
    { icon: Award, text: "Build employer brand with engagements" },
    { icon: Briefcase, text: "Host jobs & internships to hire top talent" },
    { icon: TrendingUp, text: "Streamline hiring with AI-driven tools" },
    { icon: Users, text: "Connect with 24M GenZs based on skills" },
  ]
}, {
  title: "Colleges",
  tagline: "Bridge Academia and Industry:",
  description: "Empower Students with Real-World Opportunities!",
  color: "bg-gradient-to-br from-yellow-100 to-yellow-50",
  icon: Building2,
  features: [
    { icon: Award, text: "Offer top competition & job opportunities" },
    { icon: Users, text: "Partner with companies for placements" },
    { icon: TrendingUp, text: "Gain insights into student performance" },
    { icon: GraduationCap, text: "Foster industry-academic collaboration" },
  ]
}];
const WhoIsUsing = () => {
  return <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Who's using CareerVerse?</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {users.map((user, index) => {
            const IconComponent = user.icon;
            return (
              <div key={index} className="group cursor-pointer animate-fade-in-up" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className={`${user.color} border border-border rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full`}>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold mb-1 group-hover:text-primary transition-colors">
                        {user.title}
                      </h3>
                      <p className="text-xs font-semibold text-foreground/80 mb-0.5">
                        {user.tagline}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {user.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {user.features.map((feature, fIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={fIndex} className="flex items-start gap-2 text-xs text-foreground/70 transition-colors duration-200 hover:text-foreground">
                          <FeatureIcon className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                          <span>{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>;
};
export default WhoIsUsing;