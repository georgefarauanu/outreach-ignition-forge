import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    step: "01",
    title: "Connect LinkedIn & Email",
    description: "Integrate your LinkedIn account and email provider in minutes. Our secure connection ensures your data stays safe.",
    details: "✓ LinkedIn Sales Navigator support\n✓ Gmail & Outlook integration\n✓ Safe sending limits"
  },
  {
    step: "02", 
    title: "Search & Collect Prospects",
    description: "Use LinkedIn search to find your ideal prospects. Our system automatically collects enriched profile data.",
    details: "✓ Profile data & experience\n✓ Recent posts & activity\n✓ Company information"
  },
  {
    step: "03",
    title: "Create AI Sequences",
    description: "Build multi-step campaigns with our templates or create custom sequences with conditional logic.",
    details: "✓ AI-powered personalization\n✓ Mixed email + LinkedIn\n✓ If-then conditions"
  },
  {
    step: "04",
    title: "Launch & Monitor",
    description: "Set your daily limits and launch. Monitor performance, reply rates, and manage conversations in one inbox.",
    details: "✓ Real-time analytics\n✓ Unified inbox\n✓ Auto-pause on replies"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            🛠️ Simple Process
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Get Started in
            <span className="bg-gradient-primary bg-clip-text text-transparent"> 4 Easy Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From setup to sending your first campaign, we'll have you up and running 
            with personalized outreach in under 10 minutes.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden hover:shadow-card transition-all duration-300 border border-border/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
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