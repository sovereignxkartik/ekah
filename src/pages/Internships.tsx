import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Building2, IndianRupee, Clock, Users, TrendingUp, ArrowRight } from "lucide-react";

const trendingInternships = [
  {
    id: "1",
    title: "Full Stack Development Internship",
    company: "TechCorp Solutions",
    location: "Bangalore, Karnataka",
    mode: "Hybrid",
    stipend: "₹15,000 - ₹25,000/month",
    duration: "6 months",
    deadline: "15 days left",
    registered: 2453,
    image: "bg-gradient-to-br from-secondary to-muted",
    badge: "Hot",
  },
  {
    id: "2",
    title: "UI/UX Design Internship",
    company: "Creative Studios",
    location: "Mumbai, Maharashtra",
    mode: "Remote",
    stipend: "₹12,000 - ₹20,000/month",
    duration: "3 months",
    deadline: "20 days left",
    registered: 1876,
    image: "bg-gradient-to-br from-muted to-card",
    badge: "Trending",
  },
  {
    id: "3",
    title: "Data Science Internship",
    company: "AI Innovations",
    location: "Hyderabad, Telangana",
    mode: "In-office",
    stipend: "₹18,000 - ₹30,000/month",
    duration: "6 months",
    deadline: "10 days left",
    registered: 3201,
    image: "bg-gradient-to-br from-card to-secondary",
    badge: "High Stipend",
  },
];

const allInternships = [
  {
    id: "1",
    title: "Full Stack Development Internship",
    company: "TechCorp Solutions",
    location: "Bangalore, Karnataka",
    mode: "Hybrid",
    stipend: "₹15,000 - ₹25,000/month",
    duration: "6 months",
    deadline: "15 days left",
    registered: 2453,
    type: "Development",
  },
  {
    id: "2",
    title: "UI/UX Design Internship",
    company: "Creative Studios",
    location: "Mumbai, Maharashtra",
    mode: "Remote",
    stipend: "₹12,000 - ₹20,000/month",
    duration: "3 months",
    deadline: "20 days left",
    registered: 1876,
    type: "Design",
  },
  {
    id: "3",
    title: "Data Science Internship",
    company: "AI Innovations",
    location: "Hyderabad, Telangana",
    mode: "In-office",
    stipend: "₹18,000 - ₹30,000/month",
    duration: "6 months",
    deadline: "10 days left",
    registered: 3201,
    type: "Data Science",
  },
  {
    id: "4",
    title: "Digital Marketing Internship",
    company: "MarketPro",
    location: "Delhi, NCR",
    mode: "Remote",
    stipend: "₹8,000 - ₹15,000/month",
    duration: "3 months",
    deadline: "25 days left",
    registered: 1542,
    type: "Marketing",
  },
  {
    id: "5",
    title: "Backend Development Internship",
    company: "CloudTech",
    location: "Pune, Maharashtra",
    mode: "Hybrid",
    stipend: "₹16,000 - ₹28,000/month",
    duration: "6 months",
    deadline: "18 days left",
    registered: 2108,
    type: "Development",
  },
  {
    id: "6",
    title: "Content Writing Internship",
    company: "MediaHouse",
    location: "Chennai, Tamil Nadu",
    mode: "Remote",
    stipend: "₹5,000 - ₹10,000/month",
    duration: "2 months",
    deadline: "30 days left",
    registered: 987,
    type: "Content",
  },
];

const Internships = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [modeFilter, setModeFilter] = useState("all");
  const [stipendFilter, setStipendFilter] = useState("all");

  const filteredInternships = allInternships.filter((internship) => {
    const matchesSearch =
      searchQuery === "" ||
      internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocation =
      locationFilter === "all" ||
      internship.location.toLowerCase().includes(locationFilter.toLowerCase());

    const matchesMode =
      modeFilter === "all" || internship.mode === modeFilter;

    const matchesStipend = stipendFilter === "all" || (() => {
      const stipendValue = parseInt(internship.stipend.match(/\d+/)?.[0] || "0");
      if (stipendFilter === "below10k") return stipendValue < 10000;
      if (stipendFilter === "10k-20k") return stipendValue >= 10000 && stipendValue <= 20000;
      if (stipendFilter === "above20k") return stipendValue > 20000;
      return true;
    })();

    return matchesSearch && matchesLocation && matchesMode && matchesStipend;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Trending Internships Banner */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Trending Internships</h2>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {trendingInternships.map((internship) => (
                <CarouselItem key={internship.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-border"
                    onClick={() => navigate(`/internships/${internship.id}`)}
                  >
                    <div className={`relative h-40 ${internship.image} flex items-center justify-center`}>
                      {internship.badge && (
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          {internship.badge}
                        </div>
                      )}
                      <div className="text-center p-4">
                        <h3 className="text-xl font-bold text-foreground mb-2">{internship.title}</h3>
                        <p className="text-sm text-muted-foreground">{internship.company}</p>
                      </div>
                    </div>
                    
                    <div className="p-5 space-y-3 bg-card">
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs px-2 py-1 rounded-md bg-secondary text-foreground">
                          {internship.mode}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-md bg-muted text-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {internship.location.split(',')[0]}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <IndianRupee className="h-4 w-4" />
                          <span className="font-medium">{internship.stipend}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{internship.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm border-t pt-3">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{internship.registered.toLocaleString()} applied</span>
                        </div>
                        <span className="text-xs text-primary font-medium">{internship.deadline}</span>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </Carousel>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Find Your Perfect Internship</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card"
                />
              </div>

              {/* Location Filter */}
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="bg-card">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                </SelectContent>
              </Select>

              {/* Mode Filter */}
              <Select value={modeFilter} onValueChange={setModeFilter}>
                <SelectTrigger className="bg-card">
                  <SelectValue placeholder="Work Mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Modes</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                  <SelectItem value="In-office">In-office</SelectItem>
                </SelectContent>
              </Select>

              {/* Stipend Filter */}
              <Select value={stipendFilter} onValueChange={setStipendFilter}>
                <SelectTrigger className="bg-card">
                  <SelectValue placeholder="Stipend" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stipends</SelectItem>
                  <SelectItem value="below10k">Below ₹10k</SelectItem>
                  <SelectItem value="10k-20k">₹10k - ₹20k</SelectItem>
                  <SelectItem value="above20k">Above ₹20k</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* All Internships List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                All Internships <span className="text-muted-foreground text-lg">({filteredInternships.length})</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInternships.map((internship, index) => (
                <Card
                  key={internship.id}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => navigate(`/internships/${internship.id}`)}
                >
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                          {internship.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <p className="text-sm font-medium">{internship.company}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 rounded-md bg-secondary text-foreground">
                        {internship.mode}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-md bg-muted text-foreground">
                        {internship.type}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{internship.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <IndianRupee className="h-4 w-4" />
                        <span className="font-medium">{internship.stipend}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{internship.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>{internship.registered.toLocaleString()} applied</span>
                      </div>
                      <span className="text-xs text-primary font-medium">{internship.deadline}</span>
                    </div>

                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {filteredInternships.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No internships found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setLocationFilter("all");
                    setModeFilter("all");
                    setStipendFilter("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internships;
