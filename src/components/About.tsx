import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Zap, Settings } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI-First Architecture",
      description: "Every feature is built around machine learning models that continuously optimize for better performance and higher conversion rates."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Processing",
      description: "Our distributed systems process millions of data points in real-time to deliver intelligent insights and automated decisions."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data-Driven Intelligence",
      description: "Advanced analytics and predictive modeling power our recommendation engine for optimal outreach timing and content."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Scalable Infrastructure",
      description: "Built on cloud-native architecture with auto-scaling capabilities to handle enterprise-level workloads effortlessly."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            🤖 AI-Powered Technology
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            About
            <span className="bg-gradient-primary bg-clip-text text-transparent"> OutreachPro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built by engineers who understand the complexity of modern sales automation. We leverage 
            cutting-edge AI and machine learning to revolutionize B2B outreach at scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Our Technology Stack</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built on a modern microservices architecture with advanced natural language processing, 
                our platform integrates seamlessly with LinkedIn's API and SMTP protocols. We utilize 
                machine learning algorithms for behavioral analysis and predictive engagement optimization.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Engineering Excellence</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our engineering team solved the scalability problem of personalized outreach through 
                proprietary AI models and intelligent automation pipelines. Every message is processed 
                through our ML engine for optimal timing, content, and delivery channel selection.
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