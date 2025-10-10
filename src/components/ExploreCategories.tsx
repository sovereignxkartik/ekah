import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Quizzes",
    description: "Test your knowledge",
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    icon: "📝",
  },
  {
    title: "Hackathons",
    description: "Build & innovate",
    color: "bg-gradient-to-br from-green-400 to-green-600",
    icon: "💻",
  },
  {
    title: "Scholarships",
    description: "Fund your education",
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
    icon: "🎓",
  },
  {
    title: "Conferences",
    description: "Network & learn",
    color: "bg-gradient-to-br from-orange-300 to-orange-500",
    icon: "🎤",
  },
  {
    title: "College Festivals",
    description: "Celebrate & compete",
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    icon: "🏆",
  },
];

const ExploreCategories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              Pick The <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Right Opportunity!</span>
            </h2>
            <p className="text-muted-foreground">Explore opportunities that best suits your skills and interests!</p>
          </div>
          <Button variant="link" className="hidden sm:flex">
            Explore all →
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${category.color} rounded-2xl p-8 h-64 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/90">{category.description}</p>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
