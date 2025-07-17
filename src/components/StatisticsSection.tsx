import { useEffect, useState } from "react";
import { Users, Trophy, Shield, Clock } from "lucide-react";

const statistics = [
  { number: 250000, label: "Past Event Visitors", icon: Users, suffix: "+" },
  { number: 1200, label: "Daily Visitors", icon: Users, suffix: "" },
  { number: 85, label: "Upcoming Fixtures", icon: Trophy, suffix: "" },
  { number: 120, label: "Available Slots", icon: Clock, suffix: "" },
];

const StatisticsSection = () => {
  const [counts, setCounts] = useState(statistics.map(() => 0));

  useEffect(() => {
    const intervals = statistics.map((stat, index) => {
      const increment = stat.number / 100;
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.number) {
            newCounts[index] = Math.min(newCounts[index] + increment, stat.number);
          }
          return newCounts;
        });
      }, 20);
    });

    setTimeout(() => {
      intervals.forEach(clearInterval);
    }, 2000);

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-20 bg-military-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center group hover-lift">
              <div className="military-glass rounded-xl p-8">
                <stat.icon className="h-12 w-12 text-military-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-primary-foreground mb-2">
                  {Math.floor(counts[index]).toLocaleString()}{stat.suffix}
                </div>
                <div className="text-military-gold font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;