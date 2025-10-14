import { Button } from "@/components/ui/button";
import { Search, Menu, User, Briefcase, Plus, LogOut } from "lucide-react";
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hostDialogOpen, setHostDialogOpen] = useState(false);
  const [businessDialogOpen, setBusinessDialogOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const menuItems = [
    { label: "Internships", path: "/internships" },
    { label: "Jobs", path: "/jobs" },
    { label: "Competitions", path: "/competitions" },
    { label: "Mentorships", path: "/mentorships" },
    { label: "Practice", path: "/practice" },
    { label: "More", path: "/more" },
  ];

  const searchCategories = [
    { label: "Internships", path: "/internships", icon: "💼" },
    { label: "Jobs", path: "/jobs", icon: "👔" },
    { label: "Competitions", path: "/competitions", icon: "🏆" },
    { label: "Mentorships", path: "/mentorships", icon: "🎓" },
    { label: "Practice", path: "/practice", icon: "📝" },
    { label: "More", path: "/more", icon: "⋯" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="ekah" className="h-8 w-auto" />
          </div>
          
          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xs">
            <Popover open={searchOpen} onOpenChange={setSearchOpen}>
              <PopoverTrigger asChild>
                <button className="relative w-full text-left">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <div className="pl-10 pr-4 py-2 bg-muted/30 border border-muted rounded-md text-sm text-muted-foreground">
                    Search Opportunities
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0 bg-background border-border" align="start">
                <Command className="bg-background">
                  <CommandInput placeholder="Search Opportunities..." className="border-0" />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Categories">
                      {searchCategories.map((category) => (
                        <CommandItem
                          key={category.label}
                          onSelect={() => {
                            navigate(category.path);
                            setSearchOpen(false);
                          }}
                          className="cursor-pointer"
                        >
                          <span className="mr-2">{category.icon}</span>
                          <span>{category.label}</span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => navigate("/internships")} className="text-sm font-medium hover:text-primary transition-colors">Internships</button>
            <button onClick={() => navigate("/jobs")} className="text-sm font-medium hover:text-primary transition-colors">Jobs</button>
            <button onClick={() => navigate("/competitions")} className="text-sm font-medium hover:text-primary transition-colors">Competitions</button>
            <button onClick={() => navigate("/mentorships")} className="text-sm font-medium hover:text-primary transition-colors">Mentorships</button>
            <button onClick={() => navigate("/practice")} className="text-sm font-medium hover:text-primary transition-colors">Practice</button>
            <button onClick={() => navigate("/more")} className="text-sm font-medium hover:text-primary transition-colors">More</button>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-2">
            <Dialog open={hostDialogOpen} onOpenChange={setHostDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Plus className="h-4 w-4 mr-1" />
                  Host
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-background border-border">
                <DialogHeader>
                  <DialogTitle>Host an Opportunity</DialogTitle>
                </DialogHeader>
                <ContactForm type="host" onSuccess={() => setHostDialogOpen(false)} />
              </DialogContent>
            </Dialog>

            <Dialog open={businessDialogOpen} onOpenChange={setBusinessDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  <Briefcase className="h-4 w-4 mr-1" />
                  For Business
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-background border-border">
                <DialogHeader>
                  <DialogTitle>Business Enquiry</DialogTitle>
                </DialogHeader>
                <ContactForm type="business" onSuccess={() => setBusinessDialogOpen(false)} />
              </DialogContent>
            </Dialog>
            
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
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setHostDialogOpen(true);
                      }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Host
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setBusinessDialogOpen(true);
                      }}
                    >
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
          <Popover open={searchOpen} onOpenChange={setSearchOpen}>
            <PopoverTrigger asChild>
              <button className="relative w-full text-left">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <div className="pl-10 pr-4 py-2 bg-muted/30 border border-muted rounded-md text-sm text-muted-foreground">
                  Search Opportunities
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[calc(100vw-2rem)] p-0 bg-background border-border" align="start">
              <Command className="bg-background">
                <CommandInput placeholder="Search Opportunities..." className="border-0" />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Categories">
                    {searchCategories.map((category) => (
                      <CommandItem
                        key={category.label}
                        onSelect={() => {
                          navigate(category.path);
                          setSearchOpen(false);
                        }}
                        className="cursor-pointer"
                      >
                        <span className="mr-2">{category.icon}</span>
                        <span>{category.label}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

const ContactForm = ({ type, onSuccess }: { type: "host" | "business"; onSuccess: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${type} form submitted:`, formData);
    // Here you would typically send the data to your backend
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-1 block">Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 bg-muted/30 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 bg-muted/30 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Phone</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-3 py-2 bg-muted/30 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-1 block">Message</label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3 py-2 bg-muted/30 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
};

export default Navigation;
