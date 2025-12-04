import { Target, Eye, Lightbulb } from "lucide-react";

const founders = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Engineering Director at Google. 15+ years leading elite engineering teams at scale.",
    initials: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Principal Engineer at Meta. Expert in high-performance systems and rapid delivery.",
    initials: "MR",
  },
  {
    name: "Elena Vasquez",
    role: "Chief Product Officer",
    bio: "Previously VP of Engineering at Stripe. Passionate about shipping quality software fast.",
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
            A team of elite engineers obsessed with quality, speed, and cutting-edge technology
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To deliver exceptional software products that combine uncompromising quality with industry-leading speed.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "To redefine what's possible when elite engineering talent meets cutting-edge technology.",
              },
              {
                icon: Lightbulb,
                title: "Our Values",
                description: "Excellence, velocity, and innovation. We hire only the best and hold ourselves to the highest standards.",
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
