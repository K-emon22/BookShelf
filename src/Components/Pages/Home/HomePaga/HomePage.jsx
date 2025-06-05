import React, {useEffect, useState} from "react";
import NavBAr from "../NavBAr/NavBAr";
import {Slider} from "../Slider/Slider";
import SortedBook from "../SortedBook/SortedBook";
import Loder from "../../../Loder/Loder";
import FeatureCAt from "../FeatureCAt/FeatureCAt";
import QnaSection from "../QnASection/QnaSection";

const HomePage = () => {
  const [loding1, setLoading1] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading1(false);
    }, 1000);
  }, []);

  if (loding1) {
    return <Loder></Loder>;
  }

  return (
    <div>
      <Slider></Slider>
      <SortedBook></SortedBook>
      <FeatureCAt></FeatureCAt>


<QnaSection></QnaSection>

    </div>
  );
};

export default HomePage;
