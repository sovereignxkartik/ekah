import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/ekah-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logo} alt="ekah" className="h-10 w-auto" />
            <p className="text-muted-foreground text-sm">
              Your one-stop platform for jobs, internships, hackathons, and career growth.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Jobs & Internships</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hackathons</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} ekah. All rights reserved. Built with passion for students worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
