import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    step: "01",
    title: "API Integration & Authentication",
    description: "Establish secure OAuth connections to LinkedIn Graph API and SMTP protocols with enterprise-grade encryption.",
    details: "✓ RESTful API endpoints\n✓ JWT token authentication\n✓ Rate limiting & throttling"
  },
  {
    step: "02", 
    title: "Neural Data Mining Engine",
    description: "Deploy machine learning algorithms for prospect discovery using natural language processing and behavioral analysis.",
    details: "✓ Deep learning models\n✓ Sentiment analysis algorithms\n✓ Real-time data ingestion"
  },
  {
    step: "03",
    title: "AI Content Generation Pipeline",
    description: "Leverage GPT-4 and transformer models to generate contextually-aware messaging with psychological profiling.",
    details: "✓ Large language models\n✓ Contextual embeddings\n✓ A/B testing algorithms"
  },
  {
    step: "04",
    title: "Autonomous Campaign Orchestration",
    description: "Execute multi-channel automation with predictive analytics, real-time optimization, and intelligent scheduling.",
    details: "✓ Predictive send algorithms\n✓ Performance monitoring\n✓ Auto-scaling infrastructure"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-gradient-tech text-white border-none shadow-glow">
            ⚡ AI Architecture
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Deploy Advanced
            <span className="bg-gradient-ai bg-clip-text text-transparent"> AI Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade machine learning pipeline deployment with neural network 
            integration and autonomous optimization protocols.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden hover:shadow-card transition-all duration-300 border border-border/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-ai"></div>
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-ai rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {step.description}
                </CardDescription>
                <div className="bg-muted/50 rounded-lg p-4">
                  <pre className="text-sm text-muted-foreground whitespace-pre-line font-sans">
                    {step.details}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;