import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, User, Briefcase, Plus, LogOut, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/ekah-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const menuItems = [
    { label: "Internships", path: "/internships" },
    { label: "Jobs", path: "#" },
    { label: "Competitions", path: "#" },
    { label: "Mentorships", path: "#" },
    { label: "Practice", path: "#" },
    { label: "More", path: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="ekah" className="h-8 w-auto" />
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
            <button onClick={() => navigate("/internships")} className="text-sm font-medium hover:text-primary transition-colors">Internships</button>
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
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-border">
                <div className="flex flex-col gap-6 mt-8">
                  <nav className="flex flex-col gap-4">
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => {
                          if (item.path !== "#") navigate(item.path);
                          setMobileMenuOpen(false);
                        }}
                        className="text-left text-base font-medium hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="border-t border-border pt-4 space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="h-4 w-4 mr-2" />
                      Host
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Briefcase className="h-4 w-4 mr-2" />
                      For Business
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
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
