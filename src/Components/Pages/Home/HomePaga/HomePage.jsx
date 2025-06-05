import React, {useEffect, useState} from "react";
import NavBAr from "../NavBAr/NavBAr";
import {Slider} from "../Slider/Slider";
import SortedBook from "../SortedBook/SortedBook";
import Loder from "../../../Loder/Loder";
import FeatureCAt from "../FeatureCAt/FeatureCAt";
import QnaSection from "../QnASection/QnaSection";
import {motion} from "framer-motion";
const HomePage = () => {
  const [loding1, setLoading1] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading1(false);
    }, 500);
  }, []);

  if (loding1) {
    return <Loder></Loder>;
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -40}}
      transition={{duration: 1}}
    >
      <Slider></Slider>
      <SortedBook></SortedBook>
      <FeatureCAt></FeatureCAt>
      <QnaSection></QnaSection>


    </motion.div>
  );
};

export default HomePage;
