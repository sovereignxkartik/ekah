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

const CategoryCards = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`${category.color} rounded-2xl p-6 h-40 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-1">{category.title}</h3>
                  <p className="text-sm text-white/90 leading-tight">{category.subtitle}</p>
                </div>
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="absolute bottom-0 right-0 w-20 h-20 object-cover rounded-tl-2xl opacity-80 group-hover:scale-110 transition-transform"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
