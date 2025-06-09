import React from "react";
import {motion} from "framer-motion";
const Profile = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 60}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -40}}
      transition={{duration: 1.2}}
    >
      Profile lorem2
    </motion.div>
  );
};

export default Profile;
