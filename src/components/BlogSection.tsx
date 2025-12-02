import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "The Future of Enterprise AI: Trends to Watch in 2024",
    excerpt: "Explore the emerging technologies and methodologies that will shape AI adoption in the enterprise.",
    category: "Industry Insights",
    readTime: "8 min read",
    date: "Dec 1, 2024",
  },
  {
    title: "Building Scalable ML Pipelines: A Technical Deep Dive",
    excerpt: "Learn best practices for designing machine learning infrastructure that grows with your needs.",
    category: "Engineering",
    readTime: "12 min read",
    date: "Nov 28, 2024",
  },
  {
    title: "AI Ethics in Practice: Our Framework for Responsible Development",
    excerpt: "How AscendCore approaches ethical considerations in AI product development.",
    category: "Company",
    readTime: "6 min read",
    date: "Nov 25, 2024",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-muted-foreground">
              Thoughts on AI, technology, and building the future
            </p>
          </div>
          <Button variant="outline" className="group">
            View All
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="group glass-card overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              {/* Placeholder Image */}
              <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
