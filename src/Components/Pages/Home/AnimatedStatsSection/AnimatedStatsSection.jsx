import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

const AnimatedStatsSection = () => {
  const {ref, inView} = useInView({
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
    {label: "Books Added", value: 1250},
    {label: "Reviews Shared", value: 940},
    {label: "Active Users", value: 300},
    {label: "Books Read", value: 800},
  ];

  return (
    <section
      ref={ref}
      className="bg-white py-16 mx-[2%] lg:mx-[5%] rounded-lg m-20 transition-colors duration-300 shadow-black/20 shadow-lg "
    >
      <div className="max-w-6xl mx-auto  text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          📚 Our Community Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-blue-500 rounded-xl shadow-sm hover:shadow-md transition p-6"
            >
              <p className="text-4xl font-bold text-black">
                {start && (
                  <CountUp end={stat.value} duration={2} separator="," />
                )}
                +
              </p>
              <p className="mt-2 text-shadow-gray-500 text-sm md:text-base font-medium">
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
