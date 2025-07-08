import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Neural Network Prospecting",
    description: "Advanced deep learning algorithms analyze LinkedIn profiles, extracting behavioral patterns and intent signals for precision targeting.",
    icon: "🧠",
    badge: "Deep Learning"
  },
  {
    title: "GPT-4 Message Generation",
    description: "Cutting-edge language models generate contextually-aware, hyper-personalized messages that adapt to prospect psychology and preferences.",
    icon: "🤖",
    badge: "AI Powered"
  },
  {
    title: "Predictive Analytics Engine",
    description: "Machine learning models predict optimal send times, response probability, and conversion likelihood using behavioral data analysis.",
    icon: "📊",
    badge: "ML Analytics"
  },
  {
    title: "Multi-Channel Orchestration",
    description: "Intelligent automation coordinates LinkedIn and email touchpoints through sophisticated workflow engines and API integrations.",
    icon: "🔗",
    badge: "API Integration"
  },
  {
    title: "Intelligent Decision Trees",
    description: "Dynamic conditional logic powered by AI adjusts campaigns in real-time based on prospect engagement and behavioral triggers.",
    icon: "⚡",
    badge: "Smart Logic"
  },
  {
    title: "Unified Data Pipeline",
    description: "Real-time data synchronization across platforms with advanced ETL processes and comprehensive conversation analytics.",
    icon: "💾",
    badge: "Data Pipeline"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-gradient-ai text-white border-none shadow-glow">
            🚀 Advanced AI Technology
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Enterprise-Grade
            <span className="bg-gradient-ai bg-clip-text text-transparent"> AI Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by cutting-edge machine learning models, neural networks, and advanced 
            automation algorithms built for scale and precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 hover:scale-105 border border-border/50"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-4xl">{feature.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;