import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  MapPin,
  Building2,
  IndianRupee,
  Clock,
  Users,
  Calendar,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  FileText,
} from "lucide-react";

// Mock data - in real app, this would come from API/database
const internshipDetails: Record<string, any> = {
  "1": {
    id: "1",
    title: "Full Stack Development Internship",
    company: "TechCorp Solutions",
    location: "Bangalore, Karnataka",
    mode: "Hybrid",
    stipend: "₹15,000 - ₹25,000/month",
    duration: "6 months",
    deadline: "2025-10-27",
    registered: 2453,
    type: "Development",
    posted: "2025-09-15",
    description: "Join our dynamic team as a Full Stack Development Intern and work on cutting-edge web applications. You'll be involved in both frontend and backend development, gaining hands-on experience with modern technologies and frameworks.",
    responsibilities: [
      "Develop and maintain web applications using React, Node.js, and MongoDB",
      "Collaborate with cross-functional teams to define and ship new features",
      "Write clean, maintainable, and efficient code",
      "Participate in code reviews and contribute to team best practices",
      "Debug and troubleshoot application issues",
    ],
    requirements: [
      "Currently pursuing or recently completed B.Tech/MCA in Computer Science or related field",
      "Strong knowledge of JavaScript, HTML5, and CSS3",
      "Familiarity with React.js and Node.js",
      "Understanding of RESTful APIs and database management",
      "Good problem-solving skills and attention to detail",
      "Ability to work in a fast-paced environment",
    ],
    perks: [
      "Certificate of completion",
      "Letter of recommendation for outstanding performance",
      "Flexible working hours",
      "Mentorship from senior developers",
      "Pre-placement offer (PPO) opportunity",
      "Work from home option available",
    ],
    skills: ["React", "Node.js", "MongoDB", "JavaScript", "RESTful APIs", "Git"],
    workDays: "5 days a week",
    openings: 5,
  },
  "2": {
    id: "2",
    title: "UI/UX Design Internship",
    company: "Creative Studios",
    location: "Mumbai, Maharashtra",
    mode: "Remote",
    stipend: "₹12,000 - ₹20,000/month",
    duration: "3 months",
    deadline: "2025-11-01",
    registered: 1876,
    type: "Design",
    posted: "2025-09-20",
    description: "We're looking for a creative and passionate UI/UX Design Intern to join our design team. You'll work on real projects, creating intuitive and visually appealing user interfaces for web and mobile applications.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Design user interfaces for web and mobile applications",
      "Collaborate with developers to ensure design implementation",
      "Maintain and evolve design systems",
    ],
    requirements: [
      "Currently pursuing or completed degree in Design, HCI, or related field",
      "Proficiency in Figma, Adobe XD, or Sketch",
      "Strong portfolio showcasing UI/UX projects",
      "Understanding of design principles and user-centered design",
      "Good communication and presentation skills",
      "Knowledge of HTML/CSS is a plus",
    ],
    perks: [
      "Work with experienced designers",
      "Flexible remote work",
      "Access to design tools and resources",
      "Certificate and recommendation letter",
      "Portfolio building opportunities",
    ],
    skills: ["Figma", "Adobe XD", "UI Design", "UX Research", "Prototyping", "Wireframing"],
    workDays: "5 days a week",
    openings: 3,
  },
  "3": {
    id: "3",
    title: "Data Science Internship",
    company: "AI Innovations",
    location: "Hyderabad, Telangana",
    mode: "In-office",
    stipend: "₹18,000 - ₹30,000/month",
    duration: "6 months",
    deadline: "2025-10-22",
    registered: 3201,
    type: "Data Science",
    posted: "2025-09-10",
    description: "Join our AI/ML team as a Data Science Intern and work on real-world machine learning projects. You'll gain hands-on experience with data analysis, model building, and deployment.",
    responsibilities: [
      "Analyze large datasets and extract meaningful insights",
      "Build and train machine learning models",
      "Implement data preprocessing and feature engineering pipelines",
      "Create data visualizations and reports",
      "Collaborate with engineering teams for model deployment",
    ],
    requirements: [
      "Pursuing B.Tech/M.Tech in Computer Science, Statistics, or related field",
      "Strong knowledge of Python and data science libraries (NumPy, Pandas, Scikit-learn)",
      "Understanding of machine learning algorithms and statistical concepts",
      "Experience with data visualization tools (Matplotlib, Seaborn, Plotly)",
      "Good analytical and problem-solving skills",
      "Knowledge of SQL and databases",
    ],
    perks: [
      "High stipend with performance-based incentives",
      "Work on cutting-edge AI projects",
      "Mentorship from industry experts",
      "Access to premium learning resources",
      "PPO opportunities for top performers",
      "Health insurance coverage",
    ],
    skills: ["Python", "Machine Learning", "Data Analysis", "SQL", "TensorFlow", "Pandas"],
    workDays: "5 days a week",
    openings: 4,
  },
};

const InternshipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const internship = internshipDetails[id || "1"];

  if (!internship) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Internship not found</h1>
          <Button onClick={() => navigate("/internships")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Internships
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const deadlineDate = new Date(internship.deadline);
  const daysLeft = Math.ceil((deadlineDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-8 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              className="mb-4"
              onClick={() => navigate("/internships")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Internships
            </Button>

            <div className="space-y-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{internship.title}</h1>
                <div className="flex items-center gap-2 text-lg text-muted-foreground">
                  <Building2 className="h-5 w-5" />
                  <span className="font-medium">{internship.company}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  {internship.location}
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  <Briefcase className="h-3 w-3 mr-1" />
                  {internship.mode}
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  <Clock className="h-3 w-3 mr-1" />
                  {internship.duration}
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  <IndianRupee className="h-3 w-3 mr-1" />
                  {internship.stipend}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About the Internship</h2>
                  <p className="text-muted-foreground leading-relaxed">{internship.description}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {internship.responsibilities.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Requirements
                  </h3>
                  <ul className="space-y-3">
                    {internship.requirements.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold mb-4">Perks & Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {internship.perks.map((perk: string, index: number) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold mb-4">Skills Required</h3>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill: string) => (
                      <Badge key={skill} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Apply Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 space-y-6 sticky top-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {daysLeft} Days Left
                  </div>
                  <p className="text-sm text-muted-foreground">to apply</p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Applications
                    </span>
                    <span className="font-medium">{internship.registered.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Posted
                    </span>
                    <span className="font-medium">{new Date(internship.posted).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Openings
                    </span>
                    <span className="font-medium">{internship.openings}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Work Days
                    </span>
                    <span className="font-medium">{internship.workDays}</span>
                  </div>
                </div>

                <Separator />

                <Button size="lg" className="w-full font-semibold">
                  Apply Now
                </Button>
                
                <Button variant="outline" size="lg" className="w-full">
                  Save for Later
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By applying, you agree to our terms and conditions
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternshipDetails;
