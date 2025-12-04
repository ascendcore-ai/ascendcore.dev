import { Truck, Building2, Headphones, PieChart } from "lucide-react";

const useCases = [
  {
    icon: Truck,
    industry: "Logistics & Supply Chain",
    problem: "Inefficient route planning and inventory forecasting",
    solution: "AI-powered demand prediction and dynamic route optimization",
    outcome: "40% reduction in operational costs",
  },
  {
    icon: Building2,
    industry: "Financial Services",
    problem: "Manual fraud detection with high false positive rates",
    solution: "Real-time anomaly detection using deep learning models",
    outcome: "95% fraud detection accuracy",
  },
  {
    icon: Headphones,
    industry: "Customer Support",
    problem: "Long response times and inconsistent service quality",
    solution: "Intelligent ticket routing and AI-assisted responses",
    outcome: "60% faster resolution times",
  },
  {
    icon: PieChart,
    industry: "Operations & Manufacturing",
    problem: "Unplanned equipment downtime and maintenance costs",
    solution: "Predictive maintenance with IoT sensor analytics",
    outcome: "35% reduction in downtime",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Real <span className="text-gradient">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Quality engineering delivered at speed—see how our products transform businesses
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.industry}
              className="group glass-card p-8 hover:border-primary/30 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <useCase.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">{useCase.industry}</h3>
              </div>

              {/* Problem → Solution → Outcome */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-medium text-destructive/80 uppercase tracking-wider">Challenge</span>
                  <p className="text-muted-foreground text-sm mt-1">{useCase.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Solution</span>
                  <p className="text-muted-foreground text-sm mt-1">{useCase.solution}</p>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">Result</span>
                  <p className="text-foreground font-semibold mt-1">{useCase.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
