import { Button } from "@/components/ui/button";
import { Brain, Workflow, LineChart, Shield, ArrowRight } from "lucide-react";

const products = [
  {
    name: "NeuralFlow",
    description: "Built with precision engineering—intelligent workflow automation delivered at lightning speed without compromising quality.",
    icon: Workflow,
    color: "primary",
  },
  {
    name: "InsightEngine",
    description: "Cutting-edge analytics platform crafted by senior engineers to transform complex data into clear, actionable insights.",
    icon: LineChart,
    color: "secondary",
  },
  {
    name: "CogniCore",
    description: "Production-ready AI infrastructure built with enterprise-grade architecture and rigorous code quality standards.",
    icon: Brain,
    color: "accent",
  },
  {
    name: "SecureAI",
    description: "High-performance security suite engineered for speed—real-time threat detection built by industry experts.",
    icon: Shield,
    color: "primary",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Premium software solutions built by elite engineers—shipped fast, built to last
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group glass-card p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-${product.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <product.icon className={`w-7 h-7 text-${product.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* CTA */}
              <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
