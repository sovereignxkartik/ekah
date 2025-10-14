import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";

const Practice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <PenTool className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Practice</h1>
          <p className="text-xl text-muted-foreground">
            Refine your skills daily with practice challenges and assessments.
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

export default Practice;
