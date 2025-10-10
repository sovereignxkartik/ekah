const companies = [
  { name: "Google", color: "text-blue-600" },
  { name: "Microsoft", color: "text-blue-500" },
  { name: "Amazon", color: "text-orange-600" },
  { name: "Apple", color: "text-gray-700" },
  { name: "Meta", color: "text-blue-600" },
  { name: "Netflix", color: "text-red-600" },
  { name: "Tesla", color: "text-red-600" },
  { name: "IBM", color: "text-blue-700" },
  { name: "Oracle", color: "text-red-600" },
  { name: "Adobe", color: "text-red-600" },
];

const TrustedCompanies = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-muted-foreground mb-2">Industry Veterans</p>
          <h2 className="text-2xl font-bold">Trust Us</h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12 items-center justify-around">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-4 text-2xl font-bold opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <span className={company.color}>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedCompanies;
