import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Targeting",
      description: "We believe in quality over quantity. Our AI helps you reach the right prospects with personalized messages that convert."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation Excellence",
      description: "Save hours every day with intelligent automation that feels human. Focus on closing deals, not manual outreach."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Relationship First",
      description: "Cold outreach doesn't have to be cold. We help you build genuine connections that turn into lasting business relationships."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your outreach goals with dedicated support."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            🚀 Our Story
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            About
            <span className="bg-gradient-primary bg-clip-text text-transparent"> OutreachPro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Born from the frustration of ineffective cold outreach, we're on a mission to transform 
            how businesses connect with their ideal prospects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We empower sales professionals and entrepreneurs to build meaningful connections through 
                intelligent, personalized outreach. By combining LinkedIn automation with AI-powered 
                personalization, we help you scale your outreach while maintaining authenticity.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Why We Started</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                After sending thousands of generic cold emails and LinkedIn messages with poor results, 
                our founders realized there had to be a better way. OutreachPro was built to solve the 
                challenge of scaling personalized outreach without losing the human touch.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-primary/10 rounded-2xl p-8 border border-primary/20">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">10M+</div>
                  <div className="text-sm text-muted-foreground">Messages Sent</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">85%</div>
                  <div className="text-sm text-muted-foreground">Avg. Response Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we build products that truly serve our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mx-auto">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;