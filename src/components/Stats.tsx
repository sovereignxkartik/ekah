import { useEffect, useState } from "react";

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  delay?: number;
}

const StatItem = ({ end, suffix, label, delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(counter);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [end, delay]);
  
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Thousands of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform has helped students and professionals achieve their career goals
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <StatItem end={10000} suffix="+" label="Active Users" delay={200} />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <StatItem end={500} suffix="+" label="Hackathons Listed" delay={300} />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <StatItem end={1000} suffix="+" label="Internships Available" delay={400} />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <StatItem end={95} suffix="%" label="Success Rate" delay={500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
