const users = [
  {
    title: "Students and Professionals",
    description: "Discover Right Talent: Hire, Engage, and Brand Like Never Before!",
    color: "bg-gradient-to-br from-blue-400 to-blue-500",
    icon: "👨‍🎓",
  },
  {
    title: "Companies and Recruiters",
    description: "Discover Right Talent: Hire, Engage, and Brand Like Never Before!",
    color: "bg-gradient-to-br from-purple-400 to-purple-500",
    icon: "💼",
  },
  {
    title: "Colleges",
    description: "Bridge Academia and Industry: Empower Students with Real-World Opportunities!",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    icon: "🏛️",
  },
];

const WhoIsUsing = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Who's using CareerVerse?</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {user.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {user.description}
                    </p>
                  </div>
                  <div className={`${user.color} w-24 h-24 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {user.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsUsing;
