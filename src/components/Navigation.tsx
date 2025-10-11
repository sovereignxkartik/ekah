import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, User, Briefcase, Plus, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
              CV
            </div>
            <span className="text-xl font-bold hidden sm:block">CareerVerse</span>
          </div>
          
          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xs">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search Opportunities" 
                className="pl-10 bg-muted/30 border-muted"
              />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Internships</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Jobs</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Competitions</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Mentorships</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Practice</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">More</a>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Plus className="h-4 w-4 mr-1" />
              Host
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Briefcase className="h-4 w-4 mr-1" />
              For Business
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                        {user.email?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                    <Briefcase className="h-4 w-4 mr-2" />
                    My Applications
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="hero" size="sm" onClick={() => navigate("/auth")}>
                Login
              </Button>
            )}
            
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search Opportunities" 
              className="pl-10 bg-muted/30 border-muted"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
