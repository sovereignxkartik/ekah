import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoIsUsing from "@/components/WhoIsUsing";
import TrustedCompanies from "@/components/TrustedCompanies";
import ScrollingOpportunities from "@/components/ScrollingOpportunities";
import ExploreCategories from "@/components/ExploreCategories";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// Sample data for scrolling opportunities
const featuredOpportunities = [
  {
    title: "National Tech Olympiad 2025",
    company: "CareerVerse",
    type: "Free",
    mode: "Online",
    registered: 23450,
    deadline: "23 days left",
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    title: "AI Innovation Challenge",
    company: "TechCorp",
    type: "Paid",
    mode: "Online",
    registered: 15320,
    deadline: "15 days left",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
    badge: "Actively Hiring",
  },
  {
    title: "Startup Hackathon 2025",
    company: "Innovation Hub",
    type: "Free",
    mode: "In Office",
    registered: 8920,
    deadline: "30 days left",
    image: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    title: "Data Science Competition",
    company: "DataLabs",
    type: "Prize",
    mode: "Online",
    registered: 12450,
    deadline: "20 days left",
    image: "bg-gradient-to-br from-orange-500 to-red-500",
  },
];

const internships = [
  {
    title: "UI/UX Designer Internship",
    company: "Coding Samurai",
    type: "Unpaid",
    mode: "Remote",
    registered: 18,
    deadline: "16 days left",
    image: "bg-gradient-to-br from-indigo-500 to-purple-500",
    badge: "Actively Hiring",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Tech Innovations",
    type: "Paid",
    mode: "Hybrid",
    registered: 142,
    deadline: "25 days left",
    image: "bg-gradient-to-br from-blue-500 to-purple-500",
  },
  {
    title: "Marketing Internship",
    company: "Growth Labs",
    type: "Stipend",
    mode: "In Office",
    registered: 87,
    deadline: "12 days left",
    image: "bg-gradient-to-br from-pink-500 to-rose-500",
  },
  {
    title: "AI/ML Research Intern",
    company: "AI Solutions",
    type: "Paid",
    mode: "Remote",
    registered: 203,
    deadline: "28 days left",
    image: "bg-gradient-to-br from-cyan-500 to-blue-500",
    badge: "Actively Hiring",
  },
];

const competitions = [
  {
    title: "LaunchX Competition",
    company: "University Challenge",
    type: "Prize",
    mode: "Online",
    registered: 15,
    deadline: "16 days left",
    image: "bg-gradient-to-br from-gray-700 to-gray-900",
  },
  {
    title: "SharkTank Challenge",
    company: "Business Institute",
    type: "Cash Prize",
    mode: "Hybrid",
    registered: 8,
    deadline: "29 days left",
    image: "bg-gradient-to-br from-blue-600 to-blue-800",
    badge: "Actively Hiring",
  },
  {
    title: "Innovation Quest 2025",
    company: "Tech Summit",
    type: "Prize",
    mode: "In Office",
    registered: 42,
    deadline: "22 days left",
    image: "bg-gradient-to-br from-purple-600 to-pink-600",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhoIsUsing />
      <TrustedCompanies />
      <ScrollingOpportunities 
        title="Featured Opportunities" 
        subtitle="Check out the curated opportunities handpicked for you from top organizations."
        opportunities={featuredOpportunities}
      />
      <ScrollingOpportunities 
        title="Competitions" 
        opportunities={competitions}
      />
      <ScrollingOpportunities 
        title="Internships" 
        subtitle="Find jobs that fit your career aspirations."
        opportunities={internships}
      />
      <ExploreCategories />
      <HowItWorks />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
