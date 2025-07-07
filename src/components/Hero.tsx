import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-outreach.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <Badge className="w-fit bg-primary/10 text-primary border-primary/20">
              🚀 AI-Powered Cold Outreach
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Automate Your
                <span className="bg-gradient-hero bg-clip-text text-transparent"> LinkedIn </span>
                & Email Outreach
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Connect with prospects on LinkedIn, collect enriched data, and send personalized 
                sequences that convert. Boost your reply rates by 300% with AI-powered messaging.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="xl" className="shadow-elegant">
                Start 14-Day Free Trial
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Setup in 5 Minutes</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-8">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="OutreachPro Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;