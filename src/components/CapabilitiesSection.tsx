import { Zap, Globe, TrendingUp, Lock, Server, Cpu } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Real-Time AI Pipelines",
    description: "Process millions of data points per second with our distributed AI infrastructure.",
  },
  {
    icon: Globe,
    title: "Seamless Integrations",
    description: "Connect with 200+ enterprise tools and platforms out of the box.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Leverage machine learning to forecast trends and optimize decisions.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption and compliance.",
  },
  {
    icon: Server,
    title: "Infinite Scalability",
    description: "Auto-scaling infrastructure that grows with your business needs.",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Deploy AI models closer to your data for ultra-low latency processing.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Core <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Enterprise-grade features that power the world's most demanding AI applications
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group p-6 rounded-xl bg-card/30 border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <capability.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {capability.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
