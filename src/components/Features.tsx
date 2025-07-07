import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "LinkedIn Data Collection",
    description: "Automatically collect prospect data from LinkedIn searches including profiles, posts, experience, and company information.",
    icon: "🔍",
    badge: "LinkedIn API"
  },
  {
    title: "AI-Powered Sequences",
    description: "Create multi-step outreach campaigns with icebreaker emails, follow-ups, and LinkedIn messages using AI personalization.",
    icon: "🤖",
    badge: "AI Generated"
  },
  {
    title: "Smart Enrichment",
    description: "Enrich prospect data with company insights, recent posts, and personalization angles for higher conversion rates.",
    icon: "⚡",
    badge: "Data Enrichment"
  },
  {
    title: "Mixed Campaigns",
    description: "Combine LinkedIn activities (connections, messages, likes) with email sequences for maximum reach and engagement.",
    icon: "🎯",
    badge: "Multi-Channel"
  },
  {
    title: "Conditional Logic",
    description: "Set up if-then conditions in your sequences. Auto-pause when prospects reply and get notified instantly.",
    icon: "🔄",
    badge: "Smart Logic"
  },
  {
    title: "Unified Inbox",
    description: "Manage all conversations from LinkedIn and email in one place. Track campaign performance and response rates.",
    icon: "📧",
    badge: "Centralized"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            ✨ Powerful Features
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Everything You Need for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Successful Outreach</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From LinkedIn prospecting to AI-powered messaging, we've built the complete 
            solution for modern sales teams.
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