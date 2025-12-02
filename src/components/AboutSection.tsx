import { Target, Eye, Lightbulb } from "lucide-react";

const founders = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former AI Research Lead at Google DeepMind. PhD in Machine Learning from Stanford.",
    initials: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Principal Engineer at OpenAI. 15+ years building scalable AI infrastructure.",
    initials: "MR",
  },
  {
    name: "Elena Vasquez",
    role: "Chief Product Officer",
    bio: "Previously VP of Product at Stripe. Passionate about AI-first product experiences.",
    initials: "EV",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">AscendCore</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're on a mission to democratize AI and make intelligent automation accessible to every business
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To empower businesses with AI that amplifies human potential and drives sustainable growth.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              description: "A world where intelligent systems work alongside humans to solve the world's most complex challenges.",
            },
            {
              icon: Lightbulb,
              title: "Our Values",
              description: "Innovation, integrity, and impact guide everything we do. We build AI that's ethical, transparent, and transformative.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center p-8 rounded-xl bg-card/30 border border-border/30">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Founders */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="group text-center p-6 rounded-xl bg-card/20 border border-border/30 hover:border-primary/30 transition-all duration-300"
              >
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <span className="text-xl font-bold text-foreground">{founder.initials}</span>
                </div>
                <h4 className="font-semibold mb-1">{founder.name}</h4>
                <p className="text-sm text-primary mb-3">{founder.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
