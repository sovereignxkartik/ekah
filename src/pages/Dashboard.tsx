import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MapPin, Building2, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Application {
  id: string;
  status: string;
  applied_at: string;
  opportunities: {
    title: string;
    company: string;
    type: string;
    location: string;
    mode: string;
  };
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      fetchApplications(session.user.id);
    };
    checkUser();

    // Subscribe to realtime updates
    const channel = supabase
      .channel('applications-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'applications'
        },
        (payload) => {
          toast({
            title: "Application Updated!",
            description: "Your application status has changed.",
          });
          // Refetch applications
          supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) fetchApplications(session.user.id);
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [navigate, toast]);

  const fetchApplications = async (userId: string) => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("applications")
      .select(`
        *,
        opportunities (
          title,
          company,
          type,
          location,
          mode
        )
      `)
      .eq("user_id", userId)
      .order("applied_at", { ascending: false });

    if (error) {
      toast({
        title: "Error fetching applications",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setApplications(data || []);
    }
    setIsLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "accepted": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "shortlisted": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "under_review": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "rejected": return "bg-red-500/10 text-red-600 border-red-500/20";
      default: return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">My Applications</h1>
              <p className="text-muted-foreground mt-1">Track and manage your job applications</p>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-12">Loading...</div>
          ) : applications.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No applications yet. Start exploring opportunities!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {applications.map((application) => (
                <Card key={application.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{application.opportunities.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {application.opportunities.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {application.opportunities.location}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(application.status)}>
                        {application.status.replace("_", " ").toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Applied: {new Date(application.applied_at).toLocaleDateString()}
                      </span>
                      <Badge variant="outline">
                        {application.opportunities.type}
                      </Badge>
                      <Badge variant="outline">
                        {application.opportunities.mode}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
