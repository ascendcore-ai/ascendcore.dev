import { Zap, Globe, TrendingUp, Lock, Server, Cpu } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Rapid Development",
    description: "We ship quality software at twice the speed—without cutting corners or compromising standards.",
  },
  {
    icon: Globe,
    title: "Cutting-Edge Stack",
    description: "Always building with the latest technologies and best practices in the industry.",
  },
  {
    icon: TrendingUp,
    title: "Senior Engineering Team",
    description: "Every project is handled by highly skilled professionals with 10+ years of experience.",
  },
  {
    icon: Lock,
    title: "Production-Grade Quality",
    description: "Rigorous code reviews, comprehensive testing, and enterprise-level security standards.",
  },
  {
    icon: Server,
    title: "Scalable Architecture",
    description: "Systems designed from day one to handle millions of users with rock-solid reliability.",
  },
  {
    icon: Cpu,
    title: "Performance Optimized",
    description: "Every line of code is optimized for speed, efficiency, and exceptional user experience.",
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
            Why <span className="text-gradient">AscendCore</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Quality and speed aren't tradeoffs—they're our standard
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
