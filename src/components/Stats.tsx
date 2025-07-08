import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "99.7%",
    label: "AI Model Accuracy",
    description: "Neural network precision in prospect analysis"
  },
  {
    number: "10M+",
    label: "Data Points Processed",
    description: "Real-time machine learning computations daily"
  },
  {
    number: "500ms", 
    label: "API Response Time",
    description: "Lightning-fast AI-powered message generation"
  },
  {
    number: "24/7",
    label: "Autonomous Operation",
    description: "Self-learning algorithms optimize continuously"
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="pt-8 pb-8 space-y-2">
                <div className="text-4xl font-bold bg-gradient-ai bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground text-lg">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;