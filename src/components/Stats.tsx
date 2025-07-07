import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "300%",
    label: "Average Reply Rate Increase",
    description: "Higher engagement with AI-powered personalization"
  },
  {
    number: "10k+",
    label: "Active Users",
    description: "Sales professionals trust OutreachPro daily"
  },
  {
    number: "2M+", 
    label: "Messages Sent",
    description: "Successful outreach campaigns delivered"
  },
  {
    number: "95%",
    label: "Customer Satisfaction",
    description: "Users love our platform and support"
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
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
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