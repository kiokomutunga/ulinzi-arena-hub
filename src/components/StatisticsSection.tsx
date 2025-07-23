
import { useEffect, useState } from "react";
import { Users, Trophy, Shield, Clock, Award, Target } from "lucide-react";

const statistics = [
  { number: 500000, label: "TOTAL MISSION VISITORS", icon: Users, suffix: "+" },
  { number: 2500, label: "DAILY OPERATIONS", icon: Target, suffix: "" },
  { number: 150, label: "ACTIVE MISSIONS", icon: Trophy, suffix: "" },
  { number: 200, label: "AVAILABLE SLOTS", icon: Clock, suffix: "" },
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
    <section className="py-24 bg-defense-navy">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4 military-precision">
            OPERATIONAL READINESS
          </h2>
          <p className="text-xl text-defense-gold font-semibold military-precision">
            MISSION STATISTICS & DEFENSE CAPABILITIES
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center group hover-lift-defense">
              <div className="defense-glass rounded-xl p-10 border border-defense-gold/20">
                <stat.icon className="h-16 w-16 text-defense-gold mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-bold text-primary-foreground mb-3 military-precision">
                  {Math.floor(counts[index]).toLocaleString()}{stat.suffix}
                </div>
                <div className="text-defense-gold font-bold text-sm military-precision">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
