import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AnimatedStatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (inView) {
      setStart(false);
      setTimeout(() => setStart(true), 100);
    }
  }, [inView]);

  const stats = [
    { label: "Books Added", value: 1250 },
    { label: "Reviews Shared", value: 940 },
    { label: "Active Users", value: 300 },
    { label: "Books Read", value: 800 },
  ];

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-400 py-16 mx-[2%] lg:-mx-[5%] rounded-lg my-20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-100 mb-10">
          📚 Our Community Achievements
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-400 dark:bg-blue-600 border border-blue-500 rounded-xl shadow-sm hover:shadow-md transition p-6"
            >
              <p className="text-4xl font-bold text-blue-100">
                {start && (
                  <CountUp end={stat.value} duration={2} separator="," />
                )}
                +
              </p>
              <p className="mt-2 text-blue-100 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStatsSection;