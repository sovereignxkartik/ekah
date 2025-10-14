import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const Jobs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Briefcase className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Jobs</h1>
          <p className="text-xl text-muted-foreground">
            Explore diverse career opportunities and find your perfect job match.
          </p>
          <div className="pt-8">
            <Button size="lg" onClick={() => window.history.back()}>
              Coming Soon
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
