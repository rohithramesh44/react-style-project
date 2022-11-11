export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};
export const titleAnimi = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};
export const fadeOutAnimi = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export const photoAnimi = {
  hidden: { opacity: 0, scale: 1.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

export const lineAnimi = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1, ease: "easeOut" } },
};

export const sliderContainerAnimi = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export const sliderAnimi = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { duration: 1, ease: "easeOut" },
  },
};
