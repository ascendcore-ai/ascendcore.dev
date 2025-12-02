import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "AscendCore's AI solutions transformed our supply chain operations. We've seen a 40% improvement in efficiency within the first quarter.",
    author: "Jennifer Walsh",
    role: "VP of Operations",
    company: "Global Logistics Inc.",
    initials: "JW",
  },
  {
    quote: "The predictive analytics platform has become indispensable for our financial planning. It's like having a crystal ball for market trends.",
    author: "David Park",
    role: "Chief Financial Officer",
    company: "TechVenture Capital",
    initials: "DP",
  },
  {
    quote: "Implementation was seamless, and the support team is exceptional. Our customer satisfaction scores have never been higher.",
    author: "Maria Santos",
    role: "Director of Customer Success",
    company: "Retail Dynamics",
    initials: "MS",
  },
];

const logoPlaceholders = [
  "Acme Corp",
  "TechFlow",
  "DataSphere",
  "Innovate.io",
  "CloudBase",
  "NextGen AI",
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our clients say about working with AscendCore.ai
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="glass-card p-8 hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-sm font-medium">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Cloud */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by innovative companies worldwide</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {logoPlaceholders.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-12 px-4 rounded-lg bg-muted/30 border border-border/30"
              >
                <span className="text-xs font-medium text-muted-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
