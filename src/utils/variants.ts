export const menuVars = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  exit: { scaleY: 0 },
};

export const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

export const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

export const titleVars = {
  initial: {
    opacity: 0,
    y: 50,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

export const subTitleVars = {
  initial: {
    opacity: 0,
    y: 70,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

export const homeCardIcon = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  }
};

export const homeCardTitle = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  viewport: {
    once: true,
  },
};

export const homeCardText = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  viewport: {
    once: true,
  },
};

export const sidebarLinkVariants = {
  open: {
    opacity: 1,
    x: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
  closed: {
    opacity: 0,
    x: -10,
    clipPath: "inset(0% 100% 0% 0%)",
    transition: { duration: 0.25, ease: "easeIn" },
  },
};


// properties for animation of light / dark button
export const animationProperties = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: "50%",
      cy: "23%",
    },
    svg: {
      transform: "rotate(40deg)",
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: "100%",
      cy: "0%",
    },
    svg: {
      transform: "rotate(90deg)",
    },
    lines: {
      opacity: 1,
    },
  },
};
