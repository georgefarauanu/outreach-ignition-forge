import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals getting started with cold outreach. No credit card required.",
    features: [
      "100 prospects per month",
      "1 active campaign",
      "Basic LinkedIn integration",
      "5 email sequences",
      "Standard templates",
      "Community support"
    ],
    popular: false,
    buttonText: "Get Started Free"
  },
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Ideal for solopreneurs and small teams scaling their outreach efforts.",
    features: [
      "1,000 prospects per month",
      "5 active campaigns",
      "Full LinkedIn + Email",
      "AI message generation",
      "Custom sequences",
      "Email support"
    ],
    popular: false,
    buttonText: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$79",
    period: "per month", 
    description: "Advanced features for growing sales teams who need more power and customization.",
    features: [
      "5,000 prospects per month",
      "Unlimited campaigns",
      "Advanced AI personalization",
      "Conditional logic",
      "Advanced analytics",
      "Priority support",
      "Team collaboration"
    ],
    popular: true,
    buttonText: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large teams that need advanced features, integrations, and dedicated support.",
    features: [
      "Unlimited prospects",
      "White-label option",
      "API access",
      "Custom integrations", 
      "Dedicated success manager",
      "Advanced security",
      "Team management",
      "SLA guarantee"
    ],
    popular: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            💰 Simple Pricing
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Choose Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Perfect Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with our 14-day free trial. No credit card required. 
            Cancel anytime. All plans include our core features.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-primary shadow-glow bg-gradient-to-b from-primary/5 to-transparent' 
                  : 'border-border/50 hover:shadow-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-success-foreground text-xs">✓</span>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "premium" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>24/7 customer support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;