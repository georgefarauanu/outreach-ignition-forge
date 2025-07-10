import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, TrendingUp, Crown } from "lucide-react";

const WhoIsFor = () => {
  const targets = [
    {
      icon: Rocket,
      title: "Startup Founders",
      description: "Scale your outreach efforts with AI-powered automation. Focus on building your product while our neural networks handle lead generation and prospect engagement.",
      benefits: ["Automated lead qualification", "Scalable outreach campaigns", "Performance analytics"]
    },
    {
      icon: TrendingUp,
      title: "Business Development",
      description: "Leverage machine learning algorithms to identify high-value prospects and craft personalized messaging that converts at enterprise-level rates.",
      benefits: ["Predictive lead scoring", "Intelligent message optimization", "Pipeline automation"]
    },
    {
      icon: Crown,
      title: "Company CEOs",
      description: "Transform your sales operations with enterprise-grade AI infrastructure. Drive revenue growth through data-driven outreach intelligence.",
      benefits: ["Executive dashboards", "ROI optimization", "Strategic insights"]
    }
  ];

  return (
    <section id="who-is-for" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-ai text-white border-none shadow-glow mb-6">
            🎯 Target Audience
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Who is <span className="bg-gradient-hero bg-clip-text text-transparent">Palpitch</span> for?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for decision-makers who demand enterprise-level AI capabilities 
            to revolutionize their outreach operations and drive exponential growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {targets.map((target, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <target.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{target.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {target.description}
                </p>
                
                <div className="space-y-3">
                  {target.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;