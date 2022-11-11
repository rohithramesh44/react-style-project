import React from "react";
import { Temp } from "../style";
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Temp>this is wonder el444</Temp>
    </motion.div>
  );
};

export default ContactUs;
